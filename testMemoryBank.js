const MemoryBank = require('./memoryBank');

async function testMemoryBank() {
  const memoryBank = new MemoryBank();

  try {
    // Test set and get
    await memoryBank.set('name', 'Cline');
    const name = await memoryBank.get('name');
    console.log('Retrieved name:', name);

    // Test getAll
    await memoryBank.set('age', 30);
    const allItems = await memoryBank.getAll();
    console.log('All items:', allItems);

    // Test delete
    await memoryBank.delete('age');
    console.log('After deletion:', await memoryBank.getAll());
  } catch (err) {
    console.error('Error:', err);
  } finally {
    memoryBank.close();
  }
}

testMemoryBank();
