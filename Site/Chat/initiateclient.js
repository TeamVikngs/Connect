async function initializeClient() {
 
  await listUsers();

  return client;
}
