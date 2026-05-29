
export class UsersService {
  async getTravelerWorkspace(userId: string) {
    return {
      userId,
      savedTrips: [],
      wishlist: [],
      emergencyContacts: [],
      notificationPreferences: ['email', 'push'],
      walletStatus: 'ready',
    };
  }
}
