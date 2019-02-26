import React, { Component } from "react";
import * as THREE from "three";

import threeEntryPoint from "./threejs/threeEntryPoint";
import * as OBJLoader from "three-obj-loader";

import model from "../../assets/models/dummy.obj";

OBJLoader(THREE);

export default class Canvas extends Component {
  constructor() {
    super();

    // instantiate a loader
    this.THREE = THREE;
    this.loader = new this.THREE.OBJLoader();
    this.state = {
      resource: null
    };
    this.loadGeo = () => {
      this.loader.load(
        // resource URL
        model,
        // called when resource is loaded
        object => {
          console.log(object);
          this.setState({ resource: object });
        },
        // called when loading is in progresses
        xhr => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        error => {
          console.log("An error happened");
        }
      );
    };
  }

  componentDidMount() {
    const geo = new THREE.SphereGeometry(50, 50, 50);
    threeEntryPoint(this.threeRootElement, geo);
    this.loadGeo();
  }

  selectGeo = e => {
    const canvas = document.querySelector("canvas");

    if (canvas.parentNode !== null) {
      canvas.parentNode.removeChild(canvas);
    }

    switch (e.target.value) {
      case "Ball":
        const geo0 = new THREE.SphereGeometry(50, 50, 50);
        threeEntryPoint(this.threeRootElement, geo0);
        break;
      case "Box":
        const geo1 = new THREE.BoxGeometry(50, 50);
        threeEntryPoint(this.threeRootElement, geo1);

        break;
      case "Cylinder":
        const geo2 = new THREE.CylinderGeometry(20, 20, 20, 20);
        threeEntryPoint(this.threeRootElement, geo2);

        break;
      case "Torus":
        const geo3 = new THREE.TorusGeometry(10, 10);
        threeEntryPoint(this.threeRootElement, geo3);

        break;
      default:
        const geo = new THREE.TorusGeometry();
        threeEntryPoint(this.threeRootElement, geo);
    }
  };
  render() {
    return (
      <div

        className="canvas-canvas"
        ref={element => (this.threeRootElement = element)}
      >
        <div className="col-4 p-5 position-absolute">
          <label htmlFor="geo">Select a Geometry</label>
          <select
            onChange={e => this.selectGeo(e)}
            className="form-control"
            id="geo"
            name="geo"
          >
            <option>Ball</option>
            <option>Box</option>
            <option>Cylinder</option>
            <option>Torus</option>
          </select>
        </div>
      </div>
    );
  }
}
