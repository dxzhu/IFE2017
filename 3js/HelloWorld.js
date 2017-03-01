function init() {
    // renderer
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });

    // 由Three.js生成canvas元素

    // var renderer = new THREE.WebGLRenderer();
    // renderer.setSize(400, 300);
    // document.getElementsByTagName('body')[0].appendChild(renderer.domElement);

    // 设置背景色
    renderer.setClearColor(0x000000);

    // scene
    var scene = new THREE.Scene();

    // camera
    var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
    camera.position.set(0, 0, 5);
    scene.add(camera);

    // cube
    var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
        new THREE.MeshBasicMaterial({
            color: 0xff0000
        })
    );
    scene.add(cube);

    // 渲染
    renderer.render(scene, camera);
}

