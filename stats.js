const os = require('os');
const log = require('./logger')

/* Criando um objeto de maneira tradicional 
const freemem = os.freemem;
const totalmem = os.totalmem;
*/

// Função que executa a cada tempo determinado (ms)
setInterval(() => {
  // Desestruturação de um objeto.
  const { freemem, totalmem } = os;
  
  const total = parseInt(totalmem() / 1024 / 1024);
  const mem = parseInt(freemem() / 1024 / 1024);
  const percents = parseInt((mem / total) * 100);

  const stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${percents} %`,
  }
  
  console.clear();
  console.log('======= PC STATS ======');
  console.table(stats);

  log(`${JSON.stringify(stats)}\n`);

}, 1000);