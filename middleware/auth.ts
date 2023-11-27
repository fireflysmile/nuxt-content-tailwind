export default defineNuxtRouteMiddleware((event) => {
  const token = useCookie('token')

  if (!token.value) {
    process.client && alert('Sorry, user or password not correct');
    return navigateTo('/auth/signin');
  }
});
