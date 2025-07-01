const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

module.exports = {
  info: (...args) => console.log(`${colors.blue}[INFO]${colors.reset}`, ...args),
  success: (...args) => console.log(`${colors.green}[SUCCESS]${colors.reset}`, ...args),
  warn: (...args) => console.log(`${colors.yellow}[WARN]${colors.reset}`, ...args),
  error: (...args) => console.log(`${colors.red}[ERROR]${colors.reset}`, ...args)
};