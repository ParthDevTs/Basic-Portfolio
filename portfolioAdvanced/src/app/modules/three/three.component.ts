import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.main();
  }

  main() {
    const canvas: any = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
    });

    // const gui = new GUI();

    const fov = 40;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 50, 0);
    camera.up.set(0, 0, 1);
    camera.lookAt(0, 0, 0);

    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 5, 0);
    controls.update();

    const scene = new THREE.Scene();

    {
      const color = 0xffffff;
      const intensity = 3;
      const light = new THREE.PointLight(color, intensity);
      scene.add(light);
    }

    const objects = [];

    const radius = 1;
    const widthSegments = 6;
    const heightSegments = 6;
    const sphereGeometry = new THREE.SphereGeometry(
      radius,
      widthSegments,
      heightSegments
    );

    const solarSystem = new THREE.Object3D();
    scene.add(solarSystem);
    objects.push(solarSystem);

    const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xffff00 });
    const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
    sunMesh.scale.set(5, 5, 5);
    solarSystem.add(sunMesh);
    objects.push(sunMesh);

    const earthOrbit = new THREE.Object3D();
    earthOrbit.position.x = 10;
    solarSystem.add(earthOrbit);
    objects.push(earthOrbit);

    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x2233ff,
      emissive: 0x112244,
    });
    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    earthOrbit.add(earthMesh);
    objects.push(earthMesh);

    const moonOrbit = new THREE.Object3D();
    moonOrbit.position.x = 2;
    earthOrbit.add(moonOrbit);

    const moonMaterial = new THREE.MeshPhongMaterial({
      color: 0x888888,
      emissive: 0x222222,
    });
    const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
    moonMesh.scale.set(0.5, 0.5, 0.5);
    moonOrbit.add(moonMesh);
    objects.push(moonMesh);

    // Turns both axes and grid visible on/off
    // GUI requires a property that returns a bool
    // to decide to make a checkbox so we make a setter
    // can getter for `visible` which we can tell GUI
    // to look at.
    // class AxisGridHelper {
    //   constructor(node, units = 10) {
    //     const axes = new THREE.AxesHelper();
    //     axes.material.depthTest = false;
    //     axes.renderOrder = 2;  // after the grid
    //     node.add(axes);

    //     const grid = new THREE.GridHelper(units, units);
    //     grid.material.depthTest = false;
    //     grid.renderOrder = 1;
    //     node.add(grid);

    //     this.grid = grid;
    //     this.axes = axes;
    //     this.visible = false;
    //   }
    //   get visible() {
    //     return this._visible;
    //   }
    //   set visible(v) {
    //     this._visible = v;
    //     this.grid.visible = v;
    //     this.axes.visible = v;
    //   }
    // }

    // function makeAxisGrid(node, label, units) {
    //   const helper = new AxisGridHelper(node, units);
    //   gui.add(helper, 'visible').name(label);
    // }

    // makeAxisGrid(solarSystem, 'solarSystem', 26);
    // makeAxisGrid(sunMesh, 'sunMesh');
    // makeAxisGrid(earthOrbit, 'earthOrbit');
    // makeAxisGrid(earthMesh, 'earthMesh');
    // makeAxisGrid(moonOrbit, 'moonOrbit');
    // makeAxisGrid(moonMesh, 'moonMesh');

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    function render(time) {
      time *= 0.001;

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      objects.forEach((obj) => {
        obj.rotation.y = time;
      });

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

    //   const fov = 45;
    //   const aspect = 2; // the canvas default
    //   const near = 0.1;
    //   const far = 100;
    //   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    //   camera.position.set(0, 10, 20);

    //   const controls = new OrbitControls(camera, canvas);
    //   controls.target.set(0, 5, 0);
    //   controls.update();

    //   const scene = new THREE.Scene();
    //   scene.background = new THREE.Color('black');

    //   {
    //     const planeSize = 40;

    //     const loader = new THREE.TextureLoader();
    //     const texture = loader.load(
    //       'https://threejsfundamentals.org/threejs/resources/images/checker.png'
    //     );
    //     texture.wrapS = THREE.RepeatWrapping;
    //     texture.wrapT = THREE.RepeatWrapping;
    //     texture.magFilter = THREE.NearestFilter;
    //     const repeats = planeSize / 2;
    //     texture.repeat.set(repeats, repeats);

    //     const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    //     const planeMat = new THREE.MeshPhongMaterial({
    //       map: texture,
    //       side: THREE.DoubleSide,
    //     });
    //     const mesh = new THREE.Mesh(planeGeo, planeMat);
    //     mesh.rotation.x = Math.PI * -0.5;
    //     scene.add(mesh);
    //   }
    //   {
    //     const cubeSize = 4;
    //     const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    //     const cubeMat = new THREE.MeshPhongMaterial({ color: '#8AC' });
    //     const mesh = new THREE.Mesh(cubeGeo, cubeMat);
    //     mesh.position.set(cubeSize + 1, cubeSize / 2, 0);
    //     scene.add(mesh);
    //   }
    //   {
    //     const sphereRadius = 3;
    //     const sphereWidthDivisions = 32;
    //     const sphereHeightDivisions = 16;
    //     const sphereGeo = new THREE.SphereGeometry(
    //       sphereRadius,
    //       sphereWidthDivisions,
    //       sphereHeightDivisions
    //     );
    //     const sphereMat = new THREE.MeshPhongMaterial({ color: '#CA8' });
    //     const mesh = new THREE.Mesh(sphereGeo, sphereMat);
    //     mesh.position.set(-sphereRadius - 1, sphereRadius + 2, 0);
    //     scene.add(mesh);
    //   }

    //   class ColorGUIHelper {
    //     prop;
    //     object;
    //     constructor(object, prop) {
    //       this.object = object;
    //       this.prop = prop;
    //     }
    //     get value() {
    //       return `#${this.object[this.prop].getHexString()}`;
    //     }
    //     set value(hexString) {
    //       this.object[this.prop].set(hexString);
    //     }
    //   }

    //   {
    //     // const color = 0xffffff;
    //     // const intensity = 1;
    //     // const light = new THREE.AmbientLight(color, intensity);
    //     // scene.add(light);
    //     const color = 0xffffff;
    //     const intensity = 1;
    //     const light = new THREE.DirectionalLight(color, intensity);
    //     light.position.set(0, 10, 0);
    //     light.target.position.set(-5, 0, 0);
    //     scene.add(light);
    //     scene.add(light.target);

    //     const color1 = 0xffffff;
    //     const intensity1 = 1;
    //     const light1 = new THREE.PointLight(color1, intensity1);
    //     light.position.set(0, 10, 0);
    //     scene.add(light);

    //     const helper = new THREE.PointLightHelper(light);
    //     const helper1 = new THREE.PointLightHelper(light1);
    //     // scene.add(helper);
    //     // scene.add(helper1);

    //     function updateLight() {
    //       helper.update();
    //     }

    //     // const helper = new THREE.DirectionalLightHelper(light);
    //     // scene.add(helper);
    //   }

    //   function resizeRendererToDisplaySize(renderer) {
    //     const canvas = renderer.domElement;
    //     const width = canvas.clientWidth;
    //     const height = canvas.clientHeight;
    //     const needResize = canvas.width !== width || canvas.height !== height;
    //     if (needResize) {
    //       renderer.setSize(width, height, false);
    //     }
    //     return needResize;
    //   }

    //   function render() {
    //     if (resizeRendererToDisplaySize(renderer)) {
    //       const canvas = renderer.domElement;
    //       camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //       camera.updateProjectionMatrix();
    //     }

    //     renderer.render(scene, camera);

    //     requestAnimationFrame(render);
    //   }

    //   requestAnimationFrame(render);
    // }
  }
}
