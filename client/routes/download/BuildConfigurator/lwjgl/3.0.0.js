import {
  NATIVE_WIN,
  NATIVE_ALL
} from '../constants'

export default () => {

  const artifacts = {
    byId: {
      'lwjgl': {
        id: 'lwjgl',
        title: 'LWJGL core',
        description: 'The LWJGL core library.',
        natives: NATIVE_ALL,
        required: true,
      },
      'lwjgl-egl': {
        id: 'lwjgl-egl',
        title: 'EGL bindings',
        description: 'An interface between Khronos rendering APIs such as OpenGL ES or OpenVG and the underlying native platform window system.',
      },
      'lwjgl-glfw': {
        id: 'lwjgl-glfw',
        title: 'GLFW bindings',
        description: 'An multi-platform library for OpenGL, OpenGL ES and Vulkan development on the desktop. It provides a simple API for creating windows, contexts and surfaces, receiving input and events.',
        natives: NATIVE_ALL,
      },
      'lwjgl-jawt': {
        id: 'lwjgl-jawt',
        title: 'JAWT bindings',
        description: 'The AWT native interface.',
      },
      'lwjgl-jemalloc': {
        id: 'lwjgl-jemalloc',
        title: 'jemalloc bindings',
        description: 'A general purpose malloc implementation that emphasizes fragmentation avoidance and scalable concurrency support.',
        natives: NATIVE_ALL,
      },
      'lwjgl-nanovg': {
        id: 'lwjgl-nanovg',
        title: 'NanoVG bindings',
        description: 'A small antialiased vector graphics rendering library for OpenGL.',
        natives: NATIVE_ALL,
      },
      'lwjgl-nfd': {
        id: 'lwjgl-nfd',
        title: 'Native File Dialog bindings',
        description: 'A tiny, neat C library that portably invokes native file open and save dialogs.',
        natives: NATIVE_ALL,
      },
      'lwjgl-openal': {
        id: 'lwjgl-openal',
        title: 'OpenAL bindings',
        description: 'A cross-platform 3D audio API appropriate for use with gaming applications and many other types of audio applications.',
        natives: NATIVE_ALL,
      },
      'lwjgl-opencl': {
        id: 'lwjgl-opencl',
        title: 'OpenCL bindings',
        description: 'An open, royalty-free standard for cross-platform, parallel programming of diverse processors found in personal computers, servers, mobile devices and embedded platforms.',
      },
      'lwjgl-opengl': {
        id: 'lwjgl-opengl',
        title: 'OpenGL bindings',
        description: 'The most widely adopted 2D and 3D graphics API in the industry, bringing thousands of applications to a wide variety of computer platforms.',
      },
      'lwjgl-opengles': {
        id: 'lwjgl-opengles',
        title: 'OpenGL ES bindings',
        description: 'A royalty-free, cross-platform API for full-function 2D and 3D graphics on embedded systems - including consoles, phones, appliances and vehicles.',
      },
      'lwjgl-ovr': {
        id: 'lwjgl-ovr',
        title: 'OVR bindings',
        description: 'The API of the Oculus SDK.',
        natives: [NATIVE_WIN],
      },
      'lwjgl-par': {
        id: 'lwjgl-par',
        title: 'par_shapes bindings',
        description: 'Generate parametric surfaces and other simple shapes.',
        natives: NATIVE_ALL,
      },
      'lwjgl-sse': {
        id: 'lwjgl-sse',
        title: 'SSE bindings',
        description: 'Simple SSE intrinsics.',
        natives: NATIVE_ALL,
      },
      'lwjgl-stb': {
        id: 'lwjgl-stb',
        title: 'stb bindings',
        description: 'Single-file public domain libraries for fonts, images, ogg vorbis files and more.',
        natives: NATIVE_ALL,
      },
      'lwjgl-vulkan': {
        id: 'lwjgl-vulkan',
        title: 'Vulkan bindings',
        description: 'A new generation graphics and compute API that provides high-efficiency, cross-platform access to modern GPUs used in a wide variety of devices from PCs and consoles to mobile phones and embedded platforms.',
      },
      'lwjgl-xxhash': {
        id: 'lwjgl-xxhash',
        title: 'xxHash bindings',
        description: 'An Extremely fast Hash algorithm, running at RAM speed limits.',
        natives: NATIVE_ALL,
      },
    }
  };

  artifacts.allIds = Object.keys(artifacts.byId);

  return artifacts;
};
