const fetchUser = async (id) => await fetch(`https://discordlookup.mesalytic.moe/v1/user/${id}/`).then(response => response.json()).catch(error => console.log(error))

const init = () => {
    fetchUser('288448920949096458').then(data => {
        document.getElementById('avatar').src = data.avatar.link
        document.getElementById('username').innerHTML = data.global_name
    })

    fetchUser('1192551694358286407').then(data => {
        document.getElementById('avatar-2').src = data.avatar.link
        document.getElementById('username-2').innerHTML = data.global_name
    })
}

init()

const FLAGS = {
    active_developer: "<img class='flag-icon h-[22px]' title='Desenvolvedor(a) Ativo(a)' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/activedeveloper.svg'>",
    early_supporter: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/pig.svg' alt='Premium Early Supporter' title='Apoiador Inicial'>",
    hypesquad_house_1: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/hypebravery.svg' alt='HypeSquad Online House 1' title='Bravery'>",
    hypesquad_house_2: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/hypebrilliance.svg' alt='HypeSquad Online House 2' title='Brilliance'>",
    hypesquad_house_3: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/hypebalance.svg' alt='HypeSquad Online House 3' title='Balance'>",
    premium: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/nitro.svg' alt='Nitro' title='Nitro'>",
    guild_booster_lvl1: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/lvl1.svg' alt='Boost Level 1' title='Boost Nível 1'>",
    guild_booster_lvl2: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/lvl2.svg' alt='Boost Level 2' title='Boost Nível 2'>",
    guild_booster_lvl3: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/lvl3.svg' alt='Boost Level 3' title='Boost Nível 3'>",
    guild_booster_lvl4: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/lvl4.svg' alt='Boost Level 4' title='Boost Nível 4'>",
    guild_booster_lvl5: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/lvl5.svg' alt='Boost Level 5' title='Boost Nível 5'>",
    guild_booster_lvl6: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/lvl6.svg' alt='Boost Level 6' title='Boost Nível 6'>",
    guild_booster_lvl7: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/lvl7.svg' alt='Boost Level 7' title='Boost Nível 7'>",
    guild_booster_lvl8: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/lvl8.svg' alt='Boost Level 8' title='Boost Nível 8'>",
    guild_booster_lvl9: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/lvl9.svg' alt='Boost Level 9' title='Boost Nível 9'>",
    verified_developer: `<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/dev.svg' alt='Verified Developer' title='Desenvolvedor Verificado de bots Pioneiro'>`,
    hypesquad: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/hypesquad.svg' alt='HypeSquad' title='HypeSquad Events'>",
    partner: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordpartner.svg' alt='Partner' title='Dono(a) de servidor parceiro'>",
    certified_moderator: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/moderator.svg' alt='Moderador' title='Moderator'>",
    bughunterleverl2: "<img class='flag-icon h-[22px]' src='https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordbughunter2.svg' alt='BugHunter' title='BugHunter 2'>"
}