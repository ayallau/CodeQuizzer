/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('codequizzer_db');

// Create a new document in the collection.
db.getCollection('Topics').insertOne({
  title: 'JAVA',
  description: 'Java is a programming language and computing platform first released by Sun Microsystems in 1995.',
  color: '#007396',
  icon: 'java'
});
