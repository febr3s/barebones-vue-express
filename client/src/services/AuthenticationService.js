import Api from '@/services/Api' // this and the other file in this folder are meant to authenticate the client in our service

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}