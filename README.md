# Notes

## Definition

React Three Fiber (R3F) is a React library that allows you to build and manage 3D graphics in a web browser using Three.js, a popular 3D rendering library. Instead of writing raw Three.js code, which can be complex, React Three Fiber provides a way to use familiar React concepts (like components, props, and hooks) to build and interact with 3D scenes more easily.

## Learning journal

Oct 2
- useMemo hook
- Sharing Objects
- Stats Panel
- R3F-Perf
- OrbitControls

Oct 3
- `<PointerLockControls />`: creates a first person view
- `<axisHelper />`: adds colorful lines at x y z
- `<gridHelper />`: adds a grid
- Liva: a GUI component to interact with scene 

Oct 4
- Materials
  - MeshBasicMaterial: Use when lighting is unnecessary and you want a flat, simple color/texture.
  - MeshNormalMaterial: Use for debugging or if you want a stylized, geometric look that highlights the 3D shape.
  - MeshPhongMaterial: Use when you want shiny, glossy surfaces with highlights.
  - MeshStandardMaterial: Use for the most realistic material that interacts with light as real-world objects do, with control over roughness and metalness.
- Lights
  - Ambient Light: Provides uniform lighting across the scene, illuminating all objects equally without casting shadows.
  - Directional Light: Simulates sunlight by emitting parallel rays from a specific direction, casting shadows and highlighting surfaces.
  - Point Light: Emits light in all directions from a single point, similar to a light bulb, with falloff over distance.
  - Spot Light: Casts a focused beam of light in a specific direction, like a flashlight, often used for highlighting specific areas or objects.
- Shadows

Oct 7
- useLoader -  used in React Three Fiber to pre-cache any assets in memory, uses a texture module in the example
- GLTFLoader - used to load 3d models, uses an example from blender