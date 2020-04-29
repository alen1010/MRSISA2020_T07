import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        clinics: []
    },
    mutations: {
        setAllClinics(state, clinics){
            Vue.set(state, 'clinics', clinics);
        },
        addClinic(state, clinic) {
            state.clinics.push(clinic);
        },
        deleteClinic(state, clinic) {
            let index = state.clinics.findIndex(c => c.id === clinic.id);
            state.clinics.splice(index, 1);
        },
        updateClinic(state, clinic) {
            state.clinics = [
                ...state.clinics.filter(c => c.id !== clinic.id),
                clinic
            ]
        }
    },
    actions: {
        async getClinics({commit}) {
            try {
                let res = await Vue.prototype.$axios.get('/api/clinic/getAll');
                console.log(res.data);
                commit('setAllClinics', res.data);
            } catch (err) {
                console.error(err);
            }
        },
        async deleteClinicApi({commit}, clinic) {
            try{
                let res = await Vue.prototype.$axios.delete(`/api/clinic/${clinic.id}`);
                commit('deleteClinic', clinic);
            } catch(err) {
                console.error(err);
            }
        }
    },
};