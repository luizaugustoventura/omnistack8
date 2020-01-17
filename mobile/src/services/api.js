import axios from 'axios';

const api = axios.create({
    //IP da máquina caso esteja com o celular conectado via USB ou bia Wi-Fi
    //10.0.3.2 no Genymotion
    //10.0.2.2 no Android Studio
    //localhost. Para isto basta rodar 'adb reverse tcp:3333 tcp:3333'
    baseURL: 'http://10.0.3.2:3333'
});

export default api;