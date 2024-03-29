module.exports = {
  name: 'args-info',
  description: 'Counts the number of arguments in a command call.',
  execute: (msg, args) => {
    if (!args.length) {
      return msg.channel.send(`You didn't provide any arguments. ${msg.author}`);
    } else if (args[0] === 'foo') {
      return msg.channel.send('bar');
    }
    msg.channel.send(`First argument: ${args[0]}`);
  }
}
