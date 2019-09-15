import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zdTe93f0GskA2xP5LfYXQCj_aSnC1INMpITu9sm3mj8SZ7npsjjSPTOasQB-We4OjY_E3ZfjW9o2lnvRO43I26l70-Ji85c_SMLcrIalDQDtaV8KV2TR3gC05Kl5XXYx'
    }
});


