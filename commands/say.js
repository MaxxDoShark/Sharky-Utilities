exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission("MANAGE_CHANNELS")) return;
    msg.channel.send(args.join(" "), { allowedMentions: { parse: ["users"] } })
    msg.delete();
}