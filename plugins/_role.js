let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 8) ? 'Warrior V'
        : ((user.level >= 8) && (user.level <= 16)) ? 'Warrior IV'
            : ((user.level >= 16) && (user.level <= 24)) ? 'Warrior III'
                : ((user.level >= 24) && (user.level <= 32)) ? 'Warrior II'
                    : ((user.level >= 32) && (user.level <= 40)) ? 'Warrior I'
                        : ((user.level >= 40) && (user.level <= 48)) ? 'Elite V'
                            : ((user.level >= 48) && (user.level <= 56)) ? 'Elite IV'
                                : ((user.level >= 56) && (user.level <= 64)) ? 'Elite III'
                                    : ((user.level >= 64) && (user.level <= 72)) ? 'Elite II'
                                        : ((user.level >= 72) && (user.level <= 80)) ? 'Elite I'
                                            : ((user.level >= 80) && (user.level <= 88)) ? 'Master V'
                                                : ((user.level >= 88) && (user.level <= 96)) ? 'Master IV'
                                                    : ((user.level >= 96) && (user.level <= 104)) ? 'Master III'
                                                        : ((user.level >= 104) && (user.level <= 112)) ? 'Master II'
                                                            : ((user.level >= 112) && (user.level <= 120)) ? 'Master I'
                                                                : ((user.level >= 120) && (user.level <= 128)) ? 'Grand Master V'
                                                                    : ((user.level >= 128) && (user.level <= 136)) ? 'Grand Master IV'
                                                                        : ((user.level >= 136) && (user.level <= 144)) ? 'Grand Master III'
                                                                            : ((user.level >= 144) && (user.level <= 152)) ? 'Grand Master II'
                                                                                : ((user.level >= 152) && (user.level <= 160)) ? 'Grand Master I'
                                                                                    : ((user.level >= 160) && (user.level <= 168)) ? 'Epic V'
                                                                                        : ((user.level >= 168) && (user.level <= 176)) ? 'Epic IV'
                                                                                            : ((user.level >= 176) && (user.level <= 184)) ? 'Epic III'
                                                                                                : ((user.level >= 184) && (user.level <= 192)) ? 'Epic II'
                                                                                                    : ((user.level >= 192) && (user.level <= 200)) ? 'Epic I'
                                                                                                        : ((user.level >= 200) && (user.level <= 208)) ? 'Legend V'
                                                                                                            : ((user.level >= 208) && (user.level <= 216)) ? 'Legend IV'
                                                                                                                : ((user.level >= 216) && (user.level <= 224)) ? 'Legend III'
                                                                                                                    : ((user.level >= 224) && (user.level <= 232)) ? 'Legend II'
                                                                                                                        : ((user.level >= 232) && (user.level <= 240)) ? 'Legend I'
                                                                                                                            : ((user.level >= 240) && (user.level <= 248)) ? 'Mythic V'
                                                                                                                                : ((user.level >= 248) && (user.level <= 256)) ? 'Mythic IV'
                                                                                                                                    : ((user.level >= 256) && (user.level <= 264)) ? 'Mythic III'
                                                                                                                                        : ((user.level >= 264) && (user.level <= 282)) ? 'Mythic II'
                                                                                                                                        	: ((user.level >= 282) && (user.level <= 300)) ? 'Mythic I'
                                                                                                              	                          	: ((user.level >= 300) && (user.level <= 500)) ? '⭐Ace⭐'
                                                                                                                           	             		: ((user.level >= 500) && (user.level <= 1000)) ? '✨Ace Shine✨'
																																						: '👑Ace Glory👑'
    user.role = role
    return true
}

module.exports = handler