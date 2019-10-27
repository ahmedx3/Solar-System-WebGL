#version 300 es
precision highp float;

in vec4 vertexColor; // An input received from the vertex shader. Since the vertex shader only send 3 colors (one for each vertex), the rasterizer will interpolate the 3 values to get values for the fragments in the middle of the triangle
// Info: the variables sending data between the vertex and fragment shader are called Interpolators

out vec4 color;

in vec3 vertexPosition;

uniform mat4 tint; // This tint variable will be used to give us more control over the output color

float xColor;
float yColor;
float zColor;

void main(){

    xColor = ( vertexPosition.x + 1.0 ) / 2.0 * 1.0;
    yColor = ( vertexPosition.y + 1.0 ) / 2.0 * 1.0;
    zColor = ( vertexPosition.z + 1.0 ) / 2.0 * 1.0;

    xColor = vertexPosition.x;
    yColor = vertexPosition.y;
    zColor = vertexPosition.z;

    color = tint * vec4( xColor , yColor , zColor , 1.0 );
    //color = tint * vertexColor; // Send our interpolated color
}