import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  Database,
  MapPin,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import ThreeDScene from "../scene/ThreeDScene";
import { site } from "../../data/site";

export default function Hero() {
  return (
    <section id="home" className="hero-cinematic relative mx-auto">
      <div className="hero-intro">
        <Reveal>
          <div className="availability">
            <span className="pulse-dot" /> OPEN TO FULL STACK DEVELOPMENT
            OPPORTUNITIES · INDIA
          </div>
          <p className="hero-kicker">
            PORTFOLIO / 2026 <span>—</span> FULL STACK ENGINEERING
          </p>
          <h1 className="hero-title">
            <span>SOURAV</span>
            <span className="hero-title-second">
              SAHOO<span className="hero-title-period">.</span>
            </span>
          </h1>
          <p className="hero-deck">
            Full Stack Developer building reliable, user-friendly products with{" "}
            <strong>React, Node.js, Express, and MongoDB.</strong>
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.12} className="hero-showcase-wrap">
        <div
          className="hero-showcase"
          aria-label="Interactive 3D portfolio scene for a full stack developer"
        >
          <div className="showcase-atmosphere" />
          <div className="showcase-grid" />
          <div className="showcase-label showcase-label-left">
            <span className="tiny-red-dot" /> SYSTEM / READY <b>01—03</b>
          </div>
          <div className="showcase-label showcase-label-right">
            BUILDING THE WEB <span>↗</span>
          </div>
          <div className="showcase-side-card showcase-side-left">
            <span className="mini-label">01 / BACKEND</span>
            <Braces size={17} />
            <strong>REST API</strong>
            <small>JWT · Middleware</small>
            <div className="mini-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="showcase-side-card showcase-side-right">
            <span className="mini-label">02 / DATABASE</span>
            <Database size={17} />
            <strong>MongoDB</strong>
            <small>Schema · References</small>
            <div className="db-nodes">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <ThreeDScene />
          <div className="hero-orbit-tag hero-orbit-tag-left">
            <span>JS</span>
            <div>
              <b>APPLICATION LOGIC</b>
              <small>JavaScript · ES6+</small>
            </div>
          </div>
          <div className="hero-orbit-tag hero-orbit-tag-right">
            <span>DB</span>
            <div>
              <b>DATA LAYER</b>
              <small>MongoDB · Mongoose</small>
            </div>
          </div>
          <div className="hero-code-float">
            <span className="code-float-dots">
              <i />
              <i />
              <i />
            </span>
            <span>developer.config.js</span>
            <code>
              <b>const</b> stack = <i>['React', 'Node']</i>
            </code>
          </div>
          <div className="showcase-float showcase-float-top">
            <span className="float-icon">
              <ShieldCheck size={15} />
            </span>
            <div>
              <small>AUTH LAYER</small>
              <strong>Protected by JWT</strong>
            </div>
            <Check size={15} />
          </div>
          <div className="showcase-float showcase-float-bottom">
            <span className="float-icon">
              <Workflow size={15} />
            </span>
            <div>
              <small>ARCHITECTURE</small>
              <strong>Routes → Controllers → Data</strong>
            </div>
          </div>
          <div className="showcase-orbit-mark">
            S<span>.</span>
          </div>
        </div>
        <div className="showcase-caption">
          <span>01 / THE DEVELOPER WORKSPACE</span>
          <span>DESIGN MINDED. CODE DRIVEN.</span>
        </div>
      </Reveal>
      <div className="hero-bottom-row">
        <div className="hero-bottom-detail">
          <span className="hero-bottom-label">BASED IN</span>
          <strong>
            <MapPin size={14} /> {site.location}, India
          </strong>
        </div>
        <a className="hero-bottom-cta" href="#projects">
          EXPLORE SELECTED WORK <ArrowUpRight size={16} />
        </a>
        <div className="hero-bottom-detail hero-bottom-right">
          <span className="hero-bottom-label">CORE STACK</span>
          <strong>REACT · NODE · MONGODB</strong>
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <div>
          <ArrowDownRight size={15} />
        </div>
      </a>
    </section>
  );
}
