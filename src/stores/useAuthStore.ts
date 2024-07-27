import { defineStore } from 'pinia';
import axios from 'axios';

interface AuthState {
  user: {
    email: string;
    id: number;
    name: string;
  } | null;
  message: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    message: null,
  }),
  actions: {
    async login(email: string) {
      try {
        const response = await axios.post('http://subnetapi.runasp.net/Member/Login', {
          Email: email
        });
        const { data } = response;
        
        console.log("data", data)

        if (data.status === 1) {
          this.user = {
            email: data.member.email,
            id: data.member.id,
            name: data.member.name,
          };
          // Store only user ID in session storage
          sessionStorage.setItem('userID', data.member.id.toString());
          this.message = data.message;

        } else {
          this.message = data.message;
        }
      } catch (error) {
        console.error('Login error:', error);
        this.message = 'An error occurred during login.';
      }
    },
    logout() {
      this.user = null;
      sessionStorage.removeItem('userID');
    },
  }
});