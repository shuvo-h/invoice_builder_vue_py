import SocketHome from "./RealTime/SocketHome.vue";
import WebRtcHome from "./RealTime/WebRtcHome.vue";

export const test_routes = [
    { 
        path: '', 
        name:"socketHome",
        component: SocketHome,
        nav_title:"Socket Home",
        isNav: true,
    },
    { 
        path: 'webrtc', 
        name:"webrtcHome",
        nav_title:"Web RTC",
        component: WebRtcHome,
        isNav: true,
    },
]