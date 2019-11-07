# WebGL SolarSystem
## Steps to run

1. Install [Node.js](https://nodejs.org/en/) and [Visual Studio Code](https://code.visualstudio.com/).
2. Open this lab folder in Visual Studio Code.
3. Open a terminal (Terminal > New Terminal).
4. run `npm install` . If it failed for any reason, try again.
5. run `npm run watch` .
6. Ctrl + click the link shown in the terminal (usually it will be http://localhost:1234).

**Note:** you can use yarn to enable caching so that you don't download all the packages with project. You can download yarn from [yarnpkg.com](https://yarnpkg.com/lang/en/). Then replace `npm install` with `yarn install` and `npm run watch` with `yarn watch`.

### **ColoredSphere**

The function takes 3 parameters:
* `gl: WebGL2RenderingContext` which is the WebGL2 context.
* `verticalResolution: number` which defines the number of segments from the north pole to the south pole of the sphere.
* `horizontalResolution: number` which defines the number of segments along the equator of the sphere.

The function must return a mesh that contains a sphere of radius 1 centered around the origina (0,0,0) and the number of vertical and horizontal segments must be as defined by the input parameters. The color of each vertex will depend on its position and must follow the following formula:

```
(r,g,b) = ((x,y,z) + 1) / 2 * 255 
a = 255
```

### **SolarSystem**

The function takes 2 paramter:
* `parent: mat4` which is the transformation of the parent to the homogenous clip space "MVP".
* `system: SolarSystemDescription` which defines the stucture of the solar system.

The data for the solar systems is found in `static/data/solar-systems.json` and it is loaded by the scene before starting.
