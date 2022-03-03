import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from '@/models/user.model';

// Tracks users database
export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([]);

  const createUser = (newUser: User) => {
    users.value.push(newUser);
  };

  const deleteUser = (id: number) => {
    const index = users.value.findIndex((el: User) => el.id === id);
    users.value.splice(index, 1);
  };
  const updateUser = (id: number, updatedData: User) => {
    const index = users.value.findIndex((el: User) => el.id === id);
    users.value.splice(index, 1, { ...users.value[index], ...updatedData });
  };

  return {
    users,
    createUser,
    deleteUser,
    updateUser
  };
});