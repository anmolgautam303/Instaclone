import Reactotron, {
    trackGlobalErrors,
    openInEditor,
    overlay,
    asyncStorage,
    networking
} from 'reactotron-react-native'

// Works only dev mode
if (__DEV__) {
    Reactotron
        .configure({
            host: "192.168.17.224",
            name: 'InstaClone App'
        })
        .useReactNative()
        .use(trackGlobalErrors())
        .use(openInEditor())
        .use(overlay())
        .use(asyncStorage())
        .use(networking())
        .connect()
}
