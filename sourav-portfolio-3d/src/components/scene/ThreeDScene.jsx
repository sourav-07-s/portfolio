import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";

export default function ThreeDScene() {
  const hostRef = useRef(null);
  const sceneRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    let renderer;
    let frame = 0;
    let resizeObserver;
    let disposed = false;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const clock = new THREE.Clock();
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
    camera.position.set(0, 0.15, 7.8);

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch (error) {
      host.classList.add("three-fallback");
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = "three-hero-canvas";
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 1.45);
    scene.add(ambient);
    const keyLight = new THREE.PointLight(0xff5e3a, 45, 14);
    keyLight.position.set(-3, 2.5, 3.5);
    scene.add(keyLight);
    const coolLight = new THREE.PointLight(0x91a9ff, 34, 12);
    coolLight.position.set(3, -1.8, 2);
    scene.add(coolLight);
    const backLight = new THREE.PointLight(0xffffff, 55, 16);
    backLight.position.set(0, 2, -3);
    scene.add(backLight);

    const world = new THREE.Group();
    scene.add(world);
    const coreGroup = new THREE.Group();
    world.add(coreGroup);

    // A real 3D sculptural centerpiece: metallic crystal, nested wire shell, and orbital rings.
    const coreGeo = new THREE.IcosahedronGeometry(1.05, 2);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xb8bfc8,
      metalness: 0.88,
      roughness: 0.19,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      flatShading: false,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(core);

    const innerGeo = new THREE.IcosahedronGeometry(0.76, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x17191f,
      metalness: 0.82,
      roughness: 0.23,
      emissive: 0x220c08,
      emissiveIntensity: 0.28,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    innerCore.scale.set(0.91, 0.91, 0.91);
    coreGroup.add(innerCore);

    const wireGeo = new THREE.IcosahedronGeometry(1.18, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xff6d4b,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
    });
    const wireShell = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireShell);

    const ringMaterials = [
      new THREE.MeshBasicMaterial({
        color: 0xff6948,
        transparent: true,
        opacity: 0.86,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xaaaeb9,
        transparent: true,
        opacity: 0.58,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x7888a5,
        transparent: true,
        opacity: 0.56,
      }),
    ];
    const ringA = new THREE.Mesh(
      new THREE.TorusGeometry(1.55, 0.009, 8, 220),
      ringMaterials[0],
    );
    ringA.rotation.set(0.88, 0.18, 0.3);
    coreGroup.add(ringA);
    const ringB = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.006, 8, 220),
      ringMaterials[1],
    );
    ringB.rotation.set(1.48, 0.4, -0.38);
    coreGroup.add(ringB);
    const ringC = new THREE.Mesh(
      new THREE.TorusGeometry(1.37, 0.005, 8, 180),
      ringMaterials[2],
    );
    ringC.rotation.set(0.26, 1.15, 0.1);
    coreGroup.add(ringC);

    // Small satellites travel around the central form at different depths.
    const satellites = new THREE.Group();
    coreGroup.add(satellites);
    const satelliteMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0xff5e3a,
        emissive: 0xb9270b,
        emissiveIntensity: 1.8,
        metalness: 0.2,
        roughness: 0.25,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xced5e1,
        metalness: 0.9,
        roughness: 0.17,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x8b99b8,
        metalness: 0.75,
        roughness: 0.22,
      }),
    ];
    const satelliteMeshes = [];
    for (let i = 0; i < 9; i += 1) {
      const angle = (i / 9) * Math.PI * 2;
      const radius = 1.67 + (i % 3) * 0.13;
      const geo =
        i % 3 === 0
          ? new THREE.OctahedronGeometry(0.09, 0)
          : new THREE.IcosahedronGeometry(0.064, 1);
      const mesh = new THREE.Mesh(
        geo,
        satelliteMaterials[i % satelliteMaterials.length],
      );
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.72,
        Math.sin(angle * 1.7) * 0.55,
      );
      mesh.userData = {
        angle,
        radius,
        speed: (i % 2 ? -1 : 1) * (0.08 + (i % 4) * 0.025),
        phase: i * 0.8,
      };
      satellites.add(mesh);
      satelliteMeshes.push(mesh);
    }

    // A faint halo and subtle connector points give the scene depth without heavy assets.
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(2.18, 48, 32),
      new THREE.MeshBasicMaterial({
        color: 0xff5638,
        transparent: true,
        opacity: 0.035,
        side: THREE.BackSide,
        depthWrite: false,
      }),
    );
    coreGroup.add(halo);

    const particleCount = 420;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const spread = 3.2 + Math.random() * 3.2;
      particlePositions[i * 3] = (Math.random() - 0.5) * spread * 2.3;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * spread * 1.25;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 5.5 - 0.5;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3),
    );
    const particles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({
        color: 0xc5c8d0,
        size: 0.012,
        transparent: true,
        opacity: 0.48,
        sizeAttenuation: true,
      }),
    );
    scene.add(particles);

    // Fine horizontal plane-grid recedes behind the object like a technical studio floor.
    const floorGrid = new THREE.GridHelper(14, 35, 0x5b3028, 0x28282c);
    floorGrid.position.y = -2.28;
    floorGrid.position.z = -0.7;
    if (Array.isArray(floorGrid.material))
      floorGrid.material.forEach((m) => {
        m.transparent = true;
        m.opacity = 0.18;
      });
    else {
      floorGrid.material.transparent = true;
      floorGrid.material.opacity = 0.18;
    }
    scene.add(floorGrid);

    // Keep the real Three.js lighting and emissive objects synchronized with the UI palette.
    const paletteHex = {
      ember: 0xe85c3d,
      violet: 0xa78bfa,
      cyan: 0x43d9e6,
      lime: 0xc4f35c,
      blue: 0x6ea8fe,
    };
    const applyScenePalette = () => {
      const accent =
        paletteHex[document.documentElement.dataset.palette] ||
        paletteHex.ember;
      keyLight.color.setHex(accent);
      wireMat.color.setHex(accent);
      ringMaterials[0].color.setHex(accent);
      satelliteMaterials[0].color.setHex(accent);
      satelliteMaterials[0].emissive.setHex(accent);
      innerMat.emissive.setHex(accent);
      halo.material.color.setHex(accent);
    };
    applyScenePalette();
    const paletteObserver = new MutationObserver(applyScenePalette);
    paletteObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-palette"],
    });

    const resize = () => {
      if (!renderer || !host) return;
      const width = Math.max(1, host.clientWidth);
      const height = Math.max(1, host.clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.position.z = width < 560 ? 8.7 : width < 900 ? 8.1 : 7.8;
      camera.updateProjectionMatrix();
    };
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    const onPointerMove = (event) => {
      const rect = host.getBoundingClientRect();
      pointer.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 0.7;
      pointer.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 0.46;
    };
    const onPointerLeave = () => {
      pointer.tx = 0;
      pointer.ty = 0;
    };
    host.addEventListener("pointermove", onPointerMove, { passive: true });
    host.addEventListener("pointerleave", onPointerLeave, { passive: true });

    const animate = () => {
      if (disposed) return;
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      pointer.x += (pointer.tx - pointer.x) * 0.035;
      pointer.y += (pointer.ty - pointer.y) * 0.035;
      coreGroup.rotation.x = (reduceMotion ? 0 : t * 0.075) + pointer.y;
      coreGroup.rotation.y = (reduceMotion ? 0 : t * 0.15) + pointer.x;
      coreGroup.rotation.z = Math.sin(t * 0.18) * 0.035;
      core.rotation.y = t * 0.1;
      innerCore.rotation.x = -t * 0.11;
      innerCore.rotation.y = -t * 0.08;
      wireShell.rotation.x = -t * 0.045;
      wireShell.rotation.y = t * 0.07;
      ringA.rotation.z = 0.3 + t * 0.04;
      ringB.rotation.y = 0.4 + Math.sin(t * 0.12) * 0.1;
      ringC.rotation.x = 0.26 + Math.cos(t * 0.11) * 0.13;
      satelliteMeshes.forEach((mesh) => {
        const { angle, radius, speed, phase } = mesh.userData;
        const a = angle + (reduceMotion ? 0 : t * speed);
        mesh.position.x = Math.cos(a) * radius;
        mesh.position.y = Math.sin(a) * radius * 0.72;
        mesh.position.z = Math.sin(a * 1.8 + phase) * 0.56;
        mesh.rotation.x = t * 0.23 + phase;
        mesh.rotation.y = t * 0.31 + phase;
      });
      particles.rotation.y = pointer.x * 0.035 + (reduceMotion ? 0 : t * 0.008);
      particles.rotation.x = pointer.y * 0.025;
      world.position.x += (pointer.x * 0.13 - world.position.x) * 0.025;
      world.position.y +=
        (-pointer.y * 0.12 + Math.sin(t * 0.45) * 0.035 - world.position.y) *
        0.025;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      paletteObserver.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const mats = Array.isArray(object.material)
            ? object.material
            : [object.material];
          mats.forEach((material) => material.dispose());
        }
      });
      renderer?.dispose();
      if (renderer?.domElement?.parentNode === host)
        host.removeChild(renderer.domElement);
      sceneRef.current = null;
    };
  }, [reduceMotion]);

  return (
    <div
      ref={hostRef}
      className="three-hero-stage"
      role="img"
      aria-label="Interactive 3D metallic crystal with orbiting rings, glowing nodes, and floating particles representing full stack engineering"
    >
      <div className="three-stage-glow" />
      <div className="three-stage-caption">
        <span>INTERACTIVE 3D / CORE SYSTEM</span>
        <span>MOVE POINTER TO ROTATE</span>
      </div>
      <div className="three-stage-readout">
        <span>01</span>
        <i />
        <span>SCENE RENDER / REALTIME</span>
      </div>
    </div>
  );
}
