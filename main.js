var jo = Object.defineProperty;
var Fo = (i,t,a)=>t in i ? jo(i, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : i[t] = a;
var c = (i,t,a)=>Fo(i, typeof t != "symbol" ? t + "" : t, a);
import "./modulepreload-polyfill-B5Qt9EMX.js";
import {c as $o, b as Ho} from "./client-CMUV4cvD.js";
import {K as No, L as ui, $ as m, M as ka, N as Zi, R as Wo, V as Go, O as eo, P as mt, Q as Ko, _ as u, T as Uo, U as qo, C as Re, W as Ye, X as Zo, Y as Ji, Z as Jo, J as vt, a0 as Yo, a1 as Xo, a2 as Qo, a3 as en} from "./vendor-DsbCIBUe.js";
import {O as he, I as C, V as e, f as Di, m as tn, M as de, R as l, b as ee, a as H, C as M, c as ve, N as Y, A as Ke, r as At, d as Qt, e as at, G as Ue, S as ya, F as va, g as Sa, T as xa, P as te, E as Yi, h as je, i as Pt, j as lt, k as Ta, l as et, n as an, H as ot, o as ei, p as on, q as nt, s as Ae, t as Z, u as ue, W as Rt, v as nn, w as zi, x as gt, y as Xi, U as Ei, z as ti, B as Jt, L as sn, D as Ma, J as Li, K as rn} from "./constants-B4SmiNZu.js";
import {n as ln} from "./newsPosts-DjKiltLZ.js";
const ut = he.create()(i=>({
    [i]: ()=>({
        itemType: C.Ammo,
        noDrop: !1,
        ephemeral: !1,
        defaultCasingFrame: "",
        hideUnlessPresent: !1
    })
}))(()=>[{
    idString: "12g",
    name: "12 gauge",
    maxStackSize: 20,
    characteristicColor: {
        hue: 0,
        saturation: 100,
        lightness: 89
    },
    defaultCasingFrame: "casing_12ga_275in"
}, {
    idString: "556mm",
    name: "5.56mm",
    maxStackSize: 60,
    characteristicColor: {
        hue: 120,
        saturation: 100,
        lightness: 75
    },
    defaultCasingFrame: "casing_556x45mm"
}, {
    idString: "762mm",
    name: "7.62mm",
    maxStackSize: 60,
    characteristicColor: {
        hue: 210,
        saturation: 100,
        lightness: 65
    },
    defaultCasingFrame: "casing_762x51mm"
}, {
    idString: "9mm",
    name: "9mm",
    maxStackSize: 90,
    characteristicColor: {
        hue: 48,
        saturation: 100,
        lightness: 75
    },
    defaultCasingFrame: "casing_9x19mm"
}, {
    idString: "127mm",
    name: "12.7mm",
    maxStackSize: 10,
    characteristicColor: {
        hue: 75,
        saturation: 100,
        lightness: 75
    },
    defaultCasingFrame: "casing_50bmg",
    hideUnlessPresent: !0
}, {
    idString: "firework_rocket",
    name: "Firework Rocket",
    maxStackSize: 5,
    characteristicColor: {
        hue: 0,
        saturation: 55,
        lightness: 85
    },
    defaultCasingFrame: "casing_firework_rocket",
    hideUnlessPresent: !0
}, {
    idString: "curadell",
    name: "Curadell",
    maxStackSize: 10,
    characteristicColor: {
        hue: 26,
        saturation: 100,
        lightness: 75
    },
    defaultCasingFrame: "casing_curadell",
    hideUnlessPresent: !0
}, {
    idString: "power_cell",
    name: "P.O.W.E.R. cell",
    maxStackSize: 10,
    characteristicColor: {
        hue: 190,
        saturation: 100,
        lightness: 85
    },
    defaultCasingFrame: "casing_power_cell",
    ephemeral: !0
}, {
    idString: "bb",
    name: "6mm BB",
    maxStackSize: 240,
    characteristicColor: {
        hue: 0,
        saturation: 0,
        lightness: 75
    },
    ephemeral: !0
}]);
var Qi = (i=>(i[i.Health = 0] = "Health",
i[i.Adrenaline = 1] = "Adrenaline",
i))(Qi || {});
const Gt = he.create()(i=>({
    [i]: ()=>({
        itemType: C.Healing
    }),
    healing_item_factory: t=>({
        idString: t.toLowerCase().replace(/ /g, "_"),
        name: t
    }),
    health_factory: {
        extends: "healing_item_factory",
        applier: ()=>({
            healType: 0
        })
    },
    adren_factory: {
        extends: "healing_item_factory",
        applier: ()=>({
            healType: 1
        })
    }
}))(i=>[i("health_factory", {
    restoreAmount: 15,
    useTime: 3
}, [], ["Gauze"]), i("health_factory", {
    restoreAmount: 100,
    useTime: 6
}, [], ["Medikit"]), i("adren_factory", {
    restoreAmount: 25,
    useTime: 3
}, [], ["Cola"]), i("adren_factory", {
    restoreAmount: 50,
    useTime: 5
}, [], ["Tablets"])])
  , Ee = he.create()(i=>({
    [i]: ()=>({
        itemType: C.Scope,
        noDrop: !1,
        giveByDefault: !1
    }),
    scope_factory: t=>({
        idString: `${t}x_scope`,
        name: `${t}x Scope`
    })
}))(i=>[i("scope_factory", {
    zoomLevel: 135,
    noDrop: !0,
    giveByDefault: !0
}, 1), i("scope_factory", {
    zoomLevel: 135
}, 2), i("scope_factory", {
    zoomLevel: 185
}, 4), i("scope_factory", {
    zoomLevel: 185
}, 8), i("scope_factory", {
    zoomLevel: 255
}, 15)])
  , to = Ee.definitions[0]
  , Kt = he.create()(i=>({
    [i]: ()=>({
        itemType: C.Throwable,
        speedMultiplier: .92,
        cookable: !1,
        noDrop: !1,
        cookSpeedMultiplier: .7,
        hitboxRadius: 1,
        impactDamage: 0,
        image: {
            zIndex: 5
        },
        maxThrowDistance: 96,
        fireDelay: 250,
        speedCap: 1 / 0
    })
}))(()=>[{
    idString: "frag_grenade",
    name: "Frag Grenade",
    fuseTime: 4e3,
    cookTime: 150,
    throwTime: 150,
    impactDamage: 1,
    obstacleMultiplier: 20,
    cookable: !0,
    image: {
        position: e.create(60, 43),
        angle: 60
    },
    speedCap: .15,
    detonation: {
        explosion: "frag_grenade_explosion"
    },
    animation: {
        pinImage: "proj_frag_pin",
        liveImage: "proj_frag",
        leverImage: "proj_frag_lever",
        cook: {
            leftFist: e.create(2.5, 0),
            rightFist: e.create(-.5, 2.15)
        },
        throw: {
            leftFist: e.create(1.9, -1.75),
            rightFist: e.create(4, 2.15)
        }
    }
}, {
    idString: "smoke_grenade",
    name: "Smoke Grenade",
    fuseTime: 2e3,
    cookTime: 150,
    throwTime: 150,
    impactDamage: 1,
    obstacleMultiplier: 20,
    image: {
        position: e.create(60, 43),
        angle: 60
    },
    speedCap: .15,
    detonation: {
        explosion: "smoke_grenade_explosion",
        particles: {
            type: "smoke_grenade_particle",
            count: 10,
            deployAnimation: {
                duration: 4e3,
                staggering: {
                    delay: 300,
                    initialAmount: 2
                }
            },
            spawnRadius: 15
        }
    },
    animation: {
        pinImage: "proj_smoke_pin",
        liveImage: "proj_smoke",
        leverImage: "proj_smoke_lever",
        cook: {
            cookingImage: "proj_smoke_nopin",
            leftFist: e.create(2.5, 0),
            rightFist: e.create(-.5, 2.15)
        },
        throw: {
            leftFist: e.create(1.9, -1.75),
            rightFist: e.create(4, 2.15)
        }
    }
}, {
    idString: "confetti_grenade",
    name: "Confetti Grenade",
    fuseTime: 4e3,
    cookTime: 150,
    throwTime: 150,
    impactDamage: 1,
    obstacleMultiplier: 20,
    cookable: !0,
    image: {
        position: e.create(60, 43),
        angle: 60
    },
    speedCap: .15,
    detonation: {
        explosion: "confetti_grenade_explosion"
    },
    animation: {
        pinImage: "proj_frag_pin",
        liveImage: "proj_confetti",
        leverImage: "proj_frag_lever",
        cook: {
            leftFist: e.create(2.5, 0),
            rightFist: e.create(-.5, 2.15)
        },
        throw: {
            leftFist: e.create(1.9, -1.75),
            rightFist: e.create(4, 2.15)
        }
    }
}]);
var st = (i=>(i[i.Solo = 1] = "Solo",
i[i.Duo = 2] = "Duo",
i[i.Trio = 3] = "Trio",
i[i.Squad = 4] = "Squad",
i))(st || {})
  , j = (i=>(i[i.Player = 0] = "Player",
i[i.Obstacle = 1] = "Obstacle",
i[i.DeathMarker = 2] = "DeathMarker",
i[i.Loot = 3] = "Loot",
i[i.Building = 4] = "Building",
i[i.Decal = 5] = "Decal",
i[i.Parachute = 6] = "Parachute",
i[i.ThrowableProjectile = 7] = "ThrowableProjectile",
i[i.SyncedParticle = 8] = "SyncedParticle",
i))(j || {})
  , ke = (i=>(i[i.None = 0] = "None",
i[i.Melee = 1] = "Melee",
i[i.Downed = 2] = "Downed",
i[i.ThrowableCook = 3] = "ThrowableCook",
i[i.ThrowableThrow = 4] = "ThrowableThrow",
i[i.GunFire = 5] = "GunFire",
i[i.GunFireAlt = 6] = "GunFireAlt",
i[i.GunClick = 7] = "GunClick",
i[i.LastShot = 8] = "LastShot",
i[i.Revive = 9] = "Revive",
i))(ke || {})
  , _e = (i=>(i[i.DeathOrDown = 0] = "DeathOrDown",
i[i.KillLeaderAssigned = 1] = "KillLeaderAssigned",
i[i.KillLeaderDead = 2] = "KillLeaderDead",
i[i.KillLeaderUpdated = 3] = "KillLeaderUpdated",
i))(_e || {})
  , Ve = (i=>(i[i.Inactive = 0] = "Inactive",
i[i.Waiting = 1] = "Waiting",
i[i.Advancing = 2] = "Advancing",
i))(Ve || {})
  , U = (i=>(i[i.Single = 0] = "Single",
i[i.Burst = 1] = "Burst",
i[i.Auto = 2] = "Auto",
i))(U || {})
  , L = (i=>(i[i.EquipItem = 0] = "EquipItem",
i[i.EquipLastItem = 1] = "EquipLastItem",
i[i.DropWeapon = 2] = "DropWeapon",
i[i.DropItem = 3] = "DropItem",
i[i.SwapGunSlots = 4] = "SwapGunSlots",
i[i.LockSlot = 5] = "LockSlot",
i[i.UnlockSlot = 6] = "UnlockSlot",
i[i.ToggleSlotLock = 7] = "ToggleSlotLock",
i[i.Interact = 8] = "Interact",
i[i.Reload = 9] = "Reload",
i[i.Cancel = 10] = "Cancel",
i[i.UseItem = 11] = "UseItem",
i[i.Emote = 12] = "Emote",
i[i.MapPing = 13] = "MapPing",
i[i.Loot = 14] = "Loot",
i))(L || {})
  , ze = (i=>(i[i.BeginSpectating = 0] = "BeginSpectating",
i[i.SpectatePrevious = 1] = "SpectatePrevious",
i[i.SpectateNext = 2] = "SpectateNext",
i[i.SpectateSpecific = 3] = "SpectateSpecific",
i[i.SpectateKillLeader = 4] = "SpectateKillLeader",
i[i.Report = 5] = "Report",
i))(ze || {})
  , Xe = (i=>(i[i.None = 0] = "None",
i[i.Reload = 1] = "Reload",
i[i.UseItem = 2] = "UseItem",
i[i.Revive = 3] = "Revive",
i))(Xe || {})
  , K = (i=>(i[i.Suicide = 0] = "Suicide",
i[i.NormalTwoParty = 1] = "NormalTwoParty",
i[i.FinishedOff = 2] = "FinishedOff",
i[i.FinallyKilled = 3] = "FinallyKilled",
i[i.Gas = 4] = "Gas",
i[i.BleedOut = 5] = "BleedOut",
i[i.Airdrop = 6] = "Airdrop",
i))(K || {})
  , q = (i=>(i[i.Kill = 0] = "Kill",
i[i.Down = 1] = "Down",
i))(q || {});
const Nt = {};
for (const i of [...Gt, ...ut, ...Ee, ...Kt]) {
    let t = 0;
    switch (!0) {
    case (i.itemType === C.Ammo && i.ephemeral):
        t = 1 / 0;
        break;
    case (i.itemType === C.Scope && i.giveByDefault):
        t = 1;
        break
    }
    Nt[i.idString] = t
}
Object.freeze(Nt);
const Ia = Object.freeze([C.Gun, C.Gun, C.Melee, C.Throwable])
  , $ = Di({
    protocolVersion: 24,
    gridSize: 32,
    bleedOutDPMs: .002,
    maxPosition: 1632,
    player: {
        radius: 2.25,
        nameMaxLength: 16,
        defaultName: "Player",
        defaultSkin: "hazel_jumpsuit",
        defaultHealth: 100,
        maxAdrenaline: 100,
        inventorySlotTypings: Ia,
        maxWeapons: Ia.length,
        killLeaderMinKills: 3,
        maxMouseDist: 128,
        reviveTime: 8,
        maxReviveDist: 5
    },
    lootSpawnDistance: .7,
    airdrop: {
        fallTime: 8e3,
        flyTime: 3e4,
        damage: 300
    }
});
var P = (i=>(i[i.Ground = 0] = "Ground",
i[i.UnderWaterDeathMarkers = 1] = "UnderWaterDeathMarkers",
i[i.UnderWaterDeadObstacles = 2] = "UnderWaterDeadObstacles",
i[i.UnderWaterObstacles = 3] = "UnderWaterObstacles",
i[i.UnderWaterLoot = 4] = "UnderWaterLoot",
i[i.UnderwaterGroundedThrowables = 5] = "UnderwaterGroundedThrowables",
i[i.UnderwaterDownedPlayers = 6] = "UnderwaterDownedPlayers",
i[i.UnderwaterPlayers = 7] = "UnderwaterPlayers",
i[i.BuildingsFloor = 8] = "BuildingsFloor",
i[i.Decals = 9] = "Decals",
i[i.DeadObstacles = 10] = "DeadObstacles",
i[i.DeathMarkers = 11] = "DeathMarkers",
i[i.ObstaclesLayer1 = 12] = "ObstaclesLayer1",
i[i.Loot = 13] = "Loot",
i[i.GroundedThrowables = 14] = "GroundedThrowables",
i[i.ObstaclesLayer2 = 15] = "ObstaclesLayer2",
i[i.Bullets = 16] = "Bullets",
i[i.DownedPlayers = 17] = "DownedPlayers",
i[i.Players = 18] = "Players",
i[i.ObstaclesLayer3 = 19] = "ObstaclesLayer3",
i[i.AirborneThrowables = 20] = "AirborneThrowables",
i[i.ObstaclesLayer4 = 21] = "ObstaclesLayer4",
i[i.BuildingsCeiling = 22] = "BuildingsCeiling",
i[i.ObstaclesLayer5 = 23] = "ObstaclesLayer5",
i[i.Emotes = 24] = "Emotes",
i[i.Gas = 25] = "Gas",
i))(P || {});
const ea = {
    penetration: {
        players: !1,
        obstacles: !1
    },
    tracer: {
        opacity: 1,
        width: 1,
        length: 1,
        image: "base_trail",
        particle: !1,
        zIndex: 16
    },
    allowRangeOverride: !1,
    lastShotFX: !1,
    noCollision: !1
};
var ii = (i=>(i[i.Helmet = 0] = "Helmet",
i[i.Vest = 1] = "Vest",
i))(ii || {});
const Ct = he.create()(i=>({
    [i]: ()=>({
        itemType: C.Armor,
        noDrop: !1
    }),
    vest_factory: t=>({
        idString: `${t.toLowerCase()}_vest`,
        name: `${t} Wäste`,
        armorType: 1
    }),
    helmet_factory: t=>({
        idString: `${t.toLowerCase()}_helmet`,
        name: `${t} Hölm`,
        armorType: 0
    })
}))(i=>[i("helmet_factory", {
    level: 1,
    damageReduction: .25
}, "Basic"), i("helmet_factory", {
    level: 2,
    damageReduction: .25
}, "Regular"), i("helmet_factory", {
    level: 3,
    damageReduction: .45
}, "Tactical"), i("vest_factory", {
    level: 1,
    damageReduction: .34
}, "Basic"), i("vest_factory", {
    level: 2,
    damageReduction: .5
}, "Regular"), i("vest_factory", {
    level: 3,
    damageReduction: .6
}, "Tactical")])
  , pt = he.create()(()=>({
    badge_factory: (i,t=[])=>({
        idString: i.toLowerCase().replace(/ /g, "_"),
        name: i,
        roles: t
    })
}))(({simple: i})=>[i("badge_factory", "Youtubr", ["youtubr", "123op"]), i("badge_factory", "Developr", ["developr", "error"]), i("badge_factory", "Lead Designr", ["lead_designr"]), i("badge_factory", "VIP Designr", ["vip_designr"]), i("badge_factory", "Composr", ["composr"]), i("badge_factory", "Lead Composr", ["lead_composr"]), i("badge_factory", "Moderatr", ["moderatr"]), i("badge_factory", "Trial Moderatr", ["trial_moderatr"]), i("badge_factory", "Studio Managr", ["studio_managr"]), i("badge_factory", "Boostr", ["boostr"]), i("badge_factory", "Designr", ["designr"]), i("badge_factory", "Ownr", ["hasanger"]), i("badge_factory", "Contributr+", ["katie", "leia"]), i("badge_factory", "Bleh"), i("badge_factory", "Froog"), i("badge_factory", "AEGIS Logo"), i("badge_factory", "Flint Logo"), i("badge_factory", "Duel")]);
var io = (i=>(i[i.People = 0] = "People",
i[i.Text = 1] = "Text",
i[i.Memes = 2] = "Memes",
i[i.Icons = 3] = "Icons",
i[i.Misc = 4] = "Misc",
i[i.TeamEmote = 5] = "TeamEmote",
i))(io || {});
const Ce = he.create()(()=>({
    emote_factory: (i,t)=>({
        idString: i.toLowerCase().replace(/ /g, "_"),
        name: i,
        category: t
    }),
    team_emote: i=>({
        idString: i,
        name: i,
        isTeamEmote: !0,
        category: 5
    })
}))(({simple: i})=>[...["Happy Face", "Sad Face", "Thumbs Up", "Thumbs Down", "Wave", "Disappointed Face", "Sobbing Face", "Angry Face", "Heart Face", "Joyful Face", "Cool Face", "Upside Down Face", "Picasso Face", "Alien", "Headshot", "Dab", "Devil Face", "Bandaged Face", "Cold Face", "Thinking Face", "Nervous Face", "Sweating Face", "Greedy Face", "Creepy Clown", "Lying Face", "Skull", "Melting Face", "Grimacing Face", "Vomiting Face", "Screaming Face", "Pleading Face", "Sad Smiling Face", "Triumphant Face", "Questioning Face", "Smirking Face", "Blushing Face", "Saluting Face", "Neutral Face", "Relieved Face", "Monocle Face", "Partying Face", "Shushing Face", "Zipper Mouth Face", "Sighing Face", "Frustrated Face"].map(t=>i("emote_factory", t, 0)), ...["Suroi Logo", "AEGIS Logo", "Flint Logo", "Duel", "Chicken Dinner"].map(t=>i("emote_factory", t, 3)), ...["Troll Face", "Clueless", "Pog", "Froog", "Bleh", "Muller", "Suroi General Chat", "Fire", "RIP"].map(t=>i("emote_factory", t, 2)), ...["Question Mark", "Team = Ban", "Hack = Ban", "gg", "ez", "Hi5", "oof", "real", "fake", "Colon Three"].map(t=>i("emote_factory", t, 1)), ...["Monkey", "Carrot", "Tomato", "Egg", "Squid"].map(t=>i("emote_factory", t, 4)), ...[...ut.definitions.filter(t=>!t.ephemeral), ...Gt.definitions].map(({idString: t})=>i("team_emote", t))])
  , Q = {
    automatic: {
        amount: 2,
        spread: 30,
        minSize: .2,
        maxSize: .3,
        minLife: 1e3,
        maxLife: 2e3,
        minSpeed: 5,
        maxSpeed: 15
    },
    shotgun: {
        amount: 12,
        spread: 60,
        minSize: .3,
        maxSize: .5,
        minLife: 2e3,
        maxLife: 5e3,
        minSpeed: 5,
        maxSpeed: 10
    },
    pistol: {
        amount: 2,
        spread: 60,
        minSize: .2,
        maxSize: .3,
        minLife: 1e3,
        maxLife: 2e3,
        minSpeed: 5,
        maxSpeed: 15
    },
    rifle: {
        amount: 3,
        spread: 30,
        minSize: .3,
        maxSize: .5,
        minLife: 1e3,
        maxLife: 3e3,
        minSpeed: 7,
        maxSpeed: 14
    }
}
  , cn = {
    itemType: C.Gun,
    noDrop: !1,
    ammoSpawnAmount: 0,
    speedMultiplier: .92,
    singleReload: !1,
    infiniteAmmo: !1,
    jitterRadius: 0,
    consistentPatterning: !1,
    noQuickswitch: !1,
    bulletCount: 1,
    killstreak: !1,
    shootOnRelease: !1,
    summonAirdrop: !1,
    fists: {
        leftZIndex: 1,
        rightZIndex: 1
    },
    casingParticles: [],
    image: {
        angle: 0,
        zIndex: 2
    },
    isDual: !1,
    noMuzzleFlash: !1,
    ballistics: ea
}
  , ao = he.create()(i=>({
    [i]: ()=>cn
}))((i,{inheritFrom: t})=>[{
    idString: "ak47",
    name: "AK-47",
    ammoType: "762mm",
    ammoSpawnAmount: 90,
    capacity: 30,
    reloadTime: 2.5,
    fireDelay: 100,
    switchDelay: 400,
    recoilMultiplier: .75,
    recoilDuration: 150,
    fireMode: U.Auto,
    shotSpread: 2,
    moveSpread: 6,
    length: 7.5,
    fists: {
        left: e.create(120, -2),
        right: e.create(45, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(90, 2)
    },
    casingParticles: [{
        frame: "casing_762x39mm",
        position: e.create(4, .4)
    }],
    gasParticles: Q.automatic,
    ballistics: {
        damage: 14,
        obstacleMultiplier: 1.5,
        speed: .26,
        range: 160
    }
}, {
    idString: "arx160",
    name: "ARX-160",
    ammoType: "762mm",
    ammoSpawnAmount: 90,
    capacity: 30,
    reloadTime: 2.75,
    fireDelay: 75,
    switchDelay: 400,
    recoilMultiplier: .75,
    recoilDuration: 145,
    fireMode: U.Auto,
    shotSpread: 5,
    moveSpread: 10,
    length: 6.6,
    fists: {
        left: e.create(98, -2),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(70, 0)
    },
    casingParticles: [{
        frame: "casing_762x39mm",
        position: e.create(4, .4)
    }],
    gasParticles: Q.automatic,
    ballistics: {
        damage: 12.25,
        obstacleMultiplier: 1.5,
        speed: .26,
        range: 160
    }
}, {
    idString: "aug",
    name: "AUG",
    ammoType: "556mm",
    ammoSpawnAmount: 90,
    fireDelay: 70,
    switchDelay: 400,
    recoilMultiplier: .75,
    recoilDuration: 120,
    fireMode: U.Auto,
    shotSpread: 4,
    moveSpread: 11,
    length: 6.7,
    fists: {
        left: e.create(105, -2),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(75, -4)
    },
    casingParticles: [{
        position: e.create(2.5, .5)
    }],
    gasParticles: Q.automatic,
    capacity: 30,
    reloadTime: 2.25,
    ballistics: {
        damage: 10.5,
        obstacleMultiplier: 1.5,
        speed: .28,
        range: 160
    }
}, {
    idString: "acr",
    name: "ACR",
    ammoType: "556mm",
    ammoSpawnAmount: 90,
    fireDelay: 72.5,
    switchDelay: 400,
    recoilMultiplier: .75,
    recoilDuration: 130,
    fireMode: U.Auto,
    shotSpread: 2,
    moveSpread: 7,
    noMuzzleFlash: !0,
    length: 6.2,
    fists: {
        left: e.create(95, -2),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(75, -1)
    },
    casingParticles: [{
        position: e.create(4, .5)
    }],
    capacity: 30,
    reloadTime: 3,
    ballistics: {
        damage: 14.5,
        obstacleMultiplier: 1.5,
        speed: .3,
        range: 160,
        tracer: {
            opacity: .5
        }
    }
}, {
    idString: "m3k",
    name: "M3K",
    ammoType: "12g",
    ammoSpawnAmount: 18,
    capacity: 9,
    reloadTime: .55,
    fireDelay: 700,
    switchDelay: 700,
    recoilMultiplier: .5,
    recoilDuration: 500,
    fireMode: U.Single,
    shotSpread: 5,
    moveSpread: 7,
    jitterRadius: .5,
    bulletCount: 9,
    length: 7.7,
    fists: {
        left: e.create(105, -3),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(90, 5)
    },
    casingParticles: [{
        position: e.create(4, .6)
    }],
    gasParticles: Q.shotgun,
    singleReload: !0,
    ballistics: {
        damage: 9,
        obstacleMultiplier: 1,
        speed: .2,
        range: 80
    }
}, {
    idString: "model_37",
    name: "Model 37",
    ammoType: "12g",
    ammoSpawnAmount: 150,
    capacity: 25,
    reloadTime: .75,
    fireDelay: 900,
    switchDelay: 900,
    recoilMultiplier: .5,
    recoilDuration: 550,
    fireMode: U.Single,
    shotSpread: 11,
    moveSpread: 14,
    jitterRadius: 1.25,
    bulletCount: 100,
    length: 7.9,
    fists: {
        left: e.create(122, -3),
        right: e.create(45, 0),
        rightZIndex: 4,
        animationDuration: 10
    },
    image: {
        position: e.create(95, 0)
    },
    casingParticles: [{
        position: e.create(4.5, .6),
        ejectionDelay: 450,
        velocity: {
            y: {
                min: 2,
                max: 5,
                randomSign: !0
            }
        }
    }],
    gasParticles: Q.shotgun,
    singleReload: !0,
    ballistics: {
        damage: 10,
        obstacleMultiplier: 1,
        speed: .16,
        range: 48,
        tracer: {
            length: .7
        }
    }
}, {
    idString: "hp18",
    name: "HP-18",
    ammoType: "12g",
    ammoSpawnAmount: 105,
    capacity: 7,
    reloadTime: .125,
    singleReload: !0,
    fireDelay: 300,
    switchDelay: 400,
    recoilMultiplier: .6,
    recoilDuration: 600,
    fireMode: U.Single,
    bulletCount: 18,
    shotSpread: 24,
    moveSpread: 28,
    jitterRadius: 1.75,
    length: 8,
    fists: {
        left: e.create(120, -1),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(100, 0)
    },
    casingParticles: [{
        position: e.create(4, .6)
    }],
    gasParticles: Q.shotgun,
    ballistics: {
        damage: 4,
        obstacleMultiplier: .5,
        speed: .12,
        range: 40,
        tracer: {
            length: .5
        }
    }
}, {
    idString: "flues",
    name: "Flues",
    ammoType: "12g",
    ammoSpawnAmount: 10,
    capacity: 2,
    reloadTime: 2.6,
    fireDelay: 175,
    switchDelay: 250,
    recoilMultiplier: .8,
    recoilDuration: 100,
    fireMode: U.Single,
    bulletCount: 10,
    shotSpread: 11,
    moveSpread: 14,
    jitterRadius: 1.5,
    length: 6,
    fists: {
        left: e.create(95, -2),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(75, 0)
    },
    casingParticles: [{
        position: e.create(4, .6),
        count: 2,
        velocity: {
            y: {
                min: 8,
                max: 15,
                randomSign: !0
            }
        },
        on: "reload"
    }],
    gasParticles: Q.shotgun,
    ballistics: {
        damage: 10,
        obstacleMultiplier: 1,
        speed: .16,
        range: 48,
        tracer: {
            length: .5
        }
    }
}, {
    idString: "vepr12",
    name: "Vepr-12",
    ammoType: "12g",
    ammoSpawnAmount: 20,
    capacity: 5,
    reloadTime: 2.4,
    fireDelay: 450,
    switchDelay: 650,
    recoilMultiplier: .7,
    recoilDuration: 550,
    fireMode: U.Auto,
    shotSpread: 11,
    moveSpread: 14,
    jitterRadius: 1.25,
    length: 7.1,
    bulletCount: 10,
    fists: {
        left: e.create(98, -2),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(81, 2)
    },
    casingParticles: [{
        position: e.create(4.3, .6)
    }],
    gasParticles: Q.shotgun,
    ballistics: {
        damage: 10,
        obstacleMultiplier: 1,
        speed: .16,
        range: 48,
        tracer: {
            length: .5
        }
    }
}, {
    idString: "mosin",
    name: "Mosin-Nagant",
    ammoType: "762mm",
    ammoSpawnAmount: 20,
    capacity: 5,
    reloadTime: .85,
    singleReload: !0,
    fireDelay: 900,
    switchDelay: 900,
    recoilMultiplier: .45,
    recoilDuration: 750,
    fireMode: U.Single,
    shotSpread: 1,
    moveSpread: 2,
    length: 8.7,
    shootOnRelease: !0,
    fists: {
        left: e.create(115, -4),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(90, 6.5)
    },
    casingParticles: [{
        frame: "casing_762x54mmR",
        position: e.create(4, .6),
        ejectionDelay: 700
    }],
    gasParticles: Q.rifle,
    ballistics: {
        damage: 70,
        obstacleMultiplier: 1,
        speed: .33,
        range: 250,
        tracer: {
            width: 1.4,
            length: 2.5
        }
    }
}, {
    idString: "tango_51",
    name: "Tango 51",
    ammoType: "762mm",
    ammoSpawnAmount: 20,
    capacity: 5,
    reloadTime: 2.6,
    fireDelay: 900,
    switchDelay: 900,
    recoilMultiplier: .4,
    recoilDuration: 1e3,
    fireMode: U.Single,
    shotSpread: .3,
    moveSpread: .6,
    length: 8.9,
    shootOnRelease: !0,
    fists: {
        left: e.create(106, -1),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(90, 5)
    },
    casingParticles: [{
        position: e.create(4, .6),
        ejectionDelay: 450
    }],
    gasParticles: Q.rifle,
    ballistics: {
        damage: 79,
        obstacleMultiplier: 1,
        speed: .4,
        range: 280,
        tracer: {
            width: 1.6,
            length: 3.5
        }
    }
}, {
    idString: "cz600",
    name: "CZ-600",
    ammoType: "556mm",
    ammoSpawnAmount: 20,
    capacity: 5,
    reloadTime: 2.2,
    fireDelay: 600,
    switchDelay: 600,
    recoilMultiplier: .6,
    recoilDuration: 750,
    fireMode: U.Single,
    shotSpread: .75,
    moveSpread: 1.25,
    length: 8.3,
    shootOnRelease: !0,
    fists: {
        left: e.create(115, -4),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(95, 3.5)
    },
    casingParticles: [{
        position: e.create(5, .4),
        ejectionDelay: 250
    }],
    gasParticles: Q.rifle,
    ballistics: {
        damage: 55,
        obstacleMultiplier: 1,
        speed: .3,
        range: 250,
        tracer: {
            width: 1.3,
            length: 2.4
        }
    }
}, {
    idString: "barrett",
    name: "Barrett M95",
    ammoType: "127mm",
    ammoSpawnAmount: 20,
    capacity: 5,
    reloadTime: 3.4,
    fireDelay: 1400,
    switchDelay: 900,
    recoilMultiplier: .3,
    recoilDuration: 1500,
    fireMode: U.Single,
    shotSpread: .5,
    moveSpread: 4,
    length: 9.2,
    shootOnRelease: !0,
    fists: {
        left: e.create(115, -4),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(90, 4)
    },
    casingParticles: [{
        position: e.create(2, .6),
        ejectionDelay: 700
    }],
    gasParticles: Q.rifle,
    ballistics: {
        damage: 129,
        obstacleMultiplier: 1,
        speed: .45,
        range: 300,
        tracer: {
            width: 2.5,
            length: 4
        }
    }
}, {
    idString: "m1895",
    name: "M1895",
    ammoType: "762mm",
    ammoSpawnAmount: 28,
    fireDelay: 375,
    switchDelay: 250,
    recoilMultiplier: .75,
    recoilDuration: 135,
    fireMode: U.Single,
    shotSpread: 2,
    moveSpread: 5,
    length: 5.1,
    fists: {
        left: e.create(40, 0),
        right: e.create(40, 0),
        leftZIndex: 4,
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(70, 0)
    },
    casingParticles: [{
        frame: "casing_762x38mmR",
        position: e.create(3.5, .5),
        count: 7,
        velocity: {
            x: {
                min: -8,
                max: -2
            },
            y: {
                min: 2,
                max: 9,
                randomSign: !0
            }
        },
        on: "reload"
    }],
    gasParticles: Q.pistol,
    capacity: 7,
    reloadTime: 2.1,
    ballistics: {
        damage: 24.5,
        obstacleMultiplier: 1.5,
        speed: .26,
        range: 160
    },
    dual: {
        leftRightOffset: 1.3,
        fireDelay: 187.5,
        shotSpread: 3,
        moveSpread: 6,
        capacity: 14,
        reloadTime: 4
    }
}, {
    idString: "g19",
    name: "G19",
    ammoType: "9mm",
    ammoSpawnAmount: 60,
    fireDelay: 110,
    switchDelay: 250,
    recoilMultiplier: .8,
    recoilDuration: 90,
    fireMode: U.Single,
    shotSpread: 7,
    moveSpread: 14,
    length: 4.7,
    fists: {
        left: e.create(40, 0),
        right: e.create(40, 0),
        leftZIndex: 4,
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(65, 0)
    },
    casingParticles: [{
        position: e.create(3.5, .5),
        velocity: {
            y: {
                min: 2,
                max: 18
            }
        }
    }],
    gasParticles: Q.pistol,
    capacity: 15,
    reloadTime: 1.5,
    ballistics: {
        damage: 11.75,
        obstacleMultiplier: 1,
        speed: .14,
        range: 120
    },
    dual: {
        leftRightOffset: 1.3,
        fireDelay: 75,
        shotSpread: 10,
        moveSpread: 18,
        capacity: 30,
        reloadTime: 2.9
    }
}, {
    idString: "radio",
    name: "Radio",
    summonAirdrop: !0,
    ammoType: "curadell",
    ammoSpawnAmount: 1,
    fireDelay: 500,
    switchDelay: 250,
    recoilMultiplier: 1,
    recoilDuration: 0,
    fireMode: U.Single,
    shotSpread: 7,
    moveSpread: 14,
    bulletOffset: 1.5,
    length: 4.7,
    fists: {
        left: e.create(38, -35),
        right: e.create(38, 35),
        leftZIndex: 4,
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(65, 35)
    },
    casingParticles: [{
        position: e.create(3.5, 1),
        ejectionDelay: 500
    }],
    noMuzzleFlash: !0,
    capacity: 1,
    reloadTime: 1.4,
    ballistics: {
        tracer: {
            image: "radio_wave",
            opacity: .8,
            particle: !0,
            zIndex: P.BuildingsCeiling
        },
        damage: 0,
        obstacleMultiplier: 1,
        speed: .01,
        range: 50,
        noCollision: !0
    }
}, {
    idString: "cz75a",
    name: "CZ-75A",
    ammoType: "9mm",
    ammoSpawnAmount: 64,
    fireDelay: 60,
    switchDelay: 250,
    recoilMultiplier: .8,
    recoilDuration: 90,
    fireMode: U.Auto,
    shotSpread: 12,
    moveSpread: 19,
    length: 5.1,
    fists: {
        left: e.create(40, 0),
        right: e.create(40, 0),
        leftZIndex: 4,
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(70, -1)
    },
    casingParticles: [{
        position: e.create(3.5, .5),
        velocity: {
            y: {
                min: 2,
                max: 18
            }
        }
    }],
    gasParticles: Q.pistol,
    capacity: 16,
    reloadTime: 1.9,
    ballistics: {
        damage: 9,
        obstacleMultiplier: 1,
        speed: .16,
        range: 85
    },
    dual: {
        leftRightOffset: 1.3,
        fireDelay: 30,
        shotSpread: 17,
        moveSpread: 35,
        capacity: 32,
        reloadTime: 3.7
    }
}, {
    idString: "saf_200",
    name: "SAF-200",
    ammoType: "9mm",
    ammoSpawnAmount: 90,
    capacity: 30,
    reloadTime: 1.8,
    fireDelay: 75,
    burstProperties: {
        shotsPerBurst: 3,
        burstCooldown: 325
    },
    switchDelay: 300,
    recoilMultiplier: .75,
    recoilDuration: 300,
    fireMode: U.Burst,
    shotSpread: 3,
    moveSpread: 4,
    length: 5.9,
    fists: {
        left: e.create(95, -3),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(71, 0)
    },
    casingParticles: [{
        position: e.create(4, .5)
    }],
    gasParticles: Q.automatic,
    ballistics: {
        damage: 15.5,
        obstacleMultiplier: 1,
        speed: .25,
        range: 130
    }
}, {
    idString: "m16a4",
    name: "M16A4",
    ammoType: "556mm",
    ammoSpawnAmount: 90,
    capacity: 30,
    reloadTime: 2.2,
    fireDelay: 75,
    burstProperties: {
        shotsPerBurst: 3,
        burstCooldown: 325
    },
    switchDelay: 400,
    recoilMultiplier: .75,
    recoilDuration: 350,
    fireMode: U.Burst,
    shotSpread: 1,
    moveSpread: 2.5,
    length: 8.6,
    fists: {
        left: e.create(120, -3),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(100, 0)
    },
    casingParticles: [{
        position: e.create(4, .5)
    }],
    gasParticles: Q.automatic,
    ballistics: {
        damage: 21,
        obstacleMultiplier: 1.5,
        speed: .3,
        range: 180
    }
}, {
    idString: "micro_uzi",
    name: "Micro Uzi",
    ammoType: "9mm",
    ammoSpawnAmount: 96,
    capacity: 32,
    reloadTime: 1.75,
    fireDelay: 40,
    switchDelay: 300,
    recoilMultiplier: .75,
    recoilDuration: 60,
    fireMode: U.Auto,
    shotSpread: 9,
    moveSpread: 19,
    length: 5.8,
    fists: {
        left: e.create(85, -6),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    casingParticles: [{
        position: e.create(3.5, .4)
    }],
    gasParticles: Q.automatic,
    image: {
        position: e.create(80, 0)
    },
    ballistics: {
        damage: 7.75,
        obstacleMultiplier: 1,
        speed: .16,
        range: 85
    }
}, {
    idString: "vector",
    name: "Vector",
    ammoType: "9mm",
    ammoSpawnAmount: 99,
    capacity: 33,
    reloadTime: 1.7,
    fireDelay: 35,
    switchDelay: 300,
    recoilMultiplier: .75,
    recoilDuration: 60,
    fireMode: U.Auto,
    shotSpread: 2,
    moveSpread: 7,
    length: 7.1,
    fists: {
        left: e.create(85, -6),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    casingParticles: [{
        position: e.create(4.7, .3)
    }],
    gasParticles: Q.automatic,
    image: {
        position: e.create(80, 0)
    },
    ballistics: {
        damage: 6.75,
        obstacleMultiplier: 1,
        speed: .25,
        range: 85
    }
}, {
    idString: "pp19",
    name: "PP-19",
    ammoType: "9mm",
    ammoSpawnAmount: 90,
    capacity: 30,
    reloadTime: 2.3,
    fireDelay: 50,
    switchDelay: 300,
    recoilMultiplier: .75,
    recoilDuration: 150,
    fireMode: U.Auto,
    shotSpread: 3,
    moveSpread: 6.75,
    length: 6.9,
    noMuzzleFlash: !0,
    fists: {
        left: e.create(88, -5),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    casingParticles: [{
        position: e.create(3.5, .5)
    }],
    image: {
        position: e.create(80, 0)
    },
    ballistics: {
        damage: 10.5,
        obstacleMultiplier: 1,
        speed: .25,
        range: 160,
        tracer: {
            opacity: .5
        }
    }
}, {
    idString: "mp40",
    name: "MP40",
    ammoType: "9mm",
    ammoSpawnAmount: 96,
    capacity: 32,
    reloadTime: 2.1,
    fireDelay: 90,
    switchDelay: 300,
    recoilMultiplier: .75,
    recoilDuration: 150,
    fireMode: U.Auto,
    shotSpread: 2,
    moveSpread: 4,
    length: 6.55,
    fists: {
        left: e.create(103, -2),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(76, -3)
    },
    casingParticles: [{
        position: e.create(4, .6)
    }],
    gasParticles: Q.automatic,
    ballistics: {
        damage: 11,
        obstacleMultiplier: 1,
        speed: .25,
        range: 130
    }
}, {
    idString: "mcx_spear",
    name: "MCX Spear",
    ammoType: "762mm",
    ammoSpawnAmount: 80,
    capacity: 20,
    reloadTime: 2.75,
    fireDelay: 87.5,
    switchDelay: 400,
    recoilMultiplier: .75,
    recoilDuration: 130,
    fireMode: U.Auto,
    shotSpread: 2,
    moveSpread: 4,
    length: 7.7,
    fists: {
        left: e.create(105, -6),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(80, 0)
    },
    casingParticles: [{
        position: e.create(5, .5)
    }],
    gasParticles: Q.automatic,
    ballistics: {
        damage: 16,
        obstacleMultiplier: 1.5,
        speed: .3,
        range: 180,
        tracer: {
            length: 1.4
        }
    }
}, {
    idString: "lewis_gun",
    name: "Lewis Gun",
    ammoType: "762mm",
    ammoSpawnAmount: 94,
    capacity: 47,
    reloadTime: 3.4,
    fireDelay: 120,
    switchDelay: 400,
    speedMultiplier: .8,
    recoilMultiplier: .65,
    recoilDuration: 200,
    fireMode: U.Auto,
    shotSpread: 2,
    moveSpread: 9,
    length: 11.8,
    fists: {
        left: e.create(140, -10),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(120, 0)
    },
    casingParticles: [{
        frame: "casing_30-06",
        position: e.create(4.7, 1.6)
    }],
    gasParticles: Q.automatic,
    ballistics: {
        damage: 16,
        obstacleMultiplier: 2.5,
        speed: .3,
        range: 180,
        tracer: {
            width: 1.1,
            length: 1.4
        }
    }
}, {
    idString: "stoner_63",
    name: "Stoner 63",
    ammoType: "556mm",
    ammoSpawnAmount: 150,
    capacity: 75,
    reloadTime: 3.8,
    fireDelay: 90,
    switchDelay: 400,
    speedMultiplier: .9,
    recoilMultiplier: .7,
    recoilDuration: 175,
    fireMode: U.Auto,
    shotSpread: 3,
    moveSpread: 4.5,
    length: 7.7,
    fists: {
        left: e.create(105, -3),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(90, 0)
    },
    casingParticles: [{
        position: e.create(4, -.6),
        velocity: {
            y: {
                min: -15,
                max: -10
            }
        }
    }, {
        position: e.create(4.2, -.6),
        frame: "m13_link",
        velocity: {
            x: {
                min: -6,
                max: 8
            },
            y: {
                min: -25,
                max: -10
            }
        }
    }],
    gasParticles: Q.automatic,
    ballistics: {
        damage: 14.25,
        obstacleMultiplier: 2,
        speed: .28,
        range: 180,
        tracer: {
            width: 1.1,
            length: 1.4
        }
    }
}, {
    idString: "mg5",
    name: "MG5",
    ammoType: "762mm",
    ammoSpawnAmount: 240,
    capacity: 120,
    reloadTime: 5.2,
    fireDelay: 95,
    switchDelay: 400,
    speedMultiplier: .8,
    recoilMultiplier: .65,
    recoilDuration: 200,
    fireMode: U.Auto,
    shotSpread: 2,
    moveSpread: 4.5,
    length: 8.4,
    fists: {
        left: e.create(105, -3),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(90, 0)
    },
    casingParticles: [{
        position: e.create(4, .6)
    }, {
        position: e.create(4.2, .6),
        frame: "m13_link",
        velocity: {
            x: {
                min: -6,
                max: 8
            },
            y: {
                min: 10,
                max: 25
            }
        }
    }],
    gasParticles: Q.automatic,
    ballistics: {
        damage: 16.5,
        obstacleMultiplier: 2,
        speed: .26,
        range: 180,
        tracer: {
            width: 1.1,
            length: 1.4
        }
    }
}, {
    idString: "negev",
    name: "Negev",
    ammoType: "556mm",
    ammoSpawnAmount: 200,
    capacity: 200,
    reloadTime: 5.8,
    fireDelay: 70,
    switchDelay: 400,
    speedMultiplier: .8,
    recoilMultiplier: .65,
    recoilDuration: 200,
    fireMode: U.Auto,
    shotSpread: 3,
    moveSpread: 8,
    length: 8.1,
    fists: {
        left: e.create(121, -18),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(90, -2)
    },
    casingParticles: [{
        position: e.create(4.2, .6)
    }, {
        position: e.create(4.4, .6),
        frame: "m13_link",
        velocity: {
            x: {
                min: -6,
                max: 8
            },
            y: {
                min: 10,
                max: 25
            }
        }
    }],
    gasParticles: Q.automatic,
    ballistics: {
        damage: 12.5,
        obstacleMultiplier: 2,
        speed: .28,
        range: 180,
        tracer: {
            width: 1.1,
            length: 1.4
        }
    }
}, {
    idString: "mg36",
    name: "MG36",
    ammoType: "556mm",
    ammoSpawnAmount: 120,
    capacity: 40,
    reloadTime: 2.75,
    fireDelay: 75,
    switchDelay: 400,
    recoilMultiplier: .75,
    recoilDuration: 140,
    fireMode: U.Auto,
    shotSpread: 3.5,
    moveSpread: 8,
    length: 7.5,
    fists: {
        left: e.create(95, -4),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(67, 0)
    },
    casingParticles: [{
        position: e.create(4, .6)
    }],
    gasParticles: Q.automatic,
    ballistics: {
        damage: 11,
        obstacleMultiplier: 2,
        speed: .28,
        range: 160
    }
}, {
    idString: "m1_garand",
    name: "M1 Garand",
    ammoType: "762mm",
    ammoSpawnAmount: 40,
    capacity: 8,
    reloadTime: 2.1,
    fireDelay: 200,
    switchDelay: 400,
    recoilMultiplier: .75,
    recoilDuration: 200,
    fireMode: U.Single,
    shotSpread: 1,
    moveSpread: 3.5,
    length: 8.1,
    fists: {
        left: e.create(110, -3),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(87, 1)
    },
    casingParticles: [{
        frame: "casing_30-06",
        position: e.create(4, .6),
        velocity: {
            y: {
                min: 4,
                max: 15
            }
        }
    }, {
        frame: "enbloc",
        position: e.create(4, .6),
        velocity: {
            x: {
                min: 1,
                max: 3,
                randomSign: !0
            },
            y: {
                min: 2,
                max: 5,
                randomSign: !0
            }
        },
        on: "reload"
    }],
    gasParticles: Q.rifle,
    ballistics: {
        damage: 39,
        obstacleMultiplier: 1.5,
        speed: .3,
        range: 230,
        tracer: {
            length: 2
        },
        lastShotFX: !0
    }
}, {
    idString: "vss",
    name: "VSS",
    ammoType: "9mm",
    ammoSpawnAmount: 60,
    capacity: 20,
    reloadTime: 2.15,
    fireDelay: 140,
    switchDelay: 400,
    recoilMultiplier: .7,
    recoilDuration: 140,
    fireMode: U.Single,
    shotSpread: 2,
    moveSpread: 3.5,
    length: 6.9,
    fists: {
        left: e.create(110, -2),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(80, 0)
    },
    casingParticles: [{
        frame: "casing_9x39mm",
        position: e.create(4, .5)
    }],
    noMuzzleFlash: !0,
    ballistics: {
        damage: 22,
        obstacleMultiplier: 1.5,
        speed: .22,
        range: 160,
        tracer: {
            opacity: .5,
            length: 1.5
        }
    }
}, {
    idString: "sr25",
    name: "SR-25",
    ammoType: "762mm",
    ammoSpawnAmount: 80,
    capacity: 20,
    reloadTime: 2.5,
    fireDelay: 190,
    switchDelay: 400,
    recoilMultiplier: .7,
    recoilDuration: 190,
    fireMode: U.Single,
    shotSpread: 1,
    moveSpread: 3.5,
    length: 7.2,
    fists: {
        left: e.create(110, 0),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(80, 0)
    },
    casingParticles: [{
        position: e.create(4.2, .4)
    }],
    gasParticles: Q.rifle,
    ballistics: {
        damage: 28.5,
        obstacleMultiplier: 1.5,
        speed: .3,
        range: 230,
        tracer: {
            length: 1.5
        }
    }
}, {
    idString: "mini14",
    name: "Mini-14",
    ammoType: "556mm",
    ammoSpawnAmount: 80,
    capacity: 20,
    reloadTime: 2.4,
    fireDelay: 155,
    switchDelay: 400,
    recoilMultiplier: .8,
    recoilDuration: 155,
    fireMode: U.Single,
    shotSpread: 2,
    moveSpread: 5,
    length: 7.4,
    fists: {
        left: e.create(96, -2),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(85, 0)
    },
    casingParticles: [{
        position: e.create(5, .5),
        velocity: {
            y: {
                min: 4,
                max: 15
            }
        }
    }],
    gasParticles: Q.rifle,
    ballistics: {
        damage: 25.5,
        obstacleMultiplier: 1.5,
        speed: .3,
        range: 230,
        tracer: {
            length: 1.5
        }
    }
}, {
    idString: "model_89",
    name: "Model 89",
    ammoType: "127mm",
    ammoSpawnAmount: 28,
    capacity: 7,
    reloadTime: .6,
    singleReload: !0,
    fireDelay: 375,
    switchDelay: 400,
    recoilMultiplier: .7,
    recoilDuration: 300,
    fireMode: U.Single,
    shotSpread: 1,
    moveSpread: 4,
    length: 7.6,
    fists: {
        left: e.create(106, -2),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(90, 0)
    },
    casingParticles: [{
        frame: "casing_500sw",
        position: e.create(5, .5),
        ejectionDelay: 175
    }],
    gasParticles: Q.rifle,
    ballistics: {
        damage: 62.5,
        obstacleMultiplier: 1.5,
        speed: .3,
        range: 250,
        tracer: {
            width: 1.8,
            length: 1.5
        }
    }
}, {
    idString: "usas12",
    name: "USAS-12",
    ammoType: "12g",
    ammoSpawnAmount: 30,
    capacity: 10,
    reloadTime: 3,
    fireDelay: 525,
    switchDelay: 400,
    recoilMultiplier: .7,
    recoilDuration: 525,
    fireMode: U.Auto,
    shotSpread: 5,
    moveSpread: 14,
    length: 7.7,
    fists: {
        left: e.create(115, -1),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(90, -3.5)
    },
    casingParticles: [{
        frame: "casing_12ga_he",
        position: e.create(4, .6)
    }],
    ballistics: {
        damage: 8,
        obstacleMultiplier: 1,
        speed: .16,
        range: 55,
        onHitExplosion: "usas_explosion",
        allowRangeOverride: !0,
        tracer: {
            length: .5,
            color: 16711680
        }
    }
}, {
    idString: "firework_launcher",
    name: "Firework Launcher",
    ammoType: "firework_rocket",
    ammoSpawnAmount: 9,
    capacity: 3,
    reloadTime: 1.25,
    singleReload: !0,
    shootOnRelease: !0,
    fireDelay: 1250,
    switchDelay: 900,
    noMuzzleFlash: !0,
    speedMultiplier: .65,
    recoilMultiplier: .5,
    recoilDuration: 925,
    fireMode: U.Single,
    bulletOffset: 2.7,
    shotSpread: 5,
    moveSpread: 14,
    length: 5.5,
    fists: {
        left: e.create(60, 40),
        right: e.create(20, 55),
        animationDuration: 100
    },
    image: {
        position: e.create(30, 50.5),
        zIndex: 4
    },
    casingParticles: [{
        position: e.create(4, .6)
    }],
    gasParticles: {
        spread: 360,
        amount: 50,
        minLife: 5e3,
        maxLife: 1e4,
        minSpeed: 2,
        maxSpeed: 5,
        minSize: .3,
        maxSize: .5
    },
    ballistics: {
        damage: 20,
        obstacleMultiplier: 1,
        speed: .15,
        range: 120,
        onHitExplosion: "firework_launcher_explosion",
        explodeOnImpact: !0,
        tracer: {
            image: "firework_rocket_trail",
            length: 1
        },
        trail: {
            frame: "small_gas",
            interval: 17,
            amount: 5,
            tint: -1,
            alpha: {
                min: .4,
                max: .8
            },
            scale: {
                min: .1,
                max: .2
            },
            spreadSpeed: {
                min: 1,
                max: 3
            },
            lifetime: {
                min: 2500,
                max: 5e3
            }
        }
    }
}, {
    idString: "s_g17",
    name: "G17 (scoped)",
    ammoType: "bb",
    fireDelay: 35,
    switchDelay: 250,
    speedMultiplier: 1.5,
    recoilMultiplier: .99,
    recoilDuration: 10,
    fireMode: U.Auto,
    shotSpread: .5,
    moveSpread: 5,
    length: 6.2,
    fists: {
        left: e.create(40, 0),
        right: e.create(40, 0),
        leftZIndex: 4,
        rightZIndex: 4,
        animationDuration: 80
    },
    noMuzzleFlash: !0,
    image: {
        position: e.create(65, 0)
    },
    capacity: 100,
    reloadTime: 1.5,
    ballistics: {
        damage: 2,
        obstacleMultiplier: .5,
        speed: .1,
        range: 70,
        tracer: {
            width: .7,
            opacity: .85,
            color: 16744448
        }
    }
}, {
    idString: "deathray",
    name: "Death Ray",
    ammoType: "power_cell",
    capacity: 1,
    reloadTime: 1.4,
    fireDelay: 40,
    switchDelay: 500,
    recoilMultiplier: .8,
    recoilDuration: 100,
    fireMode: U.Auto,
    shotSpread: .15,
    moveSpread: .1,
    killstreak: !0,
    length: 8.7,
    fists: {
        left: e.create(135, -6),
        right: e.create(75, 0),
        animationDuration: 100
    },
    image: {
        position: e.create(90, 0)
    },
    noMuzzleFlash: !0,
    casingParticles: [{
        position: e.create(4.5, .6),
        on: "reload"
    }],
    ballistics: {
        damage: 800,
        obstacleMultiplier: 2,
        speed: 4,
        range: 800,
        penetration: {
            players: !0,
            obstacles: !0
        },
        tracer: {
            image: "power_cell_trail",
            length: 10
        }
    }
}, {
    idString: "arena_closer",
    name: "Destroyer Of Worlds",
    ammoType: "127mm",
    ammoSpawnAmount: 255,
    capacity: 255,
    reloadTime: .4,
    fireDelay: 50,
    switchDelay: 250,
    speedMultiplier: 1,
    recoilMultiplier: .95,
    recoilDuration: 100,
    fireMode: U.Auto,
    shotSpread: .5,
    moveSpread: 4,
    length: 18,
    noMuzzleFlash: !0,
    fists: {
        left: e.create(145, -4),
        right: e.create(40, 0),
        rightZIndex: 4,
        animationDuration: 100
    },
    image: {
        position: e.create(150, 0)
    },
    casingParticles: [{
        position: e.create(5, .6),
        velocity: {
            y: {
                min: 15,
                max: 25
            }
        }
    }, {
        position: e.create(5.2, .6),
        frame: "50_link",
        velocity: {
            x: {
                min: -6,
                max: 8
            },
            y: {
                min: 10,
                max: 25
            }
        }
    }],
    ballistics: {
        damage: 300,
        obstacleMultiplier: 1,
        speed: .45,
        range: 500,
        tracer: {
            width: 2.5,
            length: 4
        }
    }
}, {
    [t]: "model_37",
    idString: "revitalizer",
    name: "Revitalizer",
    killstreak: !0,
    consistentPatterning: !0,
    jitterRadius: 0,
    image: {
        position: e.create(75, 0)
    },
    fists: {
        left: e.create(112, -3)
    },
    wearerAttributes: {
        passive: {
            maxHealth: .51,
            maxAdrenaline: .8
        },
        on: {
            kill: [{
                limit: 5,
                maxHealth: 1.488,
                maxAdrenaline: 1.201,
                minAdrenaline: 20,
                speedBoost: 1.02
            }, {
                healthRestored: 230,
                adrenalineRestored: 30
            }],
            damageDealt: [{
                healthRestored: 2,
                adrenalineRestored: 1.5
            }]
        }
    }
}].map(a=>{
    if (a.dual === void 0)
        return [a];
    const o = tn({}, a, a.dual, {
        idString: `dual_${a.idString}`,
        name: `Dual ${a.name}`,
        isDual: !0,
        singleVariant: a.idString
    });
    return delete o.dual,
    delete o.fists,
    delete o.image,
    delete o.casingParticles,
    delete a.dual,
    a.dualVariant = o.idString,
    [a, o]
}
).flat())
  , ai = he.create()(i=>({
    [i]: ()=>({
        itemType: C.Backpack,
        noDrop: !1,
        defaultTint: 16777215
    }),
    backpack_factory: t=>({
        idString: `${t.toLowerCase()}_pack`,
        name: `${t} Pack`
    })
}))(i=>[{
    idString: "bag",
    name: "Bag",
    level: 0,
    maxCapacity: {
        gauze: 5,
        medikit: 1,
        cola: 2,
        tablets: 1,
        "12g": 15,
        "556mm": 90,
        "762mm": 90,
        "9mm": 120,
        "127mm": 10,
        power_cell: 1 / 0,
        curadell: 1,
        firework_rocket: 10,
        frag_grenade: 3,
        smoke_grenade: 3,
        confetti_grenade: 5
    },
    noDrop: !0
}, i("backpack_factory", {
    level: 1,
    maxCapacity: {
        gauze: 10,
        medikit: 2,
        cola: 5,
        tablets: 2,
        "12g": 30,
        "556mm": 180,
        "762mm": 180,
        "9mm": 240,
        "127mm": 10,
        power_cell: 1 / 0,
        curadell: 2,
        firework_rocket: 20,
        frag_grenade: 6,
        smoke_grenade: 6,
        confetti_grenade: 9
    },
    defaultTint: 15658734
}, "Basic"), i("backpack_factory", {
    level: 2,
    maxCapacity: {
        gauze: 15,
        medikit: 3,
        cola: 10,
        tablets: 3,
        "12g": 60,
        "556mm": 240,
        "762mm": 240,
        "9mm": 330,
        "127mm": 40,
        power_cell: 1 / 0,
        curadell: 3,
        firework_rocket: 30,
        frag_grenade: 9,
        smoke_grenade: 9,
        confetti_grenade: 12
    },
    defaultTint: 6518091
}, "Regular"), i("backpack_factory", {
    level: 3,
    maxCapacity: {
        gauze: 30,
        medikit: 4,
        cola: 15,
        tablets: 4,
        "12g": 90,
        "556mm": 300,
        "762mm": 300,
        "9mm": 420,
        "127mm": 80,
        power_cell: 1 / 0,
        curadell: 4,
        firework_rocket: 40,
        frag_grenade: 12,
        smoke_grenade: 12,
        confetti_grenade: 16
    },
    defaultTint: 4144959
}, "Tactical")])
  , oo = Object.freeze({
    left: e.create(38, -35),
    right: e.create(38, 35)
})
  , no = he.create()(i=>({
    [i]: ()=>({
        itemType: C.Melee,
        noDrop: !1,
        killstreak: !1,
        speedMultiplier: 1,
        swingSound: "swing",
        maxTargets: 1,
        image: {
            zIndex: 1
        },
        fireMode: U.Single
    })
}))(()=>[{
    idString: "fists",
    name: "Fists",
    damage: 20,
    obstacleMultiplier: 1,
    radius: 1.5,
    offset: e.create(2.5, 0),
    cooldown: 250,
    noDrop: !0,
    fists: {
        animationDuration: 125,
        randomFist: !0,
        ...oo,
        useLeft: e.create(75, -10),
        useRight: e.create(75, 10)
    },
    image: void 0
}, {
    idString: "baseball_bat",
    name: "Baseball Bat",
    swingSound: "heavy_swing",
    damage: 34,
    obstacleMultiplier: 1.5,
    radius: 3.8,
    offset: e.create(3.8, 2.2),
    cooldown: 340,
    fists: {
        animationDuration: 150,
        left: e.create(55, -15),
        right: e.create(45, 0),
        useLeft: e.create(28, -15),
        useRight: e.create(50, -15)
    },
    image: {
        position: e.create(35, 45),
        usePosition: e.create(115, -14),
        angle: 155,
        useAngle: 45,
        lootScale: .55
    }
}, {
    idString: "hatchet",
    name: "Hatchet",
    damage: 25,
    obstacleMultiplier: 2.5,
    piercingMultiplier: 1.5,
    canPierceMaterials: ["cardboard"],
    radius: 2,
    swingSound: "heavy_swing",
    offset: e.create(5.4, -.5),
    cooldown: 350,
    fists: {
        animationDuration: 150,
        left: e.create(40, -25),
        right: e.create(40, 15),
        useLeft: e.create(35, -35),
        useRight: e.create(75, -20)
    },
    image: {
        position: e.create(42, 20),
        usePosition: e.create(80, -25),
        angle: 135,
        useAngle: 65,
        lootScale: .6
    }
}, {
    idString: "crowbar",
    name: "Crowbar",
    swingSound: "heavy_swing",
    damage: 40,
    obstacleMultiplier: 2.2,
    piercingMultiplier: 2,
    canPierceMaterials: ["cardboard"],
    radius: 2.55,
    offset: e.create(6.5, 2),
    cooldown: 560,
    fists: {
        animationDuration: 200,
        left: e.create(38, -35),
        right: e.create(38, 35),
        useLeft: e.create(38, -35),
        useRight: e.create(100, 35)
    },
    image: {
        position: e.create(31, 41),
        usePosition: e.create(110, 33),
        angle: 190,
        useAngle: 40,
        lootScale: .65
    }
}, {
    idString: "kbar",
    name: "K-bar",
    swingSound: "soft_swing",
    damage: 25,
    obstacleMultiplier: 1.25,
    radius: 2.7,
    offset: e.create(3.1, .9),
    cooldown: 225,
    fists: {
        animationDuration: 100,
        left: e.create(38, -35),
        right: e.create(38, 35),
        useLeft: e.create(38, -35),
        useRight: e.create(70, 20)
    },
    image: {
        position: e.create(62, 42),
        usePosition: e.create(90, 8),
        angle: 60,
        useAngle: 5,
        lootScale: .8
    }
}, {
    idString: "sickle",
    name: "Sickle",
    damage: 33,
    swingSound: "soft_swing",
    obstacleMultiplier: 1.15,
    radius: 2.7,
    offset: e.create(4, 0),
    cooldown: 400,
    fists: {
        animationDuration: 200,
        left: e.create(38, -35),
        right: e.create(45, 35),
        useLeft: e.create(38, -35),
        useRight: e.create(70, 20)
    },
    image: {
        position: e.create(61, 67),
        usePosition: e.create(99, -5),
        angle: 120,
        useAngle: 5,
        lootScale: .78
    }
}, {
    idString: "maul",
    name: "Maul",
    damage: 54,
    swingSound: "heavy_swing",
    obstacleMultiplier: 2,
    piercingMultiplier: 1,
    canPierceMaterials: ["cardboard", "stone"],
    radius: 2.7,
    offset: e.create(5.4, -.5),
    cooldown: 450,
    fists: {
        animationDuration: 150,
        left: e.create(40, -25),
        right: e.create(40, 15),
        useLeft: e.create(35, -35),
        useRight: e.create(75, -20)
    },
    image: {
        position: e.create(40, 20),
        usePosition: e.create(80, -25),
        angle: 135,
        useAngle: 65,
        lootScale: .6
    }
}, {
    idString: "steelfang",
    name: "Steelfang",
    damage: 40,
    noDrop: !0,
    obstacleMultiplier: 1,
    piercingMultiplier: 1,
    canPierceMaterials: ["cardboard", "stone"],
    radius: 2.7,
    offset: e.create(3.1, .9),
    cooldown: 200,
    fists: {
        animationDuration: 150,
        left: e.create(38, -35),
        right: e.create(30, 40),
        useLeft: e.create(35, -40),
        useRight: e.create(75, -20)
    },
    image: {
        position: e.create(55, 55),
        usePosition: e.create(80, -25),
        angle: -120,
        useAngle: -800,
        lootScale: .9
    },
    wearerAttributes: {
        passive: {
            speedBoost: 1.1
        }
    }
}, {
    idString: "gas_can",
    name: "Gas Can",
    damage: 22,
    obstacleMultiplier: 1,
    radius: 1.75,
    offset: e.create(3.1, .5),
    cooldown: 250,
    image: {
        position: e.create(54, 35),
        usePosition: e.create(91, 10),
        useAngle: 0,
        lootScale: .8,
        separateWorldImage: !0
    },
    fists: {
        animationDuration: 125,
        left: e.create(38, -35),
        right: e.create(38, 35),
        useLeft: e.create(38, -35),
        useRight: e.create(75, 10)
    }
}, {
    idString: "heap_sword",
    name: "HE-AP sword",
    damage: 75,
    obstacleMultiplier: 2.5,
    piercingMultiplier: 1,
    canPierceMaterials: ["cardboard", "stone"],
    killstreak: !0,
    radius: 4,
    offset: e.create(5, 0),
    cooldown: 300,
    maxTargets: 1 / 0,
    fists: {
        animationDuration: 150,
        left: e.create(38, -35),
        right: e.create(38, 35),
        useLeft: e.create(38, -35),
        useRight: e.create(120, 20)
    },
    image: {
        position: e.create(102, 35),
        usePosition: e.create(140, -30),
        angle: 50,
        useAngle: -20,
        lootScale: .6
    }
}, {
    idString: "ice_pick",
    name: "Ice Pick",
    swingSound: "heavy_swing",
    damage: 35,
    obstacleMultiplier: 1.9,
    piercingMultiplier: 1,
    radius: 2.8,
    offset: e.create(5.4, -.5),
    cooldown: 420,
    fists: {
        animationDuration: 150,
        left: e.create(40, -30),
        right: e.create(40, 10),
        useLeft: e.create(33, -36),
        useRight: e.create(68, -20)
    },
    image: {
        position: e.create(47, 25),
        usePosition: e.create(85, -25),
        angle: 130,
        useAngle: 65,
        lootScale: .6
    }
}, {
    idString: "seax",
    name: "Seax",
    damage: 45,
    swingSound: "heavy_swing",
    obstacleMultiplier: 1.5,
    radius: 2.7,
    offset: e.create(5.4, -.5),
    cooldown: 410,
    fists: {
        animationDuration: 150,
        left: e.create(38, -35),
        right: e.create(38, 35),
        useLeft: e.create(38, -35),
        useRight: e.create(95, 20)
    },
    image: {
        position: e.create(80, 25),
        usePosition: e.create(123, -13),
        angle: 35,
        useAngle: 0,
        lootScale: .7
    }
}])
  , St = he.create()(i=>({
    [i]: ()=>({
        itemType: C.Skin,
        noDrop: !1,
        hideFromLoadout: !1,
        grassTint: !1,
        hideEquipment: !1,
        hideBlood: !1
    }),
    skin_factory: (t,a)=>({
        idString: t.toLowerCase().replace(/'/g, "").replace(/ /g, "_"),
        backpackTint: a,
        name: t
    }),
    hidden_skin: {
        extends: "skin_factory",
        applier: ()=>({
            hideFromLoadout: !0
        })
    },
    with_role: {
        extends: "skin_factory",
        applier: t=>({
            roleRequired: t
        })
    }
}))(({apply: i, simple: t})=>[t("with_role", ["hasanger"], ["Hasanger", 6553600]), t("with_role", ["leia"], ["Leia", 6644697]), t("with_role", ["limenade"], ["LimeNade", 16777215]), t("with_role", ["katie"], ["Katie", 7832816]), t("with_role", ["eipi"], ["eipi", 8405183]), t("with_role", ["error"], ["error", 2081890]), t("with_role", ["kenos"], ["Kenos", 6245820]), t("with_role", ["123op"], ["123OP", 255]), t("with_role", ["radians"], ["Radians", 16770560]), t("with_role", ["developr"], ["Developr Swag", 31359]), t("with_role", ["designr"], ["Designr Swag", 6803200]), t("with_role", ["composr"], ["Composr Swag", 16765185]), ...[["HAZEL Jumpsuit", 11839636], ["The Amateur", 10192743], ["The Pro", 10318636], ["Forest Camo", 6505505], ["Desert Camo", 14469523], ["Arctic Camo", 15527148], ["Bloodlust", 5658198], ["Tomato", 16711680], ["Greenhorn", 65280], ["Blue Blood", 255], ["Silver Lining", 14803425], ["Pot o' Gold", 16767058], ["Gunmetal", 5000268], ["Algae", 57571], ["Twilight Zone", 2863358], ["Bubblegum", 15373567], ["Sunrise", 4808588], ["Sunset", 16560197], ["Stratosphere", 31231], ["Mango", 16743424], ["Snow Cone", 60415], ["Aquatic", 12906], ["Floral", 14447549], ["Sunny", 16573808], ["Volcanic", 16603392], ["Ashfall", 4565756], ["Solar Flare", 16753920], ["Beacon", 4669523], ["Wave Jumpsuit", 11508799], ["Toadstool", 14079702], ["Full Moon", 12698049], ["Swiss Cheese", 16764160], ["Target Practice", 16711680], ["Zebra", 4868682], ["Tiger", 4868682], ["Bee", 4868682], ["Armadillo", 10914910], ["Printer", 16777215], ["Distant Shores", 8309379]].map(([a,o])=>t("skin_factory", a, o)), ...[["Lemon", 15458450], ["Flamingo", 15828093], ["Peachy Breeze", 15901283], ["Deep Sea", 2639187], ["Basic Outfit", 14523146], ["Peppermint", 11796528], ["Spearmint", 1136420], ["Coal", 4342338], ["Henry's Little Helper", 364800], ["Candy Cane", 16053492], ["Christmas Tree", 2328639], ["Gingerbread", 11885586], ["Verified", 4690175], ["no kil pls", 7039851], ["Stardust", 1459339], ["Aurora", 1912664], ["Nebula", 2662583], ["1st Birthday", 15564928], ["Lumberjack", 9587236]].map(([a,o])=>t("hidden_skin", [], [a, o])), i("hidden_skin", {
    grassTint: !0,
    hideEquipment: !0,
    hideBlood: !0
}, [], ["Ghillie Suit", 16777215])]);
class dn extends he {
    constructor(a) {
        var o, s;
        super(void 0, a);
        c(this, "_byTypeMapping");
        this._byTypeMapping = {};
        for (const n of this.definitions)
            ((o = this._byTypeMapping)[s = n.itemType] ?? (o[s] = [])).push(n)
    }
    byType(a) {
        return [...this._byTypeMapping[a] ?? []]
    }
}
const ae = new dn([...ao, ...ut, ...no, ...Kt, ...Gt, ...Ct, ...ai, ...Ee, ...St]);
function Le(i) {
    return ({serialize: t, deserialize: a})=>{
        let o = !1;
        return {
            [i]: class {
                constructor(n) {
                    if (this._value = n,
                    !o)
                        throw new Error("Do not manually instantiate a packet, use its static 'create' method instead")
                }
                static create(n) {
                    o = !0;
                    const r = new this(n);
                    return o = !1,
                    r
                }
                static read(n) {
                    o = !0;
                    const r = new this(a(n));
                    return o = !1,
                    r
                }
                get input() {
                    return this._value
                }
                get output() {
                    return this._value
                }
                serialize(n) {
                    t(n, this.input)
                }
            }
        }[i]
    }
}
const so = Le("DisconnectPacket")({
    serialize(i, t) {
        i.writeASCIIString(t.reason)
    },
    deserialize(i) {
        return {
            reason: i.readASCIIString()
        }
    }
})
  , ro = Le("GameOverPacket")({
    serialize(i, t) {
        i.writeBoolean(t.won),
        t.won || i.writeBits(t.rank, 7),
        i.writeObjectID(t.playerID),
        i.writeUint8(t.kills),
        i.writeUint16(t.damageDone),
        i.writeUint16(t.damageTaken),
        i.writeUint16(t.timeAlive)
    },
    deserialize(i) {
        const t = i.readBoolean();
        return {
            won: t,
            rank: t ? 1 : i.readBits(7),
            playerID: i.readObjectID(),
            kills: i.readUint8(),
            damageDone: i.readUint16(),
            damageTaken: i.readUint16(),
            timeAlive: i.readUint16()
        }
    }
})
  , lo = Le("JoinedPacket")({
    serialize(i, t) {
        i.writeBits(t.maxTeamSize, 3),
        t.maxTeamSize !== st.Solo && i.writeUint8(t.teamID);
        for (const a of t.emotes)
            Ce.writeOptional(i, a)
    },
    deserialize(i) {
        const t = i.readBits(3);
        return {
            maxTeamSize: t,
            ...t !== st.Solo ? {
                teamID: i.readUint8()
            } : {},
            emotes: Array.from({
                length: 6
            }, ()=>Ce.readOptional(i))
        }
    }
})
  , co = Le("JoinPacket")({
    serialize(i, t) {
        i.writeUint16($.protocolVersion),
        i.writePlayerName(t.name),
        i.writeBoolean(t.isMobile),
        ae.writeToStream(i, t.skin),
        pt.writeOptional(i, t.badge);
        for (const a of t.emotes)
            Ce.writeOptional(i, a)
    },
    deserialize(i) {
        return {
            protocolVersion: i.readUint16(),
            name: i.readPlayerName().replaceAll(/<[^>]+>/g, "").trim(),
            isMobile: i.readBoolean(),
            skin: ae.readFromStream(i),
            badge: pt.readOptional(i),
            emotes: Array.from({
                length: 6
            }, ()=>Ce.readOptional(i))
        }
    }
})
  , oi = he.create()(i=>({
    [i]: ()=>({
        ballistics: ea
    }),
    explosion_factory: t=>({
        idString: `${t.toLowerCase().replace(/ /g, "_")}_explosion`,
        name: t
    })
}))(i=>[i("explosion_factory", {
    damage: 130,
    obstacleMultiplier: 1,
    radius: {
        min: 8,
        max: 25
    },
    cameraShake: {
        duration: 250,
        intensity: 50
    },
    animation: {
        duration: 1e3,
        tint: 9507851,
        scale: 1.5
    },
    shrapnelCount: 10,
    ballistics: {
        damage: 2,
        obstacleMultiplier: 1,
        speed: .08,
        range: 20,
        rangeVariance: 1,
        shrapnel: !0
    }
}, "Barrel"), i("explosion_factory", {
    damage: 130,
    obstacleMultiplier: 2,
    radius: {
        min: 8,
        max: 25
    },
    cameraShake: {
        duration: 250,
        intensity: 50
    },
    animation: {
        duration: 1e3,
        tint: 16733440,
        scale: 1.5
    },
    shrapnelCount: 10,
    ballistics: {
        damage: 10,
        obstacleMultiplier: 1,
        speed: .08,
        range: 20,
        rangeVariance: 1,
        shrapnel: !0
    }
}, "Stove"), i("explosion_factory", {
    damage: 130,
    obstacleMultiplier: 1.5,
    radius: {
        min: 8,
        max: 25
    },
    cameraShake: {
        duration: 250,
        intensity: 50
    },
    animation: {
        duration: 1e3,
        tint: 16733440,
        scale: 1.5
    },
    shrapnelCount: 10,
    ballistics: {
        damage: 10,
        obstacleMultiplier: 1,
        speed: .08,
        range: 20,
        rangeVariance: 1,
        shrapnel: !0
    }
}, "Control Panel"), i("explosion_factory", {
    damage: 160,
    obstacleMultiplier: 1,
    radius: {
        min: 8,
        max: 25
    },
    cameraShake: {
        duration: 500,
        intensity: 100
    },
    animation: {
        duration: 1500,
        tint: 16711680,
        scale: 2.5
    },
    shrapnelCount: 20,
    ballistics: {
        damage: 4,
        obstacleMultiplier: 2,
        speed: .08,
        range: 30,
        rangeVariance: 1,
        shrapnel: !0
    }
}, "Super Barrel"), i("explosion_factory", {
    damage: 200,
    obstacleMultiplier: 2,
    radius: {
        min: 16,
        max: 40
    },
    cameraShake: {
        duration: 750,
        intensity: 100
    },
    animation: {
        duration: 1500,
        tint: 9507851,
        scale: 2.5
    },
    shrapnelCount: 25,
    ballistics: {
        damage: 12,
        obstacleMultiplier: 2,
        speed: .08,
        range: 30,
        rangeVariance: 1,
        shrapnel: !0
    }
}, "Small Refinery Barrel"), i("explosion_factory", {
    damage: 1e4,
    obstacleMultiplier: 3,
    radius: {
        min: 48,
        max: 58
    },
    cameraShake: {
        duration: 2e3,
        intensity: 100
    },
    animation: {
        duration: 1500,
        tint: 16711680,
        scale: 5
    },
    shrapnelCount: 50,
    ballistics: {
        damage: 15,
        obstacleMultiplier: 3,
        speed: .08,
        range: 60,
        rangeVariance: 1,
        shrapnel: !0
    }
}, "Large Refinery Barrel"), {
    idString: "usas_explosion",
    name: "USAS-12",
    damage: 35,
    obstacleMultiplier: 1,
    radius: {
        min: 6,
        max: 16
    },
    cameraShake: {
        duration: 100,
        intensity: 10
    },
    animation: {
        duration: 1500,
        tint: 7082771,
        scale: .8
    },
    shrapnelCount: 13,
    ballistics: {
        damage: 3,
        obstacleMultiplier: 1.5,
        speed: .06,
        range: 10,
        rangeVariance: 1,
        shrapnel: !0
    },
    sound: "usas_explosion",
    decal: "explosion_decal"
}, i("explosion_factory", {
    damage: 97,
    obstacleMultiplier: 1,
    radius: {
        min: 9,
        max: 19
    },
    cameraShake: {
        duration: 160,
        intensity: 10
    },
    animation: {
        duration: 1500,
        tint: 10503186,
        scale: .8
    },
    shrapnelCount: 17,
    ballistics: {
        damage: 3,
        obstacleMultiplier: 1.5,
        speed: .06,
        range: 10,
        rangeVariance: 1,
        shrapnel: !0,
        tracer: {
            color: -1
        }
    },
    sound: "firework_rocket_explode",
    decal: "explosion_decal"
}, "Firework Launcher"), i("explosion_factory", {
    damage: 97,
    obstacleMultiplier: 1,
    radius: {
        min: 9,
        max: 19
    },
    cameraShake: {
        duration: 160,
        intensity: 10
    },
    animation: {
        duration: 1500,
        tint: 10503186,
        scale: .8
    },
    shrapnelCount: 40,
    ballistics: {
        damage: 3,
        obstacleMultiplier: 1,
        speed: .08,
        range: 20,
        rangeVariance: 1,
        shrapnel: !0,
        tracer: {
            color: -1
        }
    },
    sound: "firework_rocket_explode",
    decal: "explosion_decal"
}, "Confetti Grenade"), i("explosion_factory", {
    damage: 120,
    obstacleMultiplier: 1.15,
    radius: {
        min: 10,
        max: 25
    },
    cameraShake: {
        duration: 200,
        intensity: 30
    },
    animation: {
        duration: 1e3,
        tint: 9507851,
        scale: 1.5
    },
    shrapnelCount: 10,
    ballistics: {
        damage: 15,
        obstacleMultiplier: 1,
        speed: .08,
        range: 20,
        rangeVariance: 1,
        shrapnel: !0
    },
    sound: "frag_grenade",
    decal: "frag_explosion_decal"
}, "Frag Grenade"), i("explosion_factory", {
    damage: 0,
    obstacleMultiplier: 0,
    radius: {
        min: 0,
        max: 0
    },
    cameraShake: {
        duration: 0,
        intensity: 0
    },
    animation: {
        duration: 500,
        tint: 9075835,
        scale: .5
    },
    shrapnelCount: 0,
    ballistics: {
        damage: 0,
        obstacleMultiplier: 0,
        speed: 0,
        range: 0,
        shrapnel: !1
    },
    sound: "smoke_grenade",
    decal: "smoke_explosion_decal"
}, "Smoke Grenade")]);
var Ie = (i=>(i[i.Full = 0] = "Full",
i[i.Limited = 1] = "Limited",
i[i.Binary = 2] = "Binary",
i[i.None = 3] = "None",
i))(Ie || {});
const ni = he.create()(i=>({
    [i]: ()=>({
        indestructible: !1,
        impenetrable: !1,
        noResidue: !1,
        invisible: !1,
        hideOnMap: !1,
        noCollisions: !1,
        allowFlyover: 1,
        hasLoot: !1,
        spawnWithLoot: !1,
        noMeleeCollision: !1,
        noBulletCollision: !1,
        reflectBullets: !1,
        frames: {},
        imageAnchor: e.create(0, 0),
        spawnMode: de.Grass,
        additionalDestroySounds: []
    }),
    crate: ()=>({
        material: "crate",
        health: 80,
        scale: {
            spawnMin: 1,
            spawnMax: 1,
            destroy: .5
        },
        spawnMode: de.GrassAndSand,
        rotationMode: 2,
        hitbox: l.fromRect(9.2, 9.2),
        hasLoot: !0
    }),
    houseWall: t=>({
        idString: `house_wall_${t}`,
        name: `House Wall ${t}`,
        material: "wood",
        hideOnMap: !0,
        noResidue: !0,
        health: 170,
        scale: {
            spawnMin: 1,
            spawnMax: 1,
            destroy: .95
        },
        rotationMode: 1,
        allowFlyover: 2,
        frames: {
            particle: "wall_particle"
        },
        wall: {
            borderColor: 4866356,
            color: 11509900
        },
        role: ee.Wall
    }),
    concreteWall: ()=>({
        material: "stone",
        health: 500,
        noResidue: !0,
        scale: {
            spawnMin: 1,
            spawnMax: 1,
            destroy: .95
        },
        rotationMode: 1,
        role: ee.Wall,
        allowFlyover: 2,
        particleVariations: 2,
        frames: {
            particle: "rock_particle"
        }
    }),
    mobileHomeWall: t=>({
        idString: `mobile_home_wall_${t}`,
        name: `Mobile Home Wall ${t}`,
        material: "appliance",
        noResidue: !0,
        health: 240,
        scale: {
            spawnMin: 1,
            spawnMax: 1,
            destroy: .95
        },
        rotationMode: 1,
        allowFlyover: 2,
        frames: {
            particle: "briefcase_particle"
        },
        role: ee.Wall
    }),
    containerWalls: (t,a)=>{
        let o;
        switch (a) {
        case "open2":
            o = new H(l.fromRect(1.85, 28, e.create(6.1, 0)),l.fromRect(1.85, 28, e.create(-6.1, 0)));
            break;
        case "open1":
            o = new H(l.fromRect(1.85, 28, e.create(6.1, 0)),l.fromRect(1.85, 28, e.create(-6.1, 0)),l.fromRect(14, 1.85, e.create(0, -13.04)));
            break;
        case "closed":
        default:
            o = l.fromRect(14, 28);
            break
        }
        const s = a === "closed";
        return {
            idString: `container_walls_${t}`,
            name: `Container Walls ${t}`,
            material: "metal",
            health: 500,
            indestructible: !0,
            noResidue: !0,
            hideOnMap: s,
            invisible: s,
            hitbox: o,
            rotationMode: 1,
            allowFlyover: 2,
            role: ee.Wall,
            reflectBullets: !0,
            zIndex: P.BuildingsFloor + 1,
            frames: {
                base: s ? void 0 : `container_walls_${a}`,
                particle: "metal_particle"
            }
        }
    }
    ,
    gunMount: ()=>({
        material: "wood",
        health: 60,
        scale: {
            spawnMin: 1,
            spawnMax: 1,
            destroy: .95
        },
        hasLoot: !0,
        hitbox: new H(l.fromRect(8.2, .95, e.create(0, -1.32)),l.fromRect(.75, 2.75, e.create(0, .48)),l.fromRect(.75, 2.75, e.create(-3.11, .48)),l.fromRect(.75, 2.75, e.create(3.17, .48))),
        rotationMode: 1,
        frames: {
            particle: "furniture_particle",
            residue: "gun_mount_residue"
        }
    })
}))(i=>[{
    idString: "oak_tree",
    name: "Oak Tree",
    material: "tree",
    health: 180,
    scale: {
        spawnMin: .9,
        spawnMax: 1,
        destroy: .75
    },
    hitbox: new M(5.5),
    spawnHitbox: new M(15),
    rotationMode: 0,
    variations: 3,
    zIndex: P.ObstaclesLayer4,
    allowFlyover: 2
}, {
    idString: "oil_tank",
    name: "Oil Tank",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    hitbox: new H(l.fromRect(16.8, 13.6),l.fromRect(26, 2),new M(5,e.create(-8, 1.8)),new M(5,e.create(-8, -1.8)),new M(5,e.create(8, 1.8)),new M(5,e.create(8, -1.8))),
    spawnHitbox: l.fromRect(28, 18),
    rotationMode: 1,
    allowFlyover: 2,
    noResidue: !0,
    frames: {
        particle: "metal_particle"
    },
    reflectBullets: !0
}, {
    idString: "pine_tree",
    name: "Pine Tree",
    material: "tree",
    health: 180,
    scale: {
        spawnMin: .9,
        spawnMax: 1.1,
        destroy: .75
    },
    hitbox: new M(5.5),
    spawnHitbox: new M(15),
    rotationMode: 0,
    zIndex: P.ObstaclesLayer4,
    allowFlyover: 2
}, {
    idString: "birch_tree",
    name: "Birch Tree",
    material: "tree",
    health: 240,
    scale: {
        spawnMin: .9,
        spawnMax: 1,
        destroy: .75
    },
    hitbox: new M(5.5),
    spawnHitbox: new M(15),
    rotationMode: 0,
    zIndex: P.ObstaclesLayer4,
    allowFlyover: 2
}, {
    idString: "christmas_tree",
    name: "Christmas Tree",
    material: "tree",
    health: 720,
    scale: {
        spawnMin: .9,
        spawnMax: 1.1,
        destroy: .75
    },
    hitbox: new M(10),
    spawnHitbox: new M(15),
    rotationMode: 0,
    zIndex: P.ObstaclesLayer4,
    allowFlyover: 2,
    hasLoot: !0
}, {
    idString: "rock",
    name: "Rock",
    material: "stone",
    health: 200,
    scale: {
        spawnMin: .9,
        spawnMax: 1.1,
        destroy: .5
    },
    spawnMode: de.GrassAndSand,
    hitbox: new M(4),
    spawnHitbox: new M(4.5),
    rotationMode: 0,
    variations: 7,
    particleVariations: 2
}, {
    idString: "river_rock",
    name: "River Rock",
    material: "stone",
    health: 550,
    scale: {
        spawnMin: .9,
        spawnMax: 1.1,
        destroy: .5
    },
    spawnMode: de.River,
    zIndex: P.UnderwaterPlayers - 1,
    hitbox: new M(8),
    spawnHitbox: new M(9),
    rotationMode: 0,
    variations: 5,
    particleVariations: 2
}, {
    idString: "pumpkin",
    name: "Pumpkin",
    material: "pumpkin",
    health: 100,
    scale: {
        spawnMin: .9,
        spawnMax: 1.1,
        destroy: .5
    },
    hitbox: new M(2.4),
    spawnHitbox: new M(3),
    rotationMode: 0,
    allowFlyover: 0,
    hasLoot: !0
}, {
    idString: "birthday_cake",
    name: "Birthday Cake",
    material: "pumpkin",
    health: 70,
    scale: {
        spawnMin: .9,
        spawnMax: 1.1,
        destroy: .75
    },
    hitbox: new M(1.9),
    spawnHitbox: new M(2.9),
    rotationMode: 0,
    allowFlyover: 0,
    hasLoot: !0
}, {
    idString: "flint_stone",
    name: "Flint Stone",
    material: "stone",
    health: 200,
    impenetrable: !0,
    hasLoot: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .5
    },
    spawnMode: de.GrassAndSand,
    hitbox: l.fromRect(6.1, 6.1),
    rotationMode: 3,
    particleVariations: 2
}, {
    idString: "bush",
    name: "Bush",
    material: "bush",
    health: 80,
    scale: {
        spawnMin: .9,
        spawnMax: 1.1,
        destroy: .8
    },
    hitbox: new M(4.2),
    noCollisions: !0,
    rotationMode: 0,
    particleVariations: 2,
    zIndex: P.ObstaclesLayer3
}, {
    idString: "blueberry_bush",
    name: "Blueberry Bush",
    material: "bush",
    health: 80,
    scale: {
        spawnMin: .9,
        spawnMax: 1.1,
        destroy: .8
    },
    hitbox: new M(4.2),
    noCollisions: !0,
    rotationMode: 0,
    particleVariations: 2,
    zIndex: P.ObstaclesLayer3,
    spawnWithLoot: !0,
    frames: {
        particle: "bush_particle",
        residue: "bush_residue"
    }
}, i("crate", {
    idString: "regular_crate",
    name: "Regular Crate",
    rotationMode: 2,
    frames: {
        particle: "crate_particle",
        residue: "regular_crate_residue"
    }
}), i("crate", {
    idString: "flint_crate",
    name: "Flint Crate",
    rotationMode: 3,
    hideOnMap: !0
}), i("crate", {
    idString: "aegis_crate",
    name: "AEGIS Crate",
    rotationMode: 3,
    hideOnMap: !0
}), i("crate", {
    idString: "grenade_crate",
    name: "Grenade Crate",
    hitbox: l.fromRect(6.5, 6.3),
    rotationMode: 3,
    allowFlyover: 0
}), i("crate", {
    idString: "melee_crate",
    name: "Melee Crate",
    hitbox: l.fromRect(6.5, 6.3),
    rotationMode: 3,
    allowFlyover: 0
}), i("crate", {
    idString: "hazel_crate",
    name: "Hazel Crate",
    rotationMode: 2,
    health: 1700,
    frames: {
        particle: "hazel_crate_particle",
        residue: "hazel_crate_residue"
    }
}), {
    idString: "ammo_crate",
    name: "Ammo Crate",
    material: "cardboard",
    health: 160,
    impenetrable: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .6
    },
    spawnMode: de.GrassAndSand,
    hitbox: l.fromRect(8.5, 8.5),
    rotationMode: 1,
    hasLoot: !0,
    frames: {
        particle: "crate_particle"
    }
}, {
    idString: "rocket_box",
    name: "Firework rocket box",
    material: "cardboard",
    health: 45,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .6
    },
    spawnMode: de.GrassAndSand,
    hitbox: l.fromRect(4, 4),
    rotationMode: 1,
    hasLoot: !0,
    frames: {
        particle: "box_particle",
        residue: "box_residue"
    }
}, {
    idString: "confetti_grenade_box",
    name: "Confetti grenade box",
    material: "cardboard",
    health: 45,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .6
    },
    spawnMode: de.GrassAndSand,
    hitbox: l.fromRect(4, 4),
    rotationMode: 1,
    hasLoot: !0,
    frames: {
        particle: "box_particle",
        residue: "box_residue"
    }
}, {
    idString: "tear_gas_crate",
    name: "Tear Gas Crate",
    material: "crate",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .6
    },
    spawnMode: de.GrassAndSand,
    hitbox: l.fromRect(9.15, 6.3),
    rotationMode: 1,
    allowFlyover: 0,
    frames: {
        particle: "crate_particle",
        residue: "regular_crate_residue"
    },
    particlesOnDestroy: {
        type: "tear_gas_particle",
        count: 10,
        deployAnimation: {
            duration: 4e3,
            staggering: {
                delay: 300,
                initialAmount: 2
            }
        },
        spawnRadius: 15
    },
    additionalDestroySounds: ["smoke_grenade"]
}, {
    idString: "barrel",
    name: "Barrel",
    material: "metal",
    health: 160,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .5
    },
    spawnMode: de.GrassAndSand,
    hitbox: new M(3.65),
    rotationMode: 0,
    explosion: "barrel_explosion",
    reflectBullets: !0
}, {
    idString: "loot_barrel",
    name: "Loot Barrel",
    material: "metal",
    hideOnMap: !0,
    health: 160,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .5
    },
    spawnMode: de.GrassAndSand,
    hasLoot: !0,
    hitbox: new M(3.65),
    rotationMode: 0,
    explosion: "barrel_explosion",
    reflectBullets: !0,
    frames: {
        particle: "barrel_particle",
        residue: "barrel_residue"
    }
}, {
    idString: "super_barrel",
    name: "Super Barrel",
    material: "metal",
    health: 240,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .5
    },
    spawnMode: de.GrassAndSand,
    hitbox: new M(3.65),
    rotationMode: 0,
    explosion: "super_barrel_explosion",
    reflectBullets: !0
}, {
    idString: "airdrop_crate_locked",
    name: "Airdrop",
    material: "metal",
    health: 1e4,
    indestructible: !0,
    reflectBullets: !0,
    hitbox: l.fromRect(8.7, 8.7),
    spawnHitbox: l.fromRect(10, 10),
    rotationMode: 3,
    hideOnMap: !0,
    role: ee.Activatable,
    zIndex: P.ObstaclesLayer2,
    interactText: "Open",
    sound: {
        name: "airdrop_unlock",
        maxRange: 64,
        falloff: .3
    },
    replaceWith: {
        idString: {
            airdrop_crate: .85,
            gold_airdrop_crate: .15
        },
        delay: 800
    },
    noResidue: !0,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "airdrop_crate",
    name: "Airdrop Crate",
    material: "crate",
    health: 150,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .5
    },
    hitbox: new H(l.fromRect(8.7, 8.7)),
    spawnHitbox: l.fromRect(10, 10),
    hideOnMap: !0,
    rotationMode: 3,
    hasLoot: !0
}, {
    idString: "firework_warehouse_exterior",
    name: "Firework Warehouse Exterior",
    material: "stone",
    health: 1e3,
    indestructible: !0,
    hideOnMap: !0,
    invisible: !0,
    hitbox: new H(l.fromRect(27.7, 1.75, e.create(-19, -23)),l.fromRect(27.7, 1.75, e.create(19, -23)),l.fromRect(27.7, 1.75, e.create(-19, 23)),l.fromRect(27.7, 1.75, e.create(19, 23)),l.fromRect(1.75, 18, e.create(32.3, 15)),l.fromRect(1.75, 18, e.create(32.3, -15)),l.fromRect(1.75, 18, e.create(-32.3, 15)),l.fromRect(1.75, 18, e.create(-32.3, -15))),
    rotationMode: 1,
    allowFlyover: 2,
    noResidue: !0,
    frames: {
        particle: "wall_particle"
    }
}, {
    idString: "gold_airdrop_crate",
    name: "Gold Airdrop Crate",
    material: "crate",
    health: 170,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .5
    },
    hitbox: new H(l.fromRect(8.7, 8.7)),
    spawnHitbox: l.fromRect(10, 10),
    rotationMode: 3,
    hideOnMap: !0,
    hasLoot: !0,
    frames: {
        particle: "airdrop_crate_particle"
    }
}, {
    idString: "gold_rock",
    name: "Gold Rock",
    material: "stone",
    hideOnMap: !0,
    health: 250,
    scale: {
        spawnMin: .9,
        spawnMax: 1.1,
        destroy: .3
    },
    hitbox: new M(4),
    spawnHitbox: new M(4.5),
    rotationMode: 0,
    hasLoot: !0
}, {
    idString: "loot_tree",
    name: "Loot Tree",
    material: "stone",
    hideOnMap: !0,
    health: 250,
    scale: {
        spawnMin: .9,
        spawnMax: 1,
        destroy: .75
    },
    hitbox: new M(5.5),
    spawnHitbox: new M(15),
    rotationMode: 0,
    zIndex: P.ObstaclesLayer4,
    allowFlyover: 2,
    hasLoot: !0
}, {
    idString: "warehouse_walls",
    name: "Warehouse Wall",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    hideOnMap: !0,
    hitbox: new H(l.fromRect(1.7, 70.6),l.fromRect(12, 1.7, e.create(5.5, -34.5)),l.fromRect(12, 1.7, e.create(5.5, 34.5))),
    rotationMode: 1,
    allowFlyover: 2,
    reflectBullets: !0,
    noResidue: !0,
    invisible: !0,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "box",
    name: "Box",
    material: "cardboard",
    health: 60,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hitbox: l.fromRect(4.4, 4.4),
    rotationMode: 1,
    variations: 3,
    zIndex: P.ObstaclesLayer2,
    hasLoot: !0
}, {
    idString: "metal_shelf",
    name: "Metal Shelf",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    noMeleeCollision: !0,
    hideOnMap: !0,
    hitbox: l.fromRect(25.5, 6.6),
    rotationMode: 1,
    noResidue: !0,
    frames: {
        particle: "metal_particle"
    },
    zIndex: P.ObstaclesLayer1 - 3,
    reflectBullets: !0
}, i("houseWall", {
    hitbox: l.fromRect(9, 2)
}, 1), i("houseWall", {
    hitbox: l.fromRect(20.86, 2)
}, 2), i("houseWall", {
    hitbox: l.fromRect(11.4, 2)
}, 3), i("houseWall", {
    hitbox: l.fromRect(21.4, 2)
}, 4), i("houseWall", {
    hitbox: l.fromRect(16, 2)
}, 5), i("houseWall", {
    hitbox: l.fromRect(15.1, 2)
}, 6), i("houseWall", {
    hitbox: l.fromRect(20.6, 2)
}, 7), i("houseWall", {
    hitbox: l.fromRect(10.7, 2)
}, 8), i("houseWall", {
    hitbox: l.fromRect(17.7, 2)
}, 9), {
    idString: "fridge",
    name: "Fridge",
    material: "appliance",
    health: 140,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hasLoot: !0,
    hitbox: l.fromRect(9.1, 6.45, e.create(0, -.2)),
    rotationMode: 1,
    allowFlyover: 2,
    frames: {
        particle: "metal_particle"
    },
    reflectBullets: !0
}, {
    idString: "stove",
    name: "Stove",
    material: "metal",
    health: 140,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hitbox: l.fromRect(9.1, 6.45, e.create(0, -.2)),
    rotationMode: 1,
    explosion: "stove_explosion",
    frames: {
        particle: "metal_particle"
    },
    reflectBullets: !0
}, {
    idString: "washing_machine",
    name: "Washing Machine",
    material: "appliance",
    health: 140,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hasLoot: !0,
    hitbox: l.fromRect(9.1, 6.45, e.create(0, -.2)),
    rotationMode: 1,
    reflectBullets: !0
}, {
    idString: "door",
    name: "Door",
    material: "wood",
    health: 120,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: 1
    },
    hitbox: l.fromRect(10.15, 1.6, e.create(-.44, 0)),
    rotationMode: 1,
    noResidue: !0,
    role: ee.Door,
    hingeOffset: e.create(-5.5, 0),
    zIndex: P.ObstaclesLayer3,
    frames: {
        particle: "furniture_particle"
    }
}, {
    idString: "vault_door",
    name: "Vault Door",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    reflectBullets: !0,
    hitbox: l.fromRect(14.2, 1.9, e.create(1.1, -.4)),
    rotationMode: 1,
    role: ee.Door,
    locked: !0,
    openOnce: !0,
    doorSound: "vault_door",
    animationDuration: 2e3,
    hingeOffset: e.create(-6.1, -.8),
    zIndex: P.ObstaclesLayer3,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "toilet",
    name: "Toilet",
    material: "porcelain",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hitbox: new M(2.5),
    allowFlyover: 0,
    rotationMode: 1,
    hasLoot: !0
}, {
    idString: "used_toilet",
    name: "Used Toilet",
    material: "porcelain",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hitbox: new M(2.5),
    allowFlyover: 0,
    rotationMode: 1,
    hasLoot: !0,
    frames: {
        particle: "toilet_particle",
        residue: "toilet_residue"
    }
}, {
    idString: "small_drawer",
    name: "Small Drawer",
    material: "wood",
    health: 80,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hitbox: l.fromRect(6.2, 6, e.create(0, -.5)),
    rotationMode: 1,
    allowFlyover: 0,
    hasLoot: !0,
    frames: {
        particle: "furniture_particle"
    }
}, {
    idString: "large_drawer",
    name: "Large Drawer",
    material: "wood",
    health: 80,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hideOnMap: !0,
    hitbox: l.fromRect(12.5, 6, e.create(0, -.5)),
    rotationMode: 1,
    allowFlyover: 0,
    hasLoot: !0,
    frames: {
        particle: "furniture_particle"
    }
}, {
    idString: "couch",
    name: "Couch",
    material: "wood",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(6.85, 15.4, e.create(-.3, 0)),
    rotationMode: 1
}, {
    idString: "tv",
    name: "TV",
    material: "glass",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(1.1, 15.1, e.create(-.25, 0)),
    rotationMode: 1,
    zIndex: P.ObstaclesLayer2,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "table",
    name: "Table",
    material: "wood",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(8.3, 12.2),
    rotationMode: 1,
    frames: {
        particle: "furniture_particle"
    },
    zIndex: P.ObstaclesLayer3,
    noCollisions: !0
}, {
    idString: "green_house_large_table",
    name: "Green House Large Table",
    material: "wood",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(12, 16.6),
    rotationMode: 1,
    frames: {
        particle: "furniture_particle"
    },
    zIndex: P.ObstaclesLayer3,
    noCollisions: !0,
    noResidue: !0
}, {
    idString: "green_house_small_table",
    name: "Green House Small Table",
    material: "wood",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(8.3, 12.3),
    rotationMode: 1,
    frames: {
        particle: "furniture_particle"
    },
    zIndex: P.ObstaclesLayer3,
    noCollisions: !0,
    noResidue: !0
}, {
    idString: "chair",
    name: "Chair",
    material: "wood",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(6.8, 6.7, e.create(0, 0)),
    rotationMode: 1,
    frames: {
        particle: "furniture_particle"
    }
}, {
    idString: "bookshelf",
    name: "Bookshelf",
    material: "wood",
    health: 80,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hideOnMap: !0,
    variations: 2,
    allowFlyover: 0,
    hitbox: l.fromRect(12.49, 4.24),
    rotationMode: 1,
    hasLoot: !0,
    frames: {
        particle: "furniture_particle"
    }
}, {
    idString: "window",
    name: "Window",
    material: "glass",
    health: 20,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .95
    },
    hideOnMap: !0,
    hitbox: l.fromRect(1.8, 9.4),
    zIndex: P.ObstaclesLayer2,
    allowFlyover: 2,
    rotationMode: 1,
    role: ee.Window
}, {
    idString: "window2",
    name: "Window",
    material: "glass",
    health: 20,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .95
    },
    hitbox: l.fromRect(1.8, 9.4),
    allowFlyover: 2,
    rotationMode: 1,
    role: ee.Window
}, {
    idString: "bed",
    name: "Bed",
    material: "wood",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(11.2, 16),
    rotationMode: 1,
    allowFlyover: 0,
    frames: {
        particle: "furniture_particle"
    }
}, {
    idString: "bunk_bed",
    name: "Bunk Bed",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    reflectBullets: !0,
    hideOnMap: !0,
    hitbox: l.fromRect(8.2, 15.6, e.create(.4, 0)),
    rotationMode: 1,
    allowFlyover: 0,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "garage_door",
    name: "Garage Door",
    material: "wood",
    health: 200,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .95
    },
    hideOnMap: !0,
    hitbox: l.fromRect(21.7, 1.5, e.create(0, -.4)),
    rotationMode: 1,
    allowFlyover: 2,
    frames: {
        particle: "furniture_particle"
    }
}, {
    idString: "porta_potty_toilet_open",
    name: "Porta Potty Toilet Open",
    material: "porcelain",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(12.13, 4.3, e.create(.02, -1.05)),
    rotationMode: 1,
    allowFlyover: 0,
    hasLoot: !0,
    frames: {
        particle: "porta_potty_toilet_particle",
        residue: "porta_potty_toilet_residue"
    }
}, {
    idString: "porta_potty_toilet_closed",
    name: "Porta Potty Toilet Closed",
    material: "porcelain",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(12, 4.3, e.create(0, -1.05)),
    rotationMode: 1,
    allowFlyover: 0,
    hasLoot: !0,
    frames: {
        particle: "porta_potty_toilet_particle",
        residue: "porta_potty_toilet_residue"
    }
}, {
    idString: "porta_potty_back_wall",
    name: "Porta Potty Back Wall",
    material: "wood",
    health: 100,
    noResidue: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(12.8, 1.6, e.create(0, 0)),
    rotationMode: 1,
    allowFlyover: 2,
    role: ee.Wall,
    frames: {
        particle: "porta_potty_wall_particle"
    }
}, {
    idString: "porta_potty_door",
    name: "Porta Potty Door",
    material: "wood",
    health: 100,
    noResidue: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: 1
    },
    hideOnMap: !0,
    hitbox: l.fromRect(9.2, 1.4, e.create(-.8, 0)),
    rotationMode: 1,
    allowFlyover: 2,
    role: ee.Door,
    hingeOffset: e.create(-5.5, 0)
}, {
    idString: "porta_potty_front_wall",
    name: "Porta Potty Front Wall",
    material: "wood",
    health: 100,
    noResidue: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(3, 1.6),
    rotationMode: 1,
    allowFlyover: 2,
    role: ee.Wall,
    frames: {
        particle: "porta_potty_wall_particle"
    }
}, {
    idString: "porta_potty_sink_wall",
    name: "Porta Potty Sink Wall",
    material: "wood",
    health: 100,
    noResidue: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(19.2, 1.9, e.create(0, 1.25)),
    rotationMode: 1,
    allowFlyover: 2,
    role: ee.Wall,
    zIndex: P.ObstaclesLayer2,
    frames: {
        particle: "porta_potty_wall_particle"
    }
}, {
    idString: "porta_potty_toilet_paper_wall",
    name: "Porta Potty Toilet Paper Wall",
    material: "wood",
    health: 100,
    noResidue: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(19.2, 1.7, e.create(0, -1.15)),
    rotationMode: 1,
    allowFlyover: 2,
    role: ee.Wall,
    zIndex: P.ObstaclesLayer2,
    frames: {
        particle: "porta_potty_wall_particle"
    }
}, i("concreteWall", {
    idString: "concrete_wall_end",
    name: "Concrete Wall End",
    hitbox: l.fromRect(2.4, 2),
    indestructible: !0
}), i("concreteWall", {
    idString: "concrete_wall_end_broken",
    name: "Concrete Wall End Broken",
    hitbox: l.fromRect(2.4, 2),
    indestructible: !0,
    variations: 2
}), i("concreteWall", {
    idString: "concrete_wall_segment",
    name: "Concrete Wall Segment",
    hitbox: l.fromRect(16, 2),
    indestructible: !0
}), i("concreteWall", {
    idString: "concrete_wall_segment_long",
    name: "Concrete Wall Segment Long",
    hitbox: l.fromRect(32, 2),
    indestructible: !0
}), i("concreteWall", {
    idString: "concrete_wall_corner",
    name: "Concrete Wall Corner",
    hitbox: l.fromRect(2, 2),
    indestructible: !0
}), i("concreteWall", {
    idString: "inner_concrete_wall_1",
    name: "Inner Concrete Wall 1",
    hitbox: l.fromRect(10.8, 1.9)
}), i("concreteWall", {
    idString: "inner_concrete_wall_2",
    name: "Inner Concrete Wall 2",
    hitbox: l.fromRect(36.7, 1.9)
}), i("concreteWall", {
    idString: "inner_concrete_wall_3",
    name: "Inner Concrete Wall 3",
    hitbox: l.fromRect(39.14, 1.9)
}), i("concreteWall", {
    idString: "inner_concrete_wall_4",
    name: "Inner Concrete Wall 4",
    hitbox: l.fromRect(47.14, 1.9)
}), {
    idString: "refinery_walls",
    name: "Refinery Walls",
    material: "stone",
    health: 1e3,
    indestructible: !0,
    hideOnMap: !0,
    invisible: !0,
    hitbox: new H(l.fromRect(57, 1.8, e.create(-22, -36.1)),l.fromRect(30.75, 1.8, e.create(35.38, -36.1)),l.fromRect(2, 33.5, e.create(49.75, -22.25)),l.fromRect(16.25, 2.05, e.create(42.63, -6.53)),l.fromRect(38.5, 2.05, e.create(2.25, -6.53)),l.fromRect(2, 21.55, e.create(-16, 3.23)),l.fromRect(2, 13.5, e.create(-16, 30.25)),l.fromRect(35.5, 2, e.create(-32.75, 36.25)),l.fromRect(2, 74, e.create(-49.5, 0)),l.fromRect(13.3, 2, e.create(-43.35, 9)),l.fromRect(10.5, 2, e.create(-21.25, 9))),
    rotationMode: 1,
    allowFlyover: 2,
    particleVariations: 2,
    noResidue: !0,
    frames: {
        particle: "rock_particle"
    }
}, {
    idString: "small_refinery_barrel",
    name: "Small Refinery Barrel",
    material: "metal",
    health: 250,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .5
    },
    hitbox: new M(6.8),
    rotationMode: 0,
    allowFlyover: 2,
    explosion: "small_refinery_barrel_explosion",
    reflectBullets: !0,
    frames: {
        particle: "barrel_particle",
        residue: "barrel_residue"
    }
}, {
    idString: "large_refinery_barrel",
    name: "Large Refinery Barrel",
    material: "large_refinery_barrel",
    health: 3500,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .5
    },
    hitbox: new M(17.15),
    rotationMode: 0,
    allowFlyover: 2,
    explosion: "large_refinery_barrel_explosion",
    reflectBullets: !0,
    zIndex: P.ObstaclesLayer5,
    frames: {
        particle: "barrel_particle"
    }
}, {
    idString: "large_oil_tank",
    name: "Large Oil Tank",
    material: "large_refinery_barrel",
    health: 1e3,
    indestructible: !0,
    reflectBullets: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .5
    },
    hitbox: new M(28),
    rotationMode: 0,
    allowFlyover: 2,
    frames: {
        particle: "barrel_particle"
    }
}, {
    idString: "smokestack",
    name: "Smokestack",
    material: "metal",
    health: 500,
    indestructible: !0,
    hitbox: new M(8.9),
    rotationMode: 1,
    reflectBullets: !0,
    allowFlyover: 2,
    zIndex: P.ObstaclesLayer5,
    noResidue: !0,
    frames: {
        particle: "barrel_particle"
    }
}, {
    idString: "distillation_column",
    name: "Distillation Column",
    material: "metal",
    health: 500,
    indestructible: !0,
    hitbox: new H(new M(5.22,e.create(0, -.65)),new M(4.9,e.create(0, .9))),
    rotationMode: 1,
    allowFlyover: 2,
    reflectBullets: !0,
    zIndex: P.ObstaclesLayer5,
    noResidue: !0,
    frames: {
        particle: "barrel_particle"
    }
}, {
    idString: "distillation_equipment",
    name: "Distillation Equipment",
    material: "metal",
    health: 500,
    indestructible: !0,
    hitbox: new H(new M(3,e.create(-11.3, -3.85)),new M(3,e.create(-11.3, -6.55)),l.fromRect(17.5, 3.5, e.create(-5.55, -5.25)),l.fromRect(14.2, 8.5, e.create(-3.9, -5.15)),new M(3.15,e.create(.72, 5.62)),new M(4.4,e.create(8.95, 5.62)),new M(5.35,e.create(8.95, -4.7)),l.fromRect(1.8, 3.7, e.create(.65, .85)),l.fromRect(2.6, 1.2, e.create(8.95, 1)),l.fromRect(1.6, 1.75, e.create(4.2, 5.53)),l.fromRect(1.9, -2.6, e.create(4.05, -6.65))),
    rotationMode: 1,
    allowFlyover: 2,
    reflectBullets: !0,
    noResidue: !0,
    frames: {
        particle: "barrel_particle"
    }
}, i("gunMount", {
    idString: "gun_mount_mcx_spear",
    name: "Gun Mount MCX Spear"
}), i("gunMount", {
    idString: "gun_mount_stoner_63",
    name: "Gun Mount Stoner 63"
}), i("gunMount", {
    idString: "gun_mount_maul",
    name: "Gun Mount Maul",
    hitbox: new H(l.fromRect(5.05, 1, e.create(0, -1.3)),l.fromRect(.8, 3, e.create(-1.55, .35)),l.fromRect(.8, 3, e.create(1.55, .35)))
}), i("gunMount", {
    idString: "gun_mount_hp18",
    name: "Gun Mount HP18"
}), {
    idString: "red_house_exterior",
    name: "Small House Exterior",
    material: "stone",
    health: 1e3,
    indestructible: !0,
    hideOnMap: !0,
    invisible: !0,
    hitbox: new H(l.fromRect(2, 9, e.create(-31, 26)),l.fromRect(2, 22, e.create(-31, .2)),l.fromRect(2, 9.8, e.create(-31, -25)),l.fromRect(19.8, 2, e.create(22, 29.5)),l.fromRect(8.2, 2, e.create(-26, 29.5)),l.fromRect(14, 2, e.create(-4.6, 29.5)),l.fromRect(2, 32, e.create(30.9, 13.5)),l.fromRect(2, 16, e.create(30.9, -20.5)),l.fromRect(12.3, 2, e.create(25.8, -28.9)),l.fromRect(39.4, 2, e.create(-10.45, -28.9))),
    rotationMode: 1,
    allowFlyover: 2,
    noResidue: !0,
    frames: {
        particle: "wall_particle"
    }
}, {
    idString: "green_house_exterior",
    name: "Green House Exterior",
    material: "stone",
    health: 1e3,
    indestructible: !0,
    hideOnMap: !0,
    invisible: !0,
    hitbox: new H(l.fromRect(21.8, 1.88, e.create(-39.9, -30.2)),l.fromRect(51.88, 1.88, e.create(8, -30.2)),l.fromRect(1.88, 9.3, e.create(33, -2.55)),l.fromRect(10.78, 1.87, e.create(28.55, 27.46)),l.fromRect(1.88, 58, e.create(-49.86, -1)),l.fromRect(42.74, 1.87, e.create(-9.3, 27.46)),l.fromRect(10.02, 1.87, e.create(-45.79, 27.46)),l.fromRect(1.88, 15.98, e.create(33, 20.22)),l.fromRect(1.88, 11.08, e.create(33, -23.88)),l.fromRect(3.5, 3.5, e.create(42.75, -.67)),l.fromRect(3.5, 3.5, e.create(42.75, 14.8))),
    rotationMode: 1,
    allowFlyover: 2,
    noResidue: !0,
    frames: {
        particle: "wall_particle"
    }
}, {
    idString: "truck",
    name: "Truck",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    hitbox: new H(l.fromRect(20.25, 2.15, e.create(0, 25.1)),l.fromRect(18.96, 9.2, e.create(0, 19.4)),l.fromRect(16.7, 23.5, e.create(0, 3)),l.fromRect(4.75, 15.9, e.create(0, -16.65)),l.fromRect(17, 6.9, e.create(0, -13.2)),l.fromRect(17, 6.9, e.create(0, -20.7)),l.fromRect(16.55, 1.6, e.create(0, -25.35))),
    reflectBullets: !0,
    rotationMode: 1,
    allowFlyover: 2,
    zIndex: P.ObstaclesLayer3,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "trailer",
    name: "Trailer",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    reflectBullets: !0,
    hitbox: new H(l.fromRect(14.9, 44.7, e.create(-.05, 0)),l.fromRect(15.9, 6.4, e.create(0, -11.2)),l.fromRect(15.9, 6.4, e.create(0, -18.2)),l.fromRect(15.5, 1.5, e.create(0, -22.5)),l.fromRect(9.75, 1, e.create(-.05, 22.75))),
    rotationMode: 1,
    allowFlyover: 2,
    zIndex: P.ObstaclesLayer4,
    noResidue: !0,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "tango_crate",
    name: "Tango Crate",
    material: "wood",
    health: 120,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hitbox: l.fromRect(15.49, 5.85),
    rotationMode: 1,
    allowFlyover: 0,
    hasLoot: !0
}, {
    idString: "control_panel",
    name: "Control Panel",
    material: "metal",
    health: 200,
    reflectBullets: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hitbox: l.fromRect(11, 8),
    rotationMode: 1,
    explosion: "control_panel_explosion",
    role: ee.Activatable,
    interactText: "Activate",
    replaceWith: {
        idString: "control_panel_activated",
        delay: 0
    },
    sound: {
        names: ["button_press", "puzzle_solved"]
    },
    frames: {
        particle: "barrel_particle",
        residue: "barrel_residue"
    }
}, {
    idString: "control_panel_activated",
    name: "Control Panel",
    material: "metal",
    health: 200,
    reflectBullets: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hitbox: l.fromRect(11, 8),
    rotationMode: 1,
    explosion: "control_panel_explosion",
    frames: {
        particle: "barrel_particle",
        residue: "barrel_residue"
    }
}, {
    idString: "control_panel2",
    name: "Control Panel",
    material: "metal",
    health: 200,
    reflectBullets: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hitbox: l.fromRect(11, 8),
    rotationMode: 1,
    explosion: "control_panel_explosion",
    frames: {
        particle: "barrel_particle",
        residue: "barrel_residue"
    }
}, {
    idString: "control_panel_small",
    name: "Small Control Panel",
    material: "metal",
    health: 200,
    reflectBullets: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hitbox: l.fromRect(7.5, 8),
    rotationMode: 1,
    explosion: "control_panel_explosion",
    frames: {
        particle: "barrel_particle",
        residue: "barrel_residue"
    }
}, {
    idString: "crane_base_end",
    name: "Crane Base End",
    material: "metal",
    health: 1e4,
    indestructible: !0,
    zIndex: P.BuildingsFloor,
    hitbox: l.fromRect(4.5, 1.8),
    rotationMode: 1,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "crane_base_part",
    name: "Crane Base Part",
    material: "metal",
    health: 1e4,
    indestructible: !0,
    reflectBullets: !0,
    hitbox: new H(l.fromRect(6.1, 15.5, e.create(0, 0)),l.fromRect(5.3, 6, e.create(0, 10.97)),l.fromRect(4.2, 1.8, e.create(0, 14.8)),l.fromRect(5.3, 6, e.create(0, -10.97)),l.fromRect(4.2, 1.8, e.create(0, -14.8))),
    zIndex: P.ObstaclesLayer4,
    allowFlyover: 2,
    rotationMode: 1,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "crane_base",
    name: "crane base",
    material: "metal",
    health: 1e4,
    indestructible: !0,
    invisible: !0,
    hitbox: new H(l.fromRect(6, 15.5, e.create(-29.6, 77.7 + .6)),l.fromRect(5.45, 6, e.create(-29.6, 66.7 + .6)),l.fromRect(2, 1.8, e.create(-30.8, 62.9 + .6)),l.fromRect(2, 1.8, e.create(-28.5, 62.8 + .6)),l.fromRect(5.45, 6, e.create(-29.6, 88.6 + .6)),l.fromRect(2, 1.8, e.create(-30.8, 92.6 + .6)),l.fromRect(2, 1.8, e.create(-28.5, 92.6 + .6)),l.fromRect(6, 15.5, e.create(-29.6, 29.5 + .6)),l.fromRect(5.45, 6, e.create(-29.6, 18.5 + .6)),l.fromRect(2, 1.8, e.create(-30.8, 14.7 + .6)),l.fromRect(2, 1.8, e.create(-28.5, 14.7 + .6)),l.fromRect(5.45, 6, e.create(-29.6, 40.4 + .6)),l.fromRect(2, 1.8, e.create(-30.8, 44.4 + .6)),l.fromRect(2, 1.8, e.create(-28.5, 44.4 + .6)),l.fromRect(6, 15.5, e.create(29.6, 77.7 + .6)),l.fromRect(5.45, 6, e.create(29.6, 66.7 + .6)),l.fromRect(2, 1.8, e.create(30.8, 62.9 + .6)),l.fromRect(2, 1.8, e.create(28.5, 62.8 + .6)),l.fromRect(5.45, 6, e.create(29.6, 88.6 + .6)),l.fromRect(2, 1.8, e.create(30.8, 92.6 + .6)),l.fromRect(2, 1.8, e.create(28.5, 92.6 + .6)),l.fromRect(6, 15.5, e.create(29.6, 29.5 + .6)),l.fromRect(5.45, 6, e.create(29.6, 18.5 + .6)),l.fromRect(2, 1.8, e.create(30.8, 14.7 + .6)),l.fromRect(2, 1.8, e.create(28.5, 14.7 + .6)),l.fromRect(5.45, 6, e.create(29.6, 40.4 + .6)),l.fromRect(2, 1.8, e.create(30.8, 44.4 + .6)),l.fromRect(2, 1.8, e.create(28.5, 44.4 + .6)),l.fromRect(6, 15.5, e.create(-29.6, -82.2 + .6)),l.fromRect(5.45, 6, e.create(-29.6, -71.2 + .6)),l.fromRect(2, 1.8, e.create(-30.8, -67.4 + .6)),l.fromRect(2, 1.8, e.create(-28.5, -67.3 + .6)),l.fromRect(5.45, 6, e.create(-29.6, -93.1 + .6)),l.fromRect(2, 1.8, e.create(-30.8, -97.1 + .6)),l.fromRect(2, 1.8, e.create(-28.5, -97.1 + .6)),l.fromRect(6, 15.5, e.create(-29.6, -34 + .6)),l.fromRect(5.45, 6, e.create(-29.6, -23 + .6)),l.fromRect(2, 1.8, e.create(-30.8, -19.2 + .6)),l.fromRect(2, 1.8, e.create(-28.5, -19.2 + .6)),l.fromRect(5.45, 6, e.create(-29.6, -44.9 + .6)),l.fromRect(2, 1.8, e.create(-30.8, -48.9 + .6)),l.fromRect(2, 1.8, e.create(-28.5, -48.9 + .6)),l.fromRect(6, 15.5, e.create(29.6, -82.2 + .6)),l.fromRect(5.45, 6, e.create(29.6, -71.2 + .6)),l.fromRect(2, 1.8, e.create(30.8, -67.4 + .6)),l.fromRect(2, 1.8, e.create(28.5, -67.3 + .6)),l.fromRect(5.45, 6, e.create(29.6, -93.1 + .6)),l.fromRect(2, 1.8, e.create(30.8, -97.1 + .6)),l.fromRect(2, 1.8, e.create(28.5, -97.1 + .6)),l.fromRect(6, 15.5, e.create(29.6, -34 + .6)),l.fromRect(5.45, 6, e.create(29.6, -23 + .6)),l.fromRect(2, 1.8, e.create(30.8, -19.2 + .6)),l.fromRect(2, 1.8, e.create(28.5, -19.2 + .6)),l.fromRect(5.45, 6, e.create(29.6, -44.9 + .6)),l.fromRect(2, 1.8, e.create(30.8, -48.9 + .6)),l.fromRect(2, 1.8, e.create(28.5, -48.9 + .6)),l.fromRect(4.3, 1.8, e.create(29.6, -99.5)),l.fromRect(4.3, 1.8, e.create(-29.6, -99.5)),l.fromRect(4.3, 1.8, e.create(29.6, 99.5)),l.fromRect(4.3, 1.8, e.create(-29.6, 99.5))),
    rotationMode: 1,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "generator",
    name: "Generator",
    material: "metal",
    health: 200,
    indestructible: !0,
    reflectBullets: !0,
    rotationMode: 1,
    frames: {
        particle: "metal_particle"
    },
    role: ee.Activatable,
    sound: {
        name: "generator_starting",
        maxRange: 412,
        falloff: 2
    },
    emitParticles: !0,
    requiredItem: "gas_can",
    interactText: "Activate",
    hitbox: l.fromRect(9, 7)
}, {
    idString: "ship_oil_tank",
    name: "Ship Oil Tank",
    material: "metal",
    health: 200,
    indestructible: !0,
    rotationMode: 1,
    allowFlyover: 2,
    frames: {
        particle: "metal_particle"
    },
    hitbox: l.fromRect(12, 25)
}, {
    idString: "ship",
    name: "Ship",
    material: "metal",
    health: 150,
    indestructible: !0,
    reflectBullets: !0,
    invisible: !0,
    rotationMode: 1,
    allowFlyover: 2,
    frames: {
        particle: "metal_particle"
    },
    hitbox: new H(l.fromRect(1, 220, e.create(48, -20)),l.fromRect(1, 66, e.create(-31, 4.8)),l.fromRect(1, 40, e.create(-31, 69)),l.fromRect(1, 90, e.create(-31, -85)),l.fromRect(32.2, 2, e.create(31.7, 81.6)),l.fromRect(33, 2, e.create(-14.8, 81.6)),l.fromRect(80, 1, e.create(8, -128)),l.fromRect(46, 2, e.create(9, -90.2)),l.fromRect(2, 38.6, e.create(-22.8, -70.2)),l.fromRect(2, 24, e.create(-13.1, -79.2)),l.fromRect(2, 9.9, e.create(31.1, -86.3)),l.fromRect(2, 20.2, e.create(31.1, -61)),l.fromRect(10, 2, e.create(36, -82.3)),l.fromRect(2, 32.4, e.create(40.5, -67)),l.fromRect(55, 2, e.create(4.4, -51.8)),l.fromRect(60, 2, e.create(8, 104.5)),l.fromRect(2, 30, e.create(-18, 96)),l.fromRect(2, 30, e.create(35, 96)),new M(12,e.create(8, 118)),...Array.from({
        length: 2
    }, (t,a)=>{
        const o = a === 0 ? 1 : -1
          , s = a === 0 ? 0 : 17;
        return [new M(4,e.create(0 * o + s, 125)), new M(4,e.create(-4 * o + s, 123.5)), new M(4,e.create(-6 * o + s, 122.5)), new M(4,e.create(-8 * o + s, 121)), new M(4,e.create(-10 * o + s, 120)), new M(4,e.create(-12 * o + s, 118.5)), new M(4,e.create(-14 * o + s, 116.5)), new M(4,e.create(-16 * o + s, 114.5)), new M(4,e.create(-18 * o + s, 113)), new M(4,e.create(-20 * o + s, 110.5)), new M(4,e.create(-22 * o + s, 108)), new M(4,e.create(-24 * o + s, 104)), new M(4,e.create(-26 * o + s, 99.5)), new M(4,e.create(-27 * o + s, 95)), new M(4,e.create(-28 * o + s, 91))]
    }
    ).flat())
}, {
    idString: "oil_tanker_ship",
    name: "Oil Tanker",
    material: "metal",
    health: 150,
    indestructible: !0,
    reflectBullets: !0,
    invisible: !0,
    rotationMode: 1,
    allowFlyover: 2,
    frames: {
        particle: "metal_particle"
    },
    hitbox: new H(l.fromRect(1, 190, e.create(49, -22)),l.fromRect(1, 130, e.create(-32, -51.5)),l.fromRect(1, 30, e.create(-32, 39)),l.fromRect(1, 10, e.create(-32, 69)),l.fromRect(85, 1, e.create(8, -118.5)),l.fromRect(69, 1.5, e.create(3.3, -88.5)),l.fromRect(1.5, 17.5, e.create(37, -96.5)),l.fromRect(1.5, 29, e.create(46.5, -102.5)),l.fromRect(75, 1.5, e.create(9, -117)),l.fromRect(1.5, 29, e.create(-29, -102.5)),l.fromRect(1.5, 13, e.create(-6.2, -95.8)),new M(12,e.create(8, 107)),...Array.from({
        length: 2
    }, (t,a)=>{
        const o = a === 0 ? 1 : -1
          , s = a === 0 ? 0 : 17;
        return [new M(4,e.create(0 * o + s, 114)), new M(4,e.create(-4 * o + s, 112.5)), new M(4,e.create(-6 * o + s, 111.5)), new M(4,e.create(-8 * o + s, 111)), new M(4,e.create(-10 * o + s, 109.8)), new M(4,e.create(-12 * o + s, 108.4)), new M(4,e.create(-14 * o + s, 106.9)), new M(4,e.create(-16 * o + s, 105.2)), new M(4,e.create(-18 * o + s, 103.4)), new M(4,e.create(-20 * o + s, 101.6)), new M(4,e.create(-22 * o + s, 99)), new M(4,e.create(-24 * o + s, 95.3)), new M(4,e.create(-26 * o + s, 92)), new M(4,e.create(-27 * o + s, 89.2)), new M(4,e.create(-28 * o + s, 86.5)), new M(4,e.create(-29 * o + s, 83.8)), new M(4,e.create(-30 * o + s, 80.2)), new M(4,e.create(-30 * o + s, 77))]
    }
    ).flat(),l.fromRect(85, 1.5, e.create(8.6, 73.6)))
}, {
    idString: "forklift",
    name: "Forklift",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    reflectBullets: !0,
    hitbox: new H(l.fromRect(8.15, 17.3, e.create(0, -3.8)),l.fromRect(9.45, 10.6, e.create(0, -4.9))),
    zIndex: P.ObstaclesLayer1 - 2,
    rotationMode: 1,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "pallet",
    name: "Pallet",
    material: "wood",
    health: 120,
    indestructible: !0,
    hitbox: l.fromRect(0, 0),
    zIndex: P.ObstaclesLayer1 - 1,
    rotationMode: 1,
    allowFlyover: 0,
    frames: {
        particle: "crate_particle"
    },
    noCollisions: !0
}, {
    idString: "bollard",
    name: "Bollard",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    reflectBullets: !0,
    hitbox: new H(l.fromRect(8.2, 9.2, e.create(-.36, 0)),new M(3.45,e.create(1, 0))),
    rotationMode: 1,
    allowFlyover: 0,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "barrier",
    name: "Barrier",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    reflectBullets: !0,
    hitbox: new H(l.fromRect(1.2, 31.75, e.create(-2.2, -2.8)),l.fromRect(2, 5, e.create(-2.3, 15.4)),l.fromRect(4.71, 6.59, e.create(.95, 15.4))),
    rotationMode: 1,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "port_shed_exterior",
    name: "Port Shed Exterior",
    material: "stone",
    health: 1e3,
    indestructible: !0,
    hideOnMap: !0,
    invisible: !0,
    hitbox: new H(l.fromRect(1.75, 29.5, e.create(-10.23, -1.7)),l.fromRect(1.75, 9.2, e.create(10.23, -11.9)),l.fromRect(1.75, 10.7, e.create(10.23, 7.6)),l.fromRect(20, 1.75, e.create(0, -15.56)),l.fromRect(9, 1.75, e.create(-5.25, 12.19))),
    rotationMode: 1,
    allowFlyover: 2,
    noResidue: !0,
    particleVariations: 2,
    frames: {
        particle: "rock_particle"
    }
}, {
    idString: "port_fence",
    name: "Port Fence",
    material: "fence",
    health: 40,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hitbox: l.fromRect(8.45, 1.6),
    rotationMode: 1,
    noResidue: !0,
    frames: {
        particle: "fence_particle"
    }
}, {
    idString: "port_fence_side",
    name: "Port Fence Side",
    material: "fence",
    health: 40,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hitbox: new H(l.fromRect(7.75, 1.3, e.create(0, 3.2)),l.fromRect(1.3, 7.75, e.create(3.2, 0))),
    noResidue: !0,
    rotationMode: 1,
    allowFlyover: 2,
    frames: {
        particle: "fence_particle"
    }
}, {
    idString: "port_warehouse_walls",
    name: "Port warehouse walls",
    material: "metal",
    health: 1e3,
    hideOnMap: !0,
    indestructible: !0,
    reflectBullets: !0,
    hitbox: new H(l.fromRect(2, 18.11, e.create(-31.23, -20.94)),l.fromRect(60, 2.19, e.create(-2.23, -29.12)),l.fromRect(2, 18.35, e.create(27.23, -21.05)),l.fromRect(2, 17.61, e.create(-31.23, 21.44)),l.fromRect(2, 17.81, e.create(27.23, 21.34)),l.fromRect(13.33, 1.86, e.create(20.34, 13.35)),l.fromRect(1.73, 24.52, e.create(-31.36, .38))),
    rotationMode: 1,
    allowFlyover: 2,
    invisible: !0,
    frames: {
        particle: "barrel_particle"
    }
}, {
    idString: "house_column",
    name: "House Column",
    material: "stone",
    indestructible: !0,
    health: 340,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .95
    },
    hitbox: new H(l.fromRect(3, 3)),
    rotationMode: 1,
    allowFlyover: 2,
    frames: {
        particle: "wall_particle"
    },
    role: ee.Wall
}, {
    idString: "potted_plant",
    name: "Potted Plant",
    material: "porcelain",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .95
    },
    hitbox: new M(2.45,e.create(-.15, .9)),
    rotationMode: 0,
    allowFlyover: 2,
    hasLoot: !0
}, {
    idString: "armory_barracks_walls",
    name: "Armory Barracks Walls",
    material: "stone",
    health: 1e3,
    hideOnMap: !0,
    indestructible: !0,
    hitbox: new H(new l(e.create(23.44, -41),e.create(25.54, -15.1)),new l(e.create(23.44, -4),e.create(25.54, 23.13)),new l(e.create(23.44, 34.23),e.create(25.54, 41)),new l(e.create(-25.51, -42.34),e.create(-1.91, -40.25)),new l(e.create(7, 16.1),e.create(24, 18.2)),new l(e.create(8.18, -42.34),e.create(25.54, -40.25)),new l(e.create(-25.51, -41),e.create(-23.42, 17.54)),new l(e.create(-25.51, 28.57),e.create(-23.42, 42.35)),new l(e.create(-24, 40.25),e.create(-4.33, 42.35)),new l(e.create(5.76, 40.25),e.create(25.54, 42.35)),new l(e.create(4.05, 15.59),e.create(7.06, 18.77)),new l(e.create(-4.12, -21.39),e.create(-1.11, -18.21)),new l(e.create(-24, -20.85),e.create(-4, -18.76))),
    rotationMode: 1,
    allowFlyover: 2,
    invisible: !0,
    particleVariations: 2,
    frames: {
        particle: "rock_particle"
    }
}, {
    idString: "armory_center_walls",
    name: "Armory Center Walls",
    material: "stone",
    health: 1e3,
    hideOnMap: !0,
    indestructible: !0,
    hitbox: new H(l.fromRect(2.09, 42, e.create(16.38, 0)),l.fromRect(32.34, 2.08, e.create(1.24, -21.87)),l.fromRect(2.09, 3.97, e.create(-13.88, -19.01)),l.fromRect(2.09, 8.27, e.create(-13.88, 16.87)),l.fromRect(2.09, 8.58, e.create(-13.88, -2.64)),l.fromRect(32.34, 2.07, e.create(1.24, 21.88))),
    rotationMode: 1,
    allowFlyover: 2,
    invisible: !0,
    particleVariations: 2,
    frames: {
        particle: "rock_particle"
    }
}, {
    idString: "armory_vault_walls",
    name: "Armory Vault Walls",
    material: "stone",
    health: 1e3,
    hideOnMap: !0,
    indestructible: !0,
    hitbox: new H(l.fromRect(2.09, 36, e.create(36.03, -2)),l.fromRect(2.09, 11.67, e.create(-13.96, -15.16)),l.fromRect(13.4, 2.09, e.create(30.37, 16.52)),l.fromRect(74.12, 2.09, e.create(.01, -20.98)),l.fromRect(2.09, 11.07, e.create(-13.96, 10.47)),l.fromRect(29, 2.09, e.create(21.9, -6.66)),l.fromRect(2.07, 37, e.create(-36.01, -2.5)),l.fromRect(35.39, 2.09, e.create(-19.35, 16.52)),l.fromRect(4.16, 2.09, e.create(10.5, 16.52))),
    rotationMode: 1,
    allowFlyover: 2,
    invisible: !0,
    particleVariations: 2,
    frames: {
        particle: "rock_particle"
    }
}, i("containerWalls", {}, 1, "closed"), i("containerWalls", {
    tint: ve.Green
}, 2, "open1"), i("containerWalls", {
    tint: ve.Blue
}, 3, "open1"), i("containerWalls", {
    tint: ve.Blue
}, 4, "open2"), i("containerWalls", {
    tint: ve.Yellow
}, 5, "open1"), i("containerWalls", {
    tint: ve.Yellow
}, 6, "open2"), {
    idString: "sandbags",
    name: "Sandbags",
    material: "sand",
    health: 1e3,
    indestructible: !0,
    hitbox: l.fromRect(13.1, 7.7),
    rotationMode: 1
}, {
    idString: "roadblock",
    name: "Road Block",
    material: "fence",
    health: 80,
    indestructible: !1,
    hitbox: l.fromRect(1, 10),
    rotationMode: 1
}, {
    idString: "gun_case",
    name: "Gun Case",
    material: "wood",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hitbox: l.fromRect(10.22, 4.73),
    rotationMode: 1,
    allowFlyover: 0,
    hasLoot: !0
}, {
    idString: "cooler",
    name: "Cooler",
    material: "wood",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hitbox: l.fromRect(8.3, 4.73),
    rotationMode: 1,
    allowFlyover: 0,
    hasLoot: !0
}, {
    idString: "m1117",
    name: "M1117",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    reflectBullets: !0,
    hitbox: new H(l.fromRect(18.51, 32.28, e.create(0, -5.17)),l.fromRect(19.69, 6.67, e.create(0, -10.87)),l.fromRect(19.69, 6.67, e.create(0, 10.8)),l.fromRect(17, 5.38, e.create(0, 16.14)),l.fromRect(15.06, 5.38, e.create(0, 19.7))),
    rotationMode: 1,
    allowFlyover: 2,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "m1117_damaged",
    name: "M1117 damaged",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    reflectBullets: !0,
    hitbox: new H(l.fromRect(18.51, 32.28, e.create(0, -5.17)),l.fromRect(19.69, 6.67, e.create(0, -10.87)),l.fromRect(19.69, 6.67, e.create(0, 10.8)),l.fromRect(17, 5.38, e.create(0, 16.14)),l.fromRect(15.06, 5.38, e.create(0, 19.7))),
    rotationMode: 1,
    allowFlyover: 2,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "humvee",
    name: "Humvee",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    reflectBullets: !0,
    hitbox: new H(l.fromRect(17, 35.25, e.create(0, -.4)),l.fromRect(18, 7, e.create(0, -12.3)),l.fromRect(18, 7, e.create(0, 13.6)),l.fromRect(2.5, .5, e.create(6.1, -18.25)),l.fromRect(15.25, .5, e.create(0, 17.5)),l.fromRect(21, 1, e.create(0, 7.5))),
    rotationMode: 1,
    allowFlyover: 2,
    frames: {
        particle: "metal_particle"
    }
}, {
    idString: "cabinet",
    name: "Cabinet",
    material: "appliance",
    health: 100,
    reflectBullets: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hitbox: l.fromRect(14.53, 4.3, e.create(0, -.22)),
    rotationMode: 1,
    frames: {
        particle: "metal_particle"
    },
    hasLoot: !0
}, {
    idString: "briefcase",
    name: "Briefcase",
    material: "appliance",
    health: 150,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hitbox: l.fromRect(10.65, 7.42, e.create(0, .43)),
    rotationMode: 1,
    allowFlyover: 0,
    hasLoot: !0
}, {
    idString: "button",
    name: "Button",
    material: "stone",
    health: 1e3,
    indestructible: !0,
    role: ee.Activatable,
    interactText: "Press",
    sound: {
        name: "button_press"
    },
    hitbox: l.fromRect(2.15, 1.51),
    rotationMode: 1,
    allowFlyover: 0,
    frames: {
        particle: "metal_particle",
        activated: "button_activated"
    }
}, i("mobileHomeWall", {
    hitbox: l.fromRect(6.97, 1.68)
}, "1"), i("mobileHomeWall", {
    hitbox: l.fromRect(10.8, 1.68)
}, "2"), i("mobileHomeWall", {
    hitbox: l.fromRect(20.43, 1.68)
}, "3"), {
    idString: "mobile_home_bed",
    name: "Mobile Home Bed",
    material: "wood",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(7.12, 16.06),
    rotationMode: 1,
    allowFlyover: 0,
    frames: {
        particle: "furniture_particle"
    }
}, {
    idString: "mobile_home_sink",
    name: "Mobile Home Sink",
    material: "wood",
    health: 100,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hideOnMap: !0,
    hasLoot: !0,
    hitbox: l.fromRect(9.5, 6.63, e.create(0, -.47)),
    rotationMode: 1,
    allowFlyover: 0,
    frames: {
        particle: "furniture_particle"
    }
}, {
    idString: "mobile_home_stove",
    name: "Mobile Home Stove",
    material: "metal",
    health: 140,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hideOnMap: !0,
    hitbox: l.fromRect(6.9, 6.64, e.create(0, -.3)),
    rotationMode: 1,
    explosion: "stove_explosion",
    frames: {
        particle: "metal_particle",
        residue: "stove_residue"
    },
    reflectBullets: !0
}, {
    idString: "tire",
    name: "Tire",
    material: "stone",
    health: 200,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hitbox: l.fromRect(3.47, 8.35),
    rotationMode: 1,
    zIndex: P.BuildingsFloor - 1,
    noResidue: !0,
    frames: {
        particle: "flint_stone_particle"
    },
    particleVariations: 2
}, {
    idString: "mobile_home_window",
    name: "Mobile Home Window",
    material: "glass",
    health: 20,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .95
    },
    hideOnMap: !0,
    hitbox: l.fromRect(13.8, 1.5),
    zIndex: P.ObstaclesLayer2,
    allowFlyover: 2,
    rotationMode: 1,
    role: ee.Window,
    noCollisionAfterDestroyed: !0,
    frames: {
        particle: "window_particle"
    }
}, {
    idString: "tugboat",
    name: "Tugboat",
    material: "metal",
    health: 150,
    indestructible: !0,
    reflectBullets: !0,
    invisible: !0,
    rotationMode: 1,
    allowFlyover: 2,
    frames: {
        particle: "metal_particle"
    },
    hitbox: new H(l.fromRect(8.93, 2.09, e.create(-9.53, -4.78)),l.fromRect(8.93, 2.09, e.create(9.51, -4.78)),l.fromRect(2.21, 35.83, e.create(14.37, 12.09)),l.fromRect(2.14, 35.83, e.create(-14.33, 12.09)),l.fromRect(30.88, 1.98, e.create(.04, 29.78)),l.fromRect(.99, 14, e.create(-20.79, -38)),l.fromRect(12, 1, e.create(-14, -46.2)),l.fromRect(13, 1, e.create(13.5, -46.2)),l.fromRect(1, 73, e.create(20.59, -8.5)),l.fromRect(.99, 45, e.create(-20.79, 5.5)),new M(1.45,e.create(-19.9, -45.5)),new M(1.45,e.create(-8.3, -45.5)),new M(1.45,e.create(7.4, -45.5)),new M(1.45,e.create(19.7, -45.5)),new M(1.45,e.create(19.7, -30.8)),new M(1.45,e.create(-19.9, -30.8)),new M(1.45,e.create(19.7, -16.6)),new M(1.45,e.create(-19.9, -16.6)),new M(1.45,e.create(19.7, -1.6)),new M(1.45,e.create(-19.9, -1.6)),new M(1.45,e.create(19.7, 13.4)),new M(1.45,e.create(-19.9, 13.4)),new M(1.45,e.create(19.7, 27.6)),new M(1.45,e.create(-19.9, 27.6)),...Array.from({
        length: 2
    }, (t,a)=>{
        const o = a === 0 ? 1 : -1;
        return Array.from({
            length: 13
        }, (s,n)=>new M(2,e.create(n * o * 1.5, 45 - (1 - Math.sqrt(1 - (n / 13) ** 2)) * n * 2)))
    }
    ).flat())
}, {
    idString: "lux_crate",
    name: "Lux Crate",
    material: "wood",
    health: 120,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hitbox: l.fromRect(15.49, 5.85),
    rotationMode: 1,
    allowFlyover: 0,
    hasLoot: !0
}, {
    idString: "tugboat_control_panel",
    name: "Tugboat Control Panel",
    material: "metal",
    health: 250,
    reflectBullets: !0,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .95
    },
    hitbox: l.fromRect(26.3, 8.02, e.create(0, .5)),
    rotationMode: 1,
    explosion: "control_panel_explosion",
    frames: {
        particle: "barrel_particle"
    }
}, {
    idString: "office_chair",
    name: "Office Chair",
    material: "wood",
    health: 140,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .9
    },
    hideOnMap: !0,
    hitbox: l.fromRect(4.5, 5.3, e.create(0, -.14)),
    rotationMode: 1,
    frames: {
        particle: "furniture_particle"
    }
}, {
    idString: "life_preserver",
    name: "Life Preserver",
    material: "stone",
    health: 80,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .95
    },
    hideOnMap: !0,
    hitbox: l.fromRect(3.2, 8.87, e.create(-.4, 0)),
    rotationMode: 1,
    zIndex: P.BuildingsFloor
}, {
    idString: "grenade_box",
    name: "grenade_box",
    material: "cardboard",
    health: 60,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .8
    },
    hitbox: l.fromRect(4.4, 4.4),
    rotationMode: 1,
    zIndex: P.ObstaclesLayer2,
    hasLoot: !0,
    frames: {
        particle: "box_particle",
        residue: "box_residue"
    }
}, {
    idString: "sea_traffic_control",
    name: "Sea Traffic Control",
    material: "stone",
    health: 150,
    indestructible: !0,
    invisible: !0,
    rotationMode: 1,
    allowFlyover: 2,
    frames: {
        particle: "rock_particle"
    },
    particleVariations: 2,
    hitbox: new H(l.fromRect(1.87, 20.8, e.create(19.6, -20.4)),l.fromRect(2.37, 1.52, e.create(19.85, 1.62)),l.fromRect(17.25, 1.74, e.create(11.91, 25.14)),l.fromRect(1.78, 55, e.create(-20.19, -2.5)),l.fromRect(2.4, 1.51, e.create(19.87, 13.27)),l.fromRect(14.31, 1.78, e.create(-13.93, 25.12)),l.fromRect(40.08, 1.78, e.create(-1.04, -29.91)))
}, {
    idString: "lily_pad",
    name: "Lily Pad",
    material: "bush",
    health: 80,
    scale: {
        spawnMin: .9,
        spawnMax: 1.1,
        destroy: .8
    },
    hitbox: new M(4.2),
    noCollisions: !0,
    rotationMode: 0,
    spawnMode: de.River,
    variations: 2,
    zIndex: P.ObstaclesLayer3
}, {
    idString: "small_bridge",
    name: "Small Bridge",
    material: "wood",
    health: 150,
    indestructible: !0,
    invisible: !0,
    noBulletCollision: !0,
    rotationMode: 1,
    allowFlyover: 0,
    frames: {
        particle: "furniture_particle"
    },
    hitbox: new H(l.fromRect(1.02, 56, e.create(6.39, 0)),l.fromRect(1.02, 56, e.create(-6.39, 0)),...Array.from({
        length: 2
    }, (t,a)=>{
        const o = a === 0 ? 1 : -1;
        return Array.from({
            length: 2
        }, (s,n)=>{
            const r = n === 0 ? 1 : -1;
            return [new M(1.1,e.create(6.39 * o, 0)), new M(1.1,e.create(6.39 * o, 9.54 * r)), new M(1.1,e.create(6.39 * o, 19.17 * r)), new M(1.1,e.create(6.39 * o, 27.97 * r))]
        }
        ).flat()
    }
    ).flat()),
    spawnHitbox: l.fromRect(21.02, 69.69, e.create(0, 0))
}, {
    idString: "large_bridge",
    name: "Large Bridge",
    material: "stone",
    health: 150,
    indestructible: !0,
    invisible: !0,
    noBulletCollision: !1,
    rotationMode: 1,
    allowFlyover: 0,
    particleVariations: 2,
    frames: {
        particle: "rock_particle"
    },
    hitbox: new H(l.fromRect(4, 136, e.create(21.5, -1.5)),l.fromRect(4, 136, e.create(-21.5, -1.5)),l.fromRect(5, 5, e.create(-21.5, -72)),l.fromRect(5, 5, e.create(21.5, -72)),l.fromRect(5, 5, e.create(-21.5, 69)),l.fromRect(5, 5, e.create(21.5, 69))),
    spawnHitbox: l.fromRect(60, 230, e.create(0, 0))
}, {
    idString: "viking_chest",
    name: "Viking Chest",
    material: "wood",
    health: 150,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hitbox: l.fromRect(12, 7, e.create(0, -.4)),
    rotationMode: 1,
    hasLoot: !0,
    hideOnMap: !0,
    frames: {
        particle: "chest_particle",
        residue: "chest_residue"
    },
    spawnMode: de.Beach,
    allowFlyover: 0
}, {
    idString: "river_chest",
    name: "River Chest",
    material: "wood",
    health: 150,
    scale: {
        spawnMin: 1,
        spawnMax: 1,
        destroy: .7
    },
    hitbox: l.fromRect(12, 7, e.create(0, -.4)),
    rotationMode: 3,
    zIndex: P.UnderwaterPlayers - 1,
    hasLoot: !0,
    hideOnMap: !0,
    frames: {
        particle: "chest_particle",
        residue: "chest_residue"
    },
    spawnMode: de.River,
    allowFlyover: 0
}, {
    idString: "bunker_entrance",
    name: "Bunker Entrance",
    material: "metal",
    health: 1e3,
    indestructible: !0,
    hitbox: new H(l.fromRect(19.5, 13.25, e.create(0, -3.25)),l.fromRect(1.75, 12.75, e.create(8.85, 3.8)),l.fromRect(1.75, 12.75, e.create(-8.85, 3.8))),
    frames: {
        particle: "metal_particle"
    },
    rotationMode: 1
}, {
    idString: "test_wall",
    name: "Test Wall",
    material: "wood",
    health: 200,
    hitbox: l.fromRect(20, 2),
    rotationMode: 1,
    wall: {
        color: 16755200,
        borderColor: 16711680
    }
}])
  , ct = i=>Math.ceil(Math.log2(Object.keys(i).length / 2))
  , Pa = ct(j)
  , si = 13
  , Ra = 3
  , Aa = .25
  , Ca = 3;
class ta extends No.BitStream {
    constructor(t, a=0, o=0) {
        super(t, a, o)
    }
    static alloc(t) {
        return new ta(new ArrayBuffer(t))
    }
    writeFloat(t, a, o, s) {
        if (s < 0 || s >= 31)
            throw new Error(`Invalid bit count ${s}`);
        const n = (1 << s) - 1
          , r = Y.clamp(t, a, o);
        this.writeBits((r - a) / (o - a) * n + .5, s)
    }
    readFloat(t, a, o) {
        if (o < 0 || o >= 31)
            throw new Error(`Invalid bit count ${o}`);
        const s = (1 << o) - 1;
        return t + (a - t) * this.readBits(o) / s
    }
    writeVector(t, a, o, s, n, r) {
        this.writeVector2(t.x, t.y, a, o, s, n, r)
    }
    writeVector2(t, a, o, s, n, r, d) {
        this.writeFloat(t, o, n, d),
        this.writeFloat(a, s, r, d)
    }
    readVector(t, a, o, s, n) {
        return {
            x: this.readFloat(t, o, n),
            y: this.readFloat(a, s, n)
        }
    }
    writeObjectType(t) {
        this.writeBits(t, Pa)
    }
    readObjectType() {
        return this.readBits(Pa)
    }
    writeObjectID(t) {
        this.writeBits(t, si)
    }
    readObjectID() {
        return this.readBits(si)
    }
    writePosition(t) {
        this.writePosition2(t.x, t.y)
    }
    writePosition2(t, a) {
        this.writeVector2(t, a, 0, 0, $.maxPosition, $.maxPosition, 16)
    }
    readPosition() {
        return this.readVector(0, 0, $.maxPosition, $.maxPosition, 16)
    }
    writeRotation(t, a) {
        this.writeFloat(t, -Math.PI, Math.PI, a)
    }
    readRotation(t) {
        return this.readFloat(-Math.PI, Math.PI, t)
    }
    writeObstacleRotation(t, a) {
        switch (a) {
        case Ie.Full:
            this.writeRotation(t, 4);
            break;
        case Ie.Limited:
            this.writeBits(t, 2);
            break;
        case Ie.Binary:
            this.writeBits(t, 1);
            break
        }
    }
    readObstacleRotation(t) {
        let a = 0
          , o = 0;
        switch (t) {
        case Ie.Full:
            o = this.readRotation(4);
            break;
        case Ie.Limited:
            a = this.readBits(2),
            o = -Ke.normalize(a) * (Math.PI / 2);
            break;
        case Ie.Binary:
            this.readBoolean() && (o = Math.PI / 2,
            a = 1);
            break
        }
        return {
            rotation: o,
            orientation: a
        }
    }
    writeScale(t) {
        this.writeFloat(t, Aa, Ca, 8)
    }
    readScale() {
        return this.readFloat(Aa, Ca, 8)
    }
    writeVariation(t) {
        this.writeBits(t, Ra)
    }
    readVariation() {
        return this.readBits(Ra)
    }
    writePlayerName(t) {
        this.writeASCIIString(t, $.player.nameMaxLength)
    }
    readPlayerName() {
        return this.readASCIIString($.player.nameMaxLength)
    }
    writeArray(t, a, o) {
        if (a < 0 || a >= 31)
            throw new Error(`Invalid bit count ${a}`);
        const s = t.length;
        this.writeBits(s, a);
        const n = 1 << a;
        for (let r = 0; r < s; r++) {
            if (r > n) {
                console.warn(`writeArray: iterator overflow: ${a} bits, ${s} size`);
                break
            }
            o(t[r])
        }
    }
    readArray(t, a, o) {
        const s = this.readBits(a);
        for (let n = 0; n < s; n++)
            t.push(o());
        return t
    }
    readAndCreateArray(t, a) {
        return Array.from({
            length: this.readBits(t)
        }, ()=>a())
    }
    writeBytes(t, a, o) {
        if (this.index % 8 !== 0)
            throw new Error("writeBytes: target stream (`this`) must be byte aligned");
        this._view._view.set(new Uint8Array(t._view._view.buffer,a,o), this.index / 8),
        this.index += o * 8
    }
    writeAlignToNextByte() {
        const t = 8 - this.index % 8;
        t < 8 && this.writeBits(0, t)
    }
    readAlignToNextByte() {
        const t = 8 - this.index % 8;
        t < 8 && this.readBits(t)
    }
}
const Da = ct(_e)
  , za = ct(K)
  , Ea = ct(q)
  , La = he.create([...ao, ...no, ...Kt, ...oi])
  , _n = [K.NormalTwoParty, K.FinishedOff, K.FinallyKilled, K.Gas, K.BleedOut, K.Airdrop]
  , Oa = i=>_n.includes(i.eventType)
  , gn = [K.FinallyKilled, K.Gas, K.BleedOut, K.Airdrop]
  , mn = i=>gn.includes(i.eventType);
Object.freeze({
    [_e.DeathOrDown]() {
        const i = {
            messageType: _e.DeathOrDown
        }
          , t = {
            victimId(a) {
                return arguments.length ? (i.victimId = a,
                t) : i.victimId
            },
            severity(a) {
                return arguments.length ? (i.severity = a,
                t) : i.severity
            },
            eventType(a) {
                return arguments.length ? (i.eventType = a,
                t) : i.eventType
            },
            attackerId(a) {
                return i.attackerId = a,
                t
            },
            attackerKills(a) {
                return a === void 0 ? i.attackerKills : (i.attackerKills = a,
                t)
            },
            weaponUsed(a) {
                return i.weaponUsed = a,
                t
            },
            killstreak(a) {
                return arguments.length ? (i.killstreak = a,
                t) : i.killstreak
            },
            build() {
                if (i.victimId === void 0)
                    throw new Error("victimId missing for killfeed message of type DeathOrDown");
                return i
            }
        };
        return t
    },
    [_e.KillLeaderAssigned]() {
        const i = {
            messageType: _e.KillLeaderAssigned
        }
          , t = {
            victimId(a) {
                return i.victimId = a,
                t
            },
            attackerKills(a) {
                return i.attackerKills = a,
                t
            },
            hideFromKillfeed() {
                return i.hideFromKillfeed = !0,
                t
            },
            showInKillfeed() {
                return i.hideFromKillfeed = !1,
                t
            },
            build() {
                if (i.victimId === void 0)
                    throw new Error("victimId missing for killfeed message of type KillLeaderAssigned");
                if (i.attackerKills === void 0)
                    throw new Error("attackerKills missing for killfeed message of type KillLeaderAssigned");
                return i
            }
        };
        return t
    },
    [_e.KillLeaderDead]() {
        const i = {
            messageType: _e.KillLeaderDead
        }
          , t = {
            victimId(a) {
                return i.victimId = a,
                t
            },
            attackerId(a) {
                return i.attackerId = a,
                t
            },
            build() {
                if (i.victimId === void 0)
                    throw new Error("victimId missing for killfeed message of type KillLeaderDead");
                if (i.attackerId === void 0)
                    throw new Error("attackerId missing for killfeed message of type KillLeaderDead");
                return i
            }
        };
        return t
    },
    [_e.KillLeaderUpdated]() {
        const i = {
            messageType: _e.KillLeaderUpdated
        }
          , t = {
            attackerKills(a) {
                return i.attackerKills = a,
                t
            },
            build() {
                if (i.attackerKills === void 0)
                    throw new Error("attackerKills missing for killfeed message of type KillLeaderUpdated");
                return i
            }
        };
        return t
    }
});
const _o = Le("KillFeedPacket")({
    serialize(i, t) {
        switch (i.writeBits(t.messageType, Da),
        t.messageType) {
        case _e.DeathOrDown:
            {
                if (i.writeObjectID(t.victimId),
                i.writeBits(t.eventType, za),
                Oa(t)) {
                    const o = t.attackerId !== void 0;
                    i.writeBoolean(o),
                    o && (i.writeObjectID(t.attackerId),
                    i.writeUint8(t.attackerKills))
                }
                i.writeBits(t.severity, Ea);
                const a = !mn(t) && t.weaponUsed !== void 0;
                i.writeBoolean(a),
                a && (La.writeToStream(i, t.weaponUsed),
                "killstreak"in t.weaponUsed && t.weaponUsed.killstreak && (t.killstreak === void 0 ? (console.error(`Killfeed packet with weapon '${t.weaponUsed.idString}' is missing a killstreak amount, but weapon schema in question mandates it`),
                i.writeUint8(0)) : i.writeUint8(t.killstreak)));
                break
            }
        case _e.KillLeaderAssigned:
            i.writeObjectID(t.victimId),
            i.writeUint8(t.attackerKills),
            i.writeBoolean(t.hideFromKillfeed ?? !1);
            break;
        case _e.KillLeaderUpdated:
            i.writeUint8(t.attackerKills);
            break;
        case _e.KillLeaderDead:
            i.writeObjectID(t.victimId),
            i.writeObjectID(t.attackerId);
            break
        }
    },
    deserialize(i) {
        const t = {
            messageType: i.readBits(Da)
        };
        switch (t.messageType) {
        case _e.DeathOrDown:
            {
                if (t.victimId = i.readObjectID(),
                t.eventType = i.readBits(za),
                Oa(t) && i.readBoolean() && (t.attackerId = i.readObjectID(),
                t.attackerKills = i.readUint8()),
                t.severity = i.readBits(Ea),
                i.readBoolean()) {
                    const a = t.weaponUsed = La.readFromStream(i);
                    "killstreak"in a && a.killstreak && (t.killstreak = i.readUint8())
                }
                break
            }
        case _e.KillLeaderAssigned:
            t.victimId = i.readObjectID(),
            t.attackerKills = i.readUint8(),
            t.hideFromKillfeed = i.readBoolean();
            break;
        case _e.KillLeaderUpdated:
            t.attackerKills = i.readUint8();
            break;
        case _e.KillLeaderDead:
            t.victimId = i.readObjectID(),
            t.attackerId = i.readObjectID();
            break
        }
        return t
    }
})
  , Ne = {
    container_1: 1,
    container_2: 2,
    container_3: 3,
    container_4: 4,
    container_5: 3,
    container_6: 4,
    container_7: 3,
    container_8: 4,
    container_10: 3
}
  , ne = {
    ...Ne,
    container_11: 7
}
  , Ba = {
    regular_crate: 2,
    barrel: 2,
    flint_crate: 1
}
  , Si = {
    regular_crate: 3,
    barrel: 1,
    super_barrel: 1,
    ammo_crate: 2,
    rocket_box: 1,
    confetti_grenade_box: 1
}
  , Va = {
    super_barrel: 1,
    barrel: 2
}
  , ri = he.create()(i=>({
    [i]: ()=>({
        hideOnMap: !1,
        spawnMode: de.Grass,
        obstacles: [],
        lootSpawners: [],
        subBuildings: [],
        decals: [],
        wallsToDestroy: 1 / 0,
        floorImages: [],
        ceilingImages: [],
        ceilingZIndex: P.BuildingsCeiling,
        floors: [],
        groundGraphics: [],
        rotationMode: Ie.Limited
    }),
    container: (t,a,o,s,n)=>{
        let r;
        switch (s) {
        case "open2":
            r = l.fromRect(16, 39.9);
            break;
        case "open1":
            r = l.fromRect(16, 34.9, e.create(0, 2));
            break;
        case "closed":
        default:
            r = l.fromRect(16, 30);
            break
        }
        return {
            idString: `container_${t}`,
            name: `Container ${t}`,
            spawnHitbox: r,
            scopeHitbox: l.fromRect(12, 27),
            ceilingImages: [{
                key: `container_ceiling_${s}${n ? "_damaged" : ""}`,
                position: e.create(0, 0),
                tint: a
            }],
            floors: [{
                type: "metal",
                hitbox: l.fromRect(14, 28)
            }],
            obstacles: [{
                idString: `container_walls_${o}`,
                position: e.create(0, 0),
                rotation: 0
            }],
            lootSpawners: s === "closed" ? [] : [{
                position: e.create(0, 0),
                table: "ground_loot"
            }]
        }
    }
}))(({simple: i})=>[{
    idString: "porta_potty",
    name: "Porta Potty",
    spawnHitbox: l.fromRect(20, 32),
    scopeHitbox: l.fromRect(14, 18),
    floorImages: [{
        key: "porta_potty_floor",
        position: e.create(0, 1.5)
    }],
    ceilingImages: [{
        key: "porta_potty_ceiling",
        position: e.create(0, 0),
        residue: "porta_potty_residue"
    }],
    wallsToDestroy: 2,
    floors: [{
        type: "wood",
        hitbox: l.fromRect(14, 18)
    }, {
        type: "wood",
        hitbox: l.fromRect(9.8, 3.5, e.create(1.5, 10.6))
    }],
    obstacles: [{
        idString: {
            porta_potty_toilet_open: .7,
            porta_potty_toilet_closed: .3
        },
        position: e.create(0, -5),
        lootSpawnOffset: e.create(0, 5),
        rotation: 0
    }, {
        idString: "porta_potty_back_wall",
        position: e.create(0, -8.75),
        rotation: 0
    }, {
        idString: "porta_potty_sink_wall",
        position: e.create(-5.65, 0),
        rotation: 3
    }, {
        idString: "porta_potty_toilet_paper_wall",
        position: e.create(5.7, 0),
        rotation: 3
    }, {
        idString: "porta_potty_door",
        position: e.create(2.2, 8.8),
        rotation: 0
    }, {
        idString: "porta_potty_front_wall",
        position: e.create(-4.6, 8.66),
        rotation: 2
    }]
}, {
    idString: "green_house",
    name: "Green House",
    spawnHitbox: l.fromRect(110, 70),
    scopeHitbox: new H(l.fromRect(83, 58, e.create(-8.5, -1.5)),l.fromRect(14, 19.4, e.create(38, 7.1))),
    floorImages: [{
        key: "green_house_floor",
        position: e.create(0, 0)
    }],
    ceilingImages: [{
        key: "green_house_ceiling",
        position: e.create(-2, -1.1),
        scale: e.create(2, 2)
    }],
    floors: [{
        type: "wood",
        hitbox: new H(l.fromRect(83, 58, e.create(-8.5, -1.5)),l.fromRect(14, 19.4, e.create(38, 7.1)),l.fromRect(6, 13.5, e.create(47.7, 7.1)))
    }, {
        type: "stone",
        hitbox: l.fromRect(10.3, 5, e.create(-35.7, 30.2))
    }],
    obstacles: [{
        idString: "green_house_exterior",
        position: e.create(0, 0),
        rotation: 0
    }, {
        idString: "window",
        position: e.create(32.99, -12.81),
        rotation: 0
    }, {
        idString: "window",
        position: e.create(17.59, 27.52),
        rotation: 1
    }, {
        idString: "window",
        position: e.create(-23.44, -30.22),
        rotation: 1
    }, {
        idString: "door",
        position: e.create(33.03, 6.74),
        rotation: 1
    }, {
        idString: "door",
        position: e.create(11.92, -13.22),
        rotation: 1
    }, {
        idString: "door",
        position: e.create(-36.15, 27.47),
        rotation: 2
    }, {
        idString: "door",
        position: e.create(-22.56, -6.26),
        rotation: 0
    }, {
        idString: "house_wall_1",
        position: e.create(-13.3, -6.24),
        rotation: 0
    }, {
        idString: "house_wall_3",
        position: e.create(11.99, -23.64),
        rotation: 1
    }, {
        idString: "house_wall_4",
        position: e.create(-7.26, -18.54),
        rotation: 1
    }, {
        idString: "house_wall_5",
        position: e.create(2.24, -6.35),
        rotation: 0
    }, {
        idString: "house_wall_6",
        position: e.create(-7.33, 18.92),
        rotation: 1
    }, {
        idString: "house_wall_7",
        position: e.create(-38.53, -6.29),
        rotation: 0
    }, {
        idString: "house_column",
        position: e.create(-7.33, 9.98),
        rotation: 0
    }, {
        idString: "house_column",
        position: e.create(11.76, -6.26),
        rotation: 0
    }, {
        idString: "house_column",
        position: e.create(-7.27, -6.32),
        rotation: 0
    }, {
        idString: "toilet",
        position: e.create(-2.32, -24.62),
        rotation: 0
    }, {
        idString: "mobile_home_sink",
        position: e.create(5.91, -25.11),
        rotation: 0
    }, {
        idString: "bed",
        position: e.create(-43.06, -20.98),
        rotation: 0
    }, {
        idString: "small_drawer",
        position: e.create(-33.63, -25.48),
        rotation: 0
    }, {
        idString: "potted_plant",
        position: e.create(17.46, -25.03)
    }, {
        idString: "potted_plant",
        position: e.create(-12.73, -12.13)
    }, {
        idString: "washing_machine",
        position: e.create(27.07, -25.54),
        rotation: 0
    }, {
        idString: "tv",
        position: e.create(2.43, -4.51),
        rotation: 1
    }, {
        idString: "large_drawer",
        position: e.create(28.24, 20),
        rotation: 3
    }, {
        idString: "couch",
        position: e.create(2.36, 22.18),
        rotation: 1
    }, {
        idString: "green_house_small_table",
        position: e.create(2.02, 11.51),
        rotation: 1
    }, {
        idString: "green_house_large_table",
        position: e.create(-15.91, 16.87),
        rotation: 0
    }, {
        idString: "chair",
        position: e.create(-21.87, 20.61),
        rotation: 3
    }, {
        idString: "chair",
        position: e.create(-21.87, 13.45),
        rotation: 3
    }, {
        idString: "chair",
        position: e.create(-16.02, 8.25),
        rotation: 2
    }, {
        idString: "fridge",
        position: e.create(-45.15, 21.66),
        rotation: 1
    }, {
        idString: "stove",
        position: e.create(-45.15, 12.3),
        rotation: 1
    }, {
        idString: "large_drawer",
        position: e.create(-45.12, 1.28),
        rotation: 1
    }, {
        idString: "gun_mount_hp18",
        position: e.create(30.33, -2.98),
        rotation: 3,
        lootSpawnOffset: e.create(-4, 0)
    }, {
        idString: "bookshelf",
        position: e.create(-10.88, -22.62),
        rotation: 1
    }],
    lootSpawners: [{
        table: "ground_loot",
        position: e.create(18.48, 6.37)
    }, {
        table: "ground_loot",
        position: e.create(-23.91, -18.07)
    }]
}, {
    idString: "firework_warehouse",
    name: "Firework Warehouse",
    spawnHitbox: l.fromRect(110, 70),
    scopeHitbox: l.fromRect(65, 48),
    floorImages: [{
        key: "firework_warehouse",
        position: e.create(0, 0)
    }],
    ceilingImages: [{
        key: "firework_warehouse_ceiling",
        position: e.create(0, 0),
        scale: e.create(2, 2)
    }],
    floors: [{
        type: "stone",
        hitbox: l.fromRect(65, 48, e.create(0, 0))
    }],
    obstacles: [{
        idString: "firework_warehouse_exterior",
        position: e.create(0, 0),
        rotation: 0
    }, {
        idString: Va,
        position: e.create(-27, 18)
    }, {
        idString: Va,
        position: e.create(27, -18)
    }, {
        idString: "window",
        position: e.create(32.4, 0),
        rotation: 2
    }, {
        idString: "window",
        position: e.create(-32.4, 0),
        rotation: 2
    }, {
        idString: "door",
        position: e.create(-.47, 23),
        rotation: 2
    }, {
        idString: "door",
        position: e.create(.47, -23),
        rotation: 0
    }, {
        idString: "confetti_grenade_box",
        position: e.create(29, -12)
    }, {
        idString: "rocket_box",
        position: e.create(-29, 12)
    }, {
        idString: "confetti_grenade_box",
        position: e.create(-27, 7)
    }, {
        idString: "rocket_box",
        position: e.create(-22, 9)
    }, {
        idString: Si,
        position: e.create(-17, 17)
    }, {
        idString: Si,
        position: e.create(17, -17)
    }, {
        idString: "ammo_crate",
        position: e.create(26.8, 17)
    }, {
        idString: Si,
        position: e.create(-26.8, -17)
    }, {
        idString: {
            box: 9,
            grenade_box: 1
        },
        position: e.create(18.8, 14)
    }, {
        idString: "confetti_grenade_box",
        position: e.create(20, 19)
    }, {
        idString: "hazel_crate",
        position: e.create(0, 0)
    }]
}, {
    idString: "warehouse",
    name: "Warehouse",
    spawnHitbox: l.fromRect(60, 88),
    scopeHitbox: l.fromRect(40, 70),
    floorImages: [{
        key: "warehouse_floor",
        position: e.create(0, 0)
    }],
    ceilingImages: [{
        key: "warehouse_ceiling",
        position: e.create(0, 0),
        scale: e.create(2, 2)
    }],
    floors: [{
        type: "stone",
        hitbox: l.fromRect(40, 88)
    }],
    obstacles: [{
        idString: "warehouse_walls",
        position: e.create(-19.8, 0),
        rotation: 0
    }, {
        idString: "warehouse_walls",
        position: e.create(19.8, 0),
        rotation: 2
    }, {
        idString: Ba,
        position: e.create(14, -28.5)
    }, {
        idString: "regular_crate",
        position: e.create(-14, -28.5)
    }, {
        idString: "regular_crate",
        position: e.create(14, 28.5)
    }, {
        idString: Ba,
        position: e.create(-14, 28.5)
    }, {
        idString: "ammo_crate",
        position: e.create(-14, 0)
    }, {
        idString: "ammo_crate",
        position: e.create(14, 0)
    }, {
        idString: {
            box: 9,
            grenade_box: 1
        },
        get position() {
            return At(-16.6, -11.25, -14.93, -8.03)
        }
    }, {
        idString: {
            box: 9,
            grenade_box: 1
        },
        get position() {
            return At(-16.6, -11.25, 14.93, 8.03)
        }
    }, {
        idString: {
            box: 9,
            grenade_box: 1
        },
        get position() {
            return At(16.6, 11.25, -14.93, -8.03)
        }
    }, {
        idString: {
            box: 9,
            grenade_box: 1
        },
        get position() {
            return At(16.6, 11.25, 14.93, 8.03)
        }
    }, {
        idString: {
            box: 9,
            grenade_box: 1
        },
        get position() {
            return e.create(16.15 * Qt(), 20.97 * Qt())
        }
    }],
    lootSpawners: [{
        position: e.create(0, 0),
        table: "warehouse"
    }]
}, {
    idString: "port_warehouse_red",
    name: "Red Port Warehouse",
    spawnHitbox: l.fromRect(72, 130),
    scopeHitbox: l.fromRect(58, 118),
    floorImages: [{
        key: "port_warehouse_floor",
        position: e.create(2, -30.2)
    }, {
        key: "port_warehouse_floor",
        position: e.create(-2, 30.2),
        rotation: Math.PI
    }],
    ceilingImages: [{
        key: "port_warehouse_ceiling",
        position: e.create(0, 0),
        tint: 8466737,
        scale: e.create(2, 2)
    }],
    obstacles: [{
        idString: "port_warehouse_walls",
        position: e.create(2, -30.2),
        rotation: 0
    }, {
        idString: "port_warehouse_walls",
        position: e.create(-2, 30.2),
        rotation: 2
    }, {
        idString: "super_barrel",
        position: e.create(-10, -52)
    }, {
        idString: "regular_crate",
        position: e.create(-22, -52)
    }, {
        idString: "forklift",
        position: e.create(15, -52),
        rotation: 3
    }, {
        idString: "regular_crate",
        position: e.create(-22, -10)
    }, {
        idString: "regular_crate",
        position: e.create(-20, 0)
    }, {
        idString: "regular_crate",
        position: e.create(-22, 10)
    }, {
        idString: "forklift",
        position: e.create(-8, -2),
        rotation: 2
    }, {
        idString: {
            regular_crate: .3,
            flint_crate: 1
        },
        position: e.create(-11, 50)
    }, {
        idString: "regular_crate",
        position: e.create(-22, 52)
    }, {
        idString: "barrel",
        position: e.create(1, 52)
    }, {
        idString: "super_barrel",
        position: e.create(10, 48)
    }, {
        idString: "barrel",
        position: e.create(23, 52)
    }, {
        idString: "barrel",
        position: e.create(17, 5)
    }, {
        idString: "barrel",
        position: e.create(24, 0)
    }, {
        idString: "box",
        position: e.create(24, 9)
    }, {
        idString: "box",
        position: e.create(19, 12)
    }]
}, {
    idString: "port_warehouse_blue",
    name: "Blue Port Warehouse",
    spawnHitbox: l.fromRect(72, 130),
    scopeHitbox: l.fromRect(58, 118),
    floorImages: [{
        key: "port_warehouse_floor",
        position: e.create(2, -30.2)
    }, {
        key: "port_warehouse_floor",
        position: e.create(-2, 30.2),
        rotation: Math.PI
    }],
    ceilingImages: [{
        key: "port_warehouse_ceiling",
        position: e.create(0, 0),
        tint: 3026538,
        scale: e.create(2, 2)
    }],
    obstacles: [{
        idString: "port_warehouse_walls",
        position: e.create(2, -30.2),
        rotation: 0
    }, {
        idString: "port_warehouse_walls",
        position: e.create(-2, 30.2),
        rotation: 2
    }, {
        idString: "super_barrel",
        position: e.create(-10, -52)
    }, {
        idString: "regular_crate",
        position: e.create(-22, -52)
    }, {
        idString: "forklift",
        position: e.create(15, -52),
        rotation: 3
    }, {
        idString: "regular_crate",
        position: e.create(-22, -10)
    }, {
        idString: "regular_crate",
        position: e.create(-20, 0)
    }, {
        idString: "regular_crate",
        position: e.create(-22, 10)
    }, {
        idString: "forklift",
        position: e.create(-8, -2),
        rotation: 2
    }, {
        idString: {
            regular_crate: .3,
            flint_crate: 1
        },
        position: e.create(-11, 50)
    }, {
        idString: "regular_crate",
        position: e.create(-22, 52)
    }, {
        idString: "barrel",
        position: e.create(1, 52)
    }, {
        idString: "super_barrel",
        position: e.create(10, 48)
    }, {
        idString: "barrel",
        position: e.create(23, 52)
    }, {
        idString: "barrel",
        position: e.create(17, 5)
    }, {
        idString: "barrel",
        position: e.create(24, 0)
    }, {
        idString: "box",
        position: e.create(24, 9)
    }, {
        idString: "box",
        position: e.create(19, 12)
    }]
}, {
    idString: "refinery",
    name: "Refinery",
    spawnHitbox: l.fromRect(184, 131, e.create(35, 21.5)),
    scopeHitbox: new H(l.fromRect(33.5, 72, e.create(-32.75, 0)),l.fromRect(65.5, 29.5, e.create(16.75, -21.25))),
    floorImages: [{
        key: "refinery_floor_1",
        position: e.create(0, -18.1)
    }, {
        key: "refinery_floor_2",
        position: e.create(-32.85, 19)
    }],
    ceilingImages: [{
        key: "refinery_ceiling_1",
        position: e.create(0, -21.3)
    }, {
        key: "refinery_ceiling_2",
        position: e.create(-32.85, 15.75)
    }],
    groundGraphics: [{
        color: 5855577,
        hitbox: l.fromRect(176, 123, e.create(35, 21.5))
    }, {
        color: 11710976,
        hitbox: new M(21,e.create(45.5, 59.1))
    }, {
        color: 5263440,
        hitbox: new M(19,e.create(45.5, 59.1))
    }, {
        color: 11710976,
        hitbox: new M(21,e.create(97, 59.1))
    }, {
        color: 5263440,
        hitbox: new M(19,e.create(97, 59.1))
    }, {
        color: 11710976,
        hitbox: l.fromRect(2, 81, e.create(-9, 42.5))
    }, {
        color: 11710976,
        hitbox: l.fromRect(2, 59, e.create(16, 53.5))
    }, {
        color: 11710976,
        hitbox: l.fromRect(133, 2, e.create(56.5, 3))
    }, {
        color: 11710976,
        hitbox: l.fromRect(108, 2, e.create(69, 25))
    }],
    floors: [{
        type: "wood",
        hitbox: l.fromRect(33.5, 27, e.create(-32.75, 22.5))
    }, {
        type: "stone",
        hitbox: l.fromRect(176, 123, e.create(35, 21.5))
    }],
    obstacles: [{
        idString: "refinery_walls",
        position: e.create(0, 0),
        rotation: 0
    }, {
        idString: "window",
        position: e.create(-16, 18.5),
        rotation: 0
    }, {
        idString: "door",
        position: e.create(-31.15, 9.2),
        rotation: 0
    }, {
        idString: "table",
        position: e.create(-22, 28),
        rotation: 0
    }, {
        idString: "chair",
        position: e.create(-26, 28),
        rotation: 3
    }, {
        idString: {
            gun_mount_mcx_spear: .99,
            gun_mount_stoner_63: .01
        },
        position: e.create(-46.8, 28),
        rotation: 1,
        lootSpawnOffset: e.create(4, 0)
    }, {
        idString: "small_refinery_barrel",
        position: e.create(41.3, -14.8)
    }, {
        idString: "distillation_column",
        position: e.create(42.7, -28),
        rotation: 0
    }, {
        idString: "distillation_column",
        position: e.create(-42.65, 1),
        rotation: 0
    }, {
        idString: "distillation_equipment",
        position: e.create(0, -18),
        rotation: 2
    }, {
        idString: "smokestack",
        position: e.create(-39, -25.59)
    }, {
        idString: {
            barrel: 1,
            super_barrel: 1
        },
        position: e.create(-26, -30)
    }, {
        idString: {
            barrel: 1,
            super_barrel: 1
        },
        position: e.create(-21.5, 4)
    }, {
        idString: "regular_crate",
        position: e.create(28.75, -30)
    }, {
        idString: "regular_crate",
        position: e.create(-43, -11)
    }, {
        idString: "oil_tank",
        position: e.create(-38, 73),
        rotation: 0
    }, {
        idString: "barrel",
        position: e.create(-20.5, 77.5),
        rotation: 0
    }, {
        idString: "barrel",
        position: e.create(-21.5, 67),
        rotation: 0
    }, {
        idString: "regular_crate",
        position: e.create(-46.5, 45.5)
    }, {
        idString: "regular_crate",
        position: e.create(-36, 48)
    }, {
        idString: "large_refinery_barrel",
        position: e.create(45.5, 59.1)
    }, {
        idString: "large_refinery_barrel",
        position: e.create(97, 59.2)
    }, {
        idString: "regular_crate",
        position: e.create(69, 62)
    }, {
        idString: "aegis_crate",
        position: e.create(64, 75)
    }, {
        idString: "aegis_crate",
        position: e.create(77, 73)
    }, {
        idString: "barrel",
        position: e.create(117.5, 77.5)
    }, {
        idString: "regular_crate",
        position: e.create(117, 40)
    }, {
        idString: "super_barrel",
        position: e.create(27.5, 39)
    }, {
        idString: "barrel",
        position: e.create(-10, 0)
    }, {
        idString: "oil_tank",
        position: e.create(113, -25),
        rotation: 1
    }, {
        idString: "barrel",
        position: e.create(117.5, -7)
    }, {
        idString: "regular_crate",
        position: e.create(95, -33)
    }, {
        idString: "aegis_crate",
        position: e.create(76.25, -33.5)
    }, {
        idString: "super_barrel",
        position: e.create(85.25, -33.5)
    }, {
        idString: {
            barrel: 1,
            super_barrel: 1
        },
        position: e.create(83, -25)
    }, {
        idString: "super_barrel",
        position: e.create(75, -23)
    }, {
        idString: "regular_crate",
        position: e.create(76.25, -12)
    }, {
        idString: "inner_concrete_wall_1",
        position: e.create(116.75, -1.5),
        rotation: 0
    }, {
        idString: "inner_concrete_wall_1",
        position: e.create(106.05, -1.5),
        rotation: 0
    }, {
        idString: "inner_concrete_wall_2",
        position: e.create(70.05, -20.75),
        rotation: 1
    }, {
        idString: "inner_concrete_wall_1",
        position: e.create(74.5, -1.5),
        rotation: 0
    }, {
        idString: "inner_concrete_wall_1",
        position: e.create(116.75, 34),
        rotation: 0
    }, {
        idString: "inner_concrete_wall_1",
        position: e.create(106.05, 34),
        rotation: 0
    }, {
        idString: "inner_concrete_wall_1",
        position: e.create(95.35, 34),
        rotation: 0
    }, {
        idString: "inner_concrete_wall_1",
        position: e.create(47.84, 34),
        rotation: 0
    }, {
        idString: "inner_concrete_wall_1",
        position: e.create(37.14, 34),
        rotation: 0
    }, {
        idString: "inner_concrete_wall_1",
        position: e.create(26.44, 34),
        rotation: 0
    }, {
        idString: "inner_concrete_wall_4",
        position: e.create(22, 58.5),
        rotation: 1
    }, {
        idString: "inner_concrete_wall_3",
        position: e.create(-32.45, 39),
        rotation: 0
    }, {
        idString: "inner_concrete_wall_1",
        position: e.create(-15, 76.65),
        rotation: 1
    }, {
        idString: "inner_concrete_wall_1",
        position: e.create(-15, 65.95),
        rotation: 1
    }, {
        idString: "concrete_wall_end",
        position: e.create(-15, 83),
        rotation: 0
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(-32, 83),
        rotation: 0
    }, {
        idString: "concrete_wall_segment",
        position: e.create(-44.3, 83),
        rotation: 0
    }, {
        idString: "concrete_wall_corner",
        position: e.create(-53, 83),
        rotation: 0
    }, {
        idString: "concrete_wall_segment",
        position: e.create(-53, 74.4),
        rotation: 1
    }, {
        idString: "concrete_wall_end_broken",
        position: e.create(-53, 65.5),
        rotation: 1
    }, {
        idString: "concrete_wall_end_broken",
        position: e.create(-53, 44),
        rotation: 3
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(-53, 28),
        rotation: 3
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(-53, 0),
        rotation: 3
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(-53, -23.3),
        rotation: 3
    }, {
        idString: "concrete_wall_corner",
        position: e.create(-53, -40),
        rotation: 3
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(-36.3, -40),
        rotation: 0
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(-10, -40),
        rotation: 0
    }, {
        idString: "concrete_wall_end_broken",
        position: e.create(7, -40),
        rotation: 0
    }, {
        idString: "concrete_wall_end_broken",
        position: e.create(20, -40),
        rotation: 2
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(36, -40),
        rotation: 0
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(65, -40),
        rotation: 0
    }, {
        idString: "concrete_wall_end_broken",
        position: e.create(82, -40),
        rotation: 0
    }, {
        idString: "concrete_wall_end_broken",
        position: e.create(106, -40),
        rotation: 2
    }, {
        idString: "concrete_wall_segment",
        position: e.create(114.2, -40),
        rotation: 2
    }, {
        idString: "concrete_wall_corner",
        position: e.create(123, -40),
        rotation: 2
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(123, -23.2),
        rotation: 1
    }, {
        idString: "concrete_wall_segment",
        position: e.create(123, -10),
        rotation: 1
    }, {
        idString: "concrete_wall_end",
        position: e.create(123, -1.5),
        rotation: 3
    }, {
        idString: "concrete_wall_end",
        position: e.create(123, 29.5),
        rotation: 1
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(123, 46),
        rotation: 1
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(123, 66.3),
        rotation: 1
    }, {
        idString: "concrete_wall_corner",
        position: e.create(123, 83),
        rotation: 1
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(106.3, 83),
        rotation: 0
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(76, 83),
        rotation: 0
    }, {
        idString: "concrete_wall_segment_long",
        position: e.create(47, 83),
        rotation: 0
    }, {
        idString: "concrete_wall_segment",
        position: e.create(30, 83),
        rotation: 0
    }, {
        idString: "concrete_wall_end",
        position: e.create(22, 83),
        rotation: 2
    }],
    subBuildings: [{
        idString: "porta_potty",
        position: e.create(59.75, -27.6)
    }]
}, {
    idString: "red_house",
    name: "Red House",
    spawnHitbox: l.fromRect(80, 80),
    scopeHitbox: l.fromRect(60, 56),
    floorImages: [{
        key: "red_house_floor",
        position: e.create(0, 0)
    }],
    ceilingImages: [{
        key: "red_house_ceiling",
        position: e.create(0, -.25),
        scale: e.create(2, 2)
    }],
    floors: [{
        type: "wood",
        hitbox: l.fromRect(62, 58.5, e.create(0, -.25))
    }, {
        type: "stone",
        hitbox: l.fromRect(-10.1, 4.7, e.create(16.55, -31.75))
    }, {
        type: "stone",
        hitbox: l.fromRect(10.1, -4.7, e.create(-14.45, 31.75))
    }],
    obstacles: [{
        idString: "house_wall_4",
        position: e.create(8.75, -18),
        rotation: 1
    }, {
        idString: "house_wall_1",
        position: e.create(2.73, -6.07),
        rotation: 0
    }, {
        idString: "house_wall_9",
        position: e.create(-20.94, -6.07),
        rotation: 0
    }, {
        idString: "house_column",
        position: e.create(8.75, -6.12),
        rotation: 0
    }, {
        idString: "door",
        position: e.create(-7.36, -6.06),
        rotation: 2
    }, {
        idString: "bookshelf",
        position: e.create(5.11, -21.95),
        rotation: 1
    }, {
        idString: "couch",
        position: e.create(-21.48, -1.01),
        rotation: 3
    }, {
        idString: "large_drawer",
        position: e.create(-25.98, 21.3),
        rotation: 1
    }, {
        idString: "house_wall_4",
        position: e.create(-2.5, 17.2),
        rotation: 1
    }, {
        idString: "house_wall_4",
        position: e.create(9.55, 17.2),
        rotation: 1
    }, {
        idString: "door",
        position: e.create(3.1, 7.2),
        rotation: 2
    }, {
        idString: {
            toilet: 2,
            used_toilet: 1
        },
        position: e.create(3.6, 23.5),
        rotation: 2
    }, {
        idString: "door",
        position: e.create(-14.85, 29),
        rotation: 2
    }, {
        idString: "door",
        position: e.create(16.2, -29.5),
        rotation: 2
    }, {
        idString: "bookshelf",
        position: e.create(-6, 17.5),
        rotation: 3
    }, {
        idString: "stove",
        position: e.create(15.5, 24),
        rotation: 2
    }, {
        idString: "fridge",
        position: e.create(25, 24),
        rotation: 2
    }, {
        idString: "chair",
        position: e.create(25, 5),
        rotation: 0
    }, {
        idString: "chair",
        position: e.create(25, -5),
        rotation: 2
    }, {
        idString: "table",
        position: e.create(25, 0),
        rotation: 2
    }, {
        idString: "small_drawer",
        position: e.create(26, -25),
        rotation: 3
    }, {
        idString: "bed",
        position: e.create(-21.5, -22.5),
        rotation: 1
    }, {
        idString: "small_drawer",
        position: e.create(-26, -11.5),
        rotation: 1
    }, {
        idString: "window",
        position: e.create(-7.2, -29.5),
        rotation: 1
    }, {
        idString: "window",
        position: e.create(-31, 7.5),
        rotation: 2
    }, {
        idString: "window",
        position: e.create(31, 15.4),
        rotation: 2
    }, {
        idString: "window",
        position: e.create(31, -15.9),
        rotation: 2
    }, {
        idString: "red_house_exterior",
        position: e.create(0, 0),
        rotation: 2
    }],
    lootSpawners: [{
        table: "ground_loot",
        position: e.create(16.44, -15.64)
    }, {
        table: "ground_loot",
        position: e.create(-15.42, 17.44)
    }]
}, {
    idString: "crane",
    name: "Crane",
    spawnHitbox: l.fromRect(210, 100, e.create(55, -60)),
    ceilingHitbox: l.fromRect(210, 100, e.create(55, -60)),
    ceilingImages: [{
        key: "crane_ceiling",
        position: e.create(55.5, -60),
        scale: e.create(2, 2)
    }],
    ceilingZIndex: P.BuildingsCeiling + 1,
    obstacles: [{
        idString: "crane_base_part",
        position: e.create(-31.55, -87.3),
        rotation: 0
    }, {
        idString: "crane_base_part",
        position: e.create(-31.55, -35.6),
        rotation: 0
    }, {
        idString: "crane_base_part",
        position: e.create(32, -87.3),
        rotation: 0
    }, {
        idString: "crane_base_part",
        position: e.create(32, -35.6),
        rotation: 0
    }]
}, {
    idString: "port_shed",
    name: "Port Shed",
    spawnHitbox: l.fromRect(27, 37, e.create(-.8, 0)),
    scopeHitbox: l.fromRect(20, 27.5, e.create(-.8, -1.5)),
    floorImages: [{
        key: "port_shed_floor",
        position: e.create(0, 0)
    }],
    ceilingImages: [{
        key: "port_shed_ceiling",
        position: e.create(-.8, -1.7)
    }],
    obstacles: [{
        idString: "port_shed_exterior",
        position: e.create(-.8, 0),
        rotation: 0
    }, {
        idString: "door",
        position: e.create(3.95, 12.15),
        rotation: 0
    }, {
        idString: "window",
        position: e.create(9.45, -2.6),
        rotation: 0
    }, {
        idString: "bookshelf",
        position: e.create(-7.75, 4.9),
        rotation: 1
    }, {
        idString: "table",
        position: e.create(2.2, -10.35),
        rotation: 1
    }, {
        idString: "chair",
        position: e.create(2.2, -5.5),
        rotation: 0
    }]
}, i("container", 1, ve.White, 1, "closed"), i("container", 2, ve.Red, 1, "closed"), i("container", 3, ve.Green, 2, "open1"), i("container", 4, ve.Green, 2, "open1", !0), i("container", 5, ve.Blue, 3, "open1"), i("container", 6, ve.Blue, 3, "open1", !0), i("container", 7, ve.Blue, 4, "open2"), i("container", 8, ve.Blue, 4, "open2", !0), i("container", 9, ve.Yellow, 5, "open1"), i("container", 10, ve.Yellow, 6, "open2"), {
    idString: "container_11",
    name: "Invisible Container",
    spawnHitbox: l.fromRect(16, 30)
}, {
    idString: "ship",
    name: "Ship",
    spawnHitbox: l.fromRect(110, 300, e.create(0, 0)),
    scopeHitbox: new H(l.fromRect(44, 38, e.create(9.5, -70.5)),l.fromRect(10, 15, e.create(-17, -60)),l.fromRect(50, 24, e.create(8, 93.2))),
    puzzle: {
        triggerInteractOn: "vault_door",
        interactDelay: 2e3
    },
    sounds: {
        solved: "generator_running",
        position: e.create(23, 75),
        maxRange: 416,
        falloff: 2
    },
    floorImages: [{
        key: "ship_floor_1",
        position: e.create(0, -65)
    }, {
        key: "ship_floor_2",
        position: e.create(.02, 64.8)
    }],
    ceilingImages: [{
        key: "ship_cabin_roof",
        position: e.create(4, -68),
        scale: e.create(2, 2)
    }, {
        key: "ship_tango_room_roof",
        position: e.create(8.5, 101.75)
    }],
    floors: [{
        type: "stone",
        hitbox: l.fromRect(82, 220, e.create(8.5, -20))
    }, {
        type: "stone",
        hitbox: l.fromRect(54, 20, e.create(8.5, 95))
    }, {
        type: "metal",
        hitbox: l.fromRect(20, 14, e.create(-40.6, -33.7))
    }, {
        type: "metal",
        hitbox: l.fromRect(20, 14, e.create(-40.6, 43))
    }],
    obstacles: [{
        idString: "vault_door",
        position: e.create(7.45, 81.5),
        rotation: 0
    }, {
        idString: "tango_crate",
        position: e.create(9, 93.5),
        rotation: 0
    }, {
        idString: "super_barrel",
        position: e.create(-12, 89)
    }, {
        idString: "box",
        position: e.create(28.5, 87)
    }, {
        idString: "box",
        position: e.create(30, 93)
    }, {
        idString: "box",
        position: e.create(-12, 99)
    }, {
        idString: "ship",
        position: e.create(0, 0),
        rotation: 0
    }, {
        idString: "ship_oil_tank",
        position: e.create(-14, -111),
        rotation: 0
    }, {
        idString: "generator",
        position: e.create(23, 75),
        rotation: 0,
        puzzlePiece: !0
    }, {
        idString: "barrel",
        position: e.create(24, 66)
    }, {
        idString: {
            barrel: 1,
            super_barrel: 1
        },
        position: e.create(21, 58)
    }, {
        idString: "regular_crate",
        position: e.create(-6, 73)
    }, {
        idString: "regular_crate",
        position: e.create(-4, 61)
    }, {
        idString: "control_panel_small",
        position: e.create(14.5, -57),
        rotation: 2
    }, {
        idString: "control_panel2",
        position: e.create(5, -57),
        rotation: 2
    }, {
        idString: "regular_crate",
        position: e.create(-7, -84)
    }, {
        idString: "barrel",
        position: e.create(2, -85)
    }, {
        idString: "bookshelf",
        position: e.create(23.5, -86.5),
        rotation: 2
    }, {
        idString: "window2",
        position: e.create(-16, -50.5),
        rotation: 1
    }, {
        idString: "window2",
        position: e.create(-6, -50.5),
        rotation: 1
    }, {
        idString: "window2",
        position: e.create(7, -50.5),
        rotation: 1
    }, {
        idString: "window2",
        position: e.create(18, -50.5),
        rotation: 1
    }],
    subBuildings: [{
        idString: Ne,
        position: e.create(19, -64),
        orientation: 2
    }, {
        idString: Ne,
        position: e.create(-15, 20)
    }, {
        idString: Ne,
        position: e.create(-16, -20),
        orientation: 2
    }, {
        idString: Ne,
        position: e.create(-31, -20),
        orientation: 2
    }, {
        idString: Ne,
        position: e.create(16, -22)
    }, {
        idString: Ne,
        position: e.create(15, 22),
        orientation: 2
    }, {
        idString: Ne,
        position: e.create(-1, 22),
        orientation: 2
    }, {
        idString: Ne,
        position: e.create(16, -110)
    }, {
        idString: Ne,
        position: e.create(31, -110)
    }],
    lootSpawners: [{
        position: e.create(10, -73),
        table: "gas_can"
    }]
}, {
    idString: "oil_tanker_ship",
    name: "Oil Tanker",
    spawnHitbox: l.fromRect(110, 300),
    scopeHitbox: new H(l.fromRect(65, 29, e.create(4.5, -102.5)),l.fromRect(7.5, 28, e.create(41.7, -101.5))),
    puzzle: {
        triggerInteractOn: "vault_door",
        interactDelay: 1500
    },
    floorImages: [{
        key: "oil_tanker_ship_floor_1",
        position: e.create(0, -59.439)
    }, {
        key: "oil_tanker_ship_floor_2",
        position: e.create(0, 59.439)
    }],
    ceilingImages: [{
        key: "oil_tanker_ship_ceiling",
        position: e.create(7, -99.5),
        scale: e.create(2, 2)
    }, {
        key: "oil_tanker_ship_tank_ceiling",
        position: e.create(9.5, 20)
    }],
    floors: [{
        type: "stone",
        hitbox: l.fromRect(82, 210, e.create(8.5, -13))
    }, {
        type: "metal",
        hitbox: l.fromRect(20, 10, e.create(-42, 18.5))
    }, {
        type: "metal",
        hitbox: l.fromRect(20, 10, e.create(-42, 58.5))
    }],
    obstacles: [{
        idString: "oil_tanker_ship",
        position: e.create(0, 0),
        rotation: 0
    }, {
        idString: "large_oil_tank",
        position: e.create(9, -46.5),
        rotation: -Math.PI * 2
    }, {
        idString: "large_oil_tank",
        position: e.create(9, 20),
        rotation: Math.PI / 2
    }, {
        idString: "large_oil_tank",
        position: e.create(9, 88),
        rotation: -Math.PI / 2
    }, {
        idString: "window2",
        position: e.create(-.25, -87.5),
        rotation: 1
    }, {
        idString: "window2",
        position: e.create(9.75, -87.5),
        rotation: 1
    }, {
        idString: "window2",
        position: e.create(22, -87.5),
        rotation: 1
    }, {
        idString: "window2",
        position: e.create(31, -87.5),
        rotation: 1
    }, {
        idString: "control_panel_small",
        position: e.create(-1, -93.8),
        rotation: 2
    }, {
        idString: "large_drawer",
        position: e.create(9.5, -93.5),
        rotation: 2
    }, {
        idString: "control_panel",
        position: e.create(22, -93.8),
        rotation: 2,
        puzzlePiece: !0
    }, {
        idString: "control_panel_small",
        position: e.create(31.7, -93.8),
        rotation: 2
    }, {
        idString: "vault_door",
        position: e.create(-6.5, -110),
        rotation: 3
    }, {
        idString: "briefcase",
        position: e.create(-22.5, -94),
        rotation: 0
    }, {
        idString: "regular_crate",
        position: e.create(-12.19, -94.34)
    }, {
        idString: "regular_crate",
        position: e.create(-23.1, -102.93)
    }, {
        idString: "barrel",
        position: e.create(-27, 68)
    }, {
        idString: "regular_crate",
        position: e.create(-18, 66)
    }, {
        idString: "regular_crate",
        position: e.create(42, 66)
    }, {
        idString: {
            regular_crate: 2,
            aegis_crate: 1,
            flint_crate: 1
        },
        position: e.create(32, 60),
        rotation: 2
    }, {
        idString: "sandbags",
        position: e.create(-22, 1),
        rotation: 2
    }, {
        idString: "super_barrel",
        position: e.create(-27, -20)
    }, {
        idString: "barrel",
        position: e.create(-15, -15)
    }, {
        idString: "regular_crate",
        position: e.create(-25, -10)
    }, {
        idString: "sandbags",
        position: e.create(43, -20),
        rotation: 1
    }, {
        idString: "super_barrel",
        position: e.create(43, -7.5)
    }, {
        idString: "sandbags",
        position: e.create(30, -16),
        rotation: 2
    }, {
        idString: "flint_crate",
        position: e.create(41, -35)
    }],
    subBuildings: [{
        idString: "oil_tanker_ship_vault",
        position: e.create(-17.6, -102.6)
    }]
}, {
    idString: "oil_tanker_ship_vault",
    name: "Oil Tanker Ship Vault",
    spawnHitbox: l.fromRect(22.73, 28.32),
    scopeHitbox: l.fromRect(22.73, 28.32),
    ceilingZIndex: P.BuildingsCeiling - 1,
    ceilingImages: [{
        key: "oil_tanker_ship_vault_ceiling",
        position: e.create(0, 0)
    }]
}, {
    idString: "port",
    name: "Port",
    spawnHitbox: l.fromRect(315, 290, e.create(-5, 0)),
    groundGraphics: [{
        color: "#6664",
        hitbox: l.fromRect(297.2, 271.7, e.create(-4.5, 0))
    }, {
        color: 5855577,
        hitbox: l.fromRect(293.5, 267.96, e.create(-4.5, 0))
    }, {
        color: 15132390,
        hitbox: new H(l.fromRect(1.47, 102.18, e.create(129.93, 73.42)),l.fromRect(126.01, 1.5, e.create(67.66, 123.77)),l.fromRect(84.61, 1.48, e.create(88.35, 74.7)),l.fromRect(74.74, 1.52, e.create(-113.86, -33.25)),l.fromRect(84.61, 1.49, e.create(88.35, 49.55)),l.fromRect(1.51, 56, e.create(-77.24, -5)),l.fromRect(207.5, 1.5, e.create(25.75, 23.08)),l.fromRect(84.61, 1.49, e.create(88.35, 98.77)),l.fromRect(1.47, 63.43, e.create(5.4, 92.81)),l.fromRect(82.47, 1.48, e.create(-35.1, 61.83)),l.fromRect(1.44, 8.6, e.create(-75.61, 65.39)),l.fromRect(1.46, 8.6, e.create(-102.2, 65.39)),l.fromRect(14, 1.48, e.create(-109.9, 61.83)),l.fromRect(1.46, 55.47, e.create(-116.51, 34.84)),l.fromRect(35.45, 1.47, e.create(-133.5, 7.85)))
    }, {
        color: 11710976,
        hitbox: l.fromRect(1.87, 186.8, e.create(143.17, -33.97))
    }, {
        color: 2829099,
        hitbox: new H(l.fromRect(.75, 128, e.create(64.33, -46)),l.fromRect(.75, 128, e.create(66.55, -46)),l.fromRect(.75, 128, e.create(127.9, -46)),l.fromRect(.75, 128, e.create(130.1, -46)))
    }],
    floors: [{
        type: "stone",
        hitbox: l.fromRect(300, 270, e.create(-5, 0))
    }],
    decals: [{
        idString: "floor_oil_01",
        position: e.create(69.49, 116.11)
    }, {
        idString: "floor_oil_02",
        position: e.create(-87.54, -117.88)
    }, {
        idString: "floor_oil_03",
        position: e.create(-147.56, -92.28)
    }, {
        idString: "floor_oil_04",
        position: e.create(86.72, -64.06)
    }, {
        idString: "floor_oil_05",
        position: e.create(-135.24, 82.47)
    }, {
        idString: "floor_oil_06",
        position: e.create(-79.85, -46.97)
    }, {
        idString: "floor_oil_07",
        position: e.create(-13.48, 10.95)
    }, {
        idString: "container_mark",
        position: e.create(-60, 5)
    }, {
        idString: "container_mark",
        position: e.create(-45, 5)
    }, {
        idString: "container_mark",
        position: e.create(-30, 5)
    }, {
        idString: "container_mark",
        position: e.create(-60, -25)
    }, {
        idString: "container_mark",
        position: e.create(-45, -25)
    }, {
        idString: "container_mark",
        position: e.create(-30, -25)
    }, {
        idString: "container_mark",
        position: e.create(5, 5)
    }, {
        idString: "container_mark",
        position: e.create(20, 5)
    }, {
        idString: "container_mark",
        position: e.create(35, 5)
    }, {
        idString: "container_mark",
        position: e.create(5, -25)
    }, {
        idString: "container_mark",
        position: e.create(20, -25)
    }, {
        idString: "container_mark",
        position: e.create(35, -25)
    }, {
        idString: "container_mark",
        position: e.create(-100, -60)
    }, {
        idString: "container_mark",
        position: e.create(-115, -60)
    }, {
        idString: "container_mark",
        position: e.create(-130, -60)
    }, {
        idString: "container_mark",
        position: e.create(-100, -90)
    }, {
        idString: "container_mark",
        position: e.create(-115, -90)
    }, {
        idString: "container_mark",
        position: e.create(-130, -90)
    }, {
        idString: "container_mark",
        position: e.create(82.5, 0)
    }, {
        idString: "container_mark",
        position: e.create(97.5, 0)
    }, {
        idString: "container_mark",
        position: e.create(112.5, 0)
    }, {
        idString: "container_mark",
        position: e.create(82.5, -30)
    }, {
        idString: "container_mark",
        position: e.create(97.5, -30)
    }, {
        idString: "container_mark",
        position: e.create(112.5, -30)
    }],
    obstacles: [{
        idString: "regular_crate",
        position: e.create(67.36, 58.18)
    }, {
        idString: "forklift",
        position: e.create(95, 64),
        rotation: 1
    }, {
        idString: "pallet",
        position: e.create(107.5, 64),
        rotation: 1
    }, {
        idString: "barrel",
        position: e.create(107.5, 64)
    }, {
        idString: "trailer",
        position: e.create(100, 84),
        rotation: 3
    }, {
        idString: "truck",
        position: e.create(72, 84),
        rotation: 3
    }, {
        idString: "regular_crate",
        position: e.create(120, 110)
    }, {
        idString: {
            regular_crate: 3,
            grenade_crate: 1
        },
        position: e.create(110, 115)
    }, {
        idString: "box",
        position: e.create(87, 123)
    }, {
        idString: "box",
        position: e.create(92, 120)
    }, {
        idString: "box",
        position: e.create(85, 117)
    }, {
        idString: "box",
        position: e.create(92, 114)
    }, {
        idString: "forklift",
        position: e.create(90, 102.5),
        rotation: 1
    }, {
        idString: "pallet",
        position: e.create(100, 102.5),
        rotation: 1
    }, {
        idString: "regular_crate",
        position: e.create(100, 102.5)
    }, {
        idString: "truck",
        position: e.create(12.5, 40),
        rotation: 3
    }, {
        idString: "trailer",
        position: e.create(40, 40),
        rotation: 3
    }, {
        idString: "barrier",
        position: e.create(-124, -10),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(-144, 65),
        rotation: 1
    }, {
        idString: "sandbags",
        position: e.create(-132, 60),
        rotation: 2
    }, {
        idString: "super_barrel",
        position: e.create(-137, 75)
    }, {
        idString: "barrel",
        position: e.create(-147, 80)
    }, {
        idString: "super_barrel",
        position: e.create(-134, 90)
    }, {
        idString: "barrel",
        position: e.create(-126, 85)
    }, {
        idString: {
            aegis_crate: 1,
            flint_crate: 1
        },
        position: e.create(-126, 100)
    }, {
        idString: {
            aegis_crate: 1,
            flint_crate: 1
        },
        position: e.create(-136, 105)
    }, {
        idString: "sandbags",
        position: e.create(-132, 117),
        rotation: 2
    }, {
        idString: "barrel",
        position: e.create(-145, 117)
    }, {
        idString: "grenade_crate",
        position: e.create(-124, -120)
    }, {
        idString: {
            regular_crate: 3,
            grenade_crate: 1
        },
        position: e.create(-135, -125)
    }, {
        idString: {
            regular_crate: 2,
            flint_crate: 1,
            aegis_crate: 1
        },
        position: e.create(-140, -115),
        rotation: 1
    }, {
        idString: "barrel",
        position: e.create(-142, -95)
    }, {
        idString: "super_barrel",
        position: e.create(-147, -87)
    }, {
        idString: "regular_crate",
        position: e.create(54.57, -72.34)
    }, {
        idString: "forklift",
        position: e.create(-60, -55),
        rotation: 1
    }, {
        idString: "pallet",
        position: e.create(-50, -55),
        rotation: 1
    }, {
        idString: {
            flint_crate: 1,
            regular_crate: 1
        },
        position: e.create(-75, -45)
    }, {
        idString: "flint_crate",
        position: e.create(-50, -55)
    }, {
        idString: {
            regular_crate: 3,
            grenade_crate: 1
        },
        position: e.create(108, -110)
    }, {
        idString: "regular_crate",
        position: e.create(97, -100)
    }, {
        idString: "grenade_crate",
        position: e.create(99, -90)
    }, {
        idString: "forklift",
        position: e.create(110, -95),
        rotation: 2
    }, {
        idString: "pallet",
        position: e.create(110, -107.5),
        rotation: 2
    }, {
        idString: "box",
        position: e.create(115.28, -104.85)
    }, {
        idString: {
            barrel: 2,
            super_barrel: 1
        },
        position: e.create(93.77, -72.33)
    }, {
        idString: {
            barrel: 2,
            super_barrel: 1
        },
        position: e.create(75.38, -68.72)
    }, {
        idString: "aegis_crate",
        position: e.create(54.48, -118.9)
    }, {
        idString: {
            aegis_crate: 1,
            regular_crate: 1
        },
        position: e.create(64.96, -123.57)
    }, ...Array.from({
        length: 5
    }, (t,a)=>({
        idString: "bollard",
        position: e.create(140.4, 50 - 41.5 * a),
        rotation: 0
    })), ...Array.from({
        length: 20
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(-.75 - 7.8 * a, 135),
        rotation: 0
    })), ...Array.from({
        length: 14
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(130 - 7.8 * a, 135),
        rotation: 0
    })), ...Array.from({
        length: 16
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(-152.3, 131.8 - 7.8 * a),
        rotation: 1
    })), ...Array.from({
        length: 13
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(-152.3, -37.8 - 7.8 * a),
        rotation: 1
    })), ...Array.from({
        length: 24
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(46 - 7.8 * a, -135),
        rotation: 0
    })), ...Array.from({
        length: 9
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(132.2 - 7.8 * a, -135),
        rotation: 0
    })), {
        idString: "port_fence_side",
        position: e.create(139.95, -131.59),
        rotation: 1
    }, {
        idString: "crane_base_end",
        position: e.create(65.5, 18.59),
        rotation: 0
    }, {
        idString: "crane_base_end",
        position: e.create(129, -110.46),
        rotation: 0
    }, {
        idString: "crane_base_end",
        position: e.create(129, 18.59),
        rotation: 0
    }, {
        idString: "crane_base_end",
        position: e.create(65.5, -110.46),
        rotation: 0
    }],
    subBuildings: [{
        idString: "container_1",
        position: e.create(-40, 40),
        orientation: 1
    }, {
        idString: "crane",
        position: e.create(97, 25)
    }, {
        idString: "port_warehouse_red",
        position: e.create(-95, -59),
        orientation: 1
    }, {
        idString: "port_warehouse_blue",
        position: e.create(-97, 15),
        orientation: 3
    }, {
        idString: "port_shed",
        position: e.create(-25, -134),
        orientation: 1
    }, {
        idString: "porta_potty",
        position: e.create(-47, -140.8),
        orientation: 1
    }, {
        idString: "porta_potty",
        position: e.create(82.5, -100)
    }, {
        idString: ne,
        position: e.create(-60, 5)
    }, {
        idString: ne,
        position: e.create(-45, 5)
    }, {
        idString: ne,
        position: e.create(-30, 5)
    }, {
        idString: ne,
        position: e.create(60, 25),
        orientation: 2
    }, {
        idString: ne,
        position: e.create(45, 25),
        orientation: 2
    }, {
        idString: ne,
        position: e.create(30, 25),
        orientation: 2
    }, {
        idString: ne,
        position: e.create(5, 5)
    }, {
        idString: ne,
        position: e.create(20, 5)
    }, {
        idString: ne,
        position: e.create(35, 5)
    }, {
        idString: ne,
        position: e.create(-5, 25),
        orientation: 2
    }, {
        idString: ne,
        position: e.create(-20, 25),
        orientation: 2
    }, {
        idString: ne,
        position: e.create(-35, 25),
        orientation: 2
    }, {
        idString: ne,
        position: e.create(-100, -60)
    }, {
        idString: ne,
        position: e.create(-115, -60)
    }, {
        idString: ne,
        position: e.create(-130, -60)
    }, {
        idString: ne,
        position: e.create(100, 90),
        orientation: 2
    }, {
        idString: ne,
        position: e.create(115, 90),
        orientation: 2
    }, {
        idString: ne,
        position: e.create(130, 90),
        orientation: 2
    }, {
        idString: ne,
        position: e.create(82.5, 0)
    }, {
        idString: ne,
        position: e.create(97.5, 0)
    }, {
        idString: ne,
        position: e.create(112.5, 0)
    }, {
        idString: ne,
        position: e.create(-82.5, 30),
        orientation: 2
    }, {
        idString: ne,
        position: e.create(-97.5, 30),
        orientation: 2
    }, {
        idString: ne,
        position: e.create(-112.5, 30),
        orientation: 2
    }]
}, {
    idString: "port_complex",
    name: "Port Complex",
    spawnHitbox: l.fromRect(365, 290, e.create(-100, 0)),
    spawnMode: de.Beach,
    subBuildings: [{
        idString: "port",
        position: e.create(-120, 0)
    }, {
        idString: {
            ship: 1,
            oil_tanker_ship: 1
        },
        position: e.create(74, -65)
    }]
}, {
    idString: "armory_barracks",
    name: "Armory Barracks",
    spawnHitbox: l.fromRect(50, 84),
    scopeHitbox: l.fromRect(50, 84),
    floorImages: [{
        key: "armory_barracks_floor",
        position: e.create(0, 0)
    }],
    ceilingImages: [{
        key: "armory_barracks_ceiling",
        position: e.create(0, 0),
        scale: e.create(2, 2)
    }],
    floors: [{
        type: "wood",
        hitbox: l.fromRect(50, 84)
    }],
    obstacles: [{
        idString: "armory_barracks_walls",
        position: e.create(0, 0),
        rotation: 0
    }, {
        idString: "door",
        position: e.create(2.7, -41.3),
        rotation: 2
    }, {
        idString: "fridge",
        position: e.create(-19.8, -35.5),
        rotation: 1
    }, {
        idString: "stove",
        position: e.create(-19.8, -26.1),
        rotation: 1
    }, {
        idString: "bunk_bed",
        position: e.create(18, -31.25),
        rotation: 0
    }, {
        idString: "small_drawer",
        position: e.create(18.4, -18.7),
        rotation: 0
    }, {
        idString: "small_drawer",
        position: e.create(-2, -13.6),
        rotation: 1
    }, {
        idString: "bunk_bed",
        position: e.create(-14.43, -13.21),
        rotation: 1
    }, {
        idString: "bunk_bed",
        position: e.create(-18.1, 7.6),
        rotation: 2
    }, {
        idString: "bunk_bed",
        position: e.create(17.95, 7),
        rotation: 0
    }, {
        idString: "bunk_bed",
        position: e.create(-14.48, 34.83),
        rotation: 3
    }, {
        idString: "cabinet",
        position: e.create(16, 37.6),
        rotation: 2
    }, {
        idString: "cabinet",
        position: e.create(16, 20.9),
        rotation: 0
    }, {
        idString: "door",
        position: e.create(1.15, 41.3),
        rotation: 0
    }, {
        idString: "window",
        position: e.create(24.5, -9.5),
        rotation: 0
    }, {
        idString: "window",
        position: e.create(24.5, 28.75),
        rotation: 0
    }, {
        idString: "window",
        position: e.create(-24.5, 23),
        rotation: 0
    }]
}, {
    idString: "armory_center",
    name: "Armory Center",
    spawnHitbox: l.fromRect(31, 44, e.create(1.5, 0)),
    scopeHitbox: l.fromRect(31, 44, e.create(1.5, 0)),
    floorImages: [{
        key: "armory_center_floor",
        position: e.create(0, 0)
    }],
    ceilingImages: [{
        key: "armory_center_ceiling",
        position: e.create(1.25, 0),
        scale: e.create(2, 2)
    }],
    floors: [{
        type: "wood",
        hitbox: l.fromRect(31, 44, e.create(1.5, 0))
    }],
    obstacles: [{
        idString: "armory_center_walls",
        position: e.create(0, 0),
        rotation: 0
    }, {
        idString: "door",
        position: e.create(-13.9, -12.43),
        rotation: 1
    }, {
        idString: "cabinet",
        position: e.create(12.45, -11.6),
        rotation: 3
    }, {
        idString: "table",
        position: e.create(8.85, 1.6),
        rotation: 1
    }, {
        idString: "chair",
        position: e.create(3, 1.7),
        rotation: 3
    }, {
        idString: "chair",
        position: e.create(10.1, 6),
        rotation: 0
    }, {
        idString: "small_drawer",
        position: e.create(-9.2, 16.8),
        rotation: 2
    }, {
        idString: "gun_mount_maul",
        position: e.create(3, 19.05),
        rotation: 2
    }, {
        idString: "window",
        position: e.create(-13.9, 7.1),
        rotation: 0
    }]
}, {
    idString: "armory_vault",
    name: "Armory Vault",
    spawnHitbox: l.fromRect(72, 38, e.create(0, -2)),
    scopeHitbox: l.fromRect(72, 38, e.create(0, -2)),
    puzzle: {
        triggerInteractOn: "vault_door",
        interactDelay: 1500,
        order: ["o", "l", "j", "y"],
        solvedSound: !0,
        setSolvedImmediately: !0
    },
    floorImages: [{
        key: "armory_vault_floor",
        position: e.create(0, 0)
    }],
    ceilingImages: [{
        key: "armory_vault_ceiling",
        position: e.create(0, -2.5),
        scale: e.create(2, 2)
    }],
    ceilingZIndex: P.BuildingsCeiling + 1,
    floors: [{
        type: "wood",
        hitbox: l.fromRect(72, 38, e.create(0, -2))
    }],
    subBuildings: [{
        idString: "armory_inner_vault",
        position: e.create(-25, -2.25)
    }],
    obstacles: [{
        idString: "armory_vault_walls",
        position: e.create(0, 0),
        rotation: 0
    }, {
        idString: "door",
        position: e.create(3.8, 16.5),
        rotation: 0
    }, {
        idString: "window",
        position: e.create(18.1, 16.5),
        rotation: 1
    }, {
        idString: "gun_case",
        position: e.create(31.9, 10),
        rotation: 3
    }, {
        idString: "gun_case",
        position: e.create(-7.5, 12.4),
        rotation: 2
    }, {
        idString: "ammo_crate",
        position: e.create(29.5, -.45),
        rotation: 0
    }, {
        idString: "ammo_crate",
        position: e.create(12.85, -.45),
        rotation: 0
    }, {
        idString: "tear_gas_crate",
        position: e.create(21.2, -.45),
        rotation: 1
    }, {
        idString: "grenade_crate",
        position: e.create(-9.1, -15.9)
    }, ...Array.from({
        length: 4
    }, (t,a)=>({
        idString: "button",
        position: e.create(10 + 4.75 * a, -19.2),
        rotation: 0,
        puzzlePiece: ["y", "o", "j", "l"][a]
    })), {
        idString: "control_panel2",
        position: e.create(30.7, -14),
        rotation: 1
    }, {
        idString: "ammo_crate",
        position: e.create(-20, -14.8),
        rotation: 0
    }, {
        idString: "regular_crate",
        position: e.create(-29.8, -14.8),
        rotation: 0
    }, {
        idString: "barrel",
        position: e.create(-30.9, 11.3)
    }, {
        idString: "briefcase",
        position: e.create(-20.7, 10.85),
        rotation: 0
    }, {
        idString: "vault_door",
        position: e.create(-14.1, -3.22),
        rotation: 3
    }]
}, {
    idString: "armory_inner_vault",
    name: "Armory Inner Vault",
    spawnHitbox: l.fromRect(20.87, 36.34),
    scopeHitbox: l.fromRect(20.87, 36.34),
    ceilingImages: [{
        key: "armory_inner_vault_ceiling",
        position: e.create(0, 0)
    }]
}, {
    idString: "armory",
    name: "Armory",
    spawnHitbox: l.fromRect(160, 176),
    spawnMode: de.GrassAndSand,
    subBuildings: [{
        idString: "armory_barracks",
        position: e.create(-41.31, 27.86)
    }, {
        idString: "armory_center",
        position: e.create(55.4, 15.07)
    }, {
        idString: "armory_vault",
        position: e.create(-35.03, -58.37)
    }, {
        idString: "port_shed",
        position: e.create(-60.9, -65.63),
        orientation: 2
    }, {
        idString: "porta_potty",
        position: e.create(31.87, -60.35),
        orientation: 1
    }],
    groundGraphics: [{
        color: "#6664",
        hitbox: l.fromRect(153.09, 1.87, e.create(0, -83.96))
    }, {
        color: "#6664",
        hitbox: l.fromRect(153.09, 1.87, e.create(0, 83.96))
    }, {
        color: "#6664",
        hitbox: l.fromRect(1.93, 168, e.create(-75.57, 0))
    }, {
        color: "#6664",
        hitbox: l.fromRect(1.93, 168, e.create(75.57, 0))
    }, {
        color: 4210752,
        hitbox: new at([e.create(5.54, -80.63), e.create(62.37, -80.63), e.create(62.37, -24.57), e.create(48.11, -15.97), e.create(34.01, -15.97), e.create(34.01, 84.86), e.create(-8.82, 84.86), e.create(-8.82, -32.87), e.create(5.54, -41.2)])
    }, ...Array.from({
        length: 4
    }, (t,a)=>({
        color: 5592405,
        hitbox: l.fromRect(13.15, 24.16, e.create(-1.5, -3.4 + 25.2 * a))
    })), ...Array.from({
        length: 6
    }, (t,a)=>({
        color: 5592405,
        hitbox: l.fromRect(13.15, 24.16, e.create(12.7, -53.8 + 25.2 * a))
    })), ...Array.from({
        length: 6
    }, (t,a)=>({
        color: 5592405,
        hitbox: l.fromRect(13.15, 24.16, e.create(26.95, -53.8 + 25.2 * a))
    })), ...Array.from({
        length: 2
    }, (t,a)=>({
        color: 5592405,
        hitbox: l.fromRect(13.15, 24.16, e.create(41.1, -53.8 + 25.2 * a))
    })), {
        color: 5592405,
        hitbox: l.fromRect(13.15, 24.16, e.create(55.3, -53.8))
    }, {
        color: 5592405,
        hitbox: l.fromRect(27.27, 13.11, e.create(19.83, -73.38))
    }, {
        color: 5592405,
        hitbox: l.fromRect(27.27, 13.11, e.create(48.2, -73.38))
    }, {
        color: 5592405,
        hitbox: new at([e.create(5.05, -40.17), e.create(5.05, -16.47), e.create(-8.06, -16.47), e.create(-8.06, -32.29)])
    }, {
        color: 5592405,
        hitbox: new at([e.create(61.82, -40.67), e.create(61.75, -24.97), e.create(48.71, -16.97), e.create(48.71, -40.73)])
    }],
    floors: [{
        type: "stone",
        hitbox: new at([e.create(5.54, -80.63), e.create(62.37, -80.63), e.create(62.37, -24.57), e.create(48.11, -15.97), e.create(34.01, -15.97), e.create(34.01, 84.86), e.create(-8.82, 84.86), e.create(-8.82, -32.87), e.create(5.54, -41.2)])
    }],
    obstacles: [{
        idString: "regular_crate",
        position: e.create(63.13, -15.17)
    }, {
        idString: "regular_crate",
        position: e.create(-7.99, 2.28)
    }, {
        idString: "regular_crate",
        position: e.create(7.06, 30.07)
    }, {
        idString: "regular_crate",
        position: e.create(18.06, 27.86)
    }, {
        idString: "regular_crate",
        position: e.create(-64.29, 76.5)
    }, {
        idString: "regular_crate",
        position: e.create(65.01, -56.73)
    }, {
        idString: "regular_crate",
        position: e.create(8.45, -66.79)
    }, {
        idString: "flint_crate",
        position: e.create(33.86, -46.16)
    }, {
        idString: "barrel",
        position: e.create(-10.72, -7.93)
    }, {
        idString: "barrel",
        position: e.create(9.13, 40.34)
    }, {
        idString: "barrel",
        position: e.create(69.75, 42.55)
    }, {
        idString: "barrel",
        position: e.create(24.36, -46.95)
    }, {
        idString: "barrel",
        position: e.create(70.01, -72.17)
    }, {
        idString: "super_barrel",
        position: e.create(34.44, -55.28),
        rotation: 0
    }, {
        idString: "super_barrel",
        position: e.create(44.51, 78.15),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(15.15, 17.92),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(-10, 78.77),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(44.5, 65),
        rotation: 1
    }, {
        idString: "sandbags",
        position: e.create(31.6, -36.18),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(30.66, -70.69),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(18.54, -67.73),
        rotation: 1
    }, {
        idString: "m1117",
        position: e.create(48.93, -53.75),
        rotation: 0
    }, {
        idString: "gun_case",
        position: e.create(30.66, -28.84),
        rotation: 0
    }, {
        idString: "gun_case",
        position: e.create(63.16, -36.39),
        rotation: 1
    }, {
        idString: "gun_case",
        position: e.create(19.48, 36.69),
        rotation: 0
    }, {
        idString: "tear_gas_crate",
        position: e.create(16.55, 9.68),
        rotation: 0
    }, {
        idString: "tear_gas_crate",
        position: e.create(33.06, -62.76),
        rotation: 0
    }, {
        idString: "grenade_crate",
        position: e.create(-55.29, 78.02)
    }, {
        idString: "grenade_crate",
        position: e.create(69.81, -34.24)
    }, {
        idString: "ammo_crate",
        position: e.create(50.07, -20.07),
        rotation: 0
    }, {
        idString: "barrier",
        position: e.create(13.91, 70.32),
        rotation: 1
    }, {
        idString: "port_fence_side",
        position: e.create(72.29, 80.72),
        rotation: 0
    }, {
        idString: "port_fence_side",
        position: e.create(72.32, -80.71),
        rotation: 1
    }, {
        idString: "port_fence_side",
        position: e.create(-72.32, -80.69),
        rotation: 2
    }, ...Array.from({
        length: 9
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(-63.89 + 8.45 * a, -84.11),
        rotation: 0
    })), ...Array.from({
        length: 3
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(21.1 + 8.45 * a, -84.11),
        rotation: 0
    })), ...Array.from({
        length: 6
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(75.75, -72.31 + 8.45 * a),
        rotation: 1
    })), ...Array.from({
        length: 9
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(75.75, 4.7 + 8.45 * a),
        rotation: 1
    })), ...Array.from({
        length: 3
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(46.95 + 8.45 * a, 84.11),
        rotation: 0
    })), ...Array.from({
        length: 6
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(-55.3 + 8.45 * a, 84.11),
        rotation: 0
    })), ...Array.from({
        length: 9
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(-75.75, 4.7 + 8.45 * a),
        rotation: 1
    })), ...Array.from({
        length: 8
    }, (t,a)=>({
        idString: "port_fence",
        position: e.create(-75.75, -72.31 + 8.45 * a),
        rotation: 1
    }))]
}, {
    idString: "mobile_home",
    name: "Mobile Home",
    spawnHitbox: l.fromRect(65, 40),
    scopeHitbox: l.fromRect(42, 20, e.create(2, -1)),
    floorImages: [{
        key: "mobile_home_floor",
        position: e.create(0, 0)
    }],
    ceilingImages: [{
        key: "mobile_home_ceiling",
        position: e.create(2, -1),
        residue: "mobile_home_residue"
    }],
    floors: [{
        type: "wood",
        hitbox: l.fromRect(43, 20, e.create(2, -1))
    }, {
        type: "metal",
        hitbox: l.fromRect(10, 4.5, e.create(6, 11))
    }, {
        type: "metal",
        hitbox: l.fromRect(4.5, 10, e.create(-21.3, -4.4))
    }],
    wallsToDestroy: 2,
    obstacles: [{
        idString: "door",
        position: e.create(-18.75, -4.05),
        rotation: 3
    }, {
        idString: "door",
        position: e.create(5.5, 8.33),
        rotation: 2
    }, {
        idString: "mobile_home_wall_1",
        position: e.create(-16, -10.43),
        rotation: 0
    }, {
        idString: "mobile_home_wall_1",
        position: e.create(-18.65, 4.03),
        rotation: 1
    }, {
        idString: "mobile_home_wall_2",
        position: e.create(16.45, 8.37),
        rotation: 0
    }, {
        idString: "mobile_home_wall_3",
        position: e.create(22.7, -1.03),
        rotation: 1
    }, {
        idString: "mobile_home_wall_3",
        position: e.create(11.65, -10.43),
        rotation: 0
    }, {
        idString: "mobile_home_wall_3",
        position: e.create(-9.35, 8.32),
        rotation: 0
    }, {
        idString: "mobile_home_bed",
        position: e.create(13.55, -5.72),
        rotation: 3
    }, {
        idString: "small_drawer",
        position: e.create(17.45, 3.27),
        rotation: 3
    }, {
        idString: "mobile_home_sink",
        position: e.create(-12.8, 3.4),
        rotation: 2
    }, {
        idString: "mobile_home_stove",
        position: e.create(-3.75, 3.57),
        rotation: 2
    }, {
        idString: "tire",
        position: e.create(-21.25, 4.85),
        rotation: 0
    }, {
        idString: "mobile_home_window",
        position: e.create(-5.6, -10.42),
        rotation: 0
    }, {
        idString: "box",
        position: e.create(26.2, -3.43),
        rotation: 0
    }, {
        idString: "box",
        position: e.create(28, 1.52),
        rotation: 0
    }, {
        idString: "barrel",
        position: e.create(-18.9, 14.62),
        rotation: 0
    }]
}, {
    idString: "tugboat_red",
    name: "Tugboat",
    spawnMode: de.Beach,
    spawnHitbox: l.fromRect(70, 110, e.create(90, 0)),
    scopeHitbox: l.fromRect(30, 35, e.create(90, 12.5)),
    floorImages: [{
        key: "tugboat_red_floor",
        position: e.create(90, 0)
    }],
    ceilingImages: [{
        key: "tugboat_red_ceiling",
        position: e.create(90, 12.5)
    }],
    floors: [{
        type: "wood",
        hitbox: l.fromRect(29, 71.5, e.create(90, -7))
    }, {
        type: "metal",
        hitbox: l.fromRect(39.5, 75, e.create(90, -8))
    }, {
        type: "metal",
        hitbox: l.fromRect(9.7, 10, e.create(71, -23.7))
    }, {
        type: "metal",
        hitbox: l.fromRect(10, 8.7, e.create(89.9, -46))
    }],
    obstacles: [{
        idString: "tugboat",
        position: e.create(90, 0),
        rotation: 0
    }, {
        idString: "tire",
        position: e.create(111.28, 5.18),
        rotation: 0
    }, {
        idString: "tire",
        position: e.create(111.4, 14.57),
        rotation: 0
    }, {
        idString: "tire",
        position: e.create(111.4, 24.17),
        rotation: 0
    }, {
        idString: "tire",
        position: e.create(71.55, 24.17),
        rotation: 0
    }, {
        idString: "tire",
        position: e.create(71.5, 14.57),
        rotation: 0
    }, {
        idString: "tire",
        position: e.create(71.45, 5.12),
        rotation: 0
    }, {
        idString: "regular_crate",
        position: e.create(81.48, -37.36)
    }, {
        idString: "regular_crate",
        position: e.create(101.49, -11.45)
    }, {
        idString: "grenade_crate",
        position: e.create(102.3, -38.43)
    }, {
        idString: "barrel",
        position: e.create(102.74, -26.23)
    }, {
        idString: "tugboat_control_panel",
        position: e.create(90, 24.1),
        rotation: 0
    }, {
        idString: "office_chair",
        position: e.create(90, 16.65),
        rotation: 0
    }, {
        idString: "door",
        position: e.create(90.45, -4.8),
        rotation: 0
    }, {
        idString: "large_drawer",
        position: e.create(99.29, 2.98),
        rotation: 3
    }, {
        idString: "life_preserver",
        position: e.create(101.23, 14.67),
        rotation: 0
    }, {
        idString: "lux_crate",
        position: e.create(80.38, 4.29),
        rotation: 1
    }, {
        idString: "window2",
        position: e.create(83.91, 30.75),
        rotation: 1
    }, {
        idString: "window2",
        position: e.create(95.63, 30.75),
        rotation: 1
    }],
    lootSpawners: [{
        table: "tugboat_red_floor",
        position: e.create(89, -25)
    }]
}, {
    idString: "tugboat_white",
    name: "Tugboat",
    spawnMode: de.Beach,
    spawnHitbox: l.fromRect(70, 110, e.create(90, 0)),
    scopeHitbox: l.fromRect(30, 35, e.create(90, 12.5)),
    floorImages: [{
        key: "tugboat_white_floor",
        position: e.create(90, 0)
    }],
    ceilingImages: [{
        key: "tugboat_white_ceiling",
        position: e.create(90, 12.5)
    }],
    floors: [{
        type: "wood",
        hitbox: l.fromRect(29, 71.5, e.create(90, -7))
    }, {
        type: "metal",
        hitbox: l.fromRect(39.5, 75, e.create(90, -8))
    }, {
        type: "metal",
        hitbox: l.fromRect(9.7, 10, e.create(71, -23.7))
    }, {
        type: "metal",
        hitbox: l.fromRect(10, 8.7, e.create(89.9, -46))
    }],
    obstacles: [{
        idString: "tugboat",
        position: e.create(90, 0),
        rotation: 0
    }, {
        idString: "tire",
        position: e.create(111.28, 5.18),
        rotation: 0
    }, {
        idString: "tire",
        position: e.create(111.4, 14.57),
        rotation: 0
    }, {
        idString: "tire",
        position: e.create(111.4, 24.17),
        rotation: 0
    }, {
        idString: "tire",
        position: e.create(71.55, 24.17),
        rotation: 0
    }, {
        idString: "tire",
        position: e.create(71.5, 14.57),
        rotation: 0
    }, {
        idString: "tire",
        position: e.create(71.45, 5.12),
        rotation: 0
    }, {
        idString: "regular_crate",
        position: e.create(81.48, -37.36)
    }, {
        idString: "regular_crate",
        position: e.create(101.49, -11.45)
    }, {
        idString: "grenade_crate",
        position: e.create(102.3, -38.43)
    }, {
        idString: "barrel",
        position: e.create(102.74, -26.23)
    }, {
        idString: "tugboat_control_panel",
        position: e.create(90, 24.1),
        rotation: 0
    }, {
        idString: "office_chair",
        position: e.create(90, 16.65),
        rotation: 0
    }, {
        idString: "door",
        position: e.create(90.45, -4.8),
        rotation: 0
    }, {
        idString: "large_drawer",
        position: e.create(99.29, 2.98),
        rotation: 3
    }, {
        idString: "life_preserver",
        position: e.create(101.23, 14.67),
        rotation: 0
    }, {
        idString: "gun_case",
        position: e.create(80.38, 4.29),
        rotation: 1
    }, {
        idString: "window2",
        position: e.create(83.91, 30.75),
        rotation: 1
    }, {
        idString: "window2",
        position: e.create(95.63, 30.75),
        rotation: 1
    }]
}, {
    idString: "sea_traffic_control",
    name: "Sea Traffic Control",
    spawnHitbox: l.fromRect(48, 98, e.create(0, 15)),
    scopeHitbox: l.fromRect(40, 55, e.create(0, -2)),
    spawnMode: de.Beach,
    floorImages: [{
        key: "sea_traffic_control_floor",
        position: e.create(0, 0)
    }],
    ceilingImages: [{
        key: "sea_traffic_control_ceiling",
        position: e.create(-.25, -2.4)
    }],
    floors: [{
        type: "wood",
        hitbox: l.fromRect(40, 55, e.create(0, -2))
    }, {
        type: "stone",
        hitbox: l.fromRect(10.5, 5.2, e.create(-1.7, 28.2))
    }],
    obstacles: [{
        idString: "sea_traffic_control",
        position: e.create(0, 0),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(-16.79, 33.53),
        rotation: 1
    }, {
        idString: "sandbags",
        position: e.create(-16.79, 47.1),
        rotation: 1
    }, {
        idString: "sandbags",
        position: e.create(-14.15, 58.27),
        rotation: 2
    }, {
        idString: "barrel",
        position: e.create(-7.67, 47.77)
    }, {
        idString: "barrel",
        position: e.create(14.07, 42)
    }, {
        idString: "regular_crate",
        position: e.create(11.03, 32.15)
    }, {
        idString: "door",
        position: e.create(-1.35, 25.19),
        rotation: 0
    }, {
        idString: "gun_case",
        position: e.create(-13.41, 20.92),
        rotation: 2
    }, {
        idString: "large_drawer",
        position: e.create(13.83, 1.1),
        rotation: 3
    }, {
        idString: "office_chair",
        position: e.create(.43, -16.77),
        rotation: 2
    }, {
        idString: "office_chair",
        position: e.create(-11.78, -16.82),
        rotation: 2
    }, {
        idString: "office_chair",
        position: e.create(5.67, 13.88),
        rotation: 1
    }, {
        idString: "aegis_crate",
        position: e.create(13.27, -23.45)
    }, {
        idString: "life_preserver",
        position: e.create(-17.63, -2.6),
        rotation: 2
    }, {
        idString: "life_preserver",
        position: e.create(-17.63, 7.05),
        rotation: 2
    }, {
        idString: "table",
        position: e.create(13.47, 13.95),
        rotation: 2
    }, {
        idString: "control_panel_activated",
        position: e.create(-5.75, -24.7),
        rotation: 0
    }, {
        idString: "control_panel_small",
        position: e.create(3.81, -24.7),
        rotation: 0
    }, {
        idString: "control_panel_small",
        position: e.create(-15.34, -24.7),
        rotation: 0
    }, {
        idString: "window2",
        position: e.create(20.57, -4.5),
        rotation: 0
    }, {
        idString: "window2",
        position: e.create(20.57, 7.4),
        rotation: 0
    }, {
        idString: "window2",
        position: e.create(20.57, 19.2),
        rotation: 0
    }],
    lootSpawners: [{
        table: "sea_traffic_control_floor",
        position: e.create(0, 0)
    }, {
        table: "sea_traffic_control_outside",
        position: e.create(1.5, 48)
    }]
}, {
    idString: "small_bridge",
    name: "Small Bridge",
    spawnHitbox: l.fromRect(20, 62),
    bridgeSpawnOptions: {
        minRiverWidth: 0,
        maxRiverWidth: 20,
        landCheckDist: 30
    },
    floorImages: [{
        key: "small_bridge",
        position: e.create(0, 0)
    }],
    floors: [{
        type: "wood",
        hitbox: l.fromRect(13.6, 55.7, e.create(0, 0))
    }],
    obstacles: [{
        idString: "small_bridge",
        position: e.create(0, 0),
        rotation: 0
    }],
    lootSpawners: [{
        table: "ground_loot",
        position: e.create(0, 0)
    }]
}, {
    idString: "large_bridge",
    name: "Large Bridge",
    spawnHitbox: l.fromRect(105, 230),
    bridgeSpawnOptions: {
        minRiverWidth: 20,
        maxRiverWidth: 100,
        landCheckDist: 103
    },
    floorImages: [{
        key: "large_bridge_railing",
        position: e.create(23.3, -38)
    }, {
        key: "large_bridge_railing",
        position: e.create(23.3, 35.3),
        rotation: Math.PI,
        scale: e.create(-1, 1)
    }, {
        key: "large_bridge_railing",
        position: e.create(-23.3, -38),
        scale: e.create(-1, 1)
    }, {
        key: "large_bridge_railing",
        position: e.create(-23.3, 35.3),
        rotation: Math.PI
    }],
    groundGraphics: [{
        color: "#5d5d5d",
        hitbox: l.fromRect(44.77, 211.1)
    }, {
        color: "#4d4d4d",
        hitbox: l.fromRect(43.77, 210.1)
    }, {
        color: "#5d5d5d",
        hitbox: l.fromRect(3.61, 210.1)
    }],
    decals: [{
        idString: "floor_oil_02",
        position: e.create(5.28, -66.1)
    }, {
        idString: "floor_oil_03",
        position: e.create(-12.06, 23.49),
        rotation: 1
    }, {
        idString: "smoke_explosion_decal",
        position: e.create(-12.96, -49.37)
    }, {
        idString: "explosion_decal",
        position: e.create(15.91, -2.56)
    }, {
        idString: "explosion_decal",
        position: e.create(-8.65, 42.84)
    }, {
        idString: "explosion_decal",
        position: e.create(-2.11, 85.37)
    }, {
        idString: "frag_explosion_decal",
        position: e.create(-4.31, -91.09)
    }, {
        idString: "smoke_explosion_decal",
        position: e.create(11.09, 75.08)
    }],
    floors: [{
        type: "stone",
        hitbox: l.fromRect(45, 210, e.create(0, 0))
    }],
    obstacles: [{
        idString: "large_bridge",
        position: e.create(0, 0),
        rotation: 0
    }, {
        idString: "barrel",
        position: e.create(-17.5, -80),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(25, -80),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(36, -82.5),
        rotation: 1
    }, {
        idString: "sandbags",
        position: e.create(36, -96.5),
        rotation: 1
    }, {
        idString: "grenade_crate",
        position: e.create(27.5, -88.5)
    }, {
        idString: "regular_crate",
        position: e.create(13.5, -55),
        rotation: 1
    }, {
        idString: "barrel",
        position: e.create(4, -51),
        rotation: 1
    }, {
        idString: "gun_case",
        position: e.create(13.5, -47),
        rotation: 2
    }, {
        idString: "sandbags",
        position: e.create(12.5, -40),
        rotation: 2
    }, {
        idString: "aegis_crate",
        position: e.create(14.5, -30.5)
    }, {
        idString: "m1117_damaged",
        position: e.create(-8.5, -4),
        rotation: 0
    }, {
        idString: "regular_crate",
        position: e.create(7, -20),
        rotation: 0
    }, {
        idString: "gun_case",
        position: e.create(14, 10),
        rotation: 0
    }, {
        idString: "gun_case",
        position: e.create(6, 26),
        rotation: 3
    }, {
        idString: "ammo_crate",
        position: e.create(14, 26)
    }, {
        idString: "sandbags",
        position: e.create(12.5, 35.5),
        rotation: 2
    }, {
        idString: "barrel",
        position: e.create(15.5, 43.5),
        rotation: 2
    }, {
        idString: "tear_gas_crate",
        position: e.create(15.5, 52.5),
        rotation: 1
    }, {
        idString: "barrel",
        position: e.create(17.5, 80),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(-25, 77),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(-36, 79.5),
        rotation: 1
    }, {
        idString: "sandbags",
        position: e.create(-36, 93.5),
        rotation: 1
    }, {
        idString: "grenade_crate",
        position: e.create(-27.5, 85.5)
    }],
    lootSpawners: [],
    subBuildings: [{
        idString: "port_shed",
        position: e.create(-36, -95)
    }, {
        idString: "port_shed",
        position: e.create(-36, -95),
        orientation: 2
    }]
}, {
    idString: "construction_site",
    name: "Construction Site",
    spawnHitbox: l.fromRect(75, 75, e.create(0, 0)),
    spawnMode: de.Grass,
    floorImages: [{
        key: "construction_site_floor",
        position: e.create(0, 0)
    }],
    floors: [{
        type: "sand",
        hitbox: l.fromRect(65, 65, e.create(0, 0))
    }],
    obstacles: [{
        idString: "bunker_entrance",
        position: e.create(-10, -16),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(18.42, -27.15),
        rotation: 0
    }, {
        idString: "sandbags",
        position: e.create(25.28, -15.7),
        rotation: 1
    }, {
        idString: "flint_crate",
        position: e.create(15, -17)
    }, {
        idString: "barrel",
        position: e.create(15, -7.5),
        rotation: 1
    }, {
        idString: "super_barrel",
        position: e.create(5, -17),
        rotation: 1
    }, {
        idString: "sandbags",
        position: e.create(-5.5, 7.94),
        rotation: 1
    }, {
        idString: "sandbags",
        position: e.create(.72, 19.15),
        rotation: 0
    }, {
        idString: "cooler",
        position: e.create(2.28, 8.42),
        rotation: 1
    }, {
        idString: "box",
        position: e.create(16.66, 9.9),
        rotation: 0
    }, {
        idString: "box",
        position: e.create(13.45, 16.63),
        rotation: 0
    }, {
        idString: "box",
        position: e.create(19.13, 16.54),
        rotation: 0
    }, {
        idString: "regular_crate",
        position: e.create(-17.34, 6.54)
    }, {
        idString: "regular_crate",
        position: e.create(-16.5, 17.85)
    }, {
        idString: "roadblock",
        position: e.create(-26, 0),
        rotation: 0
    }, {
        idString: "roadblock",
        position: e.create(-27, 15),
        rotation: 0
    }, {
        idString: "roadblock",
        position: e.create(-12.5, 27.5),
        rotation: 1
    }, {
        idString: "roadblock",
        position: e.create(2.5, 27.5),
        rotation: 1
    }, {
        idString: "roadblock",
        position: e.create(17.5, 27.5),
        rotation: 1
    }, {
        idString: "roadblock",
        position: e.create(25, 15),
        rotation: 0
    }],
    lootSpawners: []
}])
  , go = Le("MapPacket")({
    serialize(i, t) {
        i.writeUint32(t.seed),
        i.writeUint16(t.width),
        i.writeUint16(t.height),
        i.writeUint16(t.oceanSize),
        i.writeUint16(t.beachSize),
        i.writeArray(t.rivers, 4, a=>{
            i.writeUint8(a.width),
            i.writeArray(a.points, 8, o=>{
                i.writePosition(o)
            }
            )
        }
        ),
        i.writeArray(t.objects, 16, a=>{
            switch (i.writeObjectType(a.type),
            i.writePosition(a.position),
            a.type) {
            case j.Obstacle:
                {
                    ni.writeToStream(i, a.definition),
                    i.writeObstacleRotation(a.rotation, a.definition.rotationMode),
                    a.definition.variations !== void 0 && a.variation !== void 0 && i.writeVariation(a.variation);
                    break
                }
            case j.Building:
                ri.writeToStream(i, a.definition),
                i.writeObstacleRotation(a.rotation, Ie.Limited);
                break
            }
        }
        ),
        i.writeArray(t.places, 4, a=>{
            i.writeASCIIString(a.name),
            i.writePosition(a.position)
        }
        )
    },
    deserialize(i) {
        return {
            seed: i.readUint32(),
            width: i.readUint16(),
            height: i.readUint16(),
            oceanSize: i.readUint16(),
            beachSize: i.readUint16(),
            rivers: i.readAndCreateArray(4, ()=>({
                width: i.readUint8(),
                points: i.readAndCreateArray(8, ()=>i.readPosition())
            })),
            objects: i.readAndCreateArray(16, ()=>{
                var o;
                const t = i.readObjectType()
                  , a = i.readPosition();
                switch (t) {
                case j.Obstacle:
                    {
                        const s = ni.readFromStream(i)
                          , n = ((o = s.scale) == null ? void 0 : o.spawnMax) ?? 1
                          , r = i.readObstacleRotation(s.rotationMode).rotation;
                        let d;
                        return s.variations !== void 0 && (d = i.readVariation()),
                        {
                            position: a,
                            type: t,
                            definition: s,
                            scale: n,
                            rotation: r,
                            variation: d
                        }
                    }
                case j.Building:
                    {
                        const s = ri.readFromStream(i)
                          , {orientation: n} = i.readObstacleRotation(Ie.Limited);
                        return {
                            position: a,
                            type: t,
                            definition: s,
                            rotation: n,
                            scale: 1
                        }
                    }
                }
            }
            ),
            places: i.readAndCreateArray(4, ()=>({
                name: i.readASCIIString(),
                position: i.readPosition()
            }))
        }
    }
})
  , Wt = he.create()(i=>({
    [i]: ()=>({
        ignoreExpiration: !1
    }),
    gamePingFactory: (t,a)=>({
        idString: t,
        color: a,
        name: t,
        showInGame: !1,
        lifetime: 20,
        isPlayerPing: !1,
        sound: t
    }),
    playerPingFactory: t=>({
        idString: t,
        name: t,
        showInGame: !0,
        lifetime: 120,
        isPlayerPing: !0,
        color: 16777215,
        sound: t
    })
}))(i=>[i("gamePingFactory", {
    ignoreExpiration: !0
}, "airdrop_ping", 65535), i("playerPingFactory", {}, "warning_ping"), i("playerPingFactory", {
    ignoreExpiration: !0
}, "arrow_ping"), i("playerPingFactory", {}, "gift_ping"), i("playerPingFactory", {}, "heal_ping")])
  , ja = ct(L)
  , li = Le("PlayerInputPacket")({
    serialize(i, t) {
        const {movement: a, isMobile: o, turning: s} = t;
        i.writeBoolean(a.up),
        i.writeBoolean(a.down),
        i.writeBoolean(a.left),
        i.writeBoolean(a.right),
        i.writeBoolean(o),
        o && (i.writeBoolean(t.mobile.moving),
        i.writeRotation(t.mobile.angle, 16)),
        i.writeBoolean(t.attacking),
        i.writeBoolean(s),
        s && (i.writeRotation(t.rotation, 16),
        o || i.writeFloat(t.distanceToMouse, 0, $.player.maxMouseDist, 8)),
        i.writeArray(t.actions, 3, n=>{
            switch (i.writeBits(n.type, ja),
            n.type) {
            case L.EquipItem:
            case L.DropWeapon:
            case L.LockSlot:
            case L.UnlockSlot:
            case L.ToggleSlotLock:
                i.writeBits(n.slot, 2);
                break;
            case L.DropItem:
                ae.writeToStream(i, n.item);
                break;
            case L.UseItem:
                ae.writeToStream(i, n.item);
                break;
            case L.Emote:
                Ce.writeToStream(i, n.emote);
                break;
            case L.MapPing:
                Wt.writeToStream(i, n.ping),
                i.writePosition(n.position);
                break
            }
        }
        )
    },
    deserialize(i) {
        const t = {
            movement: {
                up: i.readBoolean(),
                down: i.readBoolean(),
                left: i.readBoolean(),
                right: i.readBoolean()
            }
        };
        return (t.isMobile = i.readBoolean()) && (t.mobile = {
            moving: i.readBoolean(),
            angle: i.readRotation(16)
        }),
        t.attacking = i.readBoolean(),
        (t.turning = i.readBoolean()) && (t.rotation = i.readRotation(16),
        t.isMobile || (t.distanceToMouse = i.readFloat(0, $.player.maxMouseDist, 8))),
        i.readArray(t.actions = [], 3, ()=>{
            const a = i.readBits(ja);
            let o, s, n, r, d;
            switch (a) {
            case L.EquipItem:
            case L.DropWeapon:
            case L.LockSlot:
            case L.UnlockSlot:
            case L.ToggleSlotLock:
                o = i.readBits(2);
                break;
            case L.DropItem:
                s = ae.readFromStream(i);
                break;
            case L.UseItem:
                s = ae.readFromStream(i);
                break;
            case L.Emote:
                n = Ce.readFromStream(i);
                break;
            case L.MapPing:
                d = Wt.readFromStream(i),
                r = i.readPosition();
                break
            }
            return {
                type: a,
                item: s,
                slot: o,
                emote: n,
                ping: d,
                position: r
            }
        }
        ),
        t
    }
});
function un(i, t) {
    const a = i instanceof li ? i.input : i
      , o = t instanceof li ? t.input : t;
    if (a.actions.length)
        return !0;
    for (const s in a.movement) {
        const n = s;
        if (o.movement[n] !== a.movement[n])
            return !0
    }
    if (a.isMobile !== o.isMobile)
        return !0;
    if (a.isMobile)
        for (const s in a.mobile) {
            const n = s;
            if (o.mobile[n] !== a.mobile[n])
                return !0
        }
    for (const s of ["attacking", "turning", "rotation", "distanceToMouse"])
        if (o[s] !== a[s])
            return !0;
    return !1
}
const mo = Le("PickupPacket")({
    serialize(i, t) {
        ae.writeToStream(i, t.item)
    },
    deserialize(i) {
        return {
            item: ae.readFromStream(i)
        }
    }
})
  , Dt = Le("PingPacket")({
    serialize(i) {},
    deserialize(i) {}
})
  , uo = Le("ReportPacket")({
    serialize(i, t) {
        i.writePlayerName(t.playerName),
        i.writeASCIIString(t.reportID, 8)
    },
    deserialize(i) {
        return {
            playerName: i.readPlayerName(),
            reportID: i.readASCIIString(8)
        }
    }
})
  , Fa = ct(ze)
  , pi = Le("SpectatePacket")({
    serialize(i, t) {
        i.writeBits(t.spectateAction, Fa),
        t.spectateAction === ze.SpectateSpecific && i.writeObjectID(t.playerID)
    },
    deserialize(i) {
        const t = i.readBits(Fa);
        return {
            spectateAction: t,
            ...t === ze.SpectateSpecific ? {
                playerID: i.readObjectID()
            } : {}
        }
    }
})
  , xi = {
    "9mm": 16777088,
    "12g": 16763080,
    "556mm": 8454016,
    "762mm": 8454143,
    "127mm": 4227072,
    shrapnel: 1907997
}
  , Ti = he.create()(i=>({
    [i]: ()=>ea
}))(()=>[...ae.byType(C.Gun), ...oi.definitions].filter(i=>!("isDual"in i) || !i.isDual).map(i=>{
    let t = i.ballistics.tracer.color;
    return t || ("ammoType"in i && i.ammoType in xi ? t = xi[i.ammoType] : i.ballistics.shrapnel && (t = xi.shrapnel)),
    {
        idString: `${i.idString}_bullet`,
        name: `${i.name} Bullet`,
        ...i.ballistics,
        tracer: {
            color: t,
            ...i.ballistics.tracer
        }
    }
}
));
class po {
    constructor(t) {
        c(this, "position");
        c(this, "initialPosition");
        c(this, "rotation");
        c(this, "velocity");
        c(this, "direction");
        c(this, "maxDistance");
        c(this, "maxDistanceSquared");
        c(this, "reflectionCount");
        c(this, "sourceID");
        c(this, "damagedIDs", new Set);
        c(this, "rangeVariance");
        c(this, "dead", !1);
        c(this, "definition");
        c(this, "canHitShooter");
        this.initialPosition = e.clone(t.position),
        this.position = t.position,
        this.rotation = t.rotation,
        this.reflectionCount = t.reflectionCount ?? 0,
        this.sourceID = t.sourceID,
        this.rangeVariance = t.variance ?? 0,
        this.definition = Ti.reify(t.source);
        let a = this.definition.range;
        this.definition.allowRangeOverride && t.rangeOverride !== void 0 && (a = Y.clamp(t.rangeOverride, 0, this.definition.range)),
        this.maxDistance = a * (this.rangeVariance + 1) / (this.reflectionCount + 1),
        this.maxDistanceSquared = this.maxDistance ** 2,
        this.direction = e.create(Math.sin(this.rotation), -Math.cos(this.rotation)),
        this.velocity = e.scale(this.direction, this.definition.speed * (this.rangeVariance + 1)),
        this.canHitShooter = this.definition.shrapnel || this.reflectionCount > 0
    }
    updateAndGetCollisions(t, a) {
        var n;
        const o = e.clone(this.position);
        if (this.position = e.add(this.position, e.scale(this.velocity, t)),
        Ue.distanceSquared(this.initialPosition, this.position) > this.maxDistanceSquared && (this.dead = !0,
        this.position = e.add(this.initialPosition, e.scale(this.direction, this.maxDistance))),
        this.definition.noCollision)
            return [];
        const s = [];
        for (const r of a)
            if (!(r.type === j.Obstacle && r.definition.noBulletCollision) && r.damageable && !r.dead && !(!this.canHitShooter && r.id === this.sourceID) && !this.damagedIDs.has(r.id)) {
                const d = (n = r.hitbox) == null ? void 0 : n.intersectsLine(o, this.position);
                d && s.push({
                    intersection: d,
                    object: r
                })
            }
        return s.sort((r,d)=>Ue.distanceSquared(r.intersection.point, this.initialPosition) - Ue.distanceSquared(d.intersection.point, this.initialPosition)),
        s
    }
    serialize(t) {
        Ti.writeToStream(t, this.definition),
        t.writePosition(this.initialPosition),
        t.writeRotation(this.rotation, 16),
        t.writeFloat(this.rangeVariance, 0, 1, 4),
        t.writeBits(this.reflectionCount, 2),
        t.writeObjectID(this.sourceID),
        this.definition.allowRangeOverride && t.writeFloat(this.maxDistance, 0, this.definition.range, 16)
    }
    static deserialize(t) {
        const a = Ti.readFromStream(t)
          , o = t.readPosition()
          , s = t.readRotation(16)
          , n = t.readFloat(0, 1, 4)
          , r = t.readBits(2)
          , d = t.readObjectID()
          , g = a.allowRangeOverride ? t.readFloat(0, a.range, 16) : void 0;
        return {
            source: a,
            position: o,
            rotation: s,
            variance: n,
            reflectionCount: r,
            sourceID: d,
            rangeOverride: g
        }
    }
}
const $a = he.create()(i=>({
    [i]: ()=>({
        scale: 1,
        rotationMode: Ie.Limited
    }),
    decal_factory: t=>{
        const a = t.toLowerCase().replace(/ /g, "_");
        return {
            idString: a,
            name: t,
            image: a
        }
    }
}))(({apply: i, simple: t})=>[i("decal_factory", {
    rotationMode: Ie.Full
}, "Explosion Decal"), i("decal_factory", {
    rotationMode: Ie.Full
}, "Frag Explosion Decal"), i("decal_factory", {
    rotationMode: Ie.Full
}, "Smoke Explosion Decal"), t("decal_factory", "Floor Oil 01"), t("decal_factory", "Floor Oil 02"), t("decal_factory", "Floor Oil 03"), t("decal_factory", "Floor Oil 04"), t("decal_factory", "Floor Oil 05"), t("decal_factory", "Floor Oil 06"), t("decal_factory", "Floor Oil 07"), i("decal_factory", {
    zIndex: P.BuildingsFloor
}, "Container mark")])
  , Ha = he.create()(i=>({
    [i]: ()=>({
        scale: 1,
        alpha: 1,
        lifetime: 1 / 0,
        angularVelocity: 0,
        velocity: e.create(0, 0),
        zIndex: P.ObstaclesLayer1,
        depletePerMs: {
            health: 0,
            adrenaline: 0
        }
    }),
    synced_particle_factory: (t,a)=>({
        idString: t,
        name: a ?? t.replace(/_/g, " ").split(" ").map(o=>o && `${o[0].toUpperCase()}${o.slice(1)}`).join(" "),
        frame: t
    }),
    smoke_like: {
        extends: "synced_particle_factory",
        applier: ()=>({
            scale: {
                start: {
                    min: 1.5,
                    max: 2
                },
                end: {
                    min: 1.75,
                    max: 2.25
                }
            },
            alpha: {
                start: 1,
                end: 0,
                easing: "expoIn"
            },
            angularVelocity: {
                min: -5e-4,
                max: 5e-4
            },
            velocity: {
                min: {
                    x: -2e-4,
                    y: -2e-4
                },
                max: {
                    x: 2e-4,
                    y: 2e-4
                }
            },
            lifetime: {
                mean: 2e4,
                deviation: 1e3
            },
            frame: "smoke_grenade_particle",
            zIndex: P.ObstaclesLayer5 - 1
        })
    }
}))(i=>[i("smoke_like", {
    hitbox: new M(5),
    snapScopeTo: "1x_scope"
}, [], ["smoke_grenade_particle"]), i("smoke_like", {
    tint: 10544895,
    hitbox: new M(5),
    snapScopeTo: "1x_scope",
    depletePerMs: {
        adrenaline: .0055
    }
}, [], ["tear_gas_particle"]), i("smoke_like", {
    velocity: {
        min: {
            x: -.002,
            y: -.002
        },
        max: {
            x: .002,
            y: .002
        }
    },
    lifetime: {
        mean: 2e3,
        deviation: 500
    },
    hitbox: new M(5),
    snapScopeTo: "1x_scope"
}, [], ["airdrop_smoke_particle"])])
  , Na = ct(ke)
  , Wa = ct(Xe)
  , Mi = {
    [j.Player]: {
        serializePartial(i, t) {
            const {position: a, rotation: o, animation: s, action: n} = t;
            i.writePosition(a),
            i.writeRotation(o, 16);
            const r = s !== void 0;
            i.writeBoolean(r),
            r && i.writeBits(s, Na);
            const d = n !== void 0;
            i.writeBoolean(d),
            d && (i.writeBits(n.type, Wa),
            n.item && ae.writeToStream(i, n.item))
        },
        serializeFull(i, t) {
            const {full: {dead: a, downed: o, beingRevived: s, teamID: n, invulnerable: r, activeItem: d, skin: g, backpack: h, helmet: _, vest: f}} = t;
            i.writeBoolean(a),
            i.writeBoolean(o),
            i.writeBoolean(s),
            i.writeUint8(n),
            i.writeBoolean(r),
            ae.writeToStream(i, d),
            St.writeToStream(i, g),
            ai.writeToStream(i, h),
            i.writeBoolean(_ !== void 0),
            _ && Ct.writeToStream(i, _),
            i.writeBoolean(f !== void 0),
            f && Ct.writeToStream(i, f)
        },
        deserializePartial(i) {
            const t = {
                position: i.readPosition(),
                rotation: i.readRotation(16),
                animation: i.readBoolean() ? i.readBits(Na) : void 0
            };
            if (i.readBoolean()) {
                const a = {
                    type: i.readBits(Wa),
                    item: void 0
                };
                a.type === Xe.UseItem && (a.item = ae.readFromStream(i)),
                t.action = a
            }
            return t
        },
        deserializeFull(i) {
            const t = {
                dead: i.readBoolean(),
                downed: i.readBoolean(),
                beingRevived: i.readBoolean(),
                teamID: i.readUint8(),
                invulnerable: i.readBoolean(),
                activeItem: ae.readFromStream(i),
                skin: St.readFromStream(i),
                backpack: ai.readFromStream(i)
            };
            return i.readBoolean() && (t.helmet = Ct.readFromStream(i)),
            i.readBoolean() && (t.vest = Ct.readFromStream(i)),
            t
        }
    },
    [j.Obstacle]: {
        serializePartial(i, t) {
            i.writeScale(t.scale),
            i.writeBoolean(t.dead)
        },
        serializeFull(i, t) {
            const a = t.full;
            ni.writeToStream(i, a.definition),
            i.writePosition(a.position),
            i.writeObstacleRotation(a.rotation.rotation, a.definition.rotationMode),
            a.definition.variations !== void 0 && a.variation !== void 0 && i.writeVariation(a.variation),
            a.definition.role === ee.Door && a.door ? i.writeBits(a.door.offset, 2) : a.definition.role === ee.Activatable && i.writeBoolean(a.activated ?? !1)
        },
        deserializePartial(i) {
            return {
                scale: i.readScale(),
                dead: i.readBoolean()
            }
        },
        deserializeFull(i) {
            const t = ni.readFromStream(i)
              , a = {
                definition: t,
                position: i.readPosition(),
                rotation: i.readObstacleRotation(t.rotationMode),
                variation: t.variations ? i.readVariation() : void 0
            };
            return t.role === ee.Door ? a.door = {
                offset: i.readBits(2)
            } : t.role === ee.Activatable && (a.activated = i.readBoolean()),
            a
        }
    },
    [j.Loot]: {
        serializePartial(i, t) {
            i.writePosition(t.position)
        },
        serializeFull(i, t) {
            ae.writeToStream(i, t.full.definition),
            i.writeBits(t.full.count, 9),
            i.writeBoolean(t.full.isNew)
        },
        deserializePartial(i) {
            return {
                position: i.readPosition()
            }
        },
        deserializeFull(i) {
            return {
                definition: ae.readFromStream(i),
                count: i.readBits(9),
                isNew: i.readBoolean()
            }
        }
    },
    [j.DeathMarker]: {
        serializePartial(i, t) {
            i.writePosition(t.position),
            i.writeBoolean(t.isNew),
            i.writeObjectID(t.playerID)
        },
        serializeFull() {},
        deserializePartial(i) {
            const t = i.readPosition()
              , a = i.readBoolean()
              , o = i.readObjectID();
            return {
                position: t,
                isNew: a,
                playerID: o
            }
        },
        deserializeFull() {}
    },
    [j.Building]: {
        serializePartial(i, t) {
            i.writeBoolean(t.dead),
            i.writeBoolean(!!t.puzzle),
            t.puzzle && (i.writeBoolean(t.puzzle.solved),
            i.writeBoolean(t.puzzle.errorSeq))
        },
        serializeFull(i, t) {
            ri.writeToStream(i, t.full.definition),
            i.writePosition(t.full.position),
            i.writeBits(t.full.rotation, 2)
        },
        deserializePartial(i) {
            return {
                dead: i.readBoolean(),
                puzzle: i.readBoolean() ? {
                    solved: i.readBoolean(),
                    errorSeq: i.readBoolean()
                } : void 0
            }
        },
        deserializeFull(i) {
            return {
                definition: ri.readFromStream(i),
                position: i.readPosition(),
                rotation: i.readBits(2)
            }
        }
    },
    [j.Decal]: {
        serializePartial(i, t) {
            $a.writeToStream(i, t.definition),
            i.writePosition(t.position),
            i.writeObstacleRotation(t.rotation, t.definition.rotationMode)
        },
        serializeFull() {},
        deserializePartial(i) {
            const t = $a.readFromStream(i);
            return {
                definition: t,
                position: i.readPosition(),
                rotation: i.readObstacleRotation(t.rotationMode).rotation
            }
        },
        deserializeFull() {}
    },
    [j.Parachute]: {
        serializePartial(i, t) {
            i.writeFloat(t.height, 0, 1, 8)
        },
        serializeFull(i, t) {
            i.writePosition(t.full.position)
        },
        deserializePartial(i) {
            return {
                height: i.readFloat(0, 1, 8)
            }
        },
        deserializeFull(i) {
            return {
                position: i.readPosition()
            }
        }
    },
    [j.ThrowableProjectile]: {
        serializePartial(i, t) {
            i.writePosition(t.position),
            i.writeRotation(t.rotation, 16),
            i.writeBoolean(t.airborne)
        },
        serializeFull(i, t) {
            ae.writeToStream(i, t.full.definition)
        },
        deserializePartial(i) {
            return {
                position: i.readPosition(),
                rotation: i.readRotation(16),
                airborne: i.readBoolean()
            }
        },
        deserializeFull(i) {
            return {
                definition: ae.readFromStream(i)
            }
        }
    },
    [j.SyncedParticle]: {
        serializePartial(i, t) {
            const {position: a, rotation: o, scale: s, alpha: n} = t;
            i.writePosition(a),
            i.writeRotation(o, 8);
            const r = s !== void 0;
            i.writeBoolean(r),
            r && i.writeScale(s);
            const d = n !== void 0;
            i.writeBoolean(d),
            d && i.writeFloat(n, 0, 1, 8)
        },
        serializeFull(i, t) {
            const a = t.full;
            Ha.writeToStream(i, a.definition);
            const o = a.variant;
            i.writeBoolean(o !== void 0),
            o !== void 0 && i.writeVariation(o)
        },
        deserializePartial(i) {
            const t = {
                position: i.readPosition(),
                rotation: i.readRotation(8)
            };
            return i.readBoolean() && (t.scale = i.readScale()),
            i.readBoolean() && (t.alpha = i.readFloat(0, 1, 8)),
            t
        },
        deserializeFull(i) {
            return {
                definition: Ha.readFromStream(i),
                variant: i.readBoolean() ? i.readVariation() : void 0
            }
        }
    }
}
  , [pn,hn] = (()=>{
    const i = (_,f)=>({
        write: (b,v)=>{
            const w = v !== void 0;
            b.writeBoolean(w),
            w && _(v, b)
        }
        ,
        read: b=>{
            if (b.readBoolean())
                return f(b)
        }
    })
      , t = i(({maxHealth: _, minAdrenaline: f, maxAdrenaline: b},v)=>{
        v.writeFloat32(_),
        v.writeFloat32(f),
        v.writeFloat32(b)
    }
    , _=>({
        maxHealth: _.readFloat32(),
        minAdrenaline: _.readFloat32(),
        maxAdrenaline: _.readFloat32()
    }))
      , a = i((_,f)=>f.writeFloat(_, 0, 1, 12), _=>_.readFloat(0, 1, 12))
      , o = i((_,f)=>f.writeFloat(_, 0, 1, 12), _=>_.readFloat(0, 1, 12))
      , s = i((_,f)=>f.writeUint8(_), _=>_.readUint8())
      , n = i(({id: _, spectating: f},b)=>{
        b.writeObjectID(_),
        b.writeBoolean(f)
    }
    , _=>({
        id: _.readObjectID(),
        spectating: _.readBoolean()
    }))
      , r = i((_,f)=>{
        f.writeArray(_, 2, b=>{
            f.writeObjectID(b.id),
            f.writePosition(b.position ?? e.create(0, 0)),
            f.writeFloat(b.normalizedHealth, 0, 1, 8),
            f.writeBoolean(b.downed),
            f.writeBoolean(b.disconnected)
        }
        )
    }
    , _=>_.readAndCreateArray(2, ()=>({
        id: _.readObjectID(),
        position: _.readPosition(),
        normalizedHealth: _.readFloat(0, 1, 8),
        downed: _.readBoolean(),
        disconnected: _.readBoolean()
    })))
      , d = i(({activeWeaponIndex: _, weapons: f},b)=>{
        b.writeBits(_, 2);
        for (const v of f ?? [])
            if (b.writeBoolean(v !== void 0),
            v !== void 0) {
                const {definition: w, count: k, stats: S} = v;
                ae.writeToStream(b, w);
                const x = k !== void 0;
                b.writeBoolean(x),
                x && b.writeUint8(k),
                w.killstreak && b.writeUint8(S.kills)
            }
    }
    , _=>({
        activeWeaponIndex: _.readBits(2),
        weapons: Array.from({
            length: $.player.maxWeapons
        }, ()=>{
            if (!_.readBoolean())
                return;
            const f = ae.readFromStream(_);
            return {
                definition: f,
                count: _.readBoolean() ? _.readUint8() : void 0,
                stats: {
                    kills: f.killstreak ? _.readUint8() : void 0
                }
            }
        }
        )
    }))
      , g = i((_,f)=>f.writeBits(_, $.player.maxWeapons), _=>_.readBits($.player.maxWeapons))
      , h = i(({items: _, scope: f},b)=>{
        for (const v in Nt) {
            const w = _[v];
            b.writeBoolean(w > 0),
            w > 0 && b.writeBits(w, 9)
        }
        Ee.writeToStream(b, f)
    }
    , _=>{
        const f = {};
        for (const b in Nt)
            f[b] = _.readBoolean() ? _.readBits(9) : 0;
        return {
            items: f,
            scope: Ee.readFromStream(_)
        }
    }
    );
    return [(_,f)=>{
        t.write(_, f.minMax),
        a.write(_, f.health),
        o.write(_, f.adrenaline),
        s.write(_, f.zoom),
        n.write(_, f.id),
        r.write(_, f.teammates),
        d.write(_, f.inventory),
        g.write(_, f.lockedSlots),
        h.write(_, f.items)
    }
    , _=>({
        minMax: t.read(_),
        health: a.read(_),
        adrenaline: o.read(_),
        zoom: s.read(_),
        id: n.read(_),
        teammates: r.read(_),
        inventory: d.read(_),
        lockedSlots: g.read(_),
        items: h.read(_)
    })]
}
)()
  , ie = Object.freeze({
    PlayerData: 1,
    DeletedObjects: 2,
    FullObjects: 4,
    PartialObjects: 8,
    Bullets: 16,
    Explosions: 32,
    Emotes: 64,
    Gas: 128,
    GasPercentage: 256,
    NewPlayers: 512,
    DeletedPlayers: 1024,
    AliveCount: 2048,
    Planes: 4096,
    MapPings: 8192
})
  , Ii = Object.keys(ie).length
  , ho = Le("UpdatePacket")({
    serialize(i, t) {
        var n, r, d, g, h, _, f, b, v, w;
        let a = 0;
        const o = i.index;
        if (i.writeBits(a, Ii),
        t.playerData && Object.keys(t.playerData).length > 0 && (pn(i, t.playerData),
        a |= ie.PlayerData),
        (n = t.deletedObjects) != null && n.length && (i.writeArray(t.deletedObjects, si, k=>{
            i.writeObjectID(k)
        }
        ),
        a |= ie.DeletedObjects),
        (r = t.fullObjectsCache) != null && r.length && (i.writeAlignToNextByte(),
        i.writeArray(t.fullObjectsCache, 16, k=>{
            i.writeBytes(k.partialStream, 0, k.partialStream.byteIndex),
            i.writeBytes(k.fullStream, 0, k.fullStream.byteIndex)
        }
        ),
        a |= ie.FullObjects),
        (d = t.partialObjectsCache) != null && d.length && (i.writeAlignToNextByte(),
        i.writeArray(t.partialObjectsCache, 16, k=>{
            i.writeBytes(k.partialStream, 0, k.partialStream.byteIndex)
        }
        ),
        a |= ie.PartialObjects),
        (g = t.bullets) != null && g.length && (i.writeArray(t.bullets, 8, k=>{
            k.serialize(i)
        }
        ),
        a |= ie.Bullets),
        (h = t.explosions) != null && h.length && (i.writeArray(t.explosions, 8, k=>{
            oi.writeToStream(i, k.definition),
            i.writePosition(k.position)
        }
        ),
        a |= ie.Explosions),
        (_ = t.emotes) != null && _.length && (i.writeArray(t.emotes, 8, k=>{
            Ce.writeToStream(i, k.definition),
            i.writeObjectID(k.playerID)
        }
        ),
        a |= ie.Emotes),
        t.gas) {
            const k = t.gas;
            i.writeBits(k.state, 2),
            i.writeBits(k.currentDuration, 7),
            i.writePosition(k.oldPosition),
            i.writePosition(k.newPosition),
            i.writeFloat(k.oldRadius, 0, 2048, 16),
            i.writeFloat(k.newRadius, 0, 2048, 16),
            a |= ie.Gas
        }
        t.gasProgress !== void 0 && (i.writeFloat(t.gasProgress, 0, 1, 16),
        a |= ie.GasPercentage),
        (f = t.newPlayers) != null && f.length && (i.writeArray(t.newPlayers, 8, k=>{
            i.writeObjectID(k.id),
            i.writePlayerName(k.name),
            i.writeBoolean(k.hasColor),
            k.hasColor && i.writeBits(k.nameColor, 24),
            pt.writeOptional(i, k.badge)
        }
        ),
        a |= ie.NewPlayers),
        (b = t.deletedPlayers) != null && b.length && (i.writeArray(t.deletedPlayers, 8, k=>{
            i.writeObjectID(k)
        }
        ),
        a |= ie.DeletedPlayers),
        t.aliveCount !== void 0 && (i.writeUint8(t.aliveCount),
        a |= ie.AliveCount),
        (v = t.planes) != null && v.length && (i.writeArray(t.planes, 4, k=>{
            i.writeVector(k.position, -$.maxPosition, -$.maxPosition, $.maxPosition * 2, $.maxPosition * 2, 24),
            i.writeRotation(k.direction, 16)
        }
        ),
        a |= ie.Planes),
        (w = t.mapPings) != null && w.length && (i.writeArray(t.mapPings, 4, k=>{
            Wt.writeToStream(i, k.definition),
            i.writePosition(k.position),
            k.definition.isPlayerPing && i.writeObjectID(k.playerId)
        }
        ),
        a |= ie.MapPings);
        const s = i.index;
        i.index = o,
        i.writeBits(a, Ii),
        i.index = s
    },
    deserialize(i) {
        const t = {}
          , a = i.readBits(Ii);
        return a & ie.PlayerData && (t.playerData = hn(i)),
        a & ie.DeletedObjects && (t.deletedObjects = i.readAndCreateArray(si, ()=>i.readObjectID())),
        a & ie.FullObjects && (i.readAlignToNextByte(),
        t.fullDirtyObjects = i.readAndCreateArray(16, ()=>{
            const o = i.readObjectID()
              , s = i.readObjectType()
              , n = Mi[s].deserializePartial(i);
            i.readAlignToNextByte();
            const r = Mi[s].deserializeFull(i);
            return i.readAlignToNextByte(),
            {
                id: o,
                type: s,
                data: {
                    ...n,
                    full: r
                }
            }
        }
        )),
        a & ie.PartialObjects && (i.readAlignToNextByte(),
        t.partialDirtyObjects = i.readAndCreateArray(16, ()=>{
            const o = i.readObjectID()
              , s = i.readObjectType()
              , n = Mi[s].deserializePartial(i);
            return i.readAlignToNextByte(),
            {
                id: o,
                type: s,
                data: n
            }
        }
        )),
        a & ie.Bullets && (t.deserializedBullets = i.readAndCreateArray(8, ()=>po.deserialize(i))),
        a & ie.Explosions && (t.explosions = i.readAndCreateArray(8, ()=>({
            definition: oi.readFromStream(i),
            position: i.readPosition()
        }))),
        a & ie.Emotes && (t.emotes = i.readAndCreateArray(8, ()=>({
            definition: Ce.readFromStream(i),
            playerID: i.readObjectID()
        }))),
        a & ie.Gas && (t.gas = {
            state: i.readBits(2),
            currentDuration: i.readBits(7),
            oldPosition: i.readPosition(),
            newPosition: i.readPosition(),
            oldRadius: i.readFloat(0, 2048, 16),
            newRadius: i.readFloat(0, 2048, 16)
        }),
        a & ie.GasPercentage && (t.gasProgress = i.readFloat(0, 1, 16)),
        a & ie.NewPlayers && (t.newPlayers = i.readAndCreateArray(8, ()=>{
            const o = i.readObjectID()
              , s = i.readPlayerName()
              , n = i.readBoolean();
            return {
                id: o,
                name: s,
                hasColor: n,
                nameColor: n ? i.readBits(24) : void 0,
                badge: pt.readOptional(i)
            }
        }
        )),
        a & ie.DeletedPlayers && (t.deletedPlayers = i.readAndCreateArray(8, ()=>i.readObjectID())),
        a & ie.AliveCount && (t.aliveCount = i.readUint8()),
        a & ie.Planes && (t.planes = i.readAndCreateArray(4, ()=>{
            const o = i.readVector(-$.maxPosition, -$.maxPosition, $.maxPosition * 2, $.maxPosition * 2, 24)
              , s = i.readRotation(16);
            return {
                position: o,
                direction: s
            }
        }
        )),
        a & ie.MapPings && (t.mapPings = i.readAndCreateArray(4, ()=>{
            const o = Wt.readFromStream(i);
            return {
                definition: o,
                position: i.readPosition(),
                ...o.isPlayerPing ? {
                    playerId: i.readObjectID()
                } : {}
            }
        }
        )),
        t
    }
});
class fo {
    constructor(...t) {
        c(this, "_nextTypeId", 0);
        c(this, "typeToId", new Map);
        c(this, "idToTemplate", []);
        c(this, "bits");
        for (const a of t)
            this._register(a);
        this.bits = Math.ceil(Math.log2(this._nextTypeId))
    }
    _register(t) {
        let a;
        if ((a = t.name)in this.typeToId) {
            console.warn(`Packet ${a} registered multiple times`);
            return
        }
        const o = this._nextTypeId++;
        this.typeToId.set(t, o),
        this.idToTemplate[o] = t
    }
}
const Ga = new fo(li,Dt,co,pi)
  , Ka = new fo(ho,_o,mo,Dt,lo,go,ro,uo,so);
class Ua {
    constructor(t) {
        c(this, "stream");
        t instanceof ArrayBuffer ? this.stream = new ta(t) : this.stream = t
    }
    serializeServerPacket(t) {
        this._serializePacket(t, Ka)
    }
    deserializeServerPacket() {
        return this._deserializePacket(Ka)
    }
    serializeClientPacket(t) {
        this._serializePacket(t, Ga)
    }
    deserializeClientPacket() {
        return this._deserializePacket(Ga)
    }
    _deserializePacket(t) {
        if (this.stream.length - this.stream.byteIndex * 8 >= 1) {
            const a = this.stream.readBits(t.bits)
              , o = t.idToTemplate[a].read(this.stream);
            return this.stream.readAlignToNextByte(),
            o
        }
    }
    _serializePacket(t, a) {
        const o = t.constructor.name
          , s = a.typeToId.get(t.constructor);
        if (s === void 0)
            throw new Error(`Unknown packet type: ${o}, did you forget to register it?`);
        this.stream.writeBits(s, a.bits),
        t.serialize(this.stream),
        this.stream.writeAlignToNextByte()
    }
    getBuffer() {
        return this.stream.buffer.slice(0, this.stream.byteIndex)
    }
}
class fn {
    constructor() {
        c(this, "_objects", new Map);
        c(this, "_byCategory");
        this._byCategory = Object.keys(j).filter(t=>!Number.isNaN(+t)).reduce((t,a)=>(t[a] = new Set,
        t), {})
    }
    getCategory(t) {
        return this._byCategory[t]
    }
    clear() {
        this._objects.clear(),
        Object.values(this._byCategory).forEach(t=>t.clear())
    }
    add(t) {
        this._objects.set(t.id, t),
        this.getCategory(t.type).add(t)
    }
    delete(t) {
        this.getCategory(t.type).delete(t),
        this._objects.delete(t.id)
    }
    has(t) {
        return this._objects.has(t.id)
    }
    categoryHas(t) {
        return this.getCategory(t.type).has(t)
    }
    get(t) {
        return this._objects.get(t)
    }
    hasId(t) {
        return this._objects.has(t)
    }
    get size() {
        return this._objects.size
    }
    [Symbol.iterator]() {
        return this._objects.values()
    }
}
function bn() {
    const i = document.documentElement;
    typeof i.requestFullscreen == "function" ? i.requestFullscreen().catch() : typeof i.webkitRequestFullScreen == "function" && i.webkitRequestFullScreen().catch()
}
function bo(i) {
    const t = new Date(i * 1e3);
    let a = "";
    const o = t.getMinutes();
    return o > 0 && (a += `${o}m`),
    a += `${t.getSeconds()}s`,
    a
}
function wo(i) {
    switch (typeof i) {
    case "string":
    case "number":
    case "undefined":
    case "object":
    case "boolean":
        return String(i);
    case "bigint":
        return `${i}n`;
    case "symbol":
        return i.toString();
    case "function":
        return `function ${i.name}(${Array.from({
            length: i.length
        }, (t,a)=>`arg${a}`).join(", ")}) -> any`
    }
}
function pe(i, ...t) {
    let a = "";
    const o = i.length;
    for (let s = 0; s < o; s++)
        a += (i[s] ?? "") + (t[s] ?? "");
    return a
}
const wn = Object.freeze(["h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "p", "pre", "span", "li", "ol", "ul", "a", "em", "b", "bdi", "br", "cite", "code", "del", "ins", "kbd", "mark", "q", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "details", "summary", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"]);
function bt(i, t) {
    return i.replace(/<\/?.*?>/g, a=>!(t != null && t.strict) && wn.includes(a.replace(/<\/?|>/g, "").split(" ")[0]) ? a : a.replace(/</g, "&lt;").replace(/>/g, "&gt;")).replace(/ {2,}/g, a=>t != null && t.escapeSpaces ? a.replace(/ /g, "&nbsp;") : a).replace(/\n/g, a=>t != null && t.escapeNewLines ? "<br>" : a)
}
const Et = class Et {
    constructor(t) {
        c(this, "binds", new Oi);
        c(this, "isMobile");
        c(this, "movement", {
            up: !1,
            left: !1,
            down: !1,
            right: !1,
            moving: !1
        });
        c(this, "movementAngle", 0);
        c(this, "mouseX", 0);
        c(this, "mouseY", 0);
        c(this, "emoteWheelActive", !1);
        c(this, "emoteWheelPosition", e.create(0, 0));
        c(this, "pingWheelActive", !1);
        c(this, "pingWheelMinimap", !1);
        c(this, "pingWheelPosition", e.create(0, 0));
        c(this, "selectedEmote");
        c(this, "rotation", 0);
        c(this, "actions", []);
        c(this, "gameMousePosition", e.create(0, 0));
        c(this, "distanceToMouse", 0);
        c(this, "attacking", !1);
        c(this, "resetAttacking", !1);
        c(this, "shootOnReleaseAngle", 0);
        c(this, "turning", !1);
        c(this, "_focusController", new Set);
        c(this, "_lastInputPacket");
        c(this, "_inputPacketTimer", 0);
        c(this, "mWheelStopTimer");
        c(this, "_keybindsContainer", m("#tab-keybinds-content"));
        if (this.game = t,
        Et._instantiated)
            throw new Error("Class 'InputManager' has already been instantiated");
        Et._instantiated = !0
    }
    addAction(t) {
        if (!(this.actions.length > 7)) {
            if (typeof t == "number" && (t = {
                type: t
            }),
            t.type === L.DropItem || t.type === L.DropWeapon) {
                const {inventory: a} = this.game.uiManager;
                let o;
                t.type === L.DropItem ? o = t.item : t.type === L.DropWeapon && (o = a.weapons[t.slot]);
                let s = !o.noDrop;
                if (s)
                    switch (o.itemType) {
                    case C.Ammo:
                    case C.Healing:
                    case C.Scope:
                        s = a.items[o.idString] > 0;
                        break;
                    case C.Throwable:
                    case C.Armor:
                    case C.Gun:
                    case C.Melee:
                    case C.Skin:
                        s = !0;
                        break;
                    case C.Backpack:
                        s = !1;
                        break
                    }
                s && this.game.soundManager.play("pickup")
            }
            this.actions.push(t)
        }
    }
    update() {
        if (this.game.gameOver)
            return;
        const t = {
            movement: {
                ...this.movement
            },
            attacking: this.attacking,
            turning: this.turning,
            ...this.turning ? {
                rotation: this.resetAttacking ? this.shootOnReleaseAngle : this.rotation,
                distanceToMouse: this.distanceToMouse
            } : {},
            isMobile: this.isMobile,
            ...this.isMobile ? {
                mobile: {
                    angle: this.movementAngle,
                    moving: this.movement.moving
                }
            } : {},
            actions: this.actions
        };
        this.turning = !1,
        this.resetAttacking && (this.attacking = !1,
        this.resetAttacking = !1),
        this._inputPacketTimer += this.game.serverDt,
        (!this._lastInputPacket || un(this._lastInputPacket, t) || this._inputPacketTimer >= 100) && (this.game.sendPacket(li.create(t)),
        this._lastInputPacket = t,
        this._inputPacketTimer = 0),
        this.actions.length = 0
    }
    setupInputs() {
        this.isMobile = ui.any && this.game.console.getBuiltInCVar("mb_controls_enabled");
        const t = this.game
          , a = m("#game")[0];
        if (this.isMobile || (a.addEventListener("pointerleave", ()=>{
            this.attacking = !1
        }
        ),
        a.addEventListener("pointerup", ()=>{
            this.attacking = !1
        }
        )),
        window.addEventListener("blur", ()=>{
            for (const o of this._focusController)
                this.handleLostFocus(o);
            this._focusController.clear()
        }
        ),
        window.addEventListener("keydown", this.handleInputEvent.bind(this, !0)),
        window.addEventListener("keyup", this.handleInputEvent.bind(this, !1)),
        a.addEventListener("pointerdown", this.handleInputEvent.bind(this, !0)),
        a.addEventListener("pointerup", this.handleInputEvent.bind(this, !1)),
        a.addEventListener("wheel", this.handleInputEvent.bind(this, !0)),
        m("#emote-wheel > .button-center").on("click", ()=>{
            this.emoteWheelActive = !1,
            this.selectedEmote = void 0,
            this.pingWheelMinimap = !1,
            m("#emote-wheel").hide()
        }
        ),
        a.addEventListener("pointermove", o=>{
            if (!this.isMobile) {
                if (this.mouseX = o.clientX,
                this.mouseY = o.clientY,
                this.emoteWheelActive) {
                    const s = e.create(o.clientX, o.clientY);
                    if (Ue.distanceSquared(this.emoteWheelPosition, s) > 500) {
                        const n = Ke.betweenPoints(this.emoteWheelPosition, s);
                        let r;
                        ya <= n && n <= va ? (this.selectedEmote = 0,
                        r = "top") : n >= Sa && n <= va ? Sa <= n && n <= xa ? (this.selectedEmote = 2,
                        r = "bottom") : xa <= n && n <= ya && (this.selectedEmote = 3,
                        r = "left") : (this.selectedEmote = 1,
                        r = "right"),
                        m("#emote-wheel").css("background-image", `url("./img/misc/emote_wheel_highlight_${r ?? "top"}.svg"), url("./img/misc/emote_wheel.svg")`)
                    } else
                        this.selectedEmote = void 0,
                        m("#emote-wheel").css("background-image", 'url("./img/misc/emote_wheel_highlight_center.svg"), url("./img/misc/emote_wheel.svg")')
                }
                if (this.rotation = Math.atan2(o.clientY - window.innerHeight / 2, o.clientX - window.innerWidth / 2),
                !t.gameOver && t.activePlayer) {
                    const s = e.create(o.clientX, o.clientY)
                      , n = t.camera.container.toLocal(s);
                    this.gameMousePosition = e.scale(n, 1 / te),
                    this.distanceToMouse = Ue.distance(t.activePlayer.position, this.gameMousePosition),
                    t.console.getBuiltInCVar("cv_responsive_rotation") && (t.activePlayer.container.rotation = this.rotation)
                }
                this.turning = !0
            }
        }
        ),
        this.isMobile) {
            const o = t.console.getBuiltInCVar("mb_joystick_size")
              , s = t.console.getBuiltInCVar("mb_joystick_transparency")
              , n = ka.create({
                zone: m("#left-joystick-container")[0],
                size: o,
                color: `rgba(255, 255, 255, ${s})`
            })
              , r = ka.create({
                zone: m("#right-joystick-container")[0],
                size: o,
                color: `rgba(255, 255, 255, ${s})`
            });
            let d = !1
              , g = !1;
            n.on("move", (h,_)=>{
                const f = -Math.atan2(_.vector.y, _.vector.x);
                this.movementAngle = f,
                this.movement.moving = !0,
                !d && !g && (this.rotation = f,
                this.turning = !0,
                t.console.getBuiltInCVar("cv_responsive_rotation") && !t.gameOver && t.activePlayer && (t.activePlayer.container.rotation = this.rotation))
            }
            ),
            n.on("end", ()=>{
                this.movement.moving = !1
            }
            ),
            r.on("move", (h,_)=>{
                d = !0,
                this.rotation = -Math.atan2(_.vector.y, _.vector.x),
                this.turning = !0;
                const f = t.activePlayer;
                if (t.console.getBuiltInCVar("cv_responsive_rotation") && !t.gameOver && f && (t.activePlayer.container.rotation = this.rotation),
                !f)
                    return;
                const b = f.activeItem;
                f.images.aimTrail.alpha = 1;
                const v = _.distance > t.console.getBuiltInCVar("mb_joystick_size") / 3;
                b.itemType === C.Gun && b.shootOnRelease ? (g = !0,
                this.shootOnReleaseAngle = this.rotation) : this.attacking = v
            }
            ),
            r.on("end", ()=>{
                d = !1,
                t.activePlayer && (t.activePlayer.images.aimTrail.alpha = 0),
                this.attacking = g,
                this.resetAttacking = !0,
                g = !1
            }
            )
        }
    }
    handleInputEvent(t, a) {
        if (!a.isTrusted || a instanceof PointerEvent && this.isMobile || document.activeElement !== document.body)
            return;
        const {type: o} = a;
        if (a instanceof KeyboardEvent) {
            const {key: d} = a;
            t ? this._focusController.add(d) : this._focusController.delete(d);
            let g = 0;
            if (["metaKey", "ctrlKey"].forEach(h=>a[h] && g++),
            (g > 1 || g === 1 && !["Control", "Meta"].includes(d)) && t)
                return
        }
        const s = this.getKeyFromInputEvent(a);
        let n = 0;
        if (a instanceof WheelEvent) {
            clearTimeout(this.mWheelStopTimer),
            this.mWheelStopTimer = window.setTimeout(()=>{
                n = this.fireAllEventsAtKey(s, !1)
            }
            , 50),
            n = this.fireAllEventsAtKey(s, !0);
            return
        }
        const r = o === "keydown" || o === "pointerdown";
        if (Array.isArray(s))
            for (const d of s)
                n += this.fireAllEventsAtKey(d, r);
        else
            n = this.fireAllEventsAtKey(s, r);
        n > 0 && this.game.gameStarted && a.preventDefault()
    }
    handleLostFocus(t) {
        this.fireAllEventsAtKey(t.toUpperCase(), !1)
    }
    fireAllEventsAtKey(t, a) {
        const o = this.binds.getActionsBoundToInput(t) ?? [];
        for (const s of o) {
            let n = s;
            a || (n.startsWith("+") ? n = n.replace("+", "-") : n = ""),
            this.game.console.handleQuery(n),
            this.binds.getInputsBoundToAction("loot").length === 0 && n === "interact" && this.game.console.handleQuery("loot")
        }
        return o.length
    }
    getKeyFromInputEvent(t) {
        let a = "";
        if (t instanceof KeyboardEvent) {
            const {key: o, code: s, location: n} = t;
            switch (a = o.length > 1 ? o : s.match(/^(Key|Digit)/) ? s.slice(-1) : s,
            n) {
            case 1:
                return [a, `Left${a}`];
            case 2:
                return [a, `Right${a}`];
            case 0:
            default:
                return a
            }
        }
        if (t instanceof WheelEvent) {
            switch (!0) {
            case t.deltaX > 0:
                {
                    a = "MWheelRight";
                    break
                }
            case t.deltaX < 0:
                {
                    a = "MWheelLeft";
                    break
                }
            case t.deltaY > 0:
                {
                    a = "MWheelDown";
                    break
                }
            case t.deltaY < 0:
                {
                    a = "MWheelUp";
                    break
                }
            case t.deltaZ > 0:
                {
                    a = "MWheelForwards";
                    break
                }
            case t.deltaZ < 0:
                {
                    a = "MWheelBackwards";
                    break
                }
            }
            return a === "" && console.error("An unrecognized scroll wheel event was received: ", t),
            a
        }
        return t instanceof MouseEvent && (a = `Mouse${t.button}`),
        a
    }
    cycleScope(t) {
        const a = this.game.uiManager.inventory.scope
          , o = Ee.definitions.indexOf(a);
        let s = a
          , n = o
          , r = 0;
        for (; r++ < 100; ) {
            n = this.game.console.getBuiltInCVar("cv_loop_scope_selection") ? Y.absMod(n + t, Ee.definitions.length) : Y.clamp(n + t, 0, Ee.definitions.length - 1);
            const d = Ee.definitions[n];
            if (this.game.uiManager.inventory.items[d.idString]) {
                s = d;
                break
            }
        }
        s !== a && this.addAction({
            type: L.UseItem,
            item: s
        })
    }
    cycleThrowable(t) {
        var h;
        const a = (h = this.game.uiManager.inventory.weapons.find(_=>(_ == null ? void 0 : _.definition.itemType) === C.Throwable)) == null ? void 0 : h.definition;
        if (!a)
            return;
        const o = Kt.definitions
          , s = o.indexOf(a);
        let n = a;
        const r = this.game.uiManager.inventory.items;
        let d = s
          , g = 0;
        for (; g++ < 100; ) {
            d = Y.absMod(d + t, o.length);
            const _ = o[d];
            if (r[_.idString]) {
                n = _;
                break
            }
        }
        n !== a && this.addAction({
            type: L.UseItem,
            item: n
        })
    }
    generateBindsConfigScreen() {
        this._keybindsContainer.html("").append(pe`
            <div class="modal-item" id="keybind-clear-tooltip">
                ${z("keybind_clear_tooltip")}
            </div>
        `);
        let t;
        for (const a in ji) {
            const o = m("<div/>", {
                class: "modal-item"
            }).appendTo(this._keybindsContainer);
            m("<div/>", {
                class: "setting-title",
                text: z(`bindings_${a}`)
            }).appendTo(o);
            const s = this.binds.getInputsBoundToAction(a);
            for (; s.length < 2; )
                s.push("None");
            const n = s.map(r=>m("<button/>", {
                class: "btn btn-darken btn-lg btn-secondary btn-bind",
                text: r || "None"
            }).appendTo(o)[0]);
            s.forEach((r,d)=>{
                const g = n[d]
                  , h = _=>{
                    if (_.stopImmediatePropagation(),
                    _ instanceof MouseEvent && _.type === "mousedown" && !g.classList.contains("active")) {
                        t == null || t.classList.remove("active"),
                        g.classList.add("active"),
                        t = g;
                        return
                    }
                    if (g.classList.contains("active")) {
                        _.preventDefault();
                        const f = this.getKeyFromInputEvent(_)
                          , b = Array.isArray(f) ? f[0] : f;
                        r && this.binds.remove(r, a),
                        this.binds.unbindInput(b),
                        b === "Escape" || b === "Backspace" || this.binds.addActionsToInput(b, a),
                        this.game.console.writeToLocalStorage(),
                        this.generateBindsConfigScreen()
                    }
                }
                ;
                g.addEventListener("keydown", h),
                g.addEventListener("mousedown", h),
                g.addEventListener("wheel", h),
                g.addEventListener("contextmenu", _=>{
                    _.preventDefault()
                }
                ),
                g.addEventListener("scroll", _=>{
                    _.preventDefault(),
                    _.stopPropagation(),
                    _.stopImmediatePropagation()
                }
                )
            }
            )
        }
        m("<div/>", {
            class: "modal-item"
        }).append(m("<button/>", {
            class: "btn btn-darken btn-lg btn-danger",
            html: pe`
                <span style="position: relative; top: -2px">
                    <i class="fa-solid fa-trash" style="font-size: 17px; margin-right: 3px; position: relative; top: -1px"></i>
                    ${z("keybind_reset")}
                </span>`
        }).on("click", ()=>{
            this.binds.unbindAll();
            for (const [a,o] of Object.entries(ji))
                this.binds.addInputsToAction(a, ...o);
            this.generateBindsConfigScreen(),
            this.game.console.writeToLocalStorage()
        }
        )).appendTo(this._keybindsContainer);
        for (let a = 0, o = $.player.maxWeapons; a < o; a++) {
            const s = this.binds.getInputsBoundToAction(a === 3 ? "equip_or_cycle_throwables 1" : `slot ${a}`).filter(n=>n !== "").slice(0, 2);
            m(`#weapon-slot-${a + 1}`).children(".slot-number").text(s.join(" / "))
        }
    }
    static getIconFromInputName(t) {
        let a;
        const o = t.toLowerCase();
        return ["mouse", "mwheel", "tab", "enter", "capslock", "shift", "alt", "meta", "control", "arrow", "backspace", "escape", "space"].some(s=>o.startsWith(s)) && (o === "meta" ? a = navigator.userAgent.match(/mac|darwin/ig) ? "command" : "windows" : a = o.replace(/ /g, "")),
        a === void 0 ? a : `./img/misc/${a}_icon.svg`
    }
}
;
c(Et, "_instantiated", !1);
let ci = Et;
const we = class we {
    constructor() {
        c(this, "_inputToAction", new Map);
        c(this, "_actionToInput", new Map);
        c(this, "addActionsToInput", we._generateAdder(this._inputToAction, this._actionToInput, this));
        c(this, "addInputsToAction", we._generateAdder(this._actionToInput, this._inputToAction, this));
        c(this, "unbindInput", we._generateRemover(this._inputToAction, this._actionToInput, this));
        c(this, "unbindAction", we._generateRemover(this._actionToInput, this._inputToAction, this));
        c(this, "getInputsBoundToAction", we._generateGetter(this._actionToInput));
        c(this, "getActionsBoundToInput", we._generateGetter(this._inputToAction));
        c(this, "listBoundInputs", we._generateLister(this._inputToAction));
        c(this, "listBoundActions", we._generateLister(this._actionToInput))
    }
    remove(t, a) {
        const o = this._inputToAction.get(t);
        return o === void 0 ? !1 : (o.delete(a),
        this._actionToInput.get(a).delete(t),
        !0)
    }
    unbindAll() {
        return this._inputToAction.clear(),
        this._actionToInput.clear(),
        this
    }
    getAll() {
        return [...this._actionToInput.entries()].reduce((t,[a,o])=>(t[a] = [...o],
        t), {})
    }
}
;
c(we, "_generateGetAndSetIfAbsent", (t,a)=>o=>t.get(o) ?? (t.set(o, a),
a)),
c(we, "_generateAdder", (t,a,o)=>(s,...n)=>{
    const r = we._generateGetAndSetIfAbsent(t, new Set)(s);
    for (const d of n)
        r.add(d),
        we._generateGetAndSetIfAbsent(a, new Set)(d).add(s);
    return o
}
),
c(we, "_generateRemover", (t,a,o)=>s=>{
    t.delete(s);
    for (const n of a.values())
        n.delete(s);
    return o
}
),
c(we, "_generateGetter", t=>a=>{
    var o, s;
    return [...((s = (o = t.get(a)) == null ? void 0 : o.values) == null ? void 0 : s.call(o)) ?? []]
}
),
c(we, "_generateLister", t=>()=>[...t.keys()]);
let Oi = we;
function kn(i) {
    return +i.archive & 1 | +i.readonly & 0 | +i.cheat & 0 | +i.replicated & 0
}
function yn(i) {
    return {
        archive: !!(i & 1),
        readonly: !!(i & 0),
        cheat: !!(i & 0),
        replicated: !!(i & 0)
    }
}
const A = Object.freeze({
    toString(i) {
        return {
            res: i
        }
    },
    toNumber(i) {
        const t = +i;
        return Number.isNaN(t) ? {
            err: `'${i}' is not a valid numeric value`
        } : {
            res: t
        }
    },
    toInt(i) {
        const t = A.toNumber(i);
        return "err"in t ? t : t.res % 1 ? {
            err: `'${i}' is not an integer value`
        } : t
    },
    toBoolean(i) {
        switch (i = i.toLowerCase(),
        !0) {
        case ["1", "t", "true", "y", "yes"].includes(i):
            return {
                res: !0
            };
        case ["0", "f", "false", "n", "no"].includes(i):
            return {
                res: !1
            };
        default:
            return {
                err: `'${i}' is not a valid boolean value`
            }
        }
    },
    generateUnionCaster(i) {
        const t = i.map((a,o,s)=>`${o === s.length - 1 ? "or " : ""}'${a}'`).join(", ");
        return a=>i.includes(a) ? {
            res: a
        } : {
            err: `Value must be either ${t}; received ${a}`
        }
    }
});
class ia {
    constructor(t, a, o, s, n) {
        c(this, "name");
        c(this, "flags");
        c(this, "_typeCaster");
        c(this, "_value");
        c(this, "console");
        this.name = t,
        this._value = a,
        this.console = o,
        this.flags = {
            archive: (n == null ? void 0 : n.archive) ?? !1,
            readonly: (n == null ? void 0 : n.readonly) ?? !1,
            cheat: (n == null ? void 0 : n.cheat) ?? !1,
            replicated: (n == null ? void 0 : n.replicated) ?? !1
        },
        this._typeCaster = s
    }
    get value() {
        return this._value
    }
    setValue(t, a=!0) {
        switch (!0) {
        case this.flags.readonly:
            return {
                err: `Cannot set value of readonly CVar '${this.name}'`
            };
        case this.flags.replicated:
            return {
                err: `Value of replicated CVar '${this.name}' can only be modified by server operators`
            };
        case this.flags.cheat:
            return {
                err: `Cannot set value of cheat CVar '${this.name}' because cheats are disabled`
            }
        }
        const o = this._typeCaster(String(t));
        if ("err"in o)
            return o;
        const s = o.res;
        this._value !== s && (this._value = s,
        this.flags.archive && a && this.console.writeToLocalStorage())
    }
}
const Lt = class Lt {
    constructor(t) {
        c(this, "_userCVars", new Map);
        c(this, "_builtInCVars", {});
        c(this, "get", (()=>{
            const t = s=>this._builtInCVars[s]
              , a = s=>this._userCVars.get(s)
              , o = s=>s in this._builtInCVars ? t(s) : a(s);
            return o.builtIn = t,
            o.custom = a,
            o
        }
        )());
        c(this, "set", (()=>{
            const t = (s,n,r=!0)=>{
                const d = this._builtInCVars[s]
                  , g = d.value
                  , h = d.setValue(n, r)
                  , _ = d.value;
                if (h === void 0 && g !== _)
                    for (const f of this._changeListeners.get(s) ?? [])
                        f(this.console.game, _, g, d);
                return h
            }
              , a = (s,n)=>{
                const r = this._userCVars.get(s);
                return r === void 0 ? {
                    err: `Could not find console variable '${s}'`
                } : r.setValue(n)
            }
              , o = (s,n,r=!1)=>s in this._builtInCVars ? t(s, n, r) : a(s, n);
            return o.builtIn = t,
            o.custom = a,
            o
        }
        )());
        c(this, "has", (()=>{
            const t = s=>s in this._builtInCVars
              , a = s=>this._userCVars.has(s)
              , o = s=>s in this._builtInCVars ? t(s) : a(s);
            return o.builtIn = t,
            o.custom = a,
            o
        }
        )());
        c(this, "_changeListeners", new Yi);
        if (this.console = t,
        Lt._instantiated)
            throw new Error("Class 'ConsoleVariables' has already been instantiated");
        Lt._instantiated = !0;
        const a = this.has.bind(this);
        this.console = t;
        const o = {};
        for (const s in tt) {
            const n = s;
            if (a(n))
                continue;
            const r = s
              , d = tt[r]
              , g = typeof d == "object" ? d.value : d
              , h = typeof d == "object" && d.changeListeners ? [d.changeListeners].flat() : []
              , _ = typeof d == "object" && d.flags ? d.flags : {};
            o[r] = new ia(r,g,t,Sn[n],{
                archive: !0,
                readonly: !1,
                cheat: !1,
                ..._
            }),
            this._changeListeners.set(r, h)
        }
        this._builtInCVars = o
    }
    addChangeListener(t, a) {
        this._changeListeners.getAndSetIfAbsent(t, []).push(a)
    }
    removeChangeListener(t, a) {
        const o = this._changeListeners.get(t);
        o && this._changeListeners.set(t, o.filter(s=>s !== a))
    }
    declareCVar(t) {
        if (this._userCVars.has(t.name))
            return {
                err: `CVar ${t.name} has already been declared`
            };
        this._userCVars.set(t.name, t)
    }
    removeCVar(t) {
        if (!this._userCVars.delete(t))
            return {
                err: `CVar ${t} doesn't exist`
            }
    }
    getAll({defaults: t=!1, noArchive: a=!1}={}) {
        const o = {};
        for (const [s,n] of this._userCVars.entries())
            o[s] = {
                value: n.value,
                flags: kn(n.flags)
            };
        for (const s in this._builtInCVars) {
            const n = s
              , r = this._builtInCVars[n];
            let d;
            (!t || r.value !== (typeof (d = tt[n]) == "object" ? d.value : d)) && (r.flags.archive || !a) && (o[s] = r.value)
        }
        return o
    }
    dump() {
        return [...Object.entries(this._builtInCVars), ...this._userCVars.entries()].map(([t,{flags: a, value: o}])=>`<li><code>${t}</code> ${[a.archive ? '<span class="cvar-detail-archived" title="Archived CVar">A</span>' : "", a.cheat ? '<span class="cvar-detail-cheat" title="Cheat CVar">C</span>' : "", a.readonly ? '<span class="cvar-detail-readonly" title="Readonly CVar">R</span>' : "", a.replicated ? '<span class="cvar-detail-replicated" title="Replicated CVar">S</span>' : ""].join(" ")} &rightarrow;&nbsp;<code class="cvar-value-${o === null ? "null" : typeof o}">${wo(o)}</code></li>`).join("")
    }
}
;
c(Lt, "_instantiated", !1);
let Bi = Lt;
class N {
    constructor(t, a, o, s, n) {
        c(this, "_name");
        c(this, "_executor");
        c(this, "_game");
        c(this, "_inverse");
        c(this, "_info");
        const r = "A-Z-a-z_"
          , d = `[${n ? `${r}+-` : r}]`
          , g = new RegExp(`^${d}[${r}0-9]*$`);
        if (!t.match(g))
            throw new Error(`Command names must be comprised only of alphanumeric characters and underscores, and their name's first character cannot be a number. (Received '${t}')`);
        this._name = t,
        this._executor = a.bind(o),
        this._game = o,
        this._info = s,
        this._info.signatures.length === 0 ? console.warn(`No signatures given for command '${this._name}'`) : this._info.signatures.forEach((h,_)=>{
            const f = h.args;
            if (f.length !== 0) {
                for (let b = 0, v = f.length - 2, w = f[0]; b < v; b++,
                w = f[b])
                    w.rest && (w.rest = !1,
                    console.warn(`Found illegal rest argument in info string of command '${this._name}' (signature ${_}, argument '${w.name}', position ${b})`));
                new Set(f.map(b=>b.name)).size !== f.length && console.error(`Found duplicate argument names in info string of command '${this._name}' (signature ${_})`)
            }
        }
        ),
        o.console.commands.has(this._name) && console.warn(`Overwriting command '${this._name}'`),
        o.console.commands.set(this._name, this)
    }
    get name() {
        return this._name
    }
    run(t=[]) {
        if (!this._info.allowOnlyWhenGameStarted || this._game.gameStarted)
            return this._executor.call(this._game, ...t)
    }
    get inverse() {
        return this._inverse
    }
    get info() {
        return this._info
    }
    static createInvertiblePair(t, a, o, s, n, r) {
        const d = new N(`+${t}`,a,s,n,!0)
          , g = new N(`-${t}`,o,s,r ?? n,!0);
        d._inverse = g,
        g._inverse = d
    }
    static createCommand(t, a, o, s) {
        new N(t,a,o,s)
    }
    toString() {
        return this._name
    }
}
function vn(i) {
    const t = i.console
      , a = i.inputManager.binds
      , o = (n,r)=>{
        N.createInvertiblePair(n, r ? function() {
            this.inputManager.movement[n] = !0,
            this.spectating && this.sendPacket(pi.create({
                spectateAction: r
            }))
        }
        : function() {
            this.inputManager.movement[n] = !0
        }
        , function() {
            this.inputManager.movement[n] = !1
        }, i, {
            short: `Moves the player in the '${n}' direction`,
            long: `Starts moving the player in the '${n}' direction when invoked`,
            allowOnlyWhenGameStarted: !0,
            signatures: [{
                args: [],
                noexcept: !0
            }]
        }, {
            short: `Halts the player's movement in the '${n}' direction`,
            long: `Stops moving the player in the '${n}' direction when invoked`,
            allowOnlyWhenGameStarted: !0,
            signatures: [{
                args: [],
                noexcept: !0
            }]
        })
    }
    ;
    o("up"),
    o("left", ze.SpectatePrevious),
    o("down"),
    o("right", ze.SpectateNext),
    N.createCommand("slot", function(n) {
        const r = A.toInt(n ?? "NaN");
        if ("err"in r)
            return {
                err: `Attempted to swap to invalid slot '${n}'`
            };
        this.inputManager.addAction({
            type: L.EquipItem,
            slot: r.res
        })
    }, i, {
        short: "Attempts to switch to the item in a given slot. The slot number is 0-indexed",
        long: "When invoked, an attempt to swap to the slot passed in argument will be made. The slot number is zero-indexed, meaning that 0 designates the first slot, 1 designates the second and 2 designates the third",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [{
                name: "id",
                type: ["number"]
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("last_item", function() {
        this.inputManager.addAction(L.EquipLastItem)
    }, i, {
        short: "Attempts to switch to the last item the player deployed",
        long: "When invoked, the player's last active slot will be switched to, if possible",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createCommand("other_weapon", function() {
        let n = this.uiManager.inventory.activeWeaponIndex === 0 || this.uiManager.inventory.weapons[0] === void 0 && this.uiManager.inventory.activeWeaponIndex !== 1 ? 1 : 0;
        this.uiManager.inventory.weapons[n] === void 0 && (n = 2),
        this.inputManager.addAction({
            type: L.EquipItem,
            slot: n
        })
    }, i, {
        short: "Attempts to switch to the other weapon in the player's inventory",
        long: "When invoked, the player will swap to the other weapon slot if there is a weapon there. If not, melee will be switched to",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createCommand("swap_gun_slots", function() {
        this.inputManager.addAction(L.SwapGunSlots)
    }, i, {
        short: "Exchanges the guns' slots in the player's inventory",
        long: "When invoked, the item in slot 0 will be placed in slot 1 and vice versa. Empty slots are treated normally, meaning that invoking this command with only one gun in an inventory will send it to the other slot, leaving the original slot empty",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createCommand("cycle_items", function(n) {
        const r = A.toInt(n ?? "NaN");
        if ("err"in r)
            return {
                err: `Attempted to cycle items by an invalid offset of '${n}' slots`
            };
        let d = Y.absMod(this.uiManager.inventory.activeWeaponIndex + r.res, $.player.maxWeapons)
          , g = 0;
        for (; !this.uiManager.inventory.weapons[d]; )
            if (d = Y.absMod(d + r.res, $.player.maxWeapons),
            ++g > 100) {
                d = this.uiManager.inventory.activeWeaponIndex;
                break
            }
        this.inputManager.addAction({
            type: L.EquipItem,
            slot: d
        })
    }, i, {
        short: "Switches to the item <em>n</em> slots over, where <em>n</em> is some integer",
        long: "When invoked with an integer argument <em>n</em>, the slot offset from the current one by <em>n</em> slots will be switched to. If the offset is beyond the slots' range (< 0 or > 2), wrap-around is performed. Empty slots are ignored and cannot be swapped to",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [{
                name: "offset",
                type: ["integer"]
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("interact", function() {
        this.inputManager.addAction(L.Interact)
    }, i, {
        short: "Interacts with an object, if there is one",
        long: "When invoked, the player will attempt to interact with the closest interactable object that is in range",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    });
    for (const [n,r,d,g] of [["lock_slot", L.LockSlot, "Locks a slot, rendering it immutable", "Locks a weapon slot. A locked weapon slot cannot have its weapon changed, neither by dropping it, nor by replacing the weapon with one on the ground. However, locked slots may still be swapped via<code>swap_gun_slots</code>, which will transfer the lock appropriately. Use <code>unlock_slot</code> to undo a lock."], ["unlock_slot", L.UnlockSlot, "Unlocks a slot, rendering it mutable", "Unlocks a weapon slot. A locked weapon slot cannot have its weapon changed, neither by dropping it, nor by replacing the weapon with one on the ground. However, locked slots may still be swapped via<code>swap_gun_slots</code>, which will transfer the lock appropriately. Use <code>lock_slot</code> to lock a slot."], ["toggle_slot_lock", L.ToggleSlotLock, "Toggles the lock on a slot, either locking or unlocking it", "Either locks or unlocks a weapon slot. Locked slots cannot have their contents changed."]])
        N.createCommand(n, function(h) {
            let _ = this.uiManager.inventory.activeWeaponIndex;
            if (h) {
                const f = A.toInt(h ?? "NaN");
                if ("err"in f)
                    return {
                        err: `Cannot lock invalid slot '${h}'`
                    };
                _ = f.res
            }
            this.inputManager.addAction({
                type: r,
                slot: _
            })
        }, i, {
            short: d,
            long: g,
            allowOnlyWhenGameStarted: !0,
            signatures: [{
                args: [{
                    name: "target",
                    type: ["integer"],
                    optional: !0
                }],
                noexcept: !1
            }]
        });
    N.createCommand("loot", function() {
        this.inputManager.addAction(L.Loot)
    }, i, {
        short: "Loots closest object",
        long: "Loots closest object, this command is also invoked with interact if there is no key bound to loot",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createInvertiblePair("attack", function() {
        this.inputManager.attacking || (this.inputManager.attacking = !0)
    }, function() {
        this.inputManager.attacking && (this.inputManager.attacking = !1)
    }, i, {
        short: "Starts attacking",
        long: "When invoked, the player will start trying to attack as if the attack button was held down. Does nothing if the player is attacking",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }, {
        short: "Stops attacking",
        long: "When invoked, the player will stop trying to attack, as if the attack button was released. Does nothing if the player isn't attacking",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createCommand("drop", function() {
        this.inputManager.addAction({
            type: L.DropWeapon,
            slot: this.uiManager.inventory.activeWeaponIndex
        })
    }, i, {
        short: "Drops the current active item",
        long: "When invoked, the player will attempt to drop the item they're currently holding",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createCommand("cycle_scopes", function(n) {
        const r = A.toInt(n ?? "NaN");
        if ("err"in r)
            return {
                err: `Attempted to cycle scopes by an invalid offset of '${n}'`
            };
        i.inputManager.cycleScope(r.res)
    }, i, {
        short: "Switches to the scope <em>n</em> slots over, where <em>n</em> is some integer",
        long: "When invoked with an integer argument <em>n</em>, the scope offset from the current one by <em>n</em> slots will be switched to. If the offset is beyond the slots' range, wrap-around is performed if the user has <code>cl_loop_scope_selection</code> set to <code>true</code>",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [{
                name: "offset",
                type: ["integer"]
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("equip_or_cycle_throwables", function(n) {
        var r;
        if (((r = this.activePlayer) == null ? void 0 : r.activeItem.itemType) === C.Throwable) {
            const d = A.toInt(n ?? "NaN");
            if ("err"in d)
                return {
                    err: `Attempted to cycle throwables by an invalid offset of '${n}'`
                };
            i.inputManager.cycleThrowable(d.res)
        } else {
            const d = $.player.inventorySlotTypings.findIndex(g=>g === C.Throwable);
            d !== -1 && this.inputManager.addAction({
                type: L.EquipItem,
                slot: d
            })
        }
    }, i, {
        short: "Selects the throwable slot, but if it already is, then switches to the throwable <em>n</em> slots over, where <em>n</em> is some integer",
        long: "When invoked, this command will switch to the first throwable slot it finds if the active slot isn't a throwable slot—in this case, the 'offset' argument is ignored. If a throwable slot is selected, then the throwable offset from the current one by <em>n</em> slots will be selected, with the indices wrapping around if need be",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [{
                name: "offset",
                type: ["integer"],
                optional: !0
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("use_consumable", function(n) {
        if (n === void 0)
            return {
                err: "Expected a string argument, received nothing"
            };
        if (![...Gt, ...Ee, ...Kt].some(r=>r.idString === n))
            return {
                err: `There is no scope, consumable, nor throwable whose idString is '${n}'`
            };
        i.inputManager.addAction({
            type: L.UseItem,
            item: ae.fromString(n)
        })
    }, i, {
        short: "Uses the item designated by the given <code>idString</code>",
        long: "When invoked with a string argument, an attempt will be made to use the consumable, scope, or throwable whose <code>idString</code> matches it",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [{
                name: "idString",
                type: ["string"]
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("cancel_action", function() {
        i.inputManager.addAction(L.Cancel)
    }, i, {
        short: "Cancels the action (reloading and or consuming) the player is currently executing",
        long: "When invoked, the current action the player is executing will be stopped, if there is one",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createInvertiblePair("view_map", function() {
        i.map.switchToBigMap()
    }, function() {
        i.map.switchToSmallMap()
    }, i, {
        short: "Shows the game map",
        long: "When invoked, the fullscreen map will be toggled",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }, {
        short: "Hides the game map",
        long: "When invoked, the fullscreen map will be hidden",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createCommand("reload", function() {
        i.inputManager.addAction(L.Reload)
    }, i, {
        short: "Reloads the current active item",
        long: "When invoked, the player will attempt to reload the item they're currently holding",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createInvertiblePair("emote_wheel", function() {
        if (i.console.getBuiltInCVar("cv_hide_emotes") || this.gameOver || this.inputManager.emoteWheelActive)
            return;
        const {mouseX: n, mouseY: r} = this.inputManager
          , d = this.console.getBuiltInCVar("cv_ui_scale");
        this.inputManager.pingWheelMinimap || (this.inputManager.pingWheelPosition = e.clone(this.inputManager.gameMousePosition)),
        this.uiManager.ui.emoteWheel.css("left", `${n / d}px`).css("top", `${r / d}px`).css("background-image", 'url("./img/misc/emote_wheel.svg")').show(),
        this.inputManager.emoteWheelActive = !0,
        this.inputManager.emoteWheelPosition = e.create(n, r)
    }, function() {
        if (!this.inputManager.emoteWheelActive || (this.inputManager.emoteWheelActive = !1,
        this.inputManager.pingWheelMinimap = !1,
        this.uiManager.ui.emoteWheel.hide(),
        this.inputManager.selectedEmote === void 0))
            return;
        const n = this.uiManager.emotes[this.inputManager.selectedEmote];
        n && !this.inputManager.pingWheelActive ? this.inputManager.addAction({
            type: L.Emote,
            emote: n
        }) : this.inputManager.pingWheelActive && this.inputManager.addAction({
            type: L.MapPing,
            ping: this.uiManager.mapPings[this.inputManager.selectedEmote],
            position: this.inputManager.pingWheelPosition
        }),
        this.inputManager.selectedEmote = void 0
    }, i, {
        short: "Opens the emote wheel",
        long: "When invoked, the emote wheel will be opened, allowing the user to pick an emote",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }, {
        short: "Closes the emote wheel, using the designated emote, if any",
        long: "When invoked, the emote wheel will be closed, and if an emote has been selected, it will be displayed",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createInvertiblePair("map_ping_wheel", function() {
        this.inputManager.pingWheelActive = !0,
        this.uiManager.updateEmoteWheel()
    }, function() {
        this.inputManager.pingWheelActive = !1,
        this.uiManager.updateEmoteWheel()
    }, i, {
        short: "Enables the emote wheel's ping mode",
        long: "When invoked, the emote wheel will switch from triggering emotes to triggering map pings",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }, {
        short: "Disables the emote wheel's ping mode",
        long: "When invoked, the emote wheel will revert back to trigger emotes",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createCommand("screenshot_map", function() {
        const n = new Zi;
        n.texture = i.map.sprite.texture;
        const r = i.pixi.renderer.extract.canvas(n);
        if (r.toBlob)
            r.toBlob(d=>{
                d && window.open(URL.createObjectURL(d))
            }
            );
        else
            return {
                err: "canvas.toBlob is undefined"
            };
        n.destroy()
    }, i, {
        short: "Screenshot the game map texture and open it on a new tab as a blob image",
        long: "Attempts to generate a downloadable image from the minimap's contents, then opening that image in a new tab",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !1
        }]
    }),
    N.createCommand("screenshot_game", function() {
        const {width: n, height: r} = i.camera
          , d = i.camera.container
          , g = new Wo(i.camera.position.x - n / 2 / d.scale.x,i.camera.position.y - r / 2 / d.scale.y,n / d.scale.x,r / d.scale.y)
          , h = i.pixi.renderer.extract.canvas({
            clearColor: je.grass,
            target: d,
            frame: g,
            resolution: d.scale.x,
            antialias: !0
        });
        if (h.toBlob)
            h.toBlob(_=>{
                _ && window.open(URL.createObjectURL(_))
            }
            );
        else
            return {
                err: "canvas.toBlob is undefined"
            }
    }, i, {
        short: "Screenshot the game camera and open it on a new tab as a blob image",
        long: "Attempts to take a screenshot of the game without any of its HUD elements, and then attempts to open this image in a new tab",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !1
        }]
    }),
    N.createCommand("disconnect", function() {
        this.endGame()
    }, i, {
        short: "Leaves the current game",
        long: "When invoked, the player is disconnected from their current game",
        allowOnlyWhenGameStarted: !0,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createCommand("clear", function() {
        t.clear()
    }, i, {
        short: "Clears the console",
        long: "When invoked, the game console's contents will be erased",
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createCommand("clear_history", function() {
        t.clearHistory()
    }, i, {
        short: "Clears the query history",
        long: "When invoked, the game console's history is cleared",
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createCommand("echo", function(...n) {
        t.log.raw(n.join(" "))
    }, i, {
        short: "Echoes whatever is passed to it",
        long: "When invoked with any number of arguments, the arguments will be re-printed to the console in same order they were given",
        signatures: [{
            args: [{
                name: "args",
                optional: !0,
                type: ["string[]"],
                rest: !0
            }],
            noexcept: !0
        }]
    });
    const s = navigator.userAgent.match(/mac|darwin/ig);
    N.createCommand("bind", function(n, r) {
        if (n === void 0 || r === void 0)
            return {
                err: `Expected 2 arguments, received ${arguments.length}`
            };
        a.addActionsToInput(n.length > 1 ? n : n.toUpperCase(), r),
        t.writeToLocalStorage(),
        this.inputManager.generateBindsConfigScreen()
    }, i, {
        short: "Binds an input to an action",
        long: `Given the name of an input (such as a key or mouse button) and a console query, this command establishes a new link between the two.<br><p>For alphanumeric keys, simply giving the key as-is (e.g. "a", or "1") will do. However, keys with no textual representation, or that represent punctuation will have to given by name, such as "Enter" or "Period".</p><p>Note that actions bound to mouse buttons or the scroll wheel/trackpad will only be triggered when ingame, and that binding to mouse side-buttons is unreliable.</p><p>For the scroll wheel, the encoding is simply <code>MWheel</code>, followed by the capitalized direction (ex: <code>MWheelUp</code>)<br>Remember that if your query contains spaces, you must enclose the whole query in double quotes ("") so that it is properly parsed.</p><p>Note that Escape and Backspace may be used to bind actions, but doing so must be done through the console and cannot be done through the settings menu. Also note that Escape will always bring up the pause menu, and that this cannot be changed</p><p><details><summary>Full list of inputs and their corresponding names</summary><ul><li><details><summary>Alphanumeric keys (case insensitive)</summary><table style="text-align: center"><thead><tr><td>Input</td><td>"Console" name</td></tr></thead><tbody>${[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"].map(n=>[n, n]).map(([n,r])=>`<tr><td>${n}</td><td><code>${r}</td></tr>`).join("")}</tbody></table></details></li><li><details><summary>Modifier keys, system keys, and others (case sensitive)</summary><table style="text-align: center"><thead><tr><td>Input</td><td>"Console" name</td></tr></thead><tbody>${[["Shift ⇧", "Shift"], [s ? "Command ⌘" : "Windows ⊞", "Meta"], [s ? "Option ⌥" : "Alt", "Alt"], [s ? "Control ⌃" : "Control", "Control"], ["Escape ⎋", "Escape"], ["Backspace ←", "Backspace"], ["Tab ⇆", "Tab"], ["Caps Lock ⇪", "CapsLock"], ["Enter ↵", "Enter"], ["§", "IntlBackslash"], ["Left arrow", "ArrowLeft"], ["Right arrow", "ArrowRight"], ["Up arrow", "ArrowUp"], ["Down arrow", "ArrowDown"], ["Lock numpad", "NumLock"], ["Home", "Home"], ["Page up", "PageUp"], ["Page down", "PageDown"], ["Clear", "Clear"], ["End", "End"], ["Insert", "Insert"], ["Print Screen", "PrintScreen"], ["Scroll Lock", "ScrollLock"], ["Pause", "Pause"], ["Numpad add", "NumpadAdd"], ["Numpad subtract", "NumpadSubtract"], ["Numpad multiply", "NumpadMultiply"], ["Numpad divide", "NumpadDivide"], ["Numpad period", "NumpadDecimal"], ["Numpad equal", "NumpadEqual"], ["Numpad enter", "NumpadEnter"]].map(([n,r])=>`<tr><td>${n}</td><td><code>${r}</td></tr>`).join("")}</tbody><tfoot><tr><td colspan=2>Note that for keys appearing in two locations, (namely ${["Shift", s ? "Command" : "Windows", s ? "Option" : "Alt", "Control"].map(n=>`<code>${n}</code>`).join(", ")}) it is possible to bind either the left or right variant only. For example, binding only left Shift can be done with <code>LeftShift</code>, and right Shift can be done with <code>RightShift</code>; in all cases, <code>Shift</code> will allow both the left and right variant to trigger the action</td></tr></tfoot></table></details></li><li><details><summary>Number pad—<code>NumLock</code> required (case sensitive)</summary><table style="text-align: center"><thead><tr><td>Input</td><td>"Console" name</td></tr></thead><tbody>${Array.from({
            length: 10
        }, (n,r)=>[`Number pad ${r}`, `Numpad${r}`]).map(([n,r])=>`<tr><td>${n}</td><td><code>${r}</td></tr>`).join("")}</tbody></table></details></li><li><details><summary>Punctuation (case sensitive)</summary><table style="text-align: center"><thead><tr><td>Input</td><td>"Console" name</td></tr></thead><tbody>${[["Hyphen-minus (<code>-</code>)", "Minus"], ["Equals (<code>=</code>)", "Equals"], ["Opening square bracket (<code>[</code>)", "BracketLeft"], ["Closing square bracket (<code>]</code>)", "BracketRight"], ["Semicolon (<code>;</code>)", "Semicolon"], ["Quote/apostrophe (<code>'</code>)", "Quote"], ["Backslash (<code>\\</code>)", "Backslash"], ["Comma (<code>,</code>)", "Comma"], ["Period (<code>.</code>)", "Period"], ["Forward slash (<code>/</code>)", "Slash"], ["Backtick (<code>`</code>)", "Backquote"]].map(([n,r])=>`<tr><td>${n}</td><td><code>${r}</td></tr>`).join("")}</tbody></table></details></li><li><details><summary>Function keys (case sensitive)</summary><table style="text-align: center"><thead><tr><td>Input</td><td>"Console" name</td></tr></thead><tbody>${Array.from({
            length: 24
        }, (n,r)=>[`F${++r}`, `F${r}`]).map(([n,r])=>`<tr><td>${n}</td><td><code>${r}</td></tr>`).join("")}</tbody></table></details></li><li><details><summary>Mouse buttons (case sensitive)</summary><table style="text-align: center"><thead><tr><td>Input</td><td>"Console" name</td></tr></thead><tbody>${[["Primary (usually left click)", "Mouse0"], ["Auxillary (usually middle click)", "Mouse1"], ["Secondary (usually right click)", "Mouse2"], ["Backwards (usually back-left side-button)", "Mouse3"], ["Forwards (usually front-left side-button)", "Mouse4"]].map(([n,r])=>`<tr><td>${n}</td><td><code>${r}</td></tr>`).join("")}</tbody></table></details></li><li><details><summary>Scroll wheel / trackpad (case sensitive)</summary><table style="text-align: center"><thead><tr><td>Input</td><td>"Console" name</td></tr></thead><tbody>${[["Scroll down", "MWheelDown"], ["Scroll up", "MWheelUp"], ["Scroll right", "MWheelRight"], ["Scroll left", "MWheelLeft"], ["Scroll forwards", "MWheelForwards"], ["Scroll backwards", "MWheelBackwards"]].map(([n,r])=>`<tr><td>${n}</td><td><code>${r}</td></tr>`).join("")}</tbody></table></details></li></ul></details><br>`,
        signatures: [{
            args: [{
                name: "input",
                type: ["string"]
            }, {
                name: "query",
                type: ["string"]
            }],
            noexcept: !0
        }]
    }),
    N.createCommand("unbind", function(n) {
        if (n === void 0)
            return {
                err: "Expected an argument, received none"
            };
        a.unbindInput(n.length > 1 ? n : n.toUpperCase()),
        t.writeToLocalStorage(),
        this.inputManager.generateBindsConfigScreen()
    }, i, {
        short: "Removes all actions from a given input",
        long: "Given the name of an input (refer to the <code>bind</code> command for more information on naming), this command removes all actions bound to it",
        signatures: [{
            args: [{
                name: "input",
                type: ["string"]
            }],
            noexcept: !0
        }]
    }),
    N.createCommand("unbind_all", function() {
        a.unbindAll(),
        t.writeToLocalStorage(),
        this.inputManager.generateBindsConfigScreen()
    }, i, {
        short: "Removes all keybinds",
        long: "When invoked, all inputs will have their actions removed. <b>This is a very dangerous command!!</b>",
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createCommand("alias", function(n, r) {
        if (n === void 0 || r === void 0)
            return {
                err: `Expected 2 arguments, received ${arguments.length}`
            };
        if (t.commands.has(n))
            return {
                err: `Cannot override built-in command '${n}'`
            };
        if (t.variables.has(n))
            return {
                err: `Cannot shadow cvar '${n}'`
            };
        if (n.match(/^\w{2}_/))
            return {
                err: "Alias name must not match regular expression <code>^\\w{2}_</code>"
            };
        t.aliases.set(n, r),
        t.writeToLocalStorage()
    }, i, {
        short: "Creates a shorthand for a console query",
        long: `This command's first argument is the alias' name, and its second is the query; an <em>alias</em> is created, which can be called like any other command. When the alias is called, the query said alias is bound to will be executed, as if it had been entered into the console manually.<br>If the query contains spaces, remember to wrap it in double quotes ("") so it can be parsed correctly. An alias' name cannot match that of a built-in command, nor can it start with two alphanumeric characters followed by an underscore (in other words, the name mustn't match <code>^\\w{2}_</code>, because those prefixes may be used for future CVars). However, if it matches an existing alias, said existing alias will be replaced by the new one`,
        signatures: [{
            args: [{
                name: "alias_name",
                type: ["string"]
            }, {
                name: "query",
                type: ["string"]
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("remove_alias", function(n, r) {
        if (n === void 0)
            return {
                err: "Expected a string argument, received nothing"
            };
        if (!t.aliases.delete(n, Pt(A.toBoolean(r ?? "false"), ()=>!1)))
            return {
                err: `No alias by the name of '${n}' exists`
            };
        t.writeToLocalStorage()
    }, i, {
        short: "Removes an alias from the list of aliases",
        long: 'When given the name of an alias, this command removes it from the list of alises if it exists. If <code>remove_inverse</code> is set to <code>true</code> and the alias pointed to by <code>alias_name</code> is <em>invertible</em> (in other words, has a <code>+</code> form and a <code>-</code> form, like <code>+command</code> and <code>-command</code>), then both aliases will be removed. In this case, <code>alias_name</code> may be either one of the two forms, or the "base" name with no +/- (for example, removing <code>+command</code> and <code>-command</code> could be done by calling <code>remove_alias command true</code>, <code>remove_alias +command true</code>, or <code>remove_alias -command true</code>.) If <code>remove_inverse</code> is set to <code>true</code> but the targeted alias is not invertible, the value of <code>remove_inverse</code> is ignored. <code>remove_inverse</code> defaults to <code>false</code>.',
        signatures: [{
            args: [{
                name: "alias_name",
                type: ["string"]
            }, {
                name: "remove_inverse",
                optional: !0,
                type: ["boolean"]
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("list_binds", function(n) {
        const r = (d,g)=>{
            d !== "" && t.log.raw({
                main: `Actions bound to input '${d}'`,
                detail: g.map(h=>h instanceof N ? h.name : h).join("<br>")
            })
        }
        ;
        if (n) {
            const d = a.getActionsBoundToInput(n);
            if (d.length)
                r(n, d);
            else
                return {
                    err: `The input '${n}' hasn't been bound to any action`
                }
        } else {
            const d = document.createElement("ul");
            d.append(...a.listBoundInputs().map(g=>{
                const h = document.createElement("ul");
                h.append(...a.getActionsBoundToInput(g).map(f=>{
                    const b = document.createElement("li");
                    return b.innerText = f,
                    b
                }
                ));
                const _ = document.createElement("li");
                return _.append(g, h),
                _
            }
            )),
            t.log.raw(d.outerHTML)
        }
    }, i, {
        short: "Lists all the actions bound to a key, or all the keys and their respective actions",
        long: "If this command is invoked without an argument, all keys which have an action to them will be printed, along with the actions bound to each respective key. If it is invoked with an input's name, then only the actions bound to that input will be shown, if any",
        signatures: [{
            args: [],
            noexcept: !0
        }, {
            args: [{
                name: "input_name",
                type: ["string"]
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("list_cvars", ()=>{
        t.log.raw({
            main: "List of CVars",
            detail: `<ul>${t.variables.dump()}</ul>`
        })
    }
    , i, {
        short: "Prints out the values of CVars",
        long: `When invoked, will print out every at-the-time registered CVar and its value. The value's color corresponds to its type:<ul>${[[null, "null"], [void 0, "undefined"], ["abcd", "string"], [1234, "number"], [!1, "boolean"], [5678n, "bigint"], [Symbol.for("efgh"), "symbol"], [function(r) {}
        , "function"], [{}, "object"]].map(([n,r])=>`<li><b>${r}</b>: <code class="cvar-value-${r}">${wo(n)}</code></li>`).join("")}</ul>`,
        signatures: [{
            args: [],
            noexcept: !0
        }]
    }),
    N.createCommand("let", (n,r,d,g,h)=>{
        if (n === void 0 || r === void 0)
            return {
                err: `Expected at least 2 arguments, received ${arguments.length}`
            };
        if (!n.startsWith("uv_"))
            return {
                err: "Custom CVar name must start with <code>uv_</code>"
            };
        if (!n.match(/^uv_[a-zA-Z0-9_]+$/))
            return {
                err: "Custom CVar name be at least one character long (not including the prefix) and can only contain letters, numbers and underscores"
            };
        if (t.variables.has.custom(n))
            return {
                err: `Custom CVar '${n}' already exists. (To change its value to ${r}, do 'assign ${n} ${r}')`
            };
        const _ = {
            string: A.toString,
            number: A.toNumber,
            integer: A.toInt,
            boolean: A.toBoolean
        }[d ?? "string"];
        if (_ === void 0)
            return {
                err: `Unknown type '${d}'`
            };
        const f = _(r);
        if ("err"in f)
            return {
                err: `Provided type '${d}' does not match with provided value '${r}' (the given value is not assignable to the given type)`
            };
        const b = f.res;
        t.variables.declareCVar(new ia(n,b,t,_,{
            archive: Pt(A.toBoolean(g ?? "0"), ()=>!1),
            readonly: Pt(A.toBoolean(h ?? "0"), ()=>!1)
        })),
        t.writeToLocalStorage()
    }
    , i, {
        short: "Creates a new custom console variable, with a name and value",
        long: "When invoked, this command attempts to create a new CVar with the given name and value. <b>Names must being with <code>uv_</code>, must be at least one character long (not counting the prefix) and can only contain letters, numbers and underscores.</b> Invalid names will result in an error.<br>CVars marked as <code>archive</code> will be saved when the game closes and reinitialized when the game boots up again. Readonly CVars cannot have their value changed after being created",
        signatures: [{
            args: [{
                name: "name",
                type: ["string"]
            }, {
                name: "value",
                type: ["string", "number", "boolean"]
            }, {
                name: "type",
                type: ['"string"', '"number"', '"integer"', '"boolean"'],
                optional: !0
            }, {
                name: "archive",
                type: ["boolean"],
                optional: !0
            }, {
                name: "readonly",
                type: ["boolean"],
                optional: !0
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("assign", (n,r,d)=>{
        if (n === void 0 || r === void 0)
            return {
                err: `Expected 2 arguments, received ${arguments.length}`
            };
        if (!t.variables.has(n))
            return {
                err: `CVar '${n}' doesn't exist`
            };
        const g = A.toBoolean(d ?? "false")
          , h = t.variables.set(n, r);
        return t.writeToLocalStorage({
            includeNoArchive: "res"in g && g.res
        }),
        h
    }
    , i, {
        short: "Assigns a value to a CVar",
        long: "When invoked, this command attempts to assign a new value to a CVar. If the CVar is not archived, its value can still be written to permanent storage by passing <code>true</code> to this command's third parameter",
        signatures: [{
            args: [{
                name: "name",
                type: ["string"]
            }, {
                name: "value",
                type: ["string", "number", "boolean"]
            }, {
                name: "forceWrite",
                type: ["boolean"],
                optional: !0
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("toggle", (n,...r)=>{
        if (n === void 0)
            return {
                err: "Expected at least 1 argument, received none"
            };
        let d;
        if ((d = t.variables.get(n)) === void 0)
            return {
                err: `CVar '${n}' doesn't exist`
            };
        r.length === 0 && (r = ["true", "false"]);
        const g = r.indexOf(`${d.value}`);
        return g === -1 ? {
            err: `CVar '${n}' has a value not contained in the list of options (${d.value})`
        } : t.variables.set(d.name, r[(g + 1) % r.length])
    }
    , i, {
        short: "Cycles a CVar's value through a set of values",
        long: "When invoked, this command retrieves the CVar designated by <code>name</code>. If its current value is not in <code>values</code>, or if the CVar doesn't exist, an error is thrown. Otherwise, the CVar is assigned to the element in the list following the one corresponding to the current CVar's value. Any errors from this assignment are rethrown by this command. Invoking this command with only a CVar's name is equivalent to passing in <code>true false</code>for <code>values</code>",
        signatures: [{
            args: [{
                name: "name",
                type: ["string"]
            }, {
                name: "values",
                type: ["string", "number", "boolean"],
                optional: !0,
                rest: !0
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("delete", function(n) {
        if (n === void 0)
            return {
                err: "Expected a string argument, received nothing"
            };
        if (t.variables.has.builtIn(n))
            return {
                err: `Cannot delete built-in CVar '${n}'`
            };
        const r = t.variables.removeCVar(n);
        return r === void 0 && t.writeToLocalStorage(),
        r
    }, i, {
        short: "Removes a user CVar from the list of variables",
        long: "When given the name of a user variable, this command removes it from the list of variables. Passing in the name of a built-in CVar causes an error",
        signatures: [{
            args: [{
                name: "variable_name",
                type: ["string"]
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("list_alias", function(n) {
        if (n === void 0)
            return {
                err: "Expected a string argument, received nothing"
            };
        const r = t.aliases.get(n);
        if (r !== void 0)
            t.log.raw(`Alias '${n}' is defined as <code>${bt(r)}</code>`);
        else
            return {
                err: `No alias named '${n}' exists`
            }
    }, i, {
        short: "Gives the definition of an alias",
        long: "When given the name of an alias, if that alias exists, this command will print the query associated with it",
        signatures: [{
            args: [{
                name: "alias_name",
                type: ["string"]
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("help", function(n) {
        if (n === void 0) {
            t.log({
                main: "List of commands",
                detail: [...t.commands.keys()]
            }),
            t.log({
                main: "List of aliases",
                detail: [...t.aliases.keys()]
            });
            return
        }
        const r = t.commands.get(n);
        if (!r)
            return {
                err: `Cannot find command named '${n}'`
            };
        const d = r.info;
        t.log.raw({
            main: d.short,
            detail: [d.long, ...d.signatures.map(g=>{
                const h = "noexcept"in g && g.noexcept ? '<span class="command-desc-noexcept">noexcept</span> ' : ""
                  , _ = `<span class="command-desc-cmd-name">${r.name}</span>`
                  , f = g.args.length ? ` ${g.args.map(b=>`<em>${b.rest ? ".." : ""}${b.name}${b.optional ? "?" : ""}: ${b.type.map(v=>`<span class="command-desc-arg-type">${v}</span>`).join(" | ")}</em>`).join(", ")}` : "";
                return `<code>${h + _ + f}</code>`
            }
            )]
        })
    }, i, {
        short: "Displays help about a certain command, or a list of commands and aliases",
        long: `If given the name of a command, this command logs that command's help info, along with its signatures.<br>The signatures of a command are all the different possible ways in can be invoked. Each signature follows the following format: <code>noexcept-marker? command-name params</code><ul>${[["noexcept-marker", "If included, it indicates that this signature never returns an error. Styled as blue, bold and in italics"], ["command-name", "Simply the command's name. Styled as bold and yellow"], ["params", "A space-separated list of parameters, where each parameter follows the form <em><code>name: type</code></em>, where <code>name</code> is the parameter's name and <code>type</code> is its data type"]].map(([n,r])=>`<li><code>${n}</code>: ${r}</li>`).join("")}</ul>If not given an argument, this command logs a list of all defined commands and aliases. Passing the name of an alias to this command results in an error. If you want to see the query bound to an alias, use <code>list_alias</code>`,
        signatures: [{
            args: [],
            noexcept: !0
        }, {
            args: [{
                name: "command_name",
                type: ["string"]
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("throw", function(n) {
        if (Pt(A.toBoolean(n ?? "false"), ()=>!1))
            return {
                err: "Thrown error"
            }
    }, i, {
        short: "Optionally throws a value. For debugging purposes",
        long: "If supplied with a truthy argument, this command raises an exception; otherwise, it does nothing.",
        signatures: [{
            args: [],
            noexcept: !0
        }, {
            args: [{
                name: "doThrow",
                type: ["boolean"]
            }],
            noexcept: !1
        }]
    }),
    N.createCommand("dump_client_info", function(n) {
        const r = {
            version: "0.18.2",
            api_url: "/api",
            client_protocol_version: $.protocolVersion,
            pixi: {
                version: Go,
                renderer_info: {
                    type: eo[i.pixi.renderer.type],
                    resolution: i.pixi.renderer.resolution
                }
            },
            user_agent: {
                ua_string: navigator.userAgent,
                language: navigator.language,
                online: navigator.onLine
            },
            regions: lt.regions,
            mode: lt.mode,
            default_region: lt.defaultRegion
        };
        Pt(A.toBoolean(n ?? "false"), ()=>!1) ? i.console.log.raw(JSON.stringify(r, null, 2).replace(/\n| /g, d=>({
            "\n": "<br>",
            " ": "&nbsp;"
        })[d] ?? "")) : i.console.log.raw(function d(g) {
            let h = "<ul>";
            for (const [_,f] of Object.entries(g))
                h += `<li><b>${_}</b>: ${typeof f == "object" && f !== null ? d(f) : String(f)}</li>`;
            return `${h}</ul>`
        }(r))
    }, i, {
        short: "Gives info about the client",
        long: "Dumps a variety of information about the current client. For debugging purposes. If <code>raw</code> is set to true, the data is outputted as raw JSON; otherwise, it is displayed in a list (default option).",
        signatures: [{
            args: [{
                name: "raw",
                type: ["boolean"],
                optional: !0
            }],
            noexcept: !0
        }]
    }),
    t.handleQuery(`
        alias +map_ping "+emote_wheel; +map_ping_wheel" & alias -map_ping "-emote_wheel; -map_ping_wheel";        alias toggle_minimap "toggle cv_minimap_minimized";        alias toggle_hud "toggle cv_draw_hud";        alias toggle_map "toggle cv_map_expanded";        alias toggle_console "toggle cv_console_open";
    `)
}
class qa extends SyntaxError {
    constructor(t, a, o=1) {
        super(t),
        this.charIndex = a,
        this.length = o
    }
}
let Pi = !1
  , Ri = !1
  , Ai = !1;
const Ot = class Ot {
    constructor(t) {
        c(this, "_isOpen", !1);
        c(this, "_ui", {
            globalContainer: m("#console"),
            container: m("#console-container"),
            header: m("#console-header"),
            closeButton: m("#console-close"),
            output: m("#console-out"),
            input: m("#console-in"),
            autocomplete: m("#console-autocmp")
        });
        c(this, "_dimensions", (()=>{
            let t = NaN
              , a = NaN;
            const o = this;
            let s;
            return {
                get width() {
                    return t
                },
                set width(n) {
                    var r;
                    n = Y.clamp(n, 0, window.innerWidth - (Number.isNaN(((r = o._position) == null ? void 0 : r.left) ?? NaN) ? -1 / 0 : o._position.left)),
                    (s ?? (s = o.variables.set.builtIn))("cv_console_width", t = n)
                },
                get height() {
                    return a
                },
                set height(n) {
                    var r;
                    n = Y.clamp(n, 0, window.innerHeight - (Number.isNaN(((r = o._position) == null ? void 0 : r.top) ?? NaN) ? -1 / 0 : o._position.top)),
                    (s ?? (s = o.variables.set.builtIn))("cv_console_height", a = n)
                }
            }
        }
        )());
        c(this, "_position", (()=>{
            let t = NaN
              , a = NaN;
            const o = 1
              , s = this;
            let n;
            const {container: r, autocomplete: d} = this._ui;
            return {
                get left() {
                    return t
                },
                set left(g) {
                    g = Y.clamp(g, 0, window.innerWidth - s._dimensions.width - o),
                    t !== g && ((n ?? (n = s.variables.set.builtIn))("cv_console_left", t = g),
                    r.css("left", t),
                    d.css("left", t))
                },
                get top() {
                    return a
                },
                set top(g) {
                    g = Y.clamp(g, 0, window.innerHeight - s._dimensions.height - o),
                    a !== g && ((n ?? (n = s.variables.set.builtIn))("cv_console_top", a = g),
                    r.css("top", a),
                    d.css("top", a + s._dimensions.height))
                }
            }
        }
        )());
        c(this, "_entries", []);
        c(this, "_localStorageKey", "suroi_config");
        c(this, "_history", new class {
            constructor() {
                c(this, "_backingSet", new Set);
                c(this, "_backingArray", [])
            }
            add(a) {
                const o = this._backingSet.size;
                this._backingSet.add(a),
                this._backingSet.size !== o && this._backingArray.push(a)
            }
            clear() {
                this._backingSet.clear(),
                this._backingArray.length = 0
            }
            filter(a) {
                return this._backingArray.filter(a)
            }
            all() {
                return this._backingArray
            }
        }
        );
        c(this, "commands", (()=>{
            const t = new Map
              , a = t.set.bind(t)
              , o = t.clear.bind(t)
              , s = t.delete.bind(t);
            return t.set = (n,r)=>{
                const d = a(n, r);
                return this._autocmpData.cache.invalidateCommands(),
                d
            }
            ,
            t.clear = ()=>{
                o(),
                this._autocmpData.cache.invalidateCommands()
            }
            ,
            t.delete = n=>{
                const r = s(n);
                return r && this._autocmpData.cache.invalidateCommands(),
                r
            }
            ,
            t
        }
        )());
        c(this, "aliases", (()=>{
            const t = new Map
              , a = t.set.bind(t)
              , o = t.clear.bind(t)
              , s = t.delete.bind(t);
            return t.set = (n,r)=>{
                const d = a(n, r);
                return this._autocmpData.cache.invalidateAliases(),
                d
            }
            ,
            t.clear = ()=>{
                o(),
                this._autocmpData.cache.invalidateAliases()
            }
            ,
            t.delete = (n,r=!1)=>{
                let d = n;
                r && (r = (["+", "-"].includes(n[0]) ? (d = n.slice(1),
                !0) : !1) || t.has(`+${n}`));
                const [g,h] = r ? [`+${d}`, `-${d}`] : [n, n]
                  , _ = s(g);
                return _ && (this._autocmpData.cache.invalidateAliases(),
                r && s(h)),
                _
            }
            ,
            t
        }
        )());
        c(this, "variables", (()=>{
            const t = new Bi(this)
              , a = t.declareCVar.bind(t)
              , o = t.removeCVar.bind(t);
            return t.declareCVar = s=>{
                const n = a(s);
                return n === void 0 && this._autocmpData.cache.invalidateVariables(),
                n
            }
            ,
            t.removeCVar = s=>{
                const n = o(s);
                return n === void 0 && this._autocmpData.cache.invalidateVariables(),
                n
            }
            ,
            t
        }
        )());
        c(this, "_autocmpData", {
            nodes: [],
            activeIndex: void 0,
            cache: (()=>{
                const t = this;
                let a, o, s;
                return {
                    get commands() {
                        return a ?? (a = [...t.commands.keys()])
                    },
                    invalidateCommands() {
                        a = void 0
                    },
                    get aliases() {
                        return o ?? (o = [...t.aliases.keys()])
                    },
                    invalidateAliases() {
                        o = void 0
                    },
                    get variables() {
                        return s ?? (s = Object.keys(t.variables.getAll()))
                    },
                    invalidateVariables() {
                        s = void 0
                    },
                    invalidateAll() {
                        this.invalidateCommands(),
                        this.invalidateAliases(),
                        this.invalidateVariables()
                    }
                }
            }
            )()
        });
        c(this, "_createLogger", t=>{
            const a = (o,s)=>{
                this._pushAndLog(this._createConsoleEntry(o, s ? t.alt : t.default), !1)
            }
            ;
            return a.raw = (o,s)=>{
                this._pushAndLog(this._createConsoleEntry(o, s ? t.alt : t.default), !0)
            }
            ,
            a
        }
        );
        c(this, "log", this._createLogger({
            default: "log",
            alt: "important"
        }));
        c(this, "warn", this._createLogger({
            default: "warn",
            alt: "severe_warn"
        }));
        c(this, "error", this._createLogger({
            default: "error",
            alt: "fatal_error"
        }));
        if (this.game = t,
        Ot._instantiated)
            throw new Error("Class 'GameConsole' has already been instantiated");
        Ot._instantiated = !0,
        this._attachListeners(),
        window.addEventListener("error", n=>{
            var r, d;
            n.filename && (this.error({
                main: `Javascript ${n.error ? `'${(d = (r = Object.getPrototypeOf(n.error)) == null ? void 0 : r.constructor) == null ? void 0 : d.name}'` : n.type} occurred at ${n.filename.replace(location.origin + location.pathname, "./")}:${n.lineno}:${n.colno}`,
                detail: n.error ?? n.message
            }, !0),
            console.error(n))
        }
        );
        const a = this.variables.addChangeListener.bind(this.variables);
        a("cv_console_left", (n,r)=>{
            this._position.left = r
        }
        ),
        a("cv_console_top", (n,r)=>{
            this._position.top = r
        }
        );
        const {container: o, autocomplete: s} = this._ui;
        a("cv_console_width", (n,r)=>{
            Ri || o.css("width", r),
            s.css("width", r)
        }
        ),
        a("cv_console_height", (n,r)=>{
            Ai || o.css("height", r),
            s.css("top", this._position.top + r)
        }
        ),
        this.isOpen = this._isOpen
    }
    get isOpen() {
        return this._isOpen
    }
    set isOpen(t) {
        this._isOpen !== t && (this._isOpen = t,
        this.variables.get.builtIn("cv_console_open").setValue(t),
        this._isOpen ? (this._ui.globalContainer.show(),
        this._ui.input.trigger("focus"),
        Pi = !this.game.gameStarted) : this._ui.globalContainer.hide())
    }
    clearHistory() {
        this._history.clear()
    }
    writeToLocalStorage({includeDefaults: t=!1, includeNoArchive: a=!1}={}) {
        const o = {
            variables: this.variables.getAll({
                defaults: !t,
                noArchive: !a
            }),
            aliases: Object.fromEntries(this.aliases),
            binds: this.game.inputManager.binds.getAll()
        };
        localStorage.setItem(this._localStorageKey, JSON.stringify(o))
    }
    readFromLocalStorage() {
        const t = localStorage.getItem(this._localStorageKey)
          , a = JSON.parse(JSON.stringify(ji));
        let o = !1;
        if (t) {
            const n = JSON.parse(t);
            for (const r in n.variables) {
                const d = n.variables[r]
                  , g = typeof d == "object" ? d == null ? void 0 : d.value : d;
                if (r in tt) {
                    this.variables.set.builtIn(r, g, !1);
                    continue
                }
                if (o = !0,
                !r.match(/^uv_[a-zA-Z0-9_]+$/)) {
                    const h = `Malformed CVar '${r}' found (this was either forced into local storage manually or is an old CVar that no longer exists). It will not be registered and will be deleted.`;
                    console.warn(h),
                    this.warn(h);
                    continue
                }
                this.variables.declareCVar(new ia(r,g,this,A.toString,{
                    archive: !0,
                    cheat: !1,
                    readonly: !1,
                    ...typeof d == "object" ? yn((d == null ? void 0 : d.flags) ?? 0) : {}
                }))
            }
            if (n.binds) {
                for (const r in n.binds)
                    r in n.binds && (a[r] = n.binds[r]);
                o = !0
            }
            for (const r in n.aliases)
                this.aliases.set(r, n.aliases[r]);
            this._autocmpData.cache.invalidateAll()
        }
        const s = this.game.inputManager.binds;
        for (const n in a) {
            const r = a[n];
            if (!r.length) {
                s.addInputsToAction(n);
                continue
            }
            for (const d of r)
                s.addActionsToInput(d, n)
        }
        o && this.writeToLocalStorage(),
        this.resizeAndMove({
            dimensions: {
                width: this.getBuiltInCVar("cv_console_width"),
                height: this.getBuiltInCVar("cv_console_height")
            },
            position: {
                left: this.getBuiltInCVar("cv_console_left"),
                top: this.getBuiltInCVar("cv_console_top")
            }
        }),
        this.isOpen = this.getBuiltInCVar("cv_console_open")
    }
    getBuiltInCVar(t) {
        return this.variables.get.builtIn(t).value
    }
    setBuiltInCVar(t, a) {
        this.variables.set.builtIn(t, a)
    }
    _attachListeners() {
        this._ui.closeButton.on("click", a=>{
            a.button === 0 && this.close()
        }
        );
        {
            let a = !1;
            const o = {
                x: NaN,
                y: NaN
            }
              , s = ()=>{
                a && (a = !1,
                window.removeEventListener("mouseup", s),
                window.removeEventListener("mousemove", n))
            }
              , n = r=>{
                this._position.left = r.clientX + o.x,
                this._position.top = r.clientY + o.y
            }
            ;
            this._ui.header.on("mousedown", r=>{
                a = !0,
                o.x = parseInt(this._ui.container.css("left")) - r.clientX,
                o.y = parseInt(this._ui.container.css("top")) - r.clientY,
                window.addEventListener("mouseup", s),
                window.addEventListener("mousemove", n)
            }
            )
        }
        new ResizeObserver(a=>{
            var s;
            if (!this._isOpen)
                return;
            const o = (s = a[0]) == null ? void 0 : s.borderBoxSize[0];
            o !== void 0 && (Ri = !0,
            this._dimensions.width = o.inlineSize,
            Ri = !1,
            Ai = !0,
            this._dimensions.height = o.blockSize,
            Ai = !1)
        }
        ).observe(this._ui.container[0]);
        let t = !1;
        this._ui.globalContainer.on("keydown", a=>{
            switch (a.key) {
            case "Enter":
                {
                    a.preventDefault(),
                    a.stopPropagation(),
                    a.stopImmediatePropagation();
                    const o = this._ui.input.val();
                    this._ui.input.val(""),
                    t = !1,
                    this._history.add(o),
                    this.log.raw(`> ${bt(o, {
                        strict: !0,
                        escapeNewLines: !0,
                        escapeSpaces: !0
                    })}`),
                    this.handleQuery(o),
                    this._updateAutocmp();
                    break
                }
            case "ArrowDown":
            case "ArrowUp":
                {
                    if (!this._isOpen)
                        return;
                    a.preventDefault(),
                    a.stopPropagation(),
                    a.stopImmediatePropagation(),
                    t = !0;
                    const {nodes: o, activeIndex: s} = this._autocmpData
                      , n = s !== void 0
                      , r = o.length;
                    if (n && o[s].trigger("blur"),
                    r) {
                        const d = a.key === "ArrowDown" ? 1 : -1;
                        o[this._autocmpData.activeIndex = Y.absMod(n ? s + d : d - 1 >> 2, r)].trigger("focus")
                    }
                    break
                }
            }
        }
        ),
        this._ui.input.on("beforeinput", a=>{
            Pi && (Pi = !1,
            a.preventDefault())
        }
        ),
        this._ui.input.on("input", ()=>{
            this._updateAutocmp()
        }
        ),
        this._ui.input.on("focus", ()=>{
            this._updateAutocmp()
        }
        ),
        this._ui.input.on("blur", ()=>{
            t || this._hideAutocomplete()
        }
        )
    }
    _sanitizeRegExp(t) {
        return t.replace(/[[\](){}\\.+\-*!<>$|^?:]/g, a=>`\\${a}`)
    }
    _updateAutocmp() {
        const t = this._ui.input.val()
          , {autocomplete: a, input: o, container: s} = this._ui
          , n = t.split(" ")[0]
          , r = t.length === 0
          , d = I=>{
            if (I.includes(t))
                return r ? [] : [t];
            const R = n.split("_");
            if (R.filter(O=>O.length).length === 1)
                return [];
            for (const O of R) {
                const J = I.replace(new RegExp(`${this._sanitizeRegExp(`${O}_`)}|${this._sanitizeRegExp(`_${O}`)}`), "");
                if (J === I)
                    return [];
                I = J
            }
            return R
        }
          , g = I=>d(I).length !== 0
          , h = this._autocmpData.cache;
        let _, f, b;
        const [v,w,k,S] = r ? [this._history.all(), [], [], []] : [this._history.filter((()=>{
            const I = [].concat(_ ?? (_ = h.commands), f ?? (f = h.aliases), b ?? (b = h.variables));
            return R=>g(R) && !I.includes(R)
        }
        )()), (_ ?? (_ = h.commands)).filter(I=>g(I)), (f ?? (f = h.aliases)).filter(I=>g(I)), (b ?? (b = h.variables)).filter(I=>g(I))]
          , x = I=>{
            const R = d(I);
            let O = bt(I, {
                strict: !0,
                escapeSpaces: !0
            });
            R.length && (O = O.replace(new RegExp(R.map(V=>this._sanitizeRegExp(V)).join("|"),"g"), V=>`<b>${bt(V, {
                strict: !0,
                escapeSpaces: !0
            })}</b>`));
            const J = m('<div tabindex="0" class="console-input-autocomplete-entry"></div>').append(O);
            return J.on("mousedown", V=>{
                V.button || (o.val(I).trigger("focus"),
                this._updateAutocmp())
            }
            ),
            J.on("keydown", function(V) {
                V.code === "Enter" && (V.preventDefault(),
                V.stopPropagation(),
                V.stopImmediatePropagation(),
                this.dispatchEvent(new MouseEvent("mousedown",{
                    button: 0
                })))
            }),
            J
        }
        ;
        if (v.length || w.length || k.length || S.length) {
            a.show(),
            s.css("border-bottom-left-radius", 0).css("border-bottom-right-radius", 0);
            const I = ()=>m('<div class="console-autocomplete-divider"></div>')
              , R = []
              , O = [v, w, k, S].filter(J=>J.length).map(J=>{
                const V = J.sort((B,le)=>B.indexOf(t) - le.indexOf(t)).map(B=>x(B));
                return R.push(...V),
                [...V, I()]
            }
            ).flat();
            (this._autocmpData.activeIndex ?? -1 / 0 > (this._autocmpData.nodes = R).length - 1) && (this._autocmpData.activeIndex = void 0),
            O.pop(),
            a.empty().append(...O)
        } else
            this._hideAutocomplete()
    }
    _hideAutocomplete() {
        this._ui.container.css("border-bottom-left-radius", "").css("border-bottom-right-radius", ""),
        this._ui.autocomplete.hide().empty(),
        this._autocmpData.activeIndex = void 0,
        this._autocmpData.nodes.length = 0
    }
    handleQuery(t) {
        if (t.trim().length === 0)
            return !0;
        let a;
        (n=>{
            n[n.Always = 0] = "Always",
            n[n.IfPass = 1] = "IfPass",
            n[n.IfFail = 2] = "IfFail"
        }
        )(a || (a = {}));
        const o = {
            ";": 0,
            "&": 1,
            "|": 2
        };
        function s(n) {
            var J, V, B, le, ce;
            let r = {
                name: "",
                startIndex: 0,
                args: []
            }
              , d = {
                cmd: r,
                startIndex: 0,
                chaining: 0
            }
              , g = d;
            const h = d;
            let _ = "cmd"
              , f = !1
              , b = !1;
            const v = new Ta;
            let w = 0
              , k = !1
              , S = r.args
              , x = 0;
            const I = (F,re=0,Oe=1)=>{
                throw new qa(F,x + re,Oe)
            }
              , R = F=>{
                S.length ? S[S.length - 1].arg += F : r.args = S = [{
                    arg: F,
                    startIndex: x
                }]
            }
              , O = (F,re)=>{
                g = d,
                F.next = d = {
                    cmd: r = {
                        name: "",
                        startIndex: x,
                        args: S = []
                    },
                    startIndex: x,
                    chaining: o[re]
                }
            }
            ;
            for (const F of n) {
                switch (F) {
                case " ":
                case `
`:
                    {
                        if (F === `
` && k) {
                            k = !1;
                            break
                        }
                        if (_ === "cmd") {
                            r.name && !w && (_ = "args");
                            break
                        }
                        if (f) {
                            R(F);
                            break
                        }
                        if (((J = S.at(-1)) == null ? void 0 : J.arg.length) === 0)
                            break;
                        S.push({
                            arg: "",
                            startIndex: x
                        });
                        break
                    }
                case "#":
                    {
                        if (k)
                            break;
                        if (f) {
                            R(F);
                            break
                        }
                        k = !0;
                        break
                    }
                case ";":
                case "&":
                case "|":
                    {
                        if (k)
                            break;
                        if (_ === "cmd") {
                            r.name || (h === d && I("Unexpected chaining character encountered at start of query"),
                            I("Expected a query following a chaining character, but found another chaining character")),
                            O(w ? v.pop() : r, F),
                            w && w--;
                            break
                        }
                        if (f) {
                            R(F);
                            break
                        }
                        ((V = S.at(-1)) == null ? void 0 : V.arg.length) === 0 && (S.length -= 1),
                        O(r, F),
                        _ = "cmd";
                        break
                    }
                case "(":
                    {
                        if (k)
                            break;
                        if (_ === "cmd") {
                            r.name && I("Unexpected opening parentheses character '(' found"),
                            v.push(d);
                            break
                        }
                        if (f) {
                            R(F);
                            break
                        }
                        I("Unexpected grouping character '('")
                    }
                case ")":
                    {
                        if (k)
                            break;
                        if (_ === "args") {
                            if (f) {
                                R(F);
                                break
                            }
                            v.has() || I("Unexpected grouping character ')'"),
                            _ = "cmd"
                        }
                        if (v.has() || I("Unexpected closing parentheses character ')' found"),
                        w) {
                            v.pop();
                            break
                        }
                        r.name || I("Unexpected empty group", -1, 2),
                        w++;
                        break
                    }
                case '"':
                    {
                        if (k || _ === "cmd")
                            break;
                        if (f) {
                            if (b) {
                                R(F),
                                b = !1;
                                break
                            }
                            S.push({
                                arg: "",
                                startIndex: x
                            })
                        } else
                            (B = S.at(-1)) != null && B.arg.length && I('Unexpected double-quote (") character found.');
                        f = !f;
                        break
                    }
                case "\\":
                    {
                        if (k || _ === "cmd" || !f || (b = !b))
                            break;
                        R(F);
                        break
                    }
                default:
                    {
                        if (k)
                            break;
                        if (_ === "cmd") {
                            w && I(`Expected a chaining character following the end of a group (found '${F}')`),
                            r.name += F;
                            break
                        }
                        b = !1,
                        R(F);
                        break
                    }
                }
                ++x
            }
            if (f && I("Unterminated string argument"),
            b && I("Unresolved escape character"),
            v.has() && !w && I("Unterminated command group"),
            (le = r.next) != null && le.cmd.name.length || delete r.next,
            !r.name.length)
                delete g.cmd.next;
            else {
                const F = r.args;
                ((ce = F.at(-1)) == null ? void 0 : ce.arg.length) === 0 && (F.length -= 1)
            }
            return h
        }
        try {
            let n = s(t);
            const r = new Ta;
            let d = !1;
            const g = v=>({
                0: !0,
                1: !d,
                2: d
            })[v.chaining] ? v : void 0
              , h = ()=>{
                n != null && n.next && r.push(n.next)
            }
              , _ = ()=>{
                const v = r.has();
                return v && (n = g(r.pop())),
                v
            }
              , f = ()=>{
                var v;
                if (((v = n == null ? void 0 : n.cmd) == null ? void 0 : v.next) === void 0) {
                    if (_())
                        return;
                    n = void 0;
                    return
                }
                n = g(n.cmd.next),
                n === void 0 ? _() : h()
            }
            ;
            h();
            let b = 0;
            for (; n !== void 0; ) {
                ++b === 1e3 && console.warn("1000 iterations of query parsing; possible infinite loop"),
                d = !1;
                const {name: v, args: w} = n.cmd
                  , k = this.commands.get(v);
                if (k) {
                    const I = k.run(w.map(R=>R.arg));
                    typeof I == "object" && (d = !0,
                    this.error.raw(`${I.err}`)),
                    f();
                    continue
                }
                const S = this.aliases.get(v);
                if (S !== void 0) {
                    d = !this.handleQuery(S),
                    f();
                    continue
                }
                const x = this.variables.get(v);
                if (x) {
                    w.length ? d = !this.handleQuery(`assign ${v} ${w.map(I=>`"${I.arg}"`).join(" ")}`) : this.log(`${x.name} = ${x.value}`),
                    f();
                    continue
                }
                d = !0,
                this.error(`Unknown console entity '${v}'`),
                f()
            }
        } catch (n) {
            if (n instanceof qa) {
                const r = n.charIndex
                  , d = 15
                  , g = " ";
                this.error.raw({
                    main: "Parsing error",
                    detail: `${n.message}<br><pre><code>${bt(t.slice(Math.max(0, r - d), r + d), {
                        strict: !0,
                        escapeSpaces: !0
                    })}<br>${`${g.repeat(Math.min(r, d))}${"^".repeat(n.length)}`.padEnd(Math.min(t.length, d), g)}</code></pre>`
                })
            } else
                throw n
        }
        return !0
    }
    open() {
        this.isOpen = !0
    }
    close() {
        this.isOpen = !1
    }
    toggle() {
        this.isOpen = !this._isOpen
    }
    resizeAndMove(t) {
        t.dimensions && (t.dimensions.width !== void 0 && (this._dimensions.width = t.dimensions.width),
        t.dimensions.height !== void 0 && (this._dimensions.height = t.dimensions.height)),
        t.position && (t.position.left !== void 0 && (this._position.left = t.position.left),
        t.position.top !== void 0 && (this._position.top = t.position.top))
    }
    _pushAndLog(t, a=!1) {
        this._entries.push(t),
        this._ui.output.append(this._generateHTML(t, a))
    }
    _generateHTML(t, a=!1) {
        const o = (()=>{
            const d = new Date(t.timestamp);
            return {
                hr: `${d.getHours()}`.padStart(2, "0"),
                min: `${d.getMinutes()}`.padStart(2, "0"),
                sec: `${d.getSeconds()}`.padStart(2, "0"),
                mil: `${d.getMilliseconds()}`.padStart(3, "0")
            }
        }
        )()
          , s = {
            container: void 0,
            timestamp: void 0,
            content: void 0
        };
        s.container = m(`<div class="console-entry console-entry-${t.type}"></div>`),
        s.timestamp = m('<div class="console-entry-timestamp"></div>'),
        s.timestamp.text(`${o.hr}:${o.min}:${o.sec}:${o.mil}`),
        s.container.append(s.timestamp),
        s.content = m('<div class="console-entry-content">');
        const [n,r] = a ? ["html", bt] : ["text", d=>d];
        return typeof t.content == "string" ? s.content[n](r(t.content, {
            strict: !1,
            escapeSpaces: !0,
            escapeNewLines: !0
        })) : s.content.append(m("<details>").append(m("<summary>")[n](r(t.content.main, {
            strict: !1,
            escapeSpaces: !0,
            escapeNewLines: !0
        })), Array.isArray(t.content.detail) ? m("<ul>").append(t.content.detail.map(d=>m("<li>")[n](r(d, {
            strict: !1,
            escapeSpaces: !0,
            escapeNewLines: !0
        })))) : m("<span>")[n](t.content.detail))),
        s.container.append(s.content),
        s.container
    }
    _createConsoleEntry(t, a) {
        return {
            content: t,
            timestamp: Date.now(),
            type: a
        }
    }
    clear() {
        this._entries.length = 0,
        this._ui.output.html("")
    }
}
;
c(Ot, "_instantiated", !1);
let Vi = Ot;
const Sn = Object.freeze({
    cv_player_name: A.toString,
    cv_loadout_skin: A.toString,
    cv_loadout_badge: A.toString,
    cv_loadout_crosshair: A.toInt,
    cv_loadout_top_emote: A.toString,
    cv_loadout_right_emote: A.toString,
    cv_loadout_bottom_emote: A.toString,
    cv_loadout_left_emote: A.toString,
    cv_loadout_death_emote: A.toString,
    cv_loadout_win_emote: A.toString,
    cv_master_volume: A.toNumber,
    cv_music_volume: A.toNumber,
    cv_sfx_volume: A.toNumber,
    cv_loop_scope_selection: A.toBoolean,
    cv_anonymize_player_names: A.toBoolean,
    cv_hide_emotes: A.toBoolean,
    cv_use_old_menu_music: A.toBoolean,
    cv_region: A.toString,
    cv_camera_shake_fx: A.toBoolean,
    cv_killfeed_style: A.generateUnionCaster(["icon", "text"]),
    cv_weapon_slot_style: A.generateUnionCaster(["simple", "colored"]),
    cv_movement_smoothing: A.toBoolean,
    cv_responsive_rotation: A.toBoolean,
    cv_antialias: A.toBoolean,
    cv_renderer: A.generateUnionCaster(["webgl1", "webgl2", "webgpu"]),
    cv_renderer_res: A.generateUnionCaster(["auto", "0.5", "1", "2", "3"]),
    cv_high_res_textures: A.toBoolean,
    cv_cooler_graphics: A.toBoolean,
    cv_blur_splash: A.toBoolean,
    cv_rules_acknowledged: A.toBoolean,
    cv_hide_rules_button: A.toBoolean,
    cv_leave_warning: A.toBoolean,
    cv_ui_scale: A.toNumber,
    cv_draw_hud: A.toBoolean,
    cv_map_expanded: A.toBoolean,
    cv_minimap_minimized: A.toBoolean,
    cv_minimap_transparency: A.toNumber,
    cv_map_transparency: A.toNumber,
    cv_console_width: A.toNumber,
    cv_console_height: A.toNumber,
    cv_console_left: A.toNumber,
    cv_console_top: A.toNumber,
    cv_console_open: A.toBoolean,
    cv_crosshair_color: A.toString,
    cv_crosshair_size: A.toNumber,
    cv_crosshair_stroke_color: A.toString,
    cv_crosshair_stroke_size: A.toNumber,
    cv_autopickup: A.toBoolean,
    cv_autopickup_dual_guns: A.toBoolean,
    cv_language: A.toString,
    cv_mute_audio: A.toBoolean,
    pf_show_fps: A.toBoolean,
    pf_show_ping: A.toBoolean,
    pf_show_pos: A.toBoolean,
    mb_controls_enabled: A.toBoolean,
    mb_joystick_size: A.toNumber,
    mb_joystick_transparency: A.toNumber,
    mb_high_res_textures: A.toBoolean,
    dv_password: A.toString,
    dv_role: A.toString,
    dv_name_color: A.toString,
    dv_lobby_clearing: A.toBoolean,
    dv_weapon_preset: A.toString
})
  , tt = Object.freeze({
    cv_player_name: "",
    cv_loadout_skin: $.player.defaultSkin,
    cv_loadout_badge: "",
    cv_loadout_crosshair: 0,
    cv_loadout_top_emote: "happy_face",
    cv_loadout_right_emote: "thumbs_up",
    cv_loadout_bottom_emote: "suroi_logo",
    cv_loadout_left_emote: "sad_face",
    cv_loadout_death_emote: "",
    cv_loadout_win_emote: "",
    cv_music_volume: 1,
    cv_sfx_volume: 1,
    cv_master_volume: 1,
    cv_loop_scope_selection: !1,
    cv_anonymize_player_names: !1,
    cv_hide_emotes: !1,
    cv_use_old_menu_music: !1,
    cv_region: "",
    cv_camera_shake_fx: !0,
    cv_killfeed_style: "text",
    cv_weapon_slot_style: "colored",
    cv_movement_smoothing: !0,
    cv_responsive_rotation: !0,
    cv_antialias: !0,
    cv_renderer: "webgl2",
    cv_renderer_res: "auto",
    cv_high_res_textures: !0,
    cv_cooler_graphics: !1,
    cv_blur_splash: !ui.any,
    cv_rules_acknowledged: !1,
    cv_hide_rules_button: !1,
    cv_leave_warning: !0,
    cv_ui_scale: 1,
    cv_draw_hud: !0,
    cv_map_expanded: {
        value: !1,
        flags: {
            archive: !1
        }
    },
    cv_minimap_minimized: {
        value: !1,
        flags: {
            archive: !1
        }
    },
    cv_minimap_transparency: .8,
    cv_map_transparency: .9,
    cv_console_width: window.innerWidth / 2,
    cv_console_height: window.innerWidth / 2,
    cv_console_left: window.innerWidth / 4,
    cv_console_top: window.innerWidth / 4,
    cv_console_open: {
        value: !1,
        flags: {
            archive: !1
        }
    },
    cv_crosshair_color: "#000000",
    cv_crosshair_size: 1.5,
    cv_crosshair_stroke_color: "#000000",
    cv_crosshair_stroke_size: 0,
    cv_autopickup: !0,
    cv_autopickup_dual_guns: !0,
    cv_language: "en",
    cv_mute_audio: !1,
    pf_show_fps: !1,
    pf_show_ping: !1,
    pf_show_pos: !1,
    mb_controls_enabled: !0,
    mb_joystick_size: 150,
    mb_joystick_transparency: .8,
    mb_high_res_textures: !1,
    dv_password: "",
    dv_role: "",
    dv_name_color: "",
    dv_lobby_clearing: !1,
    dv_weapon_preset: ""
})
  , ji = Object.freeze({
    "+up": ["W", "ArrowUp"],
    "+down": ["S", "ArrowDown"],
    "+left": ["A", "ArrowLeft"],
    "+right": ["D", "ArrowRight"],
    interact: ["F"],
    loot: [],
    "slot 0": ["1"],
    "slot 1": ["2"],
    "slot 2": ["3", "E"],
    "equip_or_cycle_throwables 1": ["4"],
    last_item: ["Q"],
    other_weapon: ["Space"],
    swap_gun_slots: ["T"],
    "cycle_items -1": ["MWheelUp"],
    "cycle_items 1": ["MWheelDown"],
    "+attack": ["Mouse0"],
    drop: [],
    reload: ["R"],
    "cycle_scopes -1": [],
    "cycle_scopes 1": [],
    "use_consumable gauze": ["7"],
    "use_consumable medikit": ["8"],
    "use_consumable cola": ["9"],
    "use_consumable tablets": ["0"],
    cancel_action: ["X"],
    "+view_map": [],
    toggle_map: ["G", "M"],
    toggle_minimap: ["N"],
    toggle_hud: [],
    "+emote_wheel": ["Mouse2"],
    "+map_ping_wheel": ["C"],
    toggle_console: [],
    "+map_ping": [],
    toggle_slot_lock: []
})
  , xn = {
    name: "Shqip",
    flag: "🇦🇱",
    msg_rotate: "Për një eksperiencë më të mirë, ju lutem rrotulloni pajisjen tuaj.",
    msg_loading: "Duke u lidhur",
    msg_err_joining: "Gabime në hyrjen në lojë.",
    msg_err_finding: "Gabime në gjetjen e lojës.",
    msg_try_again: "Ju lutem provoni sërish.",
    msg_warning: "Ju jeni paralajmëruar!",
    msg_warning_msg: "Ju keni marrë një paralajmërim nga moderatorët për arsye: <reason>",
    msg_temp_ban: "Ju jeni ndaluar përkohësisht!",
    msg_temp_ban_msg: "Ju jeni ndaluar për arsye: <reason>",
    msg_perma_ban: "Ju jeni ndaluar përgjithmonë!",
    msg_perma_ban_msg: "Ju jeni ndaluar për arsye: <reason>",
    msg_no_reason: "Asnjë arsye nuk është dhënë.",
    play_solo: "Luaj Solo",
    play_duo: "Luaj Dyshe",
    play_squad: "Luaj me Skuadër",
    join_team: "Hyni në ekip",
    msg_locked_tooltip: "Loja ndryshon mes solos dhe duos çdo 24 orë, pasi nuk ka lojtarë të mjaftueshëm për të dyja.",
    rules_and_tutorial: "Rregullat & Tutorial",
    news: "Lajme",
    loadout: "Veshje",
    settings: "Cilësimet",
    fullscreen: "Ekran i plotë",
    resume: "Vazhdo",
    quit: "Hiq dorë",
    none: "Asnje",
    copy: "Kopjo",
    health: "jeta",
    adrenaline: "adrenalina",
    settings_volume: "Volumi",
    settings_keybinds: "Lidhja e tasteve",
    settings_graphics: "Grafika",
    settings_interface: "Ndërfaqe",
    settings_save_load: "Ruaj/Ngarko",
    settings_mobile: "Celular",
    settings_require_reload: "* Ndryshimi i këtyre cilësimeve kërkon ringarkimin e faqes",
    settings_performance_warning: "* Ky cilësim mund të shkaktojë probleme në disa pajisje. Çaktivizojeni nëse nuk mund të hyni në lojë.",
    settings_master_volume: "Volumi kryesor",
    settings_sfx_volume: "Volumi i efekteve zanore",
    settings_music_volume: "Volumi i muzikës",
    settings_old_menu_music: "Muzika e menusë së vjetër",
    settings_render_mode: "Modaliteti i paraqitjes",
    settings_render_resolution: "Rezolucioni i paraqitjes",
    settings_render_resolution_auto: "Auto",
    settings_hires_textures: "Tekstura me rezolucion të lartë",
    settings_cooler_graphics: "Grafika më të bukura",
    settings_antialias: "Anti-aliasing",
    settings_movement_smoothing: "Zbutja e lëvizjes",
    settings_responsive_rotation: "Rrotullim reagues",
    settings_camera_shake: "Dridhja e kamerës",
    settings_interface_scale: "Shkalla e ndërfaqes",
    settings_minimap_opacity: "Opaciteti i hartës",
    settings_fs_map_opacity: "Opaciteti i hartës së plotë",
    settings_hide_minimap: "Fshihni hartën",
    settings_blur_splash: "Turbullo spërkatjen e ekranit",
    settings_hide_rules: "Butoni i fshehjes së rregullave",
    settings_warn_before_leaving: "Paralajmëroni para se të largoheni",
    settings_show_fps: "Shfaq FPS",
    settings_show_ping: "Shfaq ping",
    settings_show_coordinates: "Show koordinatat",
    settings_anon_names: "Emrat anonimë të lojtarëve",
    settings_hide_emotes: "Fshih emotet",
    settings_text_killfeed: "Killfeed i bazuar në tekst",
    settings_colored_weapon_slots: "Slot armësh me ngjyra",
    settings_scope_looping: "Ciklo zgjedhjen e skopitn",
    settings_draw_hud: "Vizatoni HUD",
    settings_autopickup: "Aktivizo marrjen automatike",
    settings_autopickup_dual_guns: "Aaktivizo marrjen automatike të armëve të dyfishta ",
    settings_load_settings: "Ngarko cilësimet",
    settings_copy_settings: "Kopjoni cilësimet",
    settings_reset_settings: "Restarto cilsimet",
    settings_reload: "Ringarko",
    settings_mobile_controls: "Aktivizo kontrollet celulare",
    settings_joystick_size: "Madhësia e levës",
    settings_joystick_opacity: "Opaciteti i levës",
    loadout_skins: "Skinet",
    loadout_emotes: "Emotet",
    loadout_crosshairs: "Shënjestra",
    loadout_badges: "Simbol",
    loadout_special: "E veçantë",
    loadout_crosshairs_default: "Parazgjedhja e sistemit",
    loadout_crosshairs_size: "Përmasat:",
    loadout_crosshairs_color: "Ngjyra:",
    loadout_crosshairs_stroke_size: "Madhësia e Shënjës:",
    loadout_crosshairs_stroke_color: "Ngjyra e Shënjës:",
    emotes_category_People: "Njerëzit",
    emotes_category_Text: "Teksti",
    emotes_category_Memes: "Memet",
    emotes_category_Icons: "Ikonat",
    emotes_category_Misc: "Të ndryshme",
    featured_youtubr: "Youtubr Të Paraqitur",
    featured_streamr: "Streamr Të Paraqitur",
    btn_report: "Raporto",
    btn_spectate_kill_leader: "Spektatoni Kill Liderin",
    btn_spectate: "Spektato",
    btn_play_again: "Luaj sërish",
    btn_menu: "Menyja",
    msg_waiting_for_leader: "Në pritje të liderit",
    msg_you_died: "Ju vdiqt.",
    msg_player_died: "<player> vdiq.",
    msg_win: "Fitorja është e juaja!",
    msg_your_rank: "Rendit",
    msg_kills: "Vrasjet: <kills>",
    gas_waiting: "Gazi toksik avancon në <time>",
    gas_advancing: "Gazi helmues po përparon! Lëvizni në zonën e sigurt",
    gas_inactive: "Në pritje të lojtarëve...",
    action_open_door: "Hape Deren",
    action_close_door: "Mbyll Deren",
    action_revive: "Ringjall <player>",
    action_cancel: "Anulo",
    action_reloading: "Duke Rimbushur...",
    action_reviving: "Duke Ringjallur...",
    action_being_revived: "Duke u ringjallur...",
    action_gauze_use: "Duke përdorur <item>",
    action_medikit_use: "Duke përdorur <item>",
    action_cola_use: "Duke pirë <item>",
    action_tablets_use: "Duke marrë <item>",
    interact_airdrop_crate_locked: "Hap Airdropin",
    interact_control_panel: "Aktivizoni Panelin e Kontrollit",
    interact_generator: "Aktivizoni gjeneratorin",
    interact_button: "Shtyp butonin",
    loading_spritesheets: "Duke Ngarkuar Spritesheet <progress>",
    loading_connecting: "Duke u Lidhur",
    loading_joining_game: "Duke Hyrë Në Lojë",
    loading_fetching_data: "Duke Marrë Të Dhënat e Serverit...",
    loading_finding_game: "Duke Gjetur Një Lojë",
    keybind_clear_tooltip: "Për të hequr një tast, shtypni tastin dhe më pas shtypni ose <kbd>Escape</kbd> ose <kbd>Backspace</kbd>.",
    keybind_reset: "Rivendos standardet",
    "bindings_+up": "Leviz Lart",
    "bindings_+down": "Leviz Posht",
    "bindings_+left": "Leviz Majtas",
    "bindings_+right": "Leviz Djathtas",
    bindings_interact: "Bashkëvepro",
    bindings_loot: "Plaçkit",
    "bindings_slot 0": "Pajisja Primaren",
    "bindings_slot 1": "Pajisja Sekondaren",
    "bindings_slot 2": "Pajis Armën e Përleshjes",
    "bindings_equip_or_cycle_throwables 1": "Pajis/Ciklo Armnë e Hedhshme",
    bindings_last_item: "Pajis Armën e Fundit",
    bindings_other_weapon: "Pajis Armën Tjetër",
    bindings_swap_gun_slots: "Ndërroni Vendin e Arëmve",
    "bindings_cycle_items -1": "Pajis armën e mëparshme",
    "bindings_cycle_items 1": "Pajis armën tjetër",
    "bindings_+attack": "Përdor armë",
    bindings_drop: "Hidhni armën aktive",
    bindings_reload: "Ringarko",
    "bindings_cycle_scopes -1": "Skopi i Mëparshëm",
    "bindings_cycle_scopes 1": "Skopi Tjetër",
    "bindings_use_consumable gauze": "Përdorni Fashë",
    "bindings_use_consumable medikit": "Përdorni Medikit",
    "bindings_use_consumable cola": "Përdorni Kola",
    "bindings_use_consumable tablets": "Përdorni Tabletat",
    bindings_cancel_action: "Anulo Veprimin",
    "bindings_+view_map": "Shiko hartën",
    bindings_toggle_map: "Aktivizo hartën",
    bindings_toggle_minimap: "Aktivizo Minimap-in",
    bindings_toggle_hud: "Aktivizoni HUD",
    "bindings_+emote_wheel": "Rrota e Emoteve",
    "bindings_+map_ping_wheel": "Kalo në Ping të hartës",
    "bindings_+map_ping": "Rrota e Pingut të Hartës",
    bindings_toggle_console: "Aktivizo Konsolën",
    bindings_toggle_slot_lock: "Aktivizo Kyçjen e Slotit",
    kf_suicide_kill: "<player> u vetëvra",
    kf_suicide_down: "<player> eleminoi veten",
    kf_two_party_kill: "<player> vrau <victim>",
    kf_two_party_down: "<player> eleminoi <victim>",
    kf_bleed_out_kill: "<player> iu derdh gjaku",
    kf_bleed_out_down: "<player> iu derdh gjaku në mënyrë jo vdekjeprurëse",
    kf_finished_off_kill: "<player> i mori jetën <victim>",
    kf_finished_off_down: "<player> i mori butësisht jetën <victim>",
    kf_finally_died: "<player> më në fund vdiq",
    kf_finally_ended_themselves: "<player> më në fund vdiq",
    kf_finally_killed: "<player> më në fund u vra",
    kf_finally_down: "<player> më në fund u eleminua",
    kf_gas_kill: "<player> vdiq nga gazi",
    kf_gas_down: "<player> u eleminua nga gazi",
    kf_airdrop_kill: "<player> u shtyp për vdekje nga një airdrop",
    kf_airdrop_down: "<player> u eleminua nga një airdrop",
    kf_kl_promotion: "<player> është promovuar në Udhëheqësin e Vrasjes!",
    kf_kl_killed: "<player> vrau Udhëheqësin e Vrasjes",
    kf_kl_dead: "Udhëheqësi i vrasësit ka vdekur!",
    kf_kl_suicide: "Udhëheqësi i Vrasjes vrau veten!",
    tt_restores: "<item> rikthen <amount> <type>",
    tt_reduces: "<item> redukton <percent>% të dëmtit",
    go_kills: "Vrasjet:",
    go_damage_done: "Dëmi i kryer:",
    go_damage_taken: "Dëmi i marrë:",
    go_time_alive: "Koha Gjallë:",
    create_team: "Krijo Skuadër",
    create_team_autofill: "Mbushje automatike",
    create_team_lock: "Kyç Skuadrën",
    create_team_waiting: "Ne pritje...",
    create_team_play: "Fillo lojen",
    report_reporting: "Duke Raportuar",
    report_id: "ID e Raportit:",
    report_instructions: `
      <p><strong>Ju lutemi ndiqni udhëzimet e mëposhtme!</strong>Nëse jo, raporti juaj do të shpërfillet.</p>
      <h4>Si të dorëzoni një raport</h4>
      <ol>
        <li>Bashkohuni me <a href="https://discord.suroi.io">Serverin Discord.</a></li>
        <li>Shkoni në <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports
            kanal.</a></li>
        <li>Lexoni udhëzimet e raportit në postimin e mbërthyer.</li>
        <li>Paraqisni raportin tuaj si një postim.</li>
      </ol>`,
    languages: "Gjuhët",
    gauze: "Fasho",
    medikit: "Medikit",
    cola: "Kola",
    tablets: "Tableta",
    basic_vest: "Jelek Bazik",
    regular_vest: "Jelek i Zakonshëm",
    tactical_vest: "Jelek Tactikal",
    basic_helmet: "Helmetë Bazike",
    regular_helmet: "Helmetë e Zakonshme",
    tactical_helmet: "Helmetë Tactikale",
    bag: "Bag",
    basic_pack: "Çantë  Bazike",
    regular_pack: "Çantë e Zakonshme",
    tactical_pack: "Çantë Tactikale",
    "1x_scope": "Skop 1x",
    "2x_scope": "Skop 2x",
    "4x_scope": "Skop 4x",
    "8x_scope": "Skop 8x",
    "15x_scope": "Skop 15x",
    fists: "Grushta",
    baseball_bat: "Shkop Bejsbolli",
    hatchet: "Sakicë",
    kbar: "Thikë",
    maul: "Maj",
    gas_can: "Bombol me Benzinë",
    heap_sword: "Shpatë HE-AP",
    steelfang: "Steelfang",
    ice_pick: "Kazëm Akulli",
    seax: "Shpatë",
    mosin: "Mosin-Nagant",
    radio: "Radio",
    lewis_gun: "Arma e Luisit",
    deathray: "Rreze Vdekjeje",
    firework_launcher: "Lëshues Fishekzjarre",
    arena_closer: "Shkatërrues i Botëve",
    revitalizer: "Rivitalizues",
    s_g17: "G17 (Skoped)",
    frag_grenade: "Granadë Frag",
    smoke_grenade: "Granadë Tymi",
    confetti_grenade: "Granatë Konfeti",
    dual_template: "Dyfishtë <gun>",
    region_dev: "Serveri Localhost",
    region_na: "Amerika e Veriut",
    region_eu: "Europa",
    region_sa: "Amerika e Jugut",
    region_as: "Azia"
}
  , Tn = {
    name: "中文（简体）",
    flag: "🇨🇳",
    msg_rotate: "请将设备旋转至横向来获取更好的游戏体验。",
    msg_loading: "连接中",
    msg_err_joining: "加入游戏时出错。",
    msg_err_finding: "查找游戏时出错。",
    msg_try_again: "请重试。",
    msg_warning: "你已被警告！",
    msg_warning_msg: "你已被管理员警告：<reason>",
    msg_temp_ban: "你已被暂时封禁！",
    msg_temp_ban_msg: "你已被暂时封禁，原因：<reason>",
    msg_perma_ban: "你已被永久封禁！",
    msg_perma_ban_msg: "你已被永久封禁，原因：<reason>",
    msg_no_reason: "未提供原因。",
    play_solo: "单人游戏",
    play_duo: "双人游戏",
    play_squad: "小队游戏",
    join_team: "加入队伍",
    msg_locked_tooltip: "因为没有足够的玩家同时进行两种游戏，游戏每24小时在单人游戏和双人游戏之间切换。",
    rules_and_tutorial: "规则与教程",
    news: "新闻",
    loadout: "装饰",
    settings: "设置",
    fullscreen: "全屏",
    resume: "继续",
    quit: "退出",
    none: "无",
    copy: "复制",
    health: "血量",
    adrenaline: "肾上腺素",
    settings_volume: "声音",
    settings_keybinds: "键位",
    settings_graphics: "图形",
    settings_interface: "界面",
    settings_save_load: "保存/加载",
    settings_mobile: "触控",
    settings_require_reload: "* 更改这些设置需要刷新网页",
    settings_performance_warning: "* 此设置在一些设备上可能会造成问题。若你无法加入游戏，请尝试禁用此设置。",
    settings_master_volume: "主音量",
    settings_sfx_volume: "音效音量",
    settings_music_volume: "音乐音量",
    settings_old_menu_music: "旧菜单音乐",
    settings_render_mode: "渲染模式",
    settings_render_resolution: "渲染分辨率",
    settings_render_resolution_auto: "自动",
    settings_hires_textures: "高分辨率纹理",
    settings_cooler_graphics: "更酷的图形",
    settings_antialias: "抗锯齿",
    settings_movement_smoothing: "平滑移动",
    settings_responsive_rotation: "响应式旋转",
    settings_camera_shake: "画面抖动",
    settings_interface_scale: "界面缩放",
    settings_minimap_opacity: "小地图可见度",
    settings_fs_map_opacity: "大地图可见度",
    settings_hide_minimap: "隐藏小地图",
    settings_blur_splash: "模糊启动画面",
    settings_hide_rules: "隐藏规则按钮",
    settings_warn_before_leaving: "离开前警告",
    settings_show_fps: "显示帧数",
    settings_show_ping: "显示延迟",
    settings_show_coordinates: "显示坐标",
    settings_anon_names: "玩家匿名",
    settings_hide_emotes: "隐藏表情",
    settings_text_killfeed: "文本击杀信息",
    settings_colored_weapon_slots: "武器槽颜色",
    settings_scope_looping: "循环选择倍镜",
    settings_draw_hud: "平视显示器",
    settings_autopickup: "自动拾取",
    settings_autopickup_dual_guns: "自动拾取双枪",
    settings_load_settings: "加载设置",
    settings_copy_settings: "复制设置到剪贴板",
    settings_reset_settings: "重置设置",
    settings_reload: "刷新",
    settings_mobile_controls: "触摸控制",
    settings_joystick_size: "摇杆大小",
    settings_joystick_opacity: "摇杆可见度",
    loadout_skins: "服装",
    loadout_emotes: "表情",
    loadout_crosshairs: "准星",
    loadout_badges: "徽章",
    loadout_special: "特殊",
    loadout_crosshairs_default: "系统默认",
    loadout_crosshairs_size: "大小：",
    loadout_crosshairs_color: "颜色：",
    loadout_crosshairs_stroke_size: "描边大小：",
    loadout_crosshairs_stroke_color: "描边颜色：",
    emotes_category_People: "人物",
    emotes_category_Text: "文字",
    emotes_category_Memes: "模因",
    emotes_category_Icons: "图标",
    emotes_category_Misc: "杂项",
    featured_youtubr: "精选Youtubr",
    featured_streamr: "精选主播",
    btn_report: "举报",
    btn_spectate_kill_leader: "观战击杀领袖",
    btn_spectate: "观战",
    btn_play_again: "再玩一局",
    btn_menu: "菜单",
    msg_waiting_for_leader: "等待击杀领袖",
    msg_you_died: "你死了。",
    msg_player_died: "<player>死了。",
    msg_win: "大吉大利，今晚吃鸡！",
    msg_your_rank: "排名",
    msg_kills: "击杀：<kills>",
    gas_waiting: "毒气将在<time>后扩散",
    gas_advancing: "毒气正在扩散！向安全区撤离",
    gas_inactive: "等待玩家中…",
    action_open_door: "开门",
    action_close_door: "关门",
    action_revive: "救援<player>",
    action_cancel: "取消",
    action_reloading: "装弹中…",
    action_reviving: "救援中…",
    action_being_revived: "正在被救援…",
    action_gauze_use: "应用<item>中",
    action_medikit_use: "使用<item>中",
    action_cola_use: "饮用<item>中",
    action_tablets_use: "服用<item>中",
    interact_airdrop_crate_locked: "解锁空投",
    interact_control_panel: "激活控制台",
    interact_generator: "启动发电机",
    interact_button: "按下按钮",
    loading_spritesheets: "加载图像中<progress>",
    loading_connecting: "连接中",
    loading_joining_game: "加入游戏中",
    loading_fetching_data: "获取服务器数据中…",
    loading_finding_game: "查找游戏中",
    keybind_clear_tooltip: "要移除键位，请点击选择该键位然后按下<kbd>Escape键</kbd>或<kbd>Backspace键</kbd>。",
    keybind_reset: "重置全部",
    "bindings_+up": "向上移动",
    "bindings_+down": "向下移动",
    "bindings_+left": "向左移动",
    "bindings_+right": "向右移动",
    bindings_interact: "交互",
    bindings_loot: "拾取",
    "bindings_slot 0": "装备主武器",
    "bindings_slot 1": "装备副武器",
    "bindings_slot 2": "装备近战武器",
    "bindings_equip_or_cycle_throwables 1": "装备/切换投掷物",
    bindings_last_item: "装备前一武器",
    bindings_other_weapon: "装备主副武器",
    bindings_swap_gun_slots: "交换主副武器",
    "bindings_cycle_items -1": "装备上一武器",
    "bindings_cycle_items 1": "装备下一武器",
    "bindings_+attack": "使用武器",
    bindings_drop: "丢弃武器",
    bindings_reload: "装填弹药",
    "bindings_cycle_scopes -1": "前一倍镜",
    "bindings_cycle_scopes 1": "后一倍镜",
    "bindings_use_consumable gauze": "使用纱布",
    "bindings_use_consumable medikit": "使用医疗包",
    "bindings_use_consumable cola": "使用可乐",
    "bindings_use_consumable tablets": "使用药片",
    bindings_cancel_action: "取消动作",
    "bindings_+view_map": "查看地图",
    bindings_toggle_map: "开关大地图",
    bindings_toggle_minimap: "开关小地图",
    bindings_toggle_hud: "开关平视显示器",
    "bindings_+emote_wheel": "表情轮盘",
    "bindings_+map_ping_wheel": "改用地图标记",
    "bindings_+map_ping": "地图标记轮盘",
    bindings_toggle_console: "开关控制台",
    bindings_toggle_slot_lock: "锁定武器槽",
    kf_suicide_kill: "<player>自杀了",
    kf_suicide_down: "<player>击倒了自己",
    kf_two_party_kill: "<player>击杀了<victim>",
    kf_two_party_down: "<player>击倒了<victim>",
    kf_bleed_out_kill: "<player>失血过多",
    kf_bleed_out_down: "<player>非致命地失血过多",
    kf_finished_off_kill: "<player>解决了<victim>",
    kf_finished_off_down: "<player>温柔地解决了<victim>",
    kf_finally_died: "<player>最终死了",
    kf_finally_ended_themselves: "<player>最终解决了自己",
    kf_finally_killed: "<player>最终被击杀了",
    kf_finally_down: "<player>最终被击倒了",
    kf_gas_kill: "<player>死于毒气",
    kf_gas_down: "<player>被毒气晕倒了",
    kf_airdrop_kill: "<player>被空投压死了",
    kf_airdrop_down: "<player>被空投压倒了",
    kf_kl_promotion: "<player>晋升为击杀领袖！",
    kf_kl_killed: "<player>击杀了击杀领袖",
    kf_kl_dead: "击杀领袖死了！",
    kf_kl_suicide: "击杀领袖自杀了！",
    tt_restores: "<item>恢复<amount><type>",
    tt_reduces: "<item>减少<percent>%受到伤害",
    go_kills: "击杀：",
    go_damage_done: "造成伤害：",
    go_damage_taken: "受到伤害：",
    go_time_alive: "存活时间：",
    create_team: "创建队伍",
    create_team_autofill: "自动填充",
    create_team_lock: "锁定队伍",
    create_team_waiting: "等待中…",
    create_team_play: "开始游戏",
    report_reporting: "举报",
    report_id: "举报ID：",
    report_instructions: `
      <p><strong>请按照以下说明操作！</strong>否则，你的举报将被忽略。</p>
      <h4>如何提交举报</h4>
      <ol>
        <li>加入<a href="https://discord.suroi.io">Discord服务器。</a></li>
        <li>前往<a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheatr-reports
            频道。</a></li>
        <li>阅读置顶帖中的举报方针。</li>
        <li>以帖子的形式提交您的举报。</li>
      </ol>`,
    languages: "语言",
    gauze: "纱布",
    medikit: "医疗包",
    cola: "可乐",
    tablets: "药片",
    basic_vest: "基础护甲",
    regular_vest: "常规护甲",
    tactical_vest: "战术护甲",
    basic_helmet: "基础头盔",
    regular_helmet: "常规头盔",
    tactical_helmet: "战术头盔",
    bag: "包",
    basic_pack: "基础背包",
    regular_pack: "常规背包",
    tactical_pack: "战术背包",
    "1x_scope": "一倍镜",
    "2x_scope": "二倍镜",
    "4x_scope": "四倍镜",
    "8x_scope": "八倍镜",
    "15x_scope": "十五倍镜",
    fists: "拳头",
    baseball_bat: "棒球棒",
    hatchet: "斧头",
    kbar: "卡巴刀",
    maul: "槌子",
    gas_can: "汽油桶",
    heap_sword: "HE-AP剑",
    steelfang: "钢牙刀",
    ice_pick: "冰镐",
    seax: "西克斯剑",
    mosin: "莫辛纳甘",
    radio: "无线电通话机",
    lewis_gun: "路易士机枪",
    deathray: "死亡射线",
    frag_grenade: "破片手榴弹",
    smoke_grenade: "烟雾弹",
    confetti_grenade: "彩色纸屑手榴弹",
    dual_template: "双持<gun>",
    region_dev: "本地",
    region_na: "北美",
    region_eu: "欧洲",
    region_sa: "南美",
    region_as: "亚洲",
    model_37: "37式",
    flues: "弗鲁斯",
    vepr12: "维普尔12",
    tango_51: "探戈51",
    barrett: "巴雷特95式",
    m1895: "1895式",
    g19: "格洛克19",
    micro_uzi: "微型乌兹",
    vector: "维克托",
    stoner_63: "斯通纳63",
    negev: "内格夫",
    m1_garand: "1式加兰德",
    mini14: "迷你14",
    model_89: "89式",
    firework_launcher: "烟花火箭筒",
    s_g17: "格洛克17（倍镜）",
    arena_closer: "世界毁灭者",
    revitalizer: "复兴者"
}
  , Mn = {
    name: "Čeština",
    flag: "🇨🇿",
    msg_rotate: "Pro lepší zážitek, otočte zařízení na šířku",
    msg_loading: "Připojování...",
    msg_err_joining: "Chyba připojení ke hře.",
    msg_err_finding: "Chyba hledání hry..",
    msg_try_again: "Prosím zkuste znovu.",
    msg_warning: "Byli jste varováni!",
    msg_warning_msg: "Obdrželi jste varování od moderátorů pro důvod: <reason>",
    msg_temp_ban: "Byli jste dočasně zabanováni!",
    msg_temp_ban_msg: "Byli jste dočasně zabanováni pro důvod: <reason>",
    msg_perma_ban: "Jste permanentně zabanováni!",
    msg_perma_ban_msg: "Byli jste permanentně zabanováni pro důvod: <reason>",
    msg_no_reason: "Důvod neuveden.",
    play_solo: "Hrát solo",
    play_duo: "Hrát duo",
    play_squad: "Hrát skupina",
    join_team: "Připojit se k týmu",
    msg_locked_tooltip: "Hra střídá mezi sólem a duem každých 24 hodin, protože zde není dostatek hráčů pro oboje.",
    rules_and_tutorial: "Pravidla & Tutoriál",
    news: "Novinky",
    loadout: "Vybavení",
    settings: "Nastavení",
    fullscreen: "Celá obrazovka",
    resume: "Pokračovat",
    quit: "Opustit",
    none: "Žádné",
    copy: "Kopírovat",
    health: "zdraví",
    adrenaline: "adrenalin",
    settings_volume: "Hlasitost",
    settings_keybinds: "Klávesové zkratky",
    settings_graphics: "Grafika",
    settings_interface: "Rozhraní",
    settings_save_load: "Uložit/Nahrát",
    settings_mobile: "Mobil",
    settings_require_reload: "* Změna těchto nastavení vyžaduje znovu načtení stránky.",
    settings_performance_warning: "* Toto nastavení může způsobit problémy na některých zařízeních. Vypněte jej jestli se nemůžete připojit do hry.",
    settings_master_volume: "Obecná hlasitost",
    settings_sfx_volume: "SFX hlasitost",
    settings_music_volume: "Hlasitost hudby",
    settings_old_menu_music: "Stará hudba menu",
    settings_render_mode: "Způsob načtení",
    settings_render_resolution: "Rozlišení",
    settings_render_resolution_auto: "Auto",
    settings_hires_textures: "Textury s vysokým rozlišením",
    settings_cooler_graphics: "Hustější grafika",
    settings_antialias: "Anti-aliasing",
    settings_movement_smoothing: "Zahlazování pohybu",
    settings_responsive_rotation: "Odpovídající rotace",
    settings_camera_shake: "Třes kamery",
    settings_interface_scale: "Velikost rozhraní",
    settings_minimap_opacity: "Průhlednost minimapy",
    settings_fs_map_opacity: "Průhlednost mapy přes celou obrazovku",
    settings_hide_minimap: "Skrýt minimapus",
    settings_blur_splash: "Rozmazat stříkající obrazovku",
    settings_hide_rules: "Schovat tlačítko pravidel",
    settings_warn_before_leaving: "Varovat před opuštěním",
    settings_show_fps: "Ukázat FPS",
    settings_show_ping: "Ukázat signál",
    settings_show_coordinates: "Ukázat souřadnice",
    settings_anon_names: "Anonymní jména hráčů",
    settings_hide_emotes: "Skrýt emoce",
    settings_text_killfeed: "Textově založené počítadlo zabití",
    settings_colored_weapon_slots: "Zabarvené pole zbraní",
    settings_scope_looping: "Opakovat dalekohledy",
    settings_draw_hud: "Kreslit HUD",
    settings_autopickup: "Povolit automatické sbírání",
    settings_autopickup_dual_guns: "Automatické sbírání dvojitých zbraní",
    settings_load_settings: "Nahrát nastavení",
    settings_copy_settings: "Kopírovat nastavení",
    settings_reset_settings: "Resetovat nastavení",
    settings_reload: "Načíst znovu",
    settings_mobile_controls: "Zapnout mobilní ovládání",
    settings_joystick_size: "Velikost joysticku",
    settings_joystick_opacity: "Průhlednost joysticku",
    loadout_skins: "Oblečení",
    loadout_emotes: "Emoce",
    loadout_crosshairs: "Kurzory",
    loadout_badges: "Odznaky",
    loadout_special: "Speciální",
    loadout_crosshairs_default: "Systémový základ",
    loadout_crosshairs_size: "Velikost:",
    loadout_crosshairs_color: "Barva:",
    loadout_crosshairs_stroke_size: "Velikost:",
    loadout_crosshairs_stroke_color: "Barva:",
    emotes_category_People: "Lidé",
    emotes_category_Text: "Text",
    emotes_category_Memes: "Memy",
    emotes_category_Icons: "Ikony",
    emotes_category_Misc: "Misc",
    featured_youtubr: "Uvedený Youtubr",
    featured_streamr: "Uvedený Streamr",
    btn_report: "Nahlásit",
    btn_spectate_kill_leader: "Sledovat vedoucího v zabitích",
    btn_spectate: "Sledovat",
    btn_play_again: "Hrt znovu",
    btn_menu: "Menu",
    msg_waiting_for_leader: "Čekání na vedoucího",
    msg_you_died: "Umřeli jste.",
    msg_player_died: "<player> umřel/a.",
    msg_win: "Vítěz Vítěz Kuřecí Večeře!",
    msg_your_rank: "Hodnocení",
    msg_kills: "Zabití: <kills>",
    gas_waiting: "Jedovatý plyn se rozšiřuje za: <time>",
    gas_advancing: "Jedovatý plan se rozšiřuje! Běžte do bezpečné zóny",
    gas_inactive: "Čekání na hráče...",
    action_open_door: "Otevřít dveře",
    action_close_door: "Zavřít dveře",
    action_revive: "Oživit <player>",
    action_cancel: "Zrušit",
    action_reloading: "Nabíjení...",
    action_reviving: "Oživování...",
    action_being_revived: "Jste oživován/a...",
    action_gauze_use: "Obvazuje se <item>",
    action_medikit_use: "Používá se <item>",
    action_cola_use: "Pije se <item>",
    action_tablets_use: "Bere se <item>",
    interact_airdrop_crate_locked: "Otevřít Padák",
    interact_control_panel: "Aktivovat kontrolní panel",
    interact_generator: "Aktivovat generátor",
    interact_button: "Zmáčknout tlačítko",
    loading_spritesheets: "Nahrávání listů <progress>",
    loading_connecting: "Připojování",
    loading_joining_game: "Připojování hry",
    loading_fetching_data: "Upravování dat serveru...",
    loading_finding_game: "Hledání hry",
    keybind_clear_tooltip: "K odstranění klávesové zkratky, zmáčkněte ji a poté zmáčkněte buď <kbd>Escape</kbd> nebo <kbd>Backspace</kbd>.",
    keybind_reset: "Resetovat na automatické",
    "bindings_+up": "Jít nahoru",
    "bindings_+down": "Jít dolů",
    "bindings_+left": "Jít vlevo",
    "bindings_+right": "Jít vpravo",
    bindings_interact: "Interagovat",
    bindings_loot: "Kořistit",
    "bindings_slot 0": "Vybavit se hlavní zbraní",
    "bindings_slot 1": "Vybavit se sekundární zbraní",
    "bindings_slot 2": "Vybavit se zbraní na blízko",
    "bindings_equip_or_cycle_throwables 1": "Vzít si/Cyklovat věc na házení",
    bindings_last_item: "Vzít si poslední zbraň",
    bindings_other_weapon: "Vybavit se druhou zbraní",
    bindings_swap_gun_slots: "Prohodit pole zbraní",
    "bindings_cycle_items -1": "Vybavit se předešlou zbraní",
    "bindings_cycle_items 1": "Vybavit se následující zbraní",
    "bindings_+attack": "Použít zbraň",
    bindings_drop: "Upustit aktivní zbraň",
    bindings_reload: "Přebít",
    "bindings_cycle_scopes -1": "Předchozí dalekohled",
    "bindings_cycle_scopes 1": "Další dalekohled",
    "bindings_use_consumable gauze": "Použít obvaz",
    "bindings_use_consumable medikit": "Použít lékárničku",
    "bindings_use_consumable cola": "Použít kolu",
    "bindings_use_consumable tablets": "Použít tabletky",
    bindings_cancel_action: "Zrušit akcis",
    "bindings_+view_map": "Zobrazit mapu",
    bindings_toggle_map: "Dát mapu přes celou obrazovku",
    bindings_toggle_minimap: "Zobrazit minimapu",
    bindings_toggle_hud: "Zobrazit HUD",
    "bindings_+emote_wheel": "Emoční kolečko",
    "bindings_+map_ping_wheel": "Prohodit mapový signál",
    "bindings_+map_ping": "Mapové signálové kolečko",
    bindings_toggle_console: "Zobrazit konzoli",
    bindings_toggle_slot_lock: "Zobrazit zámek polí",
    kf_suicide_kill: "<player> spáchal/a sebevraždu",
    kf_suicide_down: "<player> vyřadil/a se",
    kf_two_party_kill: "<player> zabil/a <victim>",
    kf_two_party_down: "<player> vyřadil/a <victim>",
    kf_bleed_out_kill: "<player> vykrvácel/a",
    kf_bleed_out_down: "<player vykrvácel/a ne smrtelně",
    kf_finished_off_kill: "<player> dokončil/a <victim>",
    kf_finished_off_down: "<player> šetrně dokončil <victim>",
    kf_finally_died: "<player> finálně zemřel/a",
    kf_finally_ended_themselves: "<player> se finálně dokončil/a",
    kf_finally_killed: "<player> byl/a finálně zabit/a",
    kf_finally_down: "<player> byl/a finálně vyřazen/a",
    kf_gas_kill: "<player> zemřel/a na plyn",
    kf_gas_down: "<player> sražen/a k zemi plynem",
    kf_airdrop_kill: "<player> byl/a fatálně sražen/a padákem",
    kf_airdrop_down: "<player> byl/a vyřazen/a padákem",
    kf_kl_promotion: "<player> je povýšen/a na Vedoucího v zabitích!",
    kf_kl_killed: "<player> zabil/a Vedoucího v zabitích",
    kf_kl_dead: "Vedoucí v zabitích je mrtvý!",
    kf_kl_suicide: "Vedoucí v zabitích se zabil/a!",
    tt_restores: "<item> uzdravuje <amount> <type>",
    tt_reduces: "<item> snižuje <percent>% poškození",
    go_kills: "Zabití:",
    go_damage_done: "Poškození uděleno:",
    go_damage_taken: "Poškození dostáno:",
    go_time_alive: "Čas naživu:",
    create_team: "Vytvořit tým",
    create_team_autofill: "Automaticky plnit",
    create_team_lock: "Zamknout tým",
    create_team_waiting: "Čekání...",
    create_team_play: "Spustit hru",
    report_reporting: "Nahlašování",
    report_id: "Nahlašovací ID:",
    report_instructions: `
      <p><strong>Prosím dodržujte instrukce níže</strong> Pokud se jimi neřídíte, budete ignorováni.</p>
      <h4>Jak poslat Nahlášení</h4>
      <ol>
        <li>Připojte se k <a href="https://discord.suroi.io">Discord serveru.</a></li>
        <li>Jděte do <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports
            kanálu.</a></li>
        <li>Přečtěte si návod na nahlašování v připnutém příspěvku.</li>
        <li>Pošlete Vaše nahlášení jako příspěvek.</li>
      </ol>`,
    languages: "Jayzyky",
    gauze: "Obvaz",
    medikit: "Lékárnička",
    cola: "Kola",
    tablets: "Tabletky",
    basic_vest: "Základní Vesta",
    regular_vest: "Normální Vesta",
    tactical_vest: "Taktická Vesta",
    basic_helmet: "Základní Helma",
    regular_helmet: "Normální Helma",
    tactical_helmet: "Taktická Helma",
    bag: "Bag",
    basic_pack: "Základní batoh",
    regular_pack: "Normální batoh",
    tactical_pack: "Taktický batoh",
    "1x_scope": "1x Dalekohled",
    "2x_scope": "2x Dalekohled",
    "4x_scope": "4x Dalekohled",
    "8x_scope": "8x Dalekohled",
    "15x_scope": "15x Dalekohled",
    fists: "Pěsti",
    baseball_bat: "Baseballová pálka",
    hatchet: "Sekyrka",
    kbar: "K-bar",
    maul: "Maul",
    gas_can: "Kanistr",
    heap_sword: "HE-AP Meč",
    steelfang: "Ocelový tesák",
    ice_pick: "Cepín",
    seax: "Seax",
    frag_grenade: "Granát",
    smoke_grenade: "Dýmovnice",
    confetti_grenade: "Konfetový granát",
    radio: "Vysílačka",
    deathray: "Paprsek smrti",
    dual_template: "Dvojité <gun>",
    region_dev: "Lokální server",
    region_na: "Severní Amerika",
    region_eu: "Evropa",
    region_sa: "Jižní Amerika",
    region_as: "Asie"
}
  , In = {
    name: "English",
    flag: "🇬🇧",
    msg_rotate: "For a better experience, please rotate your device to landscape.",
    msg_loading: "Connecting",
    msg_err_joining: "Error joining game.",
    msg_err_finding: "Error finding game.",
    msg_try_again: "Please try again.",
    msg_warning: "You have been warned!",
    msg_warning_msg: "You have received a warning by the moderators for reason: <reason>",
    msg_temp_ban: "You have been temporarily banned!",
    msg_temp_ban_msg: "You have been banned for reason: <reason>",
    msg_perma_ban: "You have been permanently banned!",
    msg_perma_ban_msg: "You have been banned for reason: <reason>",
    msg_no_reason: "No reason provided.",
    play_solo: "Play Solo",
    play_duo: "Play Duos",
    play_squad: "Play Squads",
    join_team: "Join Team",
    msg_locked_tooltip: "The game switches between solos and duos every 24 hours, as there aren't enough players for both.",
    rules_and_tutorial: "Rules & Tutorial",
    news: "News",
    loadout: "Loadout",
    settings: "Settings",
    fullscreen: "Fullscreen",
    resume: "Resume",
    quit: "Quit",
    none: "None",
    copy: "Copy",
    copied: "Copied",
    health: "health",
    adrenaline: "adrenaline",
    settings_volume: "Volume",
    settings_keybinds: "Keybinds",
    settings_graphics: "Graphics",
    settings_interface: "Interface",
    settings_save_load: "Save/Load",
    settings_mobile: "Mobile",
    settings_require_reload: "* Changing these settings requires reloading the page",
    settings_performance_warning: "* This setting can cause issues on some devices. Disable if you're unable to join the game.",
    settings_master_volume: "Master volume",
    settings_sfx_volume: "SFX volume",
    settings_music_volume: "Music volume",
    settings_old_menu_music: "Old menu music",
    settings_render_mode: "Render mode",
    settings_render_resolution: "Render resolution",
    settings_render_resolution_auto: "Auto",
    settings_hires_textures: "High resolution textures",
    settings_cooler_graphics: "Cooler graphics",
    settings_antialias: "Anti-aliasing",
    settings_movement_smoothing: "Movement smoothing",
    settings_responsive_rotation: "Responsive rotation",
    settings_camera_shake: "Camera shake",
    settings_interface_scale: "Interface scale",
    settings_minimap_opacity: "Minimap opacity",
    settings_fs_map_opacity: "Fullscreen map opacity",
    settings_hide_minimap: "Hide minimap",
    settings_blur_splash: "Blur splash screen",
    settings_hide_rules: "Hide rules button",
    settings_warn_before_leaving: "Warn before leaving",
    settings_show_fps: "Show FPS",
    settings_show_ping: "Show ping",
    settings_show_coordinates: "Show coordinates",
    settings_anon_names: "Anonymous player names",
    settings_hide_emotes: "Hide emotes",
    settings_text_killfeed: "Text-based killfeed",
    settings_colored_weapon_slots: "Colored weapon slots",
    settings_scope_looping: "Loop scope selection",
    settings_draw_hud: "Draw HUD",
    settings_autopickup: "Enable autopickup",
    settings_autopickup_dual_guns: "Autopickup dual guns",
    settings_load_settings: "Load settings",
    settings_copy_settings: "Copy settings to clipboard",
    settings_reset_settings: "Reset settings",
    settings_reload: "Reload",
    settings_mobile_controls: "Enable mobile controls",
    settings_joystick_size: "Joystick size",
    settings_joystick_opacity: "Joystick opacity",
    loadout_skins: "Skins",
    loadout_emotes: "Emotes",
    loadout_crosshairs: "Crosshairs",
    loadout_badges: "Badges",
    loadout_special: "Special",
    loadout_crosshairs_default: "System default",
    loadout_crosshairs_size: "Size:",
    loadout_crosshairs_color: "Color:",
    loadout_crosshairs_stroke_size: "Stroke Size:",
    loadout_crosshairs_stroke_color: "Stroke Color:",
    emotes_category_People: "People",
    emotes_category_Text: "Text",
    emotes_category_Memes: "Memes",
    emotes_category_Icons: "Icons",
    emotes_category_Misc: "Misc",
    featured_youtubr: "Featured Youtubr",
    featured_streamr: "Featured Streamr",
    btn_report: "Report",
    btn_spectate_kill_leader: "Spectate Kill Leader",
    btn_spectate: "Spectate",
    btn_play_again: "Play Again",
    btn_menu: "Menu",
    msg_waiting_for_leader: "Waiting for leader",
    msg_you_died: "You died.",
    msg_player_died: "<player> died.",
    msg_win: "Winner Winner Chicken Dinner!",
    msg_your_rank: "Rank",
    msg_kills: "Kills: <kills>",
    gas_waiting: "Toxic gas advances in <time>",
    gas_advancing: "Toxic gas is advancing! Move to the safe zone",
    gas_inactive: "Waiting for players...",
    action_open_door: "Open Door",
    action_close_door: "Close Door",
    action_revive: "Revive <player>",
    action_cancel: "Cancel",
    action_reloading: "Reloading...",
    action_reviving: "Reviving...",
    action_being_revived: "Being revived...",
    action_gauze_use: "Applying <item>",
    action_medikit_use: "Using <item>",
    action_cola_use: "Drinking <item>",
    action_tablets_use: "Taking <item>",
    interact_airdrop_crate_locked: "Open Airdrop",
    interact_control_panel: "Activate Control Panel",
    interact_generator: "Activate Generator",
    interact_button: "Press Button",
    loading_spritesheets: "Loading Spritesheets <progress>",
    loading_connecting: "Connecting",
    loading_joining_game: "Joining Game",
    loading_fetching_data: "Fetching Server Data...",
    loading_finding_game: "Finding Game",
    keybind_clear_tooltip: "To remove a keybind, press the keybind and then press either <kbd>Escape</kbd> or <kbd>Backspace</kbd>.",
    keybind_reset: "Reset to defaults",
    "bindings_+up": "Move Up",
    "bindings_+down": "Move Down",
    "bindings_+left": "Move Left",
    "bindings_+right": "Move Right",
    bindings_interact: "Interact",
    bindings_loot: "Loot",
    "bindings_slot 0": "Equip Primary",
    "bindings_slot 1": "Equip Secondary",
    "bindings_slot 2": "Equip Melee",
    "bindings_equip_or_cycle_throwables 1": "Equip/Cycle Throwable",
    bindings_last_item: "Equip Last Weapon",
    bindings_other_weapon: "Equip Other Gun",
    bindings_swap_gun_slots: "Swap Gun Slots",
    "bindings_cycle_items -1": "Equip Previous Weapon",
    "bindings_cycle_items 1": "Equip Next Weapon",
    "bindings_+attack": "Use Weapon",
    bindings_drop: "Drop Active Weapon",
    bindings_reload: "Reload",
    "bindings_cycle_scopes -1": "Previous Scope",
    "bindings_cycle_scopes 1": "Next Scope",
    "bindings_use_consumable gauze": "Use Gauze",
    "bindings_use_consumable medikit": "Use Medikit",
    "bindings_use_consumable cola": "Use Cola",
    "bindings_use_consumable tablets": "Use Tablets",
    bindings_cancel_action: "Cancel Action",
    "bindings_+view_map": "View Map",
    bindings_toggle_map: "Toggle Fullscreen Map",
    bindings_toggle_minimap: "Toggle Minimap",
    bindings_toggle_hud: "Toggle HUD",
    "bindings_+emote_wheel": "Emote Wheel",
    "bindings_+map_ping_wheel": "Switch to Map Ping",
    "bindings_+map_ping": "Map Ping Wheel",
    bindings_toggle_console: "Toggle Console",
    bindings_toggle_slot_lock: "Toggle Slot Lock",
    kf_suicide_kill: "<player> committed suicide",
    kf_suicide_down: "<player> knocked themselves out",
    kf_two_party_kill: "<player> killed <victim>",
    kf_two_party_down: "<player> knocked out <victim>",
    kf_bleed_out_kill: "<player> bled out",
    kf_bleed_out_down: "<player> bled out non-lethally",
    kf_finished_off_kill: "<player> finished off <victim>",
    kf_finished_off_down: "<player> gently finished off <victim>",
    kf_finally_died: "<player> finally died",
    kf_finally_ended_themselves: "<player> finally ended themselves",
    kf_finally_killed: "<player> was finally killed",
    kf_finally_down: "<player> was finally knocked out",
    kf_gas_kill: "<player> died to the gas",
    kf_gas_down: "<player> was knocked out by the gas",
    kf_airdrop_kill: "<player> was fatally crushed by an airdrop",
    kf_airdrop_down: "<player> was knocked out by an airdrop",
    kf_kl_promotion: "<player> is promoted to the Kill Leader!",
    kf_kl_killed: "<player> killed the Kill Leader",
    kf_kl_dead: "The Kill Leader is dead!",
    kf_kl_suicide: "The Kill Leader killed themselves!",
    tt_restores: "<item> restores <amount> <type>",
    tt_reduces: "<item> reduces <percent>% damage",
    go_kills: "Kills:",
    go_damage_done: "Damage Done:",
    go_damage_taken: "Damage Taken:",
    go_time_alive: "Time Alive:",
    create_team: "Create Team",
    create_team_autofill: "Auto Fill",
    create_team_lock: "Lock Team",
    create_team_waiting: "Waiting...",
    create_team_play: "Start Game",
    report_reporting: "Reporting",
    report_id: "Report ID:",
    report_instructions: `
      <p><strong>Please follow the instructions below!</strong> If you don't, your report will be ignored.</p>
      <h4>How to Submit a Report</h4>
      <ol>
        <li>Join the <a href="https://discord.suroi.io">Discord server.</a></li>
        <li>Go to the <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports
            channel.</a></li>
        <li>Read the report guidelines in the pinned post.</li>
        <li>Submit your report as a post.</li>
      </ol>`,
    languages: "Languages",
    gauze: "Gauze",
    medikit: "Medikit",
    cola: "Cola",
    tablets: "Tablets",
    basic_vest: "Basic Vest",
    regular_vest: "Regular Vest",
    tactical_vest: "Tactical Vest",
    basic_helmet: "Basic Helmet",
    regular_helmet: "Regular Helmet",
    tactical_helmet: "Tactical Helmet",
    bag: "Bag",
    basic_pack: "Basic Pack",
    regular_pack: "Regular Pack",
    tactical_pack: "Tactical Pack",
    "1x_scope": "1x Scope",
    "2x_scope": "2x Scope",
    "4x_scope": "4x Scope",
    "8x_scope": "8x Scope",
    "15x_scope": "15x Scope",
    fists: "Fists",
    baseball_bat: "Baseball Bat",
    hatchet: "Hatchet",
    kbar: "K-bar",
    maul: "Maul",
    gas_can: "Gas Can",
    heap_sword: "HE-AP Sword",
    steelfang: "Steelfang",
    ice_pick: "Ice Pick",
    seax: "Seax",
    crowbar: "Crowbar",
    sickle: "Sickle",
    mosin: "Mosin-Nagant",
    radio: "Radio",
    lewis_gun: "Lewis Gun",
    deathray: "Death Ray",
    firework_launcher: "Firework Launcher",
    arena_closer: "Destroyer Of Worlds",
    revitalizer: "Revitalizer",
    s_g17: "G17 (Scoped)",
    vss: "VSS",
    pp19: "PP-19",
    vepr12: "Vepr-12",
    flues: "Flues",
    m1895: "M1895",
    ak47: "AK-47",
    vector: "Vector",
    mini14: "Mini-14",
    model_89: "Model 89",
    negev: "Negev",
    tango_51: "Tango 51",
    barrett: "Barrett M95",
    stoner_63: "Stoner 63",
    m1_garand: "M1 Garand",
    frag_grenade: "Frag Grenade",
    smoke_grenade: "Smoke Grenade",
    confetti_grenade: "Confetti Grenade",
    dual_template: "Dual <gun>",
    region_dev: "Localhost Server",
    region_na: "North America",
    region_eu: "Europe",
    region_sa: "South America",
    region_as: "Asia"
}
  , Pn = {
    name: "Eesti",
    flag: "🇪🇪",
    msg_rotate: "Paremaks mängimiskogemuseks palun hoidke seadet horisontaalselt.",
    msg_loading: "Ühendumine",
    msg_err_joining: "Viga mänguga ühinemisel.",
    msg_err_finding: "Viga mängu otsimisel.",
    msg_try_again: "Palun proovige uuesti.",
    msg_warning: "Teid on hoiatatud!",
    msg_warning_msg: "Te olete saanud mängu moderaatoritelt hoiatuse põhjusega: <reason>",
    msg_temp_ban: "Teil on ajutine Suroi mängimise keeld!",
    msg_temp_ban_msg: "Teile määrati ajutine keeld põhjusega: <reason>",
    msg_perma_ban: "Teil on püsiv Suroi mängimise keeld!",
    msg_perma_ban_msg: "Teile määrati püsiv keeld põhjusega: <reason>",
    msg_no_reason: "Põhjust pole esitatud.",
    play_solo: "Mängi Soolot",
    play_duo: "Mängi Duot",
    play_squad: "Mängi Squaade",
    join_team: "Liitu Tiimiga",
    msg_locked_tooltip: "Mäng vahetub soolo ja duo vahel iga 24 tunni tagant, kuna mõlema jaoks korraga ei ole piisavalt palju mängijaid.",
    rules_and_tutorial: "Reeglid ja Juhend",
    news: "Uudised",
    loadout: "Välimus",
    settings: "Seaded",
    fullscreen: "Täisekraan",
    resume: "Jätka",
    quit: "Lahku",
    none: "Puudub",
    copy: "Kopeeri",
    health: "elu",
    adrenaline: "adrenaliini",
    settings_volume: "Helitugevus",
    settings_keybinds: "Klaviatuur",
    settings_graphics: "Graafika",
    settings_interface: "Kasutajaliides",
    settings_save_load: "Salvesta/Laadi",
    settings_mobile: "Mobiilseade",
    settings_require_reload: "* Nende seadete muutmise korral tuleb veebileht uuesti laadida",
    settings_performance_warning: "* See seade võib põhjustada probleeme osadel seadetel. Juhul kui te ei saa mänguga liituda, lülitage see seade välja.",
    settings_master_volume: "Põhi helitugevus",
    settings_sfx_volume: "Heliefektide helitugevus",
    settings_music_volume: "Muusika helitugevus",
    settings_old_menu_music: "Vana avamenüü taustamuusika",
    settings_render_mode: "Renderdusrežiim",
    settings_render_resolution: "Renderduse kvaliteet",
    settings_render_resolution_auto: "Automaatne",
    settings_hires_textures: "Kõrge kvaliteediga graafika",
    settings_antialias: "Antialiasing",
    settings_movement_smoothing: "Liikumiste silumine",
    settings_responsive_rotation: "Reageeriv pöörlemisrežiim",
    settings_camera_shake: "Vaatevälja rappumine",
    settings_interface_scale: "Kasutajaliidese suurus",
    settings_minimap_opacity: "Väikese kaardi läbipaistvus",
    settings_fs_map_opacity: "Täisekraani kaardi läbipaistvus",
    settings_hide_minimap: "Peida väike kaart",
    settings_blur_splash: "Udusta avamenüü taust",
    settings_hide_rules: "Peida reeglite nupp",
    settings_warn_before_leaving: "Hoiata enne mängust lahkumist",
    settings_show_fps: "Näita FPSi",
    settings_show_ping: "Näita pingi",
    settings_show_coordinates: "Näita koordinaata",
    settings_anon_names: "Anonüümsed mängijate nimed",
    settings_hide_emotes: "Peida emotikonid",
    settings_text_killfeed: "Tekstipõhised tapmiste teavitused",
    settings_colored_weapon_slots: "Värvitud relva taustad",
    settings_scope_looping: "Tsüklipõhine sihihikute valik",
    settings_draw_hud: "Renderda HUD",
    settings_autopickup: "Automaatne rüüstamine",
    settings_autopickup_dual_guns: "Rüüsta topelt relvad automaatselt",
    settings_load_settings: "Laadi seaded",
    settings_copy_settings: "Kopeeri seaded lõikelauale",
    settings_reset_settings: "Lähtesta seaded",
    settings_reload: "Laadi uuesti",
    settings_mobile_controls: "Käivita mobiilseadme juhtimisskeem",
    settings_joystick_size: "Juhtkangi suurus",
    settings_joystick_opacity: "Juhtkangi läbipaistvus",
    loadout_skins: "Riietus",
    loadout_emotes: "Emotikonid",
    loadout_crosshairs: "Niitristikud",
    loadout_badges: "Tunnusmärgid",
    loadout_special: "Spetsiaalsed seadistused",
    loadout_crosshairs_default: "Vaikimisi",
    loadout_crosshairs_size: "Suurus:",
    loadout_crosshairs_color: "Värv:",
    loadout_crosshairs_stroke_size: "Piirjoone paksus:",
    loadout_crosshairs_stroke_color: "Piirjoone värv:",
    emotes_category_People: "Inimesed",
    emotes_category_Text: "Tekst",
    emotes_category_Memes: "Meemid",
    emotes_category_Icons: "Ikoonid",
    emotes_category_Misc: "Muu",
    featured_youtubr: "Esiletoodud Youtubr",
    featured_streamr: "Esiletoodud Streamr",
    btn_report: "Raporteeri",
    btn_spectate_kill_leader: "Jälgi Tapmiste Liidrit",
    btn_spectate: "Jälgi",
    btn_play_again: "Mängi Uuesti",
    btn_menu: "Menüü",
    msg_waiting_for_leader: "Liidrit oodatakse",
    msg_you_died: "Sa surid.",
    msg_player_died: "<player> suri.",
    msg_win: "Võit on Teie!",
    msg_your_rank: "Koht",
    msg_kills: "Tapmisi: <kills>",
    gas_waiting: "Mürgine gaas liigub <time> pärast",
    gas_advancing: "Mürgine gaas liigub edasi! Liikuge ohutusse tsooni",
    gas_inactive: "Mängijaid oodatakse...",
    action_open_door: "Ava Uks",
    action_close_door: "Sulge Uks",
    action_revive: "Elusta <player>",
    action_cancel: "Katkesta",
    action_reloading: "Relva laadimine...",
    action_reviving: "Elustamine...",
    action_being_revived: "Teid elustatakse...",
    action_gauze_use: "Tarlataani Kasutamine",
    action_medikit_use: "Esmaabipaki Kasutamine",
    action_cola_use: "Energiajoogi Joomine",
    action_tablets_use: "Tablettide Võtmine",
    interact_airdrop_crate_locked: "Ava Õhudessant",
    interact_control_panel: "Aktiveeri Juhtpaneel",
    interact_generator: "Aktiveeri Generaator",
    interact_button: "Vajuta Nupule",
    loading_spritesheets: "<progress> Spraiditabelit Laaditud",
    loading_connecting: "Ühendumine",
    loading_joining_game: "Mänguga Ühendumine",
    loading_fetching_data: "Serveri Andmete Vastuvõtmine...",
    loading_finding_game: "Mängu Otsimine",
    keybind_clear_tooltip: "Klahviseose eemaldamiseks vajuta sellele ning seejärel vajuta <kbd>Escape</kbd> või <kbd>Backspace</kbd> klahvi.",
    keybind_reset: "Taasta algseadistused",
    "bindings_+up": "Liigu Üles",
    "bindings_+down": "Liigu Alla",
    "bindings_+left": "Liigu Vasakule",
    "bindings_+right": "Liigu Paremale",
    bindings_interact: "Kasuta",
    bindings_loot: "Rüüsta",
    "bindings_slot 0": "Varusta Esimene Relv",
    "bindings_slot 1": "Varusta Teine Relv",
    "bindings_slot 2": "Varusta Lähivõitlusrelv",
    "bindings_equip_or_cycle_throwables 1": "Varusta/Vaheta Granaati",
    bindings_last_item: "Varusta Viimane Relv",
    bindings_other_weapon: "Varusta Muu Relv",
    bindings_swap_gun_slots: "Vaheta Relvad",
    "bindings_cycle_items -1": "Varusta Eelmine Relv",
    "bindings_cycle_items 1": "Varusta Järgmine Relv",
    "bindings_+attack": "Kasuta Relva",
    bindings_drop: "Kukuta Aktiivne Relv",
    bindings_reload: "Laadi Relva",
    "bindings_cycle_scopes -1": "Eelmine Sihik",
    "bindings_cycle_scopes 1": "Järgmine Sihik",
    "bindings_use_consumable gauze": "Kasuta Tarlataani",
    "bindings_use_consumable medikit": "Kasuta Esmaabipakki",
    "bindings_use_consumable cola": "Kasuta Energiajooki",
    "bindings_use_consumable tablets": "Kasuta Tablette",
    bindings_cancel_action: "Katkesta Tegevus",
    "bindings_+view_map": "Ava/Sulge Kaart",
    bindings_toggle_map: "Ava/Sulge Täisekraani Kaart",
    bindings_toggle_minimap: "Näita Väkest Kaarti",
    bindings_toggle_hud: "Näita HUDi",
    "bindings_+emote_wheel": "Ava Emotikonide Valik",
    "bindings_+map_ping_wheel": "Vaheta Kaardipingile",
    "bindings_+map_ping": "Ava Kaardipingi Valik",
    bindings_toggle_console: "Ava/Sulge Console",
    bindings_toggle_slot_lock: "Relva Lukk",
    kf_suicide_kill: "<player> tegi enesetapu",
    kf_suicide_down: "<player> lõi iseennast maha",
    kf_two_party_kill: "<player> tappis <victim>",
    kf_two_party_down: "<player> lõi <victim> maha",
    kf_bleed_out_kill: "<player> jooksis verest tühjaks",
    kf_bleed_out_down: "<player> jooksis mittesurmavalt verest tühjaks",
    kf_finished_off_kill: "<player> lõpetas <victim> elu",
    kf_finished_off_down: "<player> lõpetas õrnalt <victim> elu",
    kf_finally_died: "<player> lõpuks suri",
    kf_finally_ended_themselves: "<player> lõpetas lõpuks enda elu",
    kf_finally_killed: "<player> lõpuks tapeti",
    kf_finally_down: "<player> löödi lõpuks maha",
    kf_gas_kill: "<player> suri gaasi kätte",
    kf_gas_down: "<player> löödi maha gaasi pärast",
    kf_airdrop_kill: "<player> purustati surmavalt õhudessanti poolt",
    kf_airdrop_down: "<player> löödi maha õhudessanti poolt",
    kf_kl_promotion: "<player> ülendati Tapmiste Liidriks!",
    kf_kl_killed: "<player> tappis Tapmiste Liidri",
    kf_kl_dead: "Tapmiste Liider on surnud!",
    kf_kl_suicide: "Tapmiste Liider tappis iseennast!",
    tt_restores: "<item> taastab <amount> <type>",
    tt_reduces: "<item> vähendab saadud kahju <percent>% võrra",
    go_kills: "Tapmisi:",
    go_damage_done: "Kahju Tehtud:",
    go_damage_taken: "Kahju Saadud:",
    go_time_alive: "Aeg elus:",
    create_team: "Loo Tiim",
    create_team_autofill: "Täida Automaatselt",
    create_team_lock: "Lukusta Tiim",
    create_team_waiting: "Ootel...",
    create_team_play: "Alusta Mängu",
    report_reporting: "Raporteerite",
    report_id: "Raporti ID:",
    report_instructions: `
    <p><strong>Palun jälgige allolevaid juhiseid!</strong> Kui teie raport ei vasta juhistele, ignoreeritakse seda.</p>
    <h4>Kuidas Esitada Raporti</h4>
    <ol>
      <li>Liituge <a href="https://discord.suroi.io">Discordi serveriga.</a></li>
      <li>Minge <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports
          kanalisse.</a></li>
      <li>Lugege raporti esitamise juhendid kinnitatud postitusest läbi.</li>
      <li>Esitage raport postitusena.</li>
    </ol>`,
    languages: "Keeled",
    gauze: "Tarlataan",
    medikit: "Esmaabipakk",
    cola: "Energiajook",
    tablets: "Tabletid",
    basic_vest: "Lihtne Vest",
    regular_vest: "Tavaline Vest",
    tactical_vest: "Taktikaline Vest",
    basic_helmet: "Lihtne Kiiver",
    regular_helmet: "Tavaline Kiiver",
    tactical_helmet: "Taktikaline Kiiver",
    bag: "Kott",
    basic_pack: "Väike Seljakott",
    regular_pack: "Tavaline Seljakott",
    tactical_pack: "Suur Seljakott",
    "1x_scope": "1x Sihik",
    "2x_scope": "2x Sihik",
    "4x_scope": "4x Sihik",
    "8x_scope": "8x Sihik",
    "15x_scope": "15x Sihik",
    fists: "Rusikad",
    baseball_bat: "Pesapallikurikas",
    hatchet: "Kirves",
    kbar: "K-bar",
    maul: "Palginui",
    gas_can: "Bensiinikanister",
    heap_sword: "HE-AP Mõõk",
    steelfang: "Teraskihv",
    ice_pick: "Jääork",
    seax: "Võitlusnuga",
    crowbar: "Kang",
    sickle: "Sirp",
    frag_grenade: "Käsigranaat",
    smoke_grenade: "Suitsugranaat",
    confetti_grenade: "Ilutulestiku Granaat",
    mosin: "Mossin-Nagant",
    radio: "Raadio",
    lewis_gun: "Lewise Kuulipilduja",
    deathray: "Surmakiir",
    firework_launcher: "Ilutulestiku Heitja",
    s_g17: "G17 (sihikuga)",
    arena_closer: "Maailmade Hävitaja",
    dual_template: "Topelt <gun>",
    region_dev: "Lokaalne Server",
    region_na: "Põhja-Ameerika",
    region_eu: "Euroopa",
    region_sa: "Lõuna-Ameerika",
    region_as: "Aasia"
}
  , Rn = {
    name: "Français",
    flag: "🇫🇷",
    msg_rotate: "Pour une meilleure expérience, passez en mode paysage..",
    msg_loading: "Connexion",
    msg_err_joining: "Erreur rencontrée en rejoignant la partie.",
    msg_err_finding: "Erreur rencontrée en cherchant la partie.",
    msg_try_again: "Réessayez.",
    msg_warning: "Vous avez reçu un avertissement!",
    msg_warning_msg: "Vous avez reçu un avertissement des modérateurs pour : <reason>",
    msg_temp_ban: "Vous avez été temporairement banni de suroi!",
    msg_temp_ban_msg: "Les modérateurs de jeu vous ont banni pour: <reason>",
    msg_perma_ban: "Vous avez été banni!",
    msg_perma_ban_msg: "Vous avez été banni pour : <reason>",
    msg_no_reason: "Pas de raison donnée.",
    play_solo: "Jouer Solo",
    play_duo: "Jouer Duos",
    play_squad: "Jouer Squads",
    join_team: "Rejoindre une équipe",
    msg_locked_tooltip: "Le jeu alterne entre solos et duos toutes les 24 heures, n'ayant pas assez de joueurs pour les deux.",
    rules_and_tutorial: "Règles et tutoriel",
    news: "Nouvelles",
    loadout: "Équipement",
    settings: "Paramètres",
    fullscreen: "Plein écran",
    resume: "Continuer",
    quit: "Abandonner",
    none: "None",
    copy: "Copier",
    health: "vie",
    adrenaline: "adrénaline",
    settings_volume: "Volume",
    settings_keybinds: "Contrôles",
    settings_graphics: "Graphiques",
    settings_interface: "Interface",
    settings_save_load: "Savegarder/Charger",
    settings_mobile: "Mobile",
    settings_require_reload: "* Changer ces paramètres requiert un rafraichissement de la page",
    settings_performance_warning: "* Ce paramètre peut causer des problèmes sur certaines machines. Désactivez-le si rejoindre un match est impossible.",
    settings_master_volume: "Volume principal",
    settings_sfx_volume: "Volume des effets",
    settings_music_volume: "Volume de la musique",
    settings_old_menu_music: "Musique de l'ancien menu",
    settings_render_mode: "Mode de rendu visuel",
    settings_render_resolution: "Résolution",
    settings_render_resolution_auto: "Auto",
    settings_hires_textures: "Textures haute résolution",
    settings_cooler_graphics: "Meilleures graphiques",
    settings_antialias: "Textures lisses",
    settings_movement_smoothing: "Mouvements fluides",
    settings_responsive_rotation: "Rotation sensible",
    settings_camera_shake: "Vibrations de l'écran",
    settings_interface_scale: "Taille de l'interface",
    settings_minimap_opacity: "Opacité de la minimap",
    settings_fs_map_opacity: "Opacité de la map plein écran",
    settings_hide_minimap: "Cacher la minimap",
    settings_blur_splash: "Flouter l'écran splash",
    settings_hide_rules: "Cacher les règles",
    settings_warn_before_leaving: "Avertir avant abandon",
    settings_show_fps: "Montrer FPS",
    settings_show_ping: "Montrer ping",
    settings_show_coordinates: "Montrer coordonnées",
    settings_anon_names: "Joueurs anonymes",
    settings_hide_emotes: "Cacher emotes",
    settings_text_killfeed: "Killfeed sous forme de texte",
    settings_colored_weapon_slots: "Slots d'armes en couleur",
    settings_scope_looping: "Faire boucler la sélection de viseurs",
    settings_draw_hud: "Montrer le HUD",
    settings_autopickup: "Récupération automatique",
    settings_autopickup_dual_guns: "Récupérer les armes doubles automatiquement",
    settings_load_settings: "Charger des paramètres",
    settings_copy_settings: "Copier les paramètres",
    settings_reset_settings: "Réinitialiser les paramètres",
    settings_reload: "Recharger",
    settings_mobile_controls: "Activer les contrôles pour mobile",
    settings_joystick_size: "Taille des joysticks",
    settings_joystick_opacity: "Opacité des joysticks",
    loadout_skins: "Skins",
    loadout_emotes: "Emotes",
    loadout_crosshairs: "Pointeurs",
    loadout_badges: "Badges",
    loadout_special: "Spécial",
    loadout_crosshairs_default: "Paramètres par défaut",
    loadout_crosshairs_size: "Taille:",
    loadout_crosshairs_color: "Couleur:",
    loadout_crosshairs_stroke_size: "Taille du contour:",
    loadout_crosshairs_stroke_color: "Couleur du contour:",
    emotes_category_People: "Faces",
    emotes_category_Text: "Texte",
    emotes_category_Memes: "Memes",
    emotes_category_Icons: "Icones",
    emotes_category_Misc: "Autres",
    featured_youtubr: "YouTubr du moment",
    featured_streamr: "Streamr du moment",
    btn_report: "Signaler",
    btn_spectate_kill_leader: "Regarder le Kill Leader",
    btn_spectate: "Passer en spectateur",
    btn_play_again: "Rejouer",
    btn_menu: "Menu",
    msg_waiting_for_leader: "En attente d'un leader",
    msg_you_died: "Vous êtes mort",
    msg_player_died: "<player> est mort.",
    msg_win: "Winner Winner Chicken Dinner!",
    msg_your_rank: "Rang",
    msg_kills: "Kills : <kills>",
    gas_waiting: "Le gas toxique avance dans <time>",
    gas_advancing: "Le gas toxique avance! Allez vers la zone sûre.",
    gas_inactive: "En attente de joueurs...",
    action_open_door: "Ouvrir la porte",
    action_close_door: "Fermer la porte",
    action_revive: "Réanimer <player>",
    action_cancel: "Annuler",
    action_reloading: "Rechargeant...",
    action_reviving: "Réanimant...",
    action_being_revived: "En train d'être réanimé...",
    action_gauze_use: "Utilisant <item>",
    action_medikit_use: "Utilisant <item>",
    action_cola_use: "Utilisant <item>",
    action_tablets_use: "Utilisant <item>",
    interact_airdrop_crate_locked: "Ouvrir l'Airdrop",
    interact_control_panel: "Activer le panneau de contrôle",
    interact_generator: "Activer le Générateur",
    interact_button: "Appuyer sur le bouton",
    loading_spritesheets: "Chargement des feuilles de sprites <progress>",
    loading_connecting: "Connexion",
    loading_joining_game: "Connexion à la partie...",
    loading_fetching_data: "Récupération des données serveur...",
    loading_finding_game: "En recherche d'une partie",
    keybind_clear_tooltip: "Pour supprimer une touche, appuyez dessus puis soit sur <kbd>Escape</kbd> ou <kbd>Backspace</kbd>.",
    keybind_reset: "Réinitialiser au paramètres par défaut",
    "bindings_+up": "Aller en haut",
    "bindings_+down": "Aller en bas",
    "bindings_+left": "Aller à gauche",
    "bindings_+right": "Aller à droite",
    bindings_interact: "Interagir",
    bindings_loot: "Piller",
    "bindings_slot 0": "Équiper l'arme primaire",
    "bindings_slot 1": "Équiper l'arme secondaire",
    "bindings_slot 2": "Équiper l'arme de mêlée",
    "bindings_equip_or_cycle_throwables 1": "Équiper/changer de lançable",
    bindings_last_item: "Équiper la dernière arme",
    bindings_other_weapon: "Équiper l'autre arme",
    bindings_swap_gun_slots: "Échanger les slots d'arme",
    "bindings_cycle_items -1": "Équiper l'arme précédente",
    "bindings_cycle_items 1": "Équiper l'arme suivante",
    "bindings_+attack": "Utiliser l'arme",
    bindings_drop: "Abandonner l'arme active'",
    bindings_reload: "Recharger",
    "bindings_cycle_scopes -1": "Viseur précédent",
    "bindings_cycle_scopes 1": "Viseur suivant",
    "bindings_use_consumable gauze": "Utiliser des bandages",
    "bindings_use_consumable medikit": "Utiliser un Medikit",
    "bindings_use_consumable cola": "Utiliser un Cola",
    "bindings_use_consumable tablets": "Utiliser des Tablettes",
    bindings_cancel_action: "Annuler l'Action",
    "bindings_+view_map": "Voir la Map",
    bindings_toggle_map: "Activer/Désactiver la Map plein écran",
    bindings_toggle_minimap: "Activer/Désactiver la Minimap",
    bindings_toggle_hud: "Activer/Désactiver le HUD",
    "bindings_+emote_wheel": "Emote",
    "bindings_+map_ping_wheel": "Passer en ping de Map",
    "bindings_+map_ping": "Map Ping",
    bindings_toggle_console: "Activer/Désactiver la Console",
    bindings_toggle_slot_lock: "Activer/Désactiver l'échange de Slots",
    kf_suicide_kill: "<player> s'est suicidé",
    kf_suicide_down: "<player> s'est assommé",
    kf_two_party_kill: "<player> a tué <victim>",
    kf_two_party_down: "<player> a assommé <victim>",
    kf_bleed_out_kill: "<player> a saigné à mort",
    kf_bleed_out_down: "<player> a rencontré un bug",
    kf_finished_off_kill: "<player> a exécuté <victim>",
    kf_finished_off_down: "<victim> a rencontré un bug grâce à <player>",
    kf_finally_died: "<player> est mort.",
    kf_finally_ended_themselves: "<player> s'est suicidé",
    kf_finally_killed: "<player> a été tué.",
    kf_finally_down: "<player> a rencontré un bug",
    kf_gas_kill: "<player> a été asphyxié par le gas",
    kf_gas_down: "<player> a été assommé par le gas",
    kf_airdrop_kill: "<player> s'est transformé en pancake sous un airdrop",
    kf_airdrop_down: "<player> s'est fait assommer par un airdrop",
    kf_kl_promotion: "<player> est devenu le Kill Leader!",
    kf_kl_killed: "<player> a tué le Kill Leader",
    kf_kl_dead: "Le Kill Leader est mort!",
    kf_kl_suicide: "Le Kill Leader s'est suicidé!",
    tt_restores: "<item> : restore <amount> <type>",
    tt_reduces: "<item> : nullifie <percent>% des dégâts",
    go_kills: "Kills:",
    go_damage_done: "Dégâts faits:",
    go_damage_taken: "Dégâts pris:",
    go_time_alive: "Temps vivant:",
    create_team: "Créer son équipe",
    create_team_autofill: "Remplissage auto",
    create_team_lock: "Verrouiller l'équipe",
    create_team_waiting: "En attente...",
    create_team_play: "Commencer une partie",
    report_reporting: "Signalant",
    report_id: "Report ID:",
    report_instructions: `
      <p><strong>Merci de suivre les instructions ci-dessous! Sinon, votre signalement sera ignoré.</p>
      <h4>Comment signaler</h4>
      <ol>
        <li>Rejoignez le <a href="https://discord.suroi.io">serveur Discord.</a></li>
        <li>Allez dans le salon <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports.</a></li>
        <li>Lisez les règles de signalement dans le post épinglé.</li>
        <li>Envoyez votre signalement sous forme de post.</li>
      </ol>`,
    languages: "Languages",
    gauze: "Bandages",
    medikit: "Medikit",
    cola: "Cola",
    tablets: "Tablettes",
    basic_vest: "Veste légère",
    regular_vest: "Gilet pare-balles",
    tactical_vest: "Veste tactique",
    basic_helmet: "Casque normal",
    regular_helmet: "Casque de combat",
    tactical_helmet: "Casque tactique",
    bag: "Sac à dos",
    basic_pack: "Petit sac à dos",
    regular_pack: "Gros sac à dos",
    tactical_pack: "Sac à dos tactique",
    "1x_scope": "Viseur 1x",
    "2x_scope": "Viseur 2x",
    "4x_scope": "Viseur 4x",
    "8x_scope": "Viseur 8x",
    "15x_scope": "Viseur 15x",
    fists: "Poings",
    baseball_bat: "Batte de baseball",
    hatchet: "Hachette",
    kbar: "K-bar",
    maul: "Masse",
    gas_can: "Jerrycan",
    heap_sword: "Épée HE-AP",
    steelfang: "Dent d'argent",
    ice_pick: "Pic à glace",
    seax: "Scramasaxe",
    crowbar: "Pied de Biche",
    sickle: "Faucille",
    mosin: "Mosin-Nagant",
    radio: "Radio",
    lewis_gun: "Mitraillette Lewis",
    deathray: "Super Laser",
    firework_launcher: "Lance-Confetti",
    arena_closer: "Tueur rapide",
    revitalizer: "Revitalizer",
    s_g17: "G17 (à lunette)",
    vss: 'VSS"',
    pp19: "PP-19",
    vepr12: "Vepr-12",
    flues: "Flues",
    m1895: "M1895",
    ak47: "AK-47",
    vector: "Vector",
    mini14: "Mini-14",
    model_89: "Modèle 89",
    negev: "Negev",
    tango_51: "Tango 51",
    barrett: "Barrett M95",
    stoner_63: "Stoner 63",
    m1_garand: "M1 Garand",
    frag_grenade: "Grenade à frag",
    smoke_grenade: "Fumigène",
    confetti_grenade: "Grenade à confettis",
    dual_template: "Double <gun>",
    region_dev: "Serveur Localhost",
    region_na: "Amérique du Nord",
    region_eu: "Europe",
    region_sa: "Amérique du Sud",
    region_as: "Asie"
}
  , An = {
    name: "Deutsch",
    flag: "🇩🇪",
    msg_rotate: "Für ein besseres Erlebnis, drehe das Gerät in den Querformatmodus.",
    msg_loading: "Verbindung wird hergestellt",
    msg_err_joining: "Fehler beim Beitritt zum Spiel.",
    msg_err_finding: "Fehler beim Finden des Spiels.",
    msg_try_again: "Bitte versuche es erneut.",
    msg_warning: "Du wurdest verwarnt!",
    msg_warning_msg: "Du wurdest von den Moderatoren wegen folgendem Grund verwarnt: <reason>",
    msg_temp_ban: "Du wurdest vorübergehend gesperrt!",
    msg_temp_ban_msg: "Du wurdest wegen folgendem Grund gesperrt: <reason>",
    msg_perma_ban: "Du wurdest dauerhaft gesperrt!",
    msg_perma_ban_msg: "Du wurdest wegen folgendem Grund gesperrt: <reason>",
    msg_no_reason: "Kein Grund angegeben.",
    play_solo: "Solo",
    play_duo: "Duos",
    play_squad: "Squads",
    join_team: "Team",
    msg_locked_tooltip: "Das Spiel wechselt alle 24 Stunden zwischen Solo und Duos, da nicht genug Spieler für beide Modi verfügbar sind.",
    rules_and_tutorial: "Regeln & Tutorial",
    news: "Nachrichten",
    loadout: "Ausrüstung",
    settings: "Einstellungen",
    fullscreen: "Vollbild",
    resume: "Fortsetzen",
    quit: "Beenden",
    none: "Keine",
    copy: "Kopieren",
    health: "Gesundheit",
    adrenaline: "Adrenalin",
    settings_volume: "Lautstärke",
    settings_keybinds: "Tastenbelegungen",
    settings_graphics: "Grafik",
    settings_interface: "Benutzeroberfläche",
    settings_save_load: "Speichern/Laden",
    settings_mobile: "Mobil",
    settings_require_reload: "* Das Ändern dieser Einstellungen erfordert ein Neuladen der Seite",
    settings_performance_warning: "* Diese Einstellung kann auf einigen Geräten Probleme verursachen. Deaktiviere sie, wenn du dem Spiel nicht beitreten kannst.",
    settings_master_volume: "Hauptlautstärke",
    settings_sfx_volume: "Effekte-Lautstärke",
    settings_music_volume: "Musiklautstärke",
    settings_old_menu_music: "Alte Menümusik",
    settings_render_mode: "Render-Modus",
    settings_render_resolution: "Render-Auflösung",
    settings_render_resolution_auto: "Auto",
    settings_hires_textures: "Hochauflösende Texturen",
    settings_cooler_graphics: "Coolere Grafik",
    settings_antialias: "Anti-Aliasing",
    settings_movement_smoothing: "Bewegungsglättung",
    settings_responsive_rotation: "Reaktionsschnelle Drehung",
    settings_camera_shake: "Kamera wackeln",
    settings_interface_scale: "Schnittstellenskalierung",
    settings_minimap_opacity: "Minikarten-Deckkraft",
    settings_fs_map_opacity: "Vollbildkarten-Deckkraft",
    settings_hide_minimap: "Minikarte ausblenden",
    settings_blur_splash: "Splashscreen verwischen",
    settings_hide_rules: "Regeln-Schaltfläche ausblenden",
    settings_warn_before_leaving: "Vor dem Verlassen warnen",
    settings_show_fps: "FPS anzeigen",
    settings_show_ping: "Ping anzeigen",
    settings_show_coordinates: "Koordinaten anzeigen",
    settings_anon_names: "Anonyme Spielernamen",
    settings_hide_emotes: "Emotes ausblenden",
    settings_text_killfeed: "Textbasierter Killfeed",
    settings_colored_weapon_slots: "Farbige Waffenslots",
    settings_scope_looping: "Zielfernrohr-Schleife",
    settings_draw_hud: "HUD anzeigen",
    settings_autopickup: "Automatische Aufnahme aktivieren",
    settings_autopickup_dual_guns: "Automatische Aufnahme von Doppelwaffen",
    settings_load_settings: "Einstellungen laden",
    settings_copy_settings: "Einstellungen in die Zwischenablage kopieren",
    settings_reset_settings: "Einstellungen zurücksetzen",
    settings_reload: "Neu laden",
    settings_mobile_controls: "Mobile Steuerung aktivieren",
    settings_joystick_size: "Joystick-Größe",
    settings_joystick_opacity: "Joystick-Deckkraft",
    loadout_skins: "Skins",
    loadout_emotes: "Emotes",
    loadout_crosshairs: "Fadenkreuze",
    loadout_badges: "Abzeichen",
    loadout_special: "Spezial",
    loadout_crosshairs_default: "Systemstandard",
    loadout_crosshairs_size: "Größe:",
    loadout_crosshairs_color: "Farbe:",
    loadout_crosshairs_stroke_size: "Strichstärke:",
    loadout_crosshairs_stroke_color: "Strichfarbe:",
    emotes_category_People: "Personen",
    emotes_category_Text: "Text",
    emotes_category_Memes: "Memes",
    emotes_category_Icons: "Symbole",
    emotes_category_Misc: "Verschiedenes",
    featured_youtubr: "Vorgestellter Youtubr",
    featured_streamr: "Vorgestellter Streamr",
    btn_report: "Melden",
    btn_spectate_kill_leader: "Anführer zuschauen",
    btn_spectate: "Zuschauen",
    btn_play_again: "Nochmal spielen",
    btn_menu: "Menü",
    msg_waiting_for_leader: "Warten auf Anführer",
    msg_you_died: "Du bist gestorben.",
    msg_player_died: "<player> ist gestorben.",
    msg_win: "Winner Winner Hähnchen-Dinner!",
    msg_your_rank: "Rang",
    msg_kills: "Kills: <kills>",
    gas_waiting: "Giftgas schreitet voran in <time>",
    gas_advancing: "Giftgas schreitet voran! Bewege dich zur sicheren Zone",
    gas_inactive: "Warten auf Spieler...",
    action_open_door: "Tür öffnen",
    action_close_door: "Tür schließen",
    action_revive: "Reviviere <player>",
    action_cancel: "Abbrechen",
    action_reloading: "Nachladen...",
    action_reviving: "Wiederbeleben...",
    action_being_revived: "Wird wiederbelebt...",
    action_gauze_use: "<item> verwenden",
    action_medikit_use: "<item> verwenden",
    action_cola_use: "<item> trinken",
    action_tablets_use: "<item> einnehmen",
    interact_airdrop_crate_locked: "Luftabwurf öffnen",
    interact_control_panel: "Bedienfeld aktivieren",
    interact_generator: "Generator aktivieren",
    interact_button: "Knopf drücken",
    loading_spritesheets: "Lade Spritesheets <progress>",
    loading_connecting: "Verbindung wird hergestellt",
    loading_joining_game: "Spiel beitreten",
    loading_fetching_data: "Serverdaten werden geladen...",
    loading_finding_game: "Spiel wird gesucht",
    keybind_clear_tooltip: "Um eine Tastenbelegung zu entfernen, drücke die Belegung und dann entweder <kbd>Escape</kbd> oder <kbd>Backspace</kbd>.",
    keybind_reset: "Auf Standard zurücksetzen",
    "bindings_+up": "Nach oben bewegen",
    "bindings_+down": "Nach unten bewegen",
    "bindings_+left": "Nach links bewegen",
    "bindings_+right": "Nach rechts bewegen",
    bindings_interact: "Interagieren",
    bindings_loot: "Plündern",
    "bindings_slot 0": "Primärwaffe ausrüsten",
    "bindings_slot 1": "Sekundärwaffe ausrüsten",
    "bindings_slot 2": "Nahkampfwaffe ausrüsten",
    "bindings_equip_or_cycle_throwables 1": "Wurfgegenstand ausrüsten/wechseln",
    bindings_last_item: "Letzte Waffe ausrüsten",
    bindings_other_weapon: "Andere Waffe ausrüsten",
    bindings_swap_gun_slots: "Waffenplätze tauschen",
    "bindings_cycle_items -1": "Vorherige Waffe ausrüsten",
    "bindings_cycle_items 1": "Nächste Waffe ausrüsten",
    "bindings_+attack": "Waffe benutzen",
    bindings_drop: "Aktive Waffe abwerfen",
    bindings_reload: "Nachladen",
    "bindings_cycle_scopes -1": "Vorheriges Zielfernrohr",
    "bindings_cycle_scopes 1": "Nächstes Zielfernrohr",
    "bindings_use_consumable gauze": "Gaze verwenden",
    "bindings_use_consumable medikit": "Medikit verwenden",
    "bindings_use_consumable cola": "Cola trinken",
    "bindings_use_consumable tablets": "Tabletten einnehmen",
    bindings_cancel_action: "Aktion abbrechen",
    "bindings_+view_map": "Karte anzeigen",
    bindings_toggle_map: "Vollbildkarte umschalten",
    bindings_toggle_minimap: "Minikarte umschalten",
    bindings_toggle_hud: "HUD umschalten",
    "bindings_+emote_wheel": "Emote-Rad",
    "bindings_+map_ping_wheel": "Zu Karten-Ping wechseln",
    "bindings_+map_ping": "Karten-Ping-Rad",
    bindings_toggle_console: "Konsole umschalten",
    bindings_toggle_slot_lock: "Slot-Sperre umschalten",
    kf_suicide_kill: "<player> hat Selbstmord begangen",
    kf_suicide_down: "<player> hat sich selbst ausgeknockt",
    kf_two_party_kill: "<player> hat <victim> getötet",
    kf_two_party_down: "<player> hat <victim> ausgeknockt",
    kf_bleed_out_kill: "<player> ist verblutet",
    kf_bleed_out_down: "<player> ist nicht tödlich verblutet",
    kf_finished_off_kill: "<player> hat <victim> erledigt",
    kf_finished_off_down: "<player> hat <victim> sanft erledigt",
    kf_finally_died: "<player> ist schließlich gestorben",
    kf_finally_ended_themselves: "<player> hat sich schließlich selbst getötet",
    kf_finally_killed: "<player> wurde schließlich getötet",
    kf_finally_down: "<player> wurde schließlich ausgeknockt",
    kf_gas_kill: "<player> starb durch das Gas",
    kf_gas_down: "<player> wurde durch das Gas ausgeknockt",
    kf_airdrop_kill: "<player> wurde tödlich von einem Luftabwurf getroffen",
    kf_airdrop_down: "<player> wurde von einem Luftabwurf ausgeknockt",
    kf_kl_promotion: "<player> wird zum Anführer befördert!",
    kf_kl_killed: "<player> hat den Anführer getötet",
    kf_kl_dead: "Der Anführer ist tot!",
    kf_kl_suicide: "Der Anführer hat Selbstmord begangen!",
    tt_restores: "<item> stellt <amount> <type> wieder her",
    tt_reduces: "<item> reduziert <percent>% Schaden",
    go_kills: "Kills:",
    go_damage_done: "Schaden verursacht:",
    go_damage_taken: "Schaden genommen:",
    go_time_alive: "Überlebenszeit:",
    create_team: "Team erstellen",
    create_team_autofill: "Automatisch füllen",
    create_team_lock: "Team sperren",
    create_team_waiting: "Warten...",
    create_team_play: "Spiel starten",
    report_reporting: "Meldevorgang",
    report_id: "Melde-ID:",
    report_instructions: `
      <p><strong>Bitte folge den untenstehenden Anweisungen!</strong> Wenn nicht, wird dein Bericht ignoriert.</p>
      <h4>Wie man einen Bericht einreicht</h4>
      <ol>
        <li>Tritt dem <a href="https://discord.suroi.io">Discord-Server</a> bei.</li>
        <li>Gehe zum <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports Kanal</a>.</li>
        <li>Lies die Bericht-Richtlinien im angepinnten Beitrag.</li>
        <li>Reiche deinen Bericht als Beitrag ein.</li>
      </ol>`,
    languages: "Sprachen",
    gauze: "Gaze",
    medikit: "Medikit",
    cola: "Cola",
    tablets: "Tabletten",
    basic_vest: "Basisweste",
    regular_vest: "Regelmäßige Weste",
    tactical_vest: "Taktische Weste",
    basic_helmet: "Basishelm",
    regular_helmet: "Regelmäßiger Helm",
    tactical_helmet: "Taktischer Helm",
    bag: "Tasche",
    basic_pack: "Basisrucksack",
    regular_pack: "Regelmäßiger Rucksack",
    tactical_pack: "Taktischer Rucksack",
    "1x_scope": "1x Zielfernrohr",
    "2x_scope": "2x Zielfernrohr",
    "4x_scope": "4x Zielfernrohr",
    "8x_scope": "8x Zielfernrohr",
    "15x_scope": "15x Zielfernrohr",
    fists: "Fäuste",
    baseball_bat: "Baseballschläger",
    hatchet: "Handbeil",
    kbar: "K-Bar",
    maul: "Spalthammer",
    gas_can: "Benzinkanister",
    heap_sword: "HE-AP Schwert",
    steelfang: "Stahlzahn",
    ice_pick: "Eispickel",
    seax: "Seax",
    frag_grenade: "Splittergranate",
    smoke_grenade: "Rauchgranate",
    confetti_grenade: "Konfetti-Granate",
    radio: "Radio",
    deathray: "Todesstrahl",
    dual_template: "Doppel <gun>"
}
  , Cn = {
    name: "Ελληνικά",
    flag: "🇬🇷",
    msg_rotate: "Για καλύτερη εμπειρία, περιστρέψτε τη συσκευή σας σε οριζόντιο προσανατολισμό.",
    msg_loading: "Σύνδεση",
    msg_err_joining: "Σφάλμα σύνδεσης",
    msg_err_finding: "Σφάλμα εύρεσης παιχνιδιού",
    msg_try_again: "Παρακαλώ προσπαθήστε ξανά",
    msg_warning: "Έχετε προειδοποιηθεί!",
    msg_warning_msg: "Λάβατε μια προειδοποίηση από τους συντονιστές λόγω: <reason>",
    msg_temp_ban: "Έχετε αποκλειστεί προσωρινά!",
    msg_temp_ban_msg: "Έχετε αποκλειστεί προσωρινά λόγω: <reason>",
    msg_perma_ban: "Έχετε αποκλειστεί για πάντα!",
    msg_perma_ban_msg: "Έχετε αποκλειστεί οριστικά λόγω: <reason>",
    msg_no_reason: "Χωρίς λόγο",
    play_solo: "Παίξε Μόνος",
    play_duo: "Παίξε Διπλό",
    play_squad: "Παίξε Ομάδα",
    join_team: "Μπες σε ομάδα",
    msg_locked_tooltip: "Το παιχνίδι αλλάζει μεταξύ μοναδικού και διπλού κάθε 24 ώρες επειδή δεν υπάρχουν αρκετοί παίχτες και για τα δύο.",
    rules_and_tutorial: "Κανόνες & Φροντιστήριο",
    news: "Νέα",
    loadout: "Χαρακτήρας",
    settings: "Ρυθμίσεις",
    fullscreen: "Πλήρης Οθόνη",
    resume: "Συνέχιση",
    quit: "Εγκατάλειψη",
    none: "Κανένα",
    copy: "Αντιγραφή",
    health: "ζωή",
    adrenaline: "αδρεναλίνη",
    settings_volume: "Ένταση ήχου",
    settings_keybinds: "Πλήκτρα",
    settings_graphics: "Γραφικά",
    settings_interface: "Διεπαφή",
    settings_save_load: "Αποθήκευση/Φόρτωση",
    settings_mobile: "Κινητό",
    settings_require_reload: "* Αν αλλάξεις αυτές τις ρυθμίσεις θα πρέπει να επανεκκινήσεις την σελίδα.",
    settings_performance_warning: "* Η συγκεκριμένη ρύθμιση μπορεί να προκαλέσει προβλήματα σε κάποιες συσκευές. Απενεργοποιήστε την αν δεν μπορείτε να συνδεθείτε στο παιχνίδι.",
    settings_master_volume: "Πλήρης Ένταση",
    settings_sfx_volume: "Ένταση ηχητικών εφέ",
    settings_music_volume: "Ένταση μουσικής",
    settings_old_menu_music: "Παλιά μουσική παιχνιδιού",
    settings_render_mode: "Λειτουργία Απόδοσης",
    settings_render_resolution: "Ανάλυση Απόδοσης",
    settings_render_resolution_auto: "Αυτόματο",
    settings_hires_textures: "Υψηλή ανάλυση υφής",
    settings_cooler_graphics: "Καλύτερα γραφικά",
    settings_antialias: "Χωρίς αλλοίωση/επικάλυψη",
    settings_movement_smoothing: "Εξομάλυνση κίνησης",
    settings_responsive_rotation: "Απόκριση περιστροφής",
    settings_camera_shake: "Σεισμική Κάμερα",
    settings_interface_scale: "Κλίμακα διεπαφής",
    settings_minimap_opacity: "Αδιαφάνεια χάρτη",
    settings_fs_map_opacity: "Αδιαφάνεια πλήρους χάρτη",
    settings_hide_minimap: "Απόκρυψη μικρού χάρτη",
    settings_blur_splash: "Θάμπωμα μενού",
    settings_hide_rules: "Απόκρυψη κουμπί κανόνων",
    settings_warn_before_leaving: "Προειδοποίηση πριν το κλείσιμο",
    settings_show_fps: "Εμφάνιση FPS",
    settings_show_ping: "Εμφάνιση Ping",
    settings_show_coordinates: "Εμφάνιση συντεταγμένων",
    settings_anon_names: "Ανώνυμα ονόματα παικτών",
    settings_hide_emotes: "Απόκρυψη των συναισθημάτων",
    settings_text_killfeed: "Killfeed με κείμενο",
    settings_colored_weapon_slots: "Χρωματιστά όπλα",
    settings_scope_looping: "Επιλογή κυκλικών διόπτρων",
    settings_draw_hud: "Σχεδίαση HUD",
    settings_autopickup: "Ενεργοποίηση autopickup",
    settings_load_settings: "Φόρτωση ρυθμίσεων",
    settings_copy_settings: "Αντιγραφή ρυθμίσεων στο πρόχειρο",
    settings_reset_settings: "Επαναφορά ρυθμίσεων",
    settings_reload: "Γέμιση",
    settings_mobile_controls: "Ενεργοποίηση χειριστηρίων για κινητό",
    settings_joystick_size: "Μέγεθος Χειριστηρίου",
    settings_joystick_opacity: "Αδιαφάνεια Χειριστηρίου",
    loadout_skins: "Στολές",
    loadout_emotes: "Συναισθήματα",
    loadout_crosshairs: "Στόχοι",
    loadout_badges: "Κονκάρδες",
    loadout_special: "Ειδικό Μενού",
    loadout_crosshairs_default: "Προεπιλογή συστήματος",
    loadout_crosshairs_size: "Μέγεθος:",
    loadout_crosshairs_color: "Χρώμα:",
    loadout_crosshairs_stroke_size: "Μέγεθος Περιγράμματος:",
    loadout_crosshairs_stroke_color: "Χρώμα Περιγράμματος:",
    emotes_category_People: "Άνρθωποι",
    emotes_category_Text: "Κείμενο",
    emotes_category_Memes: "Μιμίδια",
    emotes_category_Icons: "Εικονίδια",
    emotes_category_Misc: "Άλλα",
    featured_youtubr: "Προτεινόμενος Youtubr",
    featured_streamr: "Προτεινόμενος Streamr",
    btn_report: "Αναφορά",
    btn_spectate_kill_leader: "Παρακολούθησε τον αρχηγό σκοτωμών",
    btn_spectate: "Παρακολούθηση",
    btn_play_again: "Παίξε Ξανά",
    btn_menu: "Μενού",
    msg_waiting_for_leader: "Αναμονή για αρχηγό",
    msg_you_died: "Πέθανες.",
    msg_player_died: "Ο <player> πέθανε.",
    msg_win: "Είσαι ο νικητής, κέρδισες μεσημεριανό κοτόπουλο!",
    msg_your_rank: "Τάξη",
    msg_kills: "Σκοτωμοί: <kills>",
    gas_waiting: "Το τοξικό αέριο εισχωρεί σε <time>",
    gas_advancing: "Το τοξικό αέριο προχωράει! Μετακινηθείτε στην ασφαλή ζώνη",
    gas_inactive: "Αναμονή για παίχτες...",
    action_open_door: "Άνοιγμα Πόρτας",
    action_close_door: "Κλείσιμο Πόρτας",
    action_revive: "Συνεφέρνε τον/την <player>",
    action_cancel: "Ακύρωση",
    action_reloading: "Γέμισμα...",
    action_reviving: "Αναβίωση...",
    action_being_revived: "Αναβίωση...",
    action_gauze_use: "Εφαρμογή <item>",
    action_medikit_use: "Χρησιμοποίηση <item>",
    action_cola_use: "Πίνοντας <item>",
    action_tablets_use: "Παίρνοντας <item>",
    interact_airdrop_crate_locked: "Άνοιγμα Airdrop",
    interact_control_panel: "Ενεργοποίηση Πίνακα Ελέγχου",
    interact_generator: "Ενεργοποίηση Γεννήτριας",
    interact_button: "Πάτημα Κουμπιού",
    loading_spritesheets: "Φόρτωση Spritesheets <progress>",
    loading_connecting: "Σύνδεση",
    loading_joining_game: "Σύνδεση σε παιχνιδί..",
    loading_fetching_data: "Ανάκτηση δεδομένων διακομιστή...",
    loading_finding_game: "Εύρεση παιχνιδιού",
    keybind_clear_tooltip: "Για να αφαιρέσετε ένα πλήκτρο, πατήστε το πλήκτρο και, στη συνέχεια, πατήστε ένα από τα δύο πλήκτρα: <kbd>Escape</kbd> ή <kbd>Backspace</kbd>.",
    keybind_reset: "Επαναφορά στα προεπιλεγμένα",
    "bindings_+up": "Πάνω",
    "bindings_+down": "Κάτω",
    "bindings_+left": "Αριστερά",
    "bindings_+right": "Δεξιά",
    bindings_interact: "Αλληλεπίδραση",
    bindings_loot: "Λάφυρα",
    "bindings_slot 0": "Επιλογή Πρώτου Όπλου",
    "bindings_slot 1": "Επιλογή Δεύτερου Όπλου",
    "bindings_slot 2": "Επιλογή Melee",
    "bindings_equip_or_cycle_throwables 1": "Εξόπλισε/άλλαξε χειροβομβίδες",
    bindings_last_item: "Επιλογή τελευταίου όπλου",
    bindings_other_weapon: "Επιλογή άλλου όπλου",
    bindings_swap_gun_slots: "Αλλαγή θέσης όπλων",
    "bindings_cycle_items -1": "Επιλογή προηγούμενου όπλου",
    "bindings_cycle_items 1": "Επιλογή επόμενου όπλου",
    "bindings_+attack": "Χρησιμοποίηση Όπλου",
    bindings_drop: "Άφησε το όπλο που χρησιμοποιείς",
    bindings_reload: "Γέμισμα",
    "bindings_cycle_scopes -1": "Προηγούμενη Διόπτρα",
    "bindings_cycle_scopes 1": "Επόμενη Διόπτρα",
    "bindings_use_consumable gauze": "Χρησιμοποίηση Γάζας",
    "bindings_use_consumable medikit": "Χρησιμοποίηση Ιατρικού Κιτ",
    "bindings_use_consumable cola": "Χρησιμοποίηση Αναψυκτικού",
    "bindings_use_consumable tablets": "Χρησιμοποίηση Ταμπλέτων",
    bindings_cancel_action: "Ακύρωση ενέργειας",
    "bindings_+view_map": "Δες Χάρτη",
    bindings_toggle_map: "Εναλλαγή χάρτη πλήρους οθόνης",
    bindings_toggle_minimap: "Εναλλαγή Χάρτη",
    bindings_toggle_hud: "Βάλε HUD",
    "bindings_+emote_wheel": "Τροχός Συναισθημάτων",
    "bindings_+map_ping_wheel": "Switch to Map Ping",
    bindings_toggle_console: "Εναλλαγή Κονσόλας",
    bindings_toggle_slot_lock: "Toggle Slot Lock",
    kf_suicide_kill: "Ο/Η <player> αυτοκτόνησε",
    kf_suicide_down: "Ο/Η <player> έβγαλε νοκ άουτ τον ευατό του/της",
    kf_two_party_kill: "Ο/Η <player> σκότωσε τον/την <victim>",
    kf_two_party_down: "Ο/Η <player> έβγαλε νοκ άουτ τον/την <victim>",
    kf_bleed_out_kill: "Ο/Η <player> πέθανε από αιμορραγία",
    kf_bleed_out_down: "Ο/Η <player> μάτωσε μη-θανατηφόρα",
    kf_finished_off_kill: "Ο/Η <player> αποτελείωσε τον/την <victim>",
    kf_finished_off_down: "Ο/Η <player> αποτελείωσε αργά τον/την <victim>",
    kf_finally_died: "Ο/Η <player> τελικά απεβίωσε",
    kf_finally_ended_themselves: "Ο/Η <player> τελικά τελείωσε τον ευατό του/της",
    kf_finally_killed: "Ο/Η <player> τελικά σκοτώθηκε",
    kf_finally_down: "Ο/Η <player> τελικά βγήκε νοκ άουτ",
    kf_gas_kill: "Ο/Η <player> πέθανε από το τοξικό αέριο",
    kf_gas_down: "Ο/Η <player> βγήκε νοκ άουτ από το τοξικό αέριο",
    kf_airdrop_kill: "Ο/Η <player> πατήθηκε μοιραία από ρίψη αέρος",
    kf_airdrop_down: "Ο/Η <player> βγήκε νοκ άουτ από ρίψη αέρος",
    kf_kl_promotion: "Ο/Η <player> προάχθηκε ως αρχηγός των σκοτωμών!",
    kf_kl_killed: "Ο/Η <player> σκότωσε τον αρχηγό των σκοτωμών",
    kf_kl_dead: "Ο/Η Αρχηγός των σκοτωμών είναι νεκρός!",
    kf_kl_suicide: "Ο/Η Αρχηγός των σκοτωμών σκότωσε τον εαυτό του/της!",
    tt_restores: "<item> επαναφέρει <amount> <type>",
    tt_reduces: "<item> μειώνει την ζημιά κατά <percent>%",
    go_kills: "Σκοτωμοί:",
    go_damage_done: "Ζημιά που έκανες:",
    go_damage_taken: "Ζημιά που δέχτηκες:",
    go_time_alive: "Χρόνος ζωής:",
    create_team: "Φτιάξε Ομάδα",
    create_team_autofill: "Αυτόματη συμπλήρωση",
    create_team_lock: "Κλείδωμα Ομάδας",
    create_team_waiting: "Αναμονή...",
    create_team_play: "Ξεκίνα το παιχνίδι",
    report_reporting: "Αναφορά",
    report_id: "Αναγνωριστικό αναφοράς:",
    report_instructions: `
      <p><strong>Παρακαλώ ακολουθήστε τις παρακάτω οδηγίες!</strong> Εάν δεν το κάνετε, η αναφορά σας θα αγνοηθεί.</p>
      <h4>Πώς να υποβάλετε μια αναφορά</h4>
      <ol>
        <li>Μπείτε στον <a href="https://discord.suroi.io">διακομιστή Discord.</a></li>
        <li>Πηγαίνετε στο κανάλι <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports
            .</a></li>
        <li>Διαβάστε τις οδηγίες αναφοράς στην καρφιτσωμένη ανάρτηση.</li>
        <li>Υποβάλετε την αναφορά σας ως ανάρτηση.</li>
      </ol>`,
    languages: "Γλώσσες",
    gauze: "Γάζα",
    medikit: "Ιατρικό Κιτ",
    cola: "Αναψυκτικό",
    tablets: "Ταμπλέτες",
    basic_vest: "Βασικό Γιλέκο",
    regular_vest: "Κανονικό Γιλέκο",
    tactical_vest: "Γιλέκο Τακτικής",
    basic_helmet: "Βασικό Κράνος",
    regular_helmet: "Κανονικό Κράνος",
    tactical_helmet: "Τακτικό Κράνος",
    bag: "Τσάντα",
    basic_pack: "Βασικό Σακίδιο",
    regular_pack: "Κανονικό Σακίδιο",
    tactical_pack: "Τακτικό Σακίδιο",
    "1x_scope": "1x Πεδίο",
    "2x_scope": "2x Πεδίο",
    "4x_scope": "4x Πεδίο",
    "8x_scope": "8x Πεδίο",
    "15x_scope": "15x Πεδίο",
    fists: "Γροθιές",
    baseball_bat: "Ρόπαλο του μπέιζμπολ",
    hatchet: "Τσεκούρι",
    kbar: "K-bar",
    maul: "Βαρύ Σφυρί",
    gas_can: "Δοχείο Αερίου",
    heap_sword: "Σπαθί HE-AP",
    steelfang: "Ατσάλινοw Kυνόδοντας",
    ice_pick: "Ice Pick",
    seax: "Μεγάλο Μαχαίρι",
    mosin: "Μοσίν-Ναγκάντ",
    radio: "Ραδιόφωνο",
    lewis_gun: "Όπλο Λούις",
    deathray: "Ακτίνα Θανάτου",
    firework_launcher: "Εκτοξευτής Πυροτεχνημάτων",
    arena_closer: "Καταστροφέας Των Κόσμων",
    revitalizer: "Αναζωογονητικό",
    s_g17: "G17 (με διόπτρα)",
    frag_grenade: "Χειροβομβίδα",
    smoke_grenade: "Χειροβομβίδα Καπνού",
    confetti_grenade: "Χειροβομβίδα Κομφετί",
    dual_template: "Διπλό <gun>",
    region_dev: "Τοπικός Διακομιστής",
    region_na: "Βόρεια Αμερική",
    region_eu: "Ευρώπη",
    region_sa: "Νότια Αμερική",
    region_as: "Ασία"
}
  , Dn = {
    name: "Magyar",
    flag: "🇭🇺",
    msg_rotate: "A jobb élmény érdekében, forgasd el eszközödet fekvő módba.",
    msg_loading: "Csatlakozás",
    msg_err_joining: "Hiba a játékhoz csatlakozáskor.",
    msg_err_finding: "Hiba a játék kereséskor.",
    msg_try_again: "Próbálkozz újra!",
    msg_warning: "Figyelmeztetve lettél!",
    msg_warning_msg: "Kaptál egy figyelmeztetést a moderátoroktól emiatt: <reason>",
    msg_temp_ban: "Ideiglenesen ki lettél tiltva!",
    msg_temp_ban_msg: "Ki lettél tiltva emiatt: <reason>",
    msg_perma_ban: "Véglegesen ki lettél tiltva!",
    msg_perma_ban_msg: "Ki lettél tiltva emiatt: <reason>",
    msg_no_reason: "Nincs ok megadva.",
    play_solo: "Játék Egyedül",
    play_duo: "Játék Ketten",
    play_squad: "Játék Négyen",
    join_team: "Csatl. csapat.",
    msg_locked_tooltip: "A játek 24 óránként váltogat egyedüli, és kettes csapatonkénti mód között, mivel nincs elég játékos mindkét mód számára.",
    rules_and_tutorial: "Szabályok & Tutorial",
    news: "Újdonságok",
    loadout: "Felszerelés",
    settings: "Beállítások",
    fullscreen: "Teljes képernyő",
    resume: "Vissza",
    quit: "Kilépés",
    none: "Semmi",
    copy: "Másolás",
    health: "élet",
    adrenaline: "adrenalin",
    settings_volume: "Hangerő",
    settings_keybinds: "Bill. kiosztás",
    settings_graphics: "Grafika",
    settings_interface: "Interfész",
    settings_save_load: "Mentés/Betöltés",
    settings_mobile: "Mobil",
    settings_require_reload: "* Ezen beállítások megvátoztatása az oldal újratöltését igényli.",
    settings_performance_warning: "* Ez a beállítás problémákat okozhat bizonyos eszközökön. Tiltsd le, ha nem tudsz játékhoz csatlakozni.",
    settings_master_volume: "Fő hangerő",
    settings_sfx_volume: "Hangeffekt hangerő",
    settings_music_volume: "Zene hangerő",
    settings_old_menu_music: "Régi menü zene",
    settings_render_mode: "Render mód",
    settings_render_resolution: "Render felbontás",
    settings_render_resolution_auto: "Automatikus",
    settings_hires_textures: "Magas felbontású textúrák",
    settings_cooler_graphics: "Menőbb grafika",
    settings_antialias: "Anti-aliasing",
    settings_movement_smoothing: "Mozgás simítás",
    settings_responsive_rotation: "Reszponzív forgás",
    settings_camera_shake: "Kamera rázkódás",
    settings_interface_scale: "Interfész méret",
    settings_minimap_opacity: "Kistérkép átlátszatlanság",
    settings_fs_map_opacity: "Teljes képerny. térkép átlátszatlanság",
    settings_hide_minimap: "Kistérkép elrejtése",
    settings_blur_splash: "Splash screen elhomályosítása",
    settings_hide_rules: "Szabályok gomb elrejtése",
    settings_warn_before_leaving: "Figyelmeztetés bezárás előtt",
    settings_show_fps: "FPS megjelenítése",
    settings_show_ping: "Ping megjelenítése",
    settings_show_coordinates: "Koordináták megjelenítése",
    settings_anon_names: "Játékos nevek anonimizálása",
    settings_hide_emotes: "Emote-ok elrejtése",
    settings_text_killfeed: "Szöveg alapú killfeed",
    settings_colored_weapon_slots: "Színes fegyver slotok",
    settings_scope_looping: "Scope kiválasztás körbefordulással",
    settings_draw_hud: "HUD megjelenítése",
    settings_autopickup: "Autopickup engedélyzése",
    settings_autopickup_dual_guns: "Autopickup dupla fegyvereken",
    settings_load_settings: "Beállítások betöltése",
    settings_copy_settings: "Beállítások másolása vágólapra",
    settings_reset_settings: "Beállítások visszaállítása",
    settings_reload: "Újratöltés",
    settings_mobile_controls: "Mobil vezérlők engedélyezése",
    settings_joystick_size: "Joystick méret",
    settings_joystick_opacity: "Joystick átlátszatlanság",
    loadout_skins: "Kinézetek",
    loadout_emotes: "Emote-ok",
    loadout_crosshairs: "Célkeresztek",
    loadout_badges: "Badge-ek",
    loadout_special: "Speciális",
    loadout_crosshairs_default: "Rendszer alapértelmezett",
    loadout_crosshairs_size: "Méret:",
    loadout_crosshairs_color: "Szín:",
    loadout_crosshairs_stroke_size: "Kiemelés Mérete:",
    loadout_crosshairs_stroke_color: "Kiemelés Színe:",
    emotes_category_People: "Emberek",
    emotes_category_Text: "Szöveg",
    emotes_category_Memes: "Mémek",
    emotes_category_Icons: "Ikonok",
    emotes_category_Misc: "Egyéb",
    featured_youtubr: "Kiemelt Youtubr",
    featured_streamr: "Kiemelt Streamr",
    btn_report: "Jelentés",
    btn_spectate_kill_leader: "Kill Leader szemlélése",
    btn_spectate: "Szemlélés",
    btn_play_again: "Játék Újra",
    btn_menu: "Menü",
    msg_waiting_for_leader: "Várakozás leader-re",
    msg_you_died: "Meghaltál.",
    msg_player_died: "<player> meghalt.",
    msg_win: "Winner Winner Chicken Dinner!",
    msg_your_rank: "Rang",
    msg_kills: "Ölések: <kills>",
    gas_waiting: "Mérgező gáz szűkül <time> múlva",
    gas_advancing: "Mérgező gáz szűkül! Mozogj a biztonságos zónába",
    gas_inactive: "Várakozás játékosokra...",
    action_open_door: "Ajtó nyitása",
    action_close_door: "Ajtó zárása",
    action_revive: "<player> újraélesztése",
    action_cancel: "Megszakít",
    action_reloading: "Újratöltés...",
    action_reviving: "Újraélesztés...",
    action_being_revived: "Újraélesztenek...",
    action_gauze_use: "<item> alkalmazása",
    action_medikit_use: "<item> használása",
    action_cola_use: "<item> ivása",
    action_tablets_use: "<item> beszedése",
    interact_airdrop_crate_locked: "Airdrop kinyitása",
    interact_control_panel: "Kontroll Panel aktiválása",
    interact_generator: "Generátor aktiválása",
    interact_button: "Gomb megnyomása",
    loading_spritesheets: "Spritesheet-ek betöltése <progress>",
    loading_connecting: "Csatlakozás",
    loading_joining_game: "Csatlakozás játékhoz",
    loading_fetching_data: "Szerver adatok lekérése...",
    loading_finding_game: "Játék keresése",
    keybind_clear_tooltip: "Billentyű kiosztás eltávolításához nyomd meg a kiosztott billentyűt, majd az <kbd>Escape</kbd>-et vagy a <kbd>Backspace</kbd>-t",
    keybind_reset: "Visszaáll. az alapért.",
    "bindings_+up": "Mozgás felfelé",
    "bindings_+down": "Mozgás lefelé",
    "bindings_+left": "Mozgás balra",
    "bindings_+right": "Mozgás jobbra",
    bindings_interact: "Interakció",
    bindings_loot: "Tárgy-felvétel",
    "bindings_slot 0": "Elsődleges fegyver",
    "bindings_slot 1": "Másodlagos fegyver",
    "bindings_slot 2": "Közelharci fegyver",
    "bindings_equip_or_cycle_throwables 1": "Eldobható kiválaszt./váltogat.",
    bindings_last_item: "Utoljára használt fegyver",
    bindings_other_weapon: "Másik fegyver",
    bindings_swap_gun_slots: "Fegyver csere",
    "bindings_cycle_items -1": "Előző fegyver",
    "bindings_cycle_items 1": "Követkető fegyver",
    "bindings_+attack": "Fegyver használata",
    bindings_drop: "Aktív fegyver eldobása",
    bindings_reload: "Újratöltés",
    "bindings_cycle_scopes -1": "Előző scope",
    "bindings_cycle_scopes 1": "Következő scope",
    "bindings_use_consumable gauze": "Kötszer használ.",
    "bindings_use_consumable medikit": "Elsőseg. használ.",
    "bindings_use_consumable cola": "Kóla használ.",
    "bindings_use_consumable tablets": "Tabletta használ.",
    bindings_cancel_action: "Művelet félbeszak.",
    "bindings_+view_map": "Térkép megnyitása",
    bindings_toggle_map: "Teljes képernyős térkép vált.",
    bindings_toggle_minimap: "Kistérkép vált.",
    bindings_toggle_hud: "HUD vált.",
    "bindings_+emote_wheel": "Emote kerék",
    "bindings_+map_ping_wheel": "Térkép Pingre váltás",
    "bindings_+map_ping": "Térkép Ping kerék",
    bindings_toggle_console: "Konzol vált.",
    bindings_toggle_slot_lock: "Slot zárás vált.",
    kf_suicide_kill: "<player> öngyilkos lett",
    kf_suicide_down: "<player> kiütötte magát",
    kf_two_party_kill: "<player> megölte <victim>-t",
    kf_two_party_down: "<player> kiütötte <victim>-t",
    kf_bleed_out_kill: "<player> kivérzett",
    kf_bleed_out_down: "<player> kivérzett nem halálosan",
    kf_finished_off_kill: "<player> kivégezte <victim>-t",
    kf_finished_off_down: "<player> finoman kivégezte <victim>-t",
    kf_finally_died: "<player> végleg meghalt",
    kf_finally_ended_themselves: "<player> végleg megölte magát",
    kf_finally_killed: "<player>-t végleg megölték",
    kf_finally_down: "<player>-t végleg kiütötték",
    kf_gas_kill: "<player> meghalt a gáztól",
    kf_gas_down: "<player> kiütődött a gáztól",
    kf_airdrop_kill: "<player> végzetesen kilapult egy airdrop által",
    kf_airdrop_down: "<player> kiütődött egy airdrop által",
    kf_kl_promotion: "<player>-t Kill Leaderré léptették!",
    kf_kl_killed: "<player> megölte a Kill Leadert",
    kf_kl_dead: "A Kill Leader halott!",
    kf_kl_suicide: "A Kill Leader megölte magát!",
    tt_restores: "<item> visszatölt <amount> <type>-t",
    tt_reduces: "<item> <percent>%-kal csökkenti a sérülést",
    go_kills: "Ölések:",
    go_damage_done: "Okozott sebzés:",
    go_damage_taken: "Kapott sebzés:",
    go_time_alive: "Túlélt idő:",
    create_team: "Csapat készítése",
    create_team_autofill: "Auto. feltöltés",
    create_team_lock: "Csapat lezárása",
    create_team_waiting: "Várakozás...",
    create_team_play: "Játék indítása",
    report_reporting: "Jelentése:",
    report_id: "Jelentési azonosító:",
    report_instructions: `
      <p><strong>Kérlek kövesd az alábbi utasításokat!</strong> Ha nem teszed, a jelentésed figyelmen kívül lesz hagyva.</p>
      <h4>Hogyan kell Beküldeni egy Jelentést</h4>
      <ol>
        <li>Csatlakozz a <a href="https://discord.suroi.io">Discord szerverhez</a>!</li>
        <li>Menj a <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports
            csatornához</a>!</li>
        <li>Olvasd el a jelentési útmutatót a kitűzött posztban!</li>
        <li>Küldd be a jelentésedet posztként!</li>
      </ol>`,
    languages: "Nyelvek",
    gauze: "Fásli",
    medikit: "Elsősegély",
    cola: "Kóla",
    tablets: "Tabletták",
    basic_vest: "Alap mellény",
    regular_vest: "Normál mellény",
    tactical_vest: "Taktikus mellény",
    basic_helmet: "Alap sisak",
    regular_helmet: "Normál sisak",
    tactical_helmet: "Taktikus sisak",
    bag: "Zsák",
    basic_pack: "Alap hátizsák",
    regular_pack: "Normál hátizsák",
    tactical_pack: "Taktikus hátizsák",
    "1x_scope": "1x Scope",
    "2x_scope": "2x Scope",
    "4x_scope": "4x Scope",
    "8x_scope": "8x Scope",
    "15x_scope": "15x Scope",
    fists: "Kezek",
    baseball_bat: "Baseball ütő",
    hatchet: "Balta",
    kbar: "K-bar",
    maul: "Kalapács",
    gas_can: "Benzines kanna",
    heap_sword: "HE-AP kard",
    steelfang: "Steelfang",
    ice_pick: "Jégcsákány",
    seax: "Seax",
    sickle: "Sarló",
    crowbar: "Feszítővas",
    frag_grenade: "Repeszgránát",
    smoke_grenade: "Füstgránát",
    confetti_grenade: "Konfetti Gránát",
    radio: "Rádió",
    deathray: "Halálsugár",
    arena_closer: "Világok elpusztítója",
    firework_launcher: "Tüzijáték kilövő",
    revitalizer: "Revitalizáló",
    s_g17: "G17 (távcsővel)",
    dual_template: "Dupla <gun>",
    region_dev: "Helyi szerver",
    region_na: "Észak-Amerika",
    region_eu: "Európa",
    region_sa: "Dél-Amerika",
    region_as: "Ázsia"
}
  , zn = {
    name: "日本語",
    flag: "🇯🇵",
    msg_rotate: "より良い体験のために、デバイスを横向きに回転してください。",
    msg_loading: "接続中",
    msg_err_joining: "ゲームへの参加中にエラーが発生しました。",
    msg_err_finding: "ゲームが見つかりませんでした。",
    msg_try_again: "もう一度試してください。",
    msg_warning: "あなたは警告を受けました！",
    msg_warning_msg: "あなたは次の理由で警告されましたため: <reason>",
    msg_temp_ban: "あなたは一時的に禁止されました！",
    msg_temp_ban_msg: "あなたは次の理由で禁止されましたため: <reason>",
    msg_perma_ban: "あなたは永久に禁止されました！",
    msg_perma_ban_msg: "あなたは次の理由で禁止されましたため: <reason>",
    msg_no_reason: "理由は示さいませんでした。",
    play_solo: "ソロをする",
    play_duo: "デュオをする",
    play_squad: "分隊をする",
    join_team: "チームに参加",
    msg_locked_tooltip: "プレイヤー数が少ないですから、ゲームは毎日ソロとデュオの間で切り替わります。",
    rules_and_tutorial: "規則と学習用",
    news: "ニュース",
    loadout: "ロードアウト",
    settings: "設定",
    fullscreen: "全画面表示",
    resume: "再開",
    quit: "見切り",
    none: "なし",
    copy: "コピー",
    health: "健康",
    adrenaline: "アドレナリン",
    settings_volume: "音量",
    settings_keybinds: "キーバインド",
    settings_graphics: "グラフィックス",
    settings_interface: "インターフェース",
    settings_save_load: "保存/ロード",
    settings_mobile: "携帯",
    settings_require_reload: "* これを適用するにはリロードが必要です。",
    settings_performance_warning: "* この設定により、一部のデバイスで問題が発生する可能性があります。ゲームに参加できない場合は無効にしてください。",
    settings_master_volume: "マスターの音量",
    settings_sfx_volume: "効果音の音量",
    settings_music_volume: "音楽の音量",
    settings_old_menu_music: "古いメニュー音楽",
    settings_render_mode: "レンダリング モード",
    settings_render_resolution: "レンダリング解像度",
    settings_render_resolution_auto: "自動",
    settings_hires_textures: "高解像度テクスチャ",
    settings_cooler_graphics: "よりクールなグラフィック",
    settings_antialias: "アンチエイリアシング",
    settings_movement_smoothing: "動きのスムージング",
    settings_responsive_rotation: "レスポンシブ回転",
    settings_camera_shake: "カメラの揺れ",
    settings_interface_scale: "インターフェース スケール",
    settings_minimap_opacity: "ミニマップの不透明度",
    settings_fs_map_opacity: "フルスクリーン マップの不透明度",
    settings_hide_minimap: "ミニマップを非表示",
    settings_blur_splash: "スプラッシュ画面をぼかします",
    settings_hide_rules: "規則を隠すボタン",
    settings_warn_before_leaving: "離れる前に警告する",
    settings_show_fps: "FPSを表示する",
    settings_show_ping: "Ping を表示する",
    settings_show_coordinates: "座標を表示",
    settings_anon_names: "匿名プレイヤー名",
    settings_hide_emotes: "エモートを非表示",
    settings_text_killfeed: "テキストベースのキルフィード",
    settings_colored_weapon_slots: "色付き武器スロット",
    settings_scope_looping: "スコープ間を循環",
    settings_draw_hud: "HUDを描く",
    settings_autopickup: "自動ピックアップを有効にする",
    settings_autopickup_dual_guns: "デュアルガンを自動的に拾う",
    settings_load_settings: "設定をロードする",
    settings_copy_settings: "設定をクリップボードにコピー",
    settings_reset_settings: "設定をリセット",
    settings_reload: "リ読み込み",
    settings_mobile_controls: "モバイルコントロールの有効化",
    settings_joystick_size: "ジョイスティックの大きさ",
    settings_joystick_opacity: "ジョイスティックの透過性",
    loadout_skins: "スキン",
    loadout_emotes: "エモート",
    loadout_crosshairs: "クロスヘア",
    loadout_badges: "バッジ",
    loadout_special: "特別な",
    loadout_crosshairs_default: "システム初期設定",
    loadout_crosshairs_size: "大きさ:",
    loadout_crosshairs_color: "カラー:",
    loadout_crosshairs_stroke_size: "ボーダーのサイズ:",
    loadout_crosshairs_stroke_color: "ボーダーの色:",
    emotes_category_People: "人々",
    emotes_category_Text: "文章",
    emotes_category_Memes: "ミーム",
    emotes_category_Icons: "アイコン",
    emotes_category_Misc: "その他",
    featured_youtubr: "注目YouTubr",
    featured_streamr: "注目Streamr",
    btn_report: "報告",
    btn_spectate_kill_leader: "観戦キリーダー",
    btn_spectate: "観戦する",
    btn_play_again: "もう一度プレイ",
    btn_menu: "メニュー",
    msg_waiting_for_leader: "リーダーを待っています",
    msg_you_died: "あなたが死亡しました。",
    msg_player_died: "<player> が死亡しました。",
    msg_win: "勝った！勝った！夕飯はドン勝だ！！",
    msg_your_rank: "位",
    msg_kills: "キル: <kills>",
    gas_waiting: "有毒ガスは以下で進行しますに: <time>",
    gas_advancing: "有毒ガスが拡大中、 安全地帯へ逃げてください!",
    gas_inactive: "プレイヤーを待っています。",
    action_open_door: "ドアを開く",
    action_close_door: "ドアを閉じる",
    action_revive: "<player>を復活",
    action_cancel: "キャンセル",
    action_reloading: "リロードしています...",
    action_reviving: "復活ています...",
    action_being_revived: "復活ています...",
    action_gauze_use: "<item>を適用する",
    action_medikit_use: "<item>を使用する",
    action_cola_use: "<item>を飲みます",
    action_tablets_use: "<item>を摂取する",
    interact_airdrop_crate_locked: "空中を投下開い",
    interact_control_panel: "制御盤を活性化",
    interact_generator: "発生器を活性化",
    interact_button: "ボタンを押す",
    loading_spritesheets: "スプライトシートを読み込んでいます <progress>",
    loading_connecting: "接続中",
    loading_joining_game: "ゲームに参加しています...",
    loading_fetching_data: "サーバーデータを取得しています...",
    loading_finding_game: "ゲームを探しています...",
    keybind_clear_tooltip: "キーバインドを削除するには、キーバインドを押します。次に<kbd>Escape</kbd>または<kbd>Backspace</kbd>.",
    keybind_reset: "設定をリセット",
    "bindings_+up": "上に移動",
    "bindings_+down": "下に移動",
    "bindings_+left": "左に移動",
    "bindings_+right": "左に移動",
    bindings_interact: "交流する",
    bindings_loot: "戦利品",
    "bindings_slot 0": "プライマリを装備する",
    "bindings_slot 1": "セカンダリを装備する",
    "bindings_slot 2": "近接攻撃を装備する",
    "bindings_equip_or_cycle_throwables 1": "装備/サイクル投擲物",
    bindings_last_item: "最後の武器を装備する",
    bindings_other_weapon: "他の銃を装備する",
    bindings_swap_gun_slots: "ガンスロットを交換する",
    "bindings_cycle_items -1": "前の武器を装備する",
    "bindings_cycle_items 1": "次の武器を装備する",
    "bindings_+attack": "武器を使用する",
    bindings_drop: "アクティブな武器をドロップする",
    bindings_reload: "リロード",
    "bindings_cycle_scopes -1": "前のスコープ",
    "bindings_cycle_scopes 1": "次のスコープ",
    "bindings_use_consumable gauze": "ガーゼを使う",
    "bindings_use_consumable medikit": "メディキットを使う",
    "bindings_use_consumable cola": "コーラを使う",
    "bindings_use_consumable tablets": "錠剤を使う",
    bindings_cancel_action: "中止",
    "bindings_+view_map": "地図を見ます",
    bindings_toggle_map: "全画面マップの切り替え",
    bindings_toggle_minimap: "ミニマップの切り替え",
    bindings_toggle_hud: "HUDの切り替え",
    "bindings_+emote_wheel": "エモートホイール",
    "bindings_+map_ping_wheel": "マップピンに切り替える",
    "bindings_+map_ping": "マップピンホイール",
    bindings_toggle_console: "コンソールの切り替え",
    bindings_toggle_slot_lock: "スロットロックの切り替え",
    kf_suicide_kill: "<player> は自殺しました",
    kf_suicide_down: "<player> は自身を気絶しました",
    kf_two_party_kill: "<player> は倒しました <victim>",
    kf_two_party_down: "<player> は気絶しました <victim>",
    kf_bleed_out_kill: "<player> は出血しました",
    kf_bleed_out_down: "<player> は出血しました",
    kf_finished_off_kill: "<player> は倒しました <victim>",
    kf_finished_off_down: "<player> は倒しました <victim>",
    kf_finally_died: "<player> はついに死にました",
    kf_finally_ended_themselves: "<player> はついに自ら命を絶ちました",
    kf_finally_killed: "<player> はついに殺された",
    kf_finally_down: "<player> はついに気絶した",
    kf_gas_kill: "<player> は気絶しましたでガス",
    kf_gas_down: "<player> は死亡しましたでガス",
    kf_airdrop_kill: "<player> は空中投下によって致命的に潰されました",
    kf_airdrop_down: "<player> はエアドロップで気絶しました",
    kf_kl_promotion: "<player> はキルリーダーになりました!",
    kf_kl_killed: "<player> はキルリーダーがを殺した",
    kf_kl_dead: "キルリーダーが死亡しました!",
    kf_kl_suicide: "キルリーダーが自殺しました!",
    tt_restores: "<item>は次のように復元されます<amount> <type>",
    tt_reduces: "<item> これは減少します: <percent>% 損傷",
    go_kills: "キル:",
    go_damage_done: "与えたダメージ:",
    go_damage_taken: "受けたダメージ:",
    go_time_alive: "生き残った時間:",
    create_team: "チームを作",
    create_team_autofill: "オートフィル",
    create_team_lock: "チームを閉じる",
    create_team_waiting: "待っています...",
    create_team_play: "ゲームをスタート",
    report_reporting: "あなたは報告しています:",
    report_id: "報告ID:",
    report_instructions: `
      <p><strong>以下の手順に従ってください。</strong> そうしないと、レポートは無視されます。</p>
      <h4>レポートの提出方法</h4>
      <ol>
        <li><a href="https://discord.suroi.io">Discordサーバー</a>に参加します。</li>
        <li><a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheatr-reports
            チャンネル</a>に移動します。</li>
        <li>固定された投稿にあるレポートのガイドラインをお読みください。</li>
        <li>レポートを投稿として送信します。</li>
      </ol>`,
    languages: "言語",
    gauze: "ガーゼ",
    medikit: "医療キット",
    cola: "コーラ",
    tablets: "錠剤",
    basic_vest: "レベル1ベスト",
    regular_vest: "レベル2ベスト",
    tactical_vest: "レベル3ベスト",
    basic_helmet: "レベル1ヘルメット",
    regular_helmet: "レベル2ヘルメット",
    tactical_helmet: "レベル3ヘルメット",
    bag: "Bag",
    basic_pack: "レベル1パック",
    regular_pack: "レベル2パック",
    tactical_pack: "レベル3パック",
    "1x_scope": "1x 範囲",
    "2x_scope": "2x 範囲",
    "4x_scope": "4x 範囲",
    "8x_scope": "8x 範囲",
    "15x_scope": "15x 範囲",
    fists: "拳",
    baseball_bat: "野球用バット",
    hatchet: "ガソリン缶",
    kbar: "K-bar",
    maul: "つるはし",
    gas_can: "ガソリン缶",
    heap_sword: "HE-AP 剣",
    steelfang: "スティールファング",
    ice_pick: "氷のつるはし",
    seax: "ナイフ",
    mosin: "モシン・ナガン",
    radio: "無線",
    lewis_gun: "ルイス銃",
    deathray: "デスレイ",
    firework_launcher: "花火発射装置",
    arena_closer: "世界の破壊者",
    revitalizer: "リバイタライザー",
    s_g17: "G17 範囲指定",
    frag_grenade: "フラググレネード",
    smoke_grenade: "煙幕弾",
    confetti_grenade: "紙吹雪爆弾",
    dual_template: "二丁<gun>",
    region_dev: "ローカルホスト",
    region_na: "北アメリカ",
    region_eu: "ヨーロッパ",
    region_sa: "南アメリカ",
    region_as: "アジア"
}
  , En = {
    name: "Latviešu",
    flag: "🇱🇻",
    msg_rotate: "Labākai pieredzei, lūdzu, pagrieziet ierīci horizontāli.",
    msg_loading: "Savienojamies",
    msg_err_joining: "Kļūda, pievienojoties spēlei.",
    msg_err_finding: "Kļūda, meklējot spēli.",
    msg_try_again: "Lūdzu, mēģiniet vēlreiz.",
    msg_warning: "Jūs esat brīdināts!",
    msg_warning_msg: "Moderatori ir brīdinājuši jūs par iemeslu: <reason>",
    msg_temp_ban: "Jūs esat īslaicīgi bloķēts!",
    msg_temp_ban_msg: "Jūs esat bloķēts par iemeslu: <reason>",
    msg_perma_ban: "Jūs esat pastāvīgi bloķēts!",
    msg_perma_ban_msg: "Jūs esat bloķēts par iemeslu: <reason>",
    msg_no_reason: "Nav sniegts iemesls.",
    play_solo: "Spēlēt Solo",
    play_duo: "Spēlēt Duos",
    play_squad: "Spēlēt Squad",
    join_team: "Pievienoties komandai",
    msg_locked_tooltip: "Spēle mainās starp solo un duos ik pēc 24 stundām, jo nav pietiekami daudz spēlētāju abiem.",
    rules_and_tutorial: "Noteikumi un apmācība",
    news: "Jaunumi",
    loadout: "Aprīkojums",
    settings: "Iestatījumi",
    fullscreen: "Pilnekrāns",
    resume: "Atsākt",
    quit: "Beigt",
    none: "Nav",
    copy: "Kopēt",
    health: "veselība",
    adrenaline: "adrenalīns",
    settings_volume: "Skaļums",
    settings_keybinds: "Tastatūras saistīšana",
    settings_graphics: "Grafika",
    settings_interface: "Interfeiss",
    settings_save_load: "Saglabāt/Ielādēt",
    settings_mobile: "Mobilais",
    settings_require_reload: "* Mainot šos iestatījumus, ir nepieciešama lapas pārlādēšana",
    settings_performance_warning: "* Šis iestatījums var radīt problēmas dažās ierīcēs. Atspējojiet, ja nevarat pievienoties spēlei.",
    settings_master_volume: "Galvenais skaļums",
    settings_sfx_volume: "SFX skaļums",
    settings_music_volume: "Mūzikas skaļums",
    settings_old_menu_music: "Vecā izvēlnes mūzika",
    settings_render_mode: "Renderēšanas režīms",
    settings_render_resolution: "Renderēšanas izšķirtspēja",
    settings_render_resolution_auto: "Automātiski",
    settings_hires_textures: "Augstas izšķirtspējas tekstūras",
    settings_cooler_graphics: "Atsvaidzinošāka grafika",
    settings_antialias: "Antialiasings",
    settings_movement_smoothing: "Kustības izlīdzināšana",
    settings_responsive_rotation: "Atsaucīga rotācija",
    settings_camera_shake: "Kameras trīce",
    settings_interface_scale: "Interfeisa mērogs",
    settings_minimap_opacity: "Minikartes caurspīdīgums",
    settings_fs_map_opacity: "Pilnekrāna kartes caurspīdīgums",
    settings_hide_minimap: "Slēpt minikarti",
    settings_blur_splash: "Aizpludināt sākuma ekrānu",
    settings_hide_rules: "Slēpt noteikumu pogu",
    settings_warn_before_leaving: "Brīdināt pirms aiziešanas",
    settings_show_fps: "Rādīt FPS",
    settings_show_ping: "Rādīt ping",
    settings_show_coordinates: "Rādīt koordinātes",
    settings_anon_names: "Anonīmi spēlētāju vārdi",
    settings_hide_emotes: "Slēpt emocijas",
    settings_text_killfeed: "Teksta pamats nogalināšanas informācijai",
    settings_colored_weapon_slots: "Krāsoti ieroču sloti",
    settings_scope_looping: "Atkārtot skopu izvēli",
    settings_draw_hud: "Zīmēt HUD",
    settings_autopickup: "Iespējot automātisko pacelšanu",
    settings_autopickup_dual_guns: "Automātiski pacelt dubultos ieročus",
    settings_load_settings: "Ielādēt iestatījumus",
    settings_copy_settings: "Kopēt iestatījumus uz starpliktuvi",
    settings_reset_settings: "Atiestatīt iestatījumus",
    settings_reload: "Pārlādēt",
    settings_mobile_controls: "Iespējot mobilās vadības",
    settings_joystick_size: "Džoistiku izmērs",
    settings_joystick_opacity: "Džoistiku caurspīdīgums",
    loadout_skins: "Ādas",
    loadout_emotes: "Emocijas",
    loadout_crosshairs: "Mērķi",
    loadout_badges: "Nozīmītes",
    loadout_special: "Speciāls",
    loadout_crosshairs_default: "Sistēmas noklusējums",
    loadout_crosshairs_size: "Izmērs:",
    loadout_crosshairs_color: "Krāsa:",
    loadout_crosshairs_stroke_size: "Kontūras izmērs:",
    loadout_crosshairs_stroke_color: "Kontūras krāsa:",
    emotes_category_People: "Cilvēki",
    emotes_category_Text: "Teksts",
    emotes_category_Memes: "Memes",
    emotes_category_Icons: "Ikonas",
    emotes_category_Misc: "Dažādi",
    featured_youtubr: "Izceltais Youtubr",
    featured_streamr: "Izceltais Streamr",
    btn_report: "Ziņot",
    btn_spectate_kill_leader: "Vērot nogalināšanas līderi",
    btn_spectate: "Vērot",
    btn_play_again: "Spēlēt vēlreiz",
    btn_menu: "Izvēlne",
    msg_waiting_for_leader: "Gaida līderi",
    msg_you_died: "Jūs nomirāt.",
    msg_player_died: "<player> nomira.",
    msg_win: "Uzvarētājs! Jūs uzvarējāt!",
    msg_your_rank: "Rangs",
    msg_kills: "Nogalināti: <kills>",
    gas_waiting: "Toksiskās gāzes pārvietošanās pēc <time>",
    gas_advancing: "Toksiskā gāze tuvojas! Pārvietojieties uz drošo zonu",
    gas_inactive: "Gaida spēlētājus...",
    action_open_door: "Atvērt durvis",
    action_close_door: "Aizvērt durvis",
    action_revive: "Atdzīvināt <player>",
    action_cancel: "Atcelt",
    action_reloading: "Pārlādē...",
    action_reviving: "Atdzīvina...",
    action_being_revived: "Tiek atdzīvināts...",
    action_gauze_use: "Uzklāj <item>",
    action_medikit_use: "Izmanto <item>",
    action_cola_use: "Dzer <item>",
    action_tablets_use: "Lieto <item>",
    interact_airdrop_crate_locked: "Atvērt Gaisa kravu",
    interact_control_panel: "Aktivizēt vadības paneli",
    interact_generator: "Aktivizēt ģeneratoru",
    interact_button: "Nospiediet pogu",
    loading_spritesheets: "Ielādē Spritesheets <progress>",
    loading_connecting: "Savienojamies",
    loading_joining_game: "Pievienojas spēlei",
    loading_fetching_data: "Datu iegūšana no servera...",
    loading_finding_game: "Meklē spēli",
    keybind_clear_tooltip: "Lai noņemtu tastatūras saistīšanu, nospiediet taustiņu un pēc tam nospiediet <kbd>Escape</kbd> vai <kbd>Backspace</kbd>.",
    keybind_reset: "Atiestatīt uz noklusējumiem",
    "bindings_+up": "Pārvietoties uz augšu",
    "bindings_+down": "Pārvietoties uz leju",
    "bindings_+left": "Pārvietoties pa kreisi",
    "bindings_+right": "Pārvietoties pa labi",
    bindings_interact: "Mijiedarboties",
    bindings_loot: "Laupīt",
    "bindings_slot 0": "Izvēlēties primāro",
    "bindings_slot 1": "Izvēlēties sekundāro",
    "bindings_slot 2": "Izvēlēties tuvcīņas ieroci",
    "bindings_equip_or_cycle_throwables 1": "Izvēlēties/Apgrozīt metamos",
    bindings_last_item: "Izvēlēties pēdējo ieroci",
    bindings_other_weapon: "Izvēlēties citu ieroci",
    bindings_swap_gun_slots: "Mainīt ieroču slotus",
    "bindings_cycle_items -1": "Izvēlēties iepriekšējo ieroci",
    "bindings_cycle_items 1": "Izvēlēties nākamo ieroci",
    "bindings_+attack": "Lietot ieroci",
    bindings_drop: "Nomest aktīvo ieroci",
    bindings_reload: "Pārlādēt",
    "bindings_cycle_scopes -1": "Iepriekšējais skops",
    "bindings_cycle_scopes 1": "Nākamais skops",
    "bindings_use_consumable gauze": "Lietot marli",
    "bindings_use_consumable medikit": "Lietot medikamentu",
    "bindings_use_consumable cola": "Dzert kolu",
    "bindings_use_consumable tablets": "Lietot tabletes",
    bindings_cancel_action: "Atcelt darbību",
    "bindings_+view_map": "Skatīt karti",
    bindings_toggle_map: "Pārslēgt pilnekrāna karti",
    bindings_toggle_minimap: "Pārslēgt minikarti",
    bindings_toggle_hud: "Pārslēgt HUD",
    "bindings_+emote_wheel": "Emociju ritenis",
    "bindings_+map_ping_wheel": "Pārslēgt uz kartes ping",
    "bindings_+map_ping": "Karte ping ritenis",
    bindings_toggle_console: "Pārslēgt konsoli",
    bindings_toggle_slot_lock: "Pārslēgt slotu bloķēšanu",
    kf_suicide_kill: "<player> izdarīja pašnāvību",
    kf_suicide_down: "<player> sevi nokautēja",
    kf_two_party_kill: "<player> nogalināja <victim>",
    kf_two_party_down: "<player> nokautēja <victim>",
    kf_bleed_out_kill: "<player> izsīkuma rezultātā nomira",
    kf_bleed_out_down: "<player> izsīka neletāli",
    kf_finished_off_kill: "<player> pabeidza <victim>",
    kf_finished_off_down: "<player> maigi pabeidza <victim>",
    kf_finally_died: "<player> beidzot nomira",
    kf_finally_ended_themselves: "<player> beidzot sevi beidza",
    kf_finally_killed: "<player> beidzot tika nogalināts",
    kf_finally_down: "<player> beidzot tika nokautēts",
    kf_gas_kill: "<player> nomira no gāzes",
    kf_gas_down: "<player> tika nokautēts no gāzes",
    kf_airdrop_kill: "<player> fatāli tika saspiests ar gaisa kravu",
    kf_airdrop_down: "<player> tika nokautēts ar gaisa kravu",
    kf_kl_promotion: "<player> ir paaugstināts uz nogalināšanas līderi!",
    kf_kl_killed: "<player> nogalināja nogalināšanas līderi",
    kf_kl_dead: "Nogalināšanas līderis ir miris!",
    kf_kl_suicide: "Nogalināšanas līderis izdarīja pašnāvību!",
    tt_restores: "<item> atjauno <amount> <type>",
    tt_reduces: "<item> samazina <percent>% bojājumu",
    go_kills: "Nogalināti:",
    go_damage_done: "Radīti bojājumi:",
    go_damage_taken: "Saņemti bojājumi:",
    go_time_alive: "Dzīvības laiks:",
    create_team: "Izveidot komandu",
    create_team_autofill: "Automātiskā aizpilde",
    create_team_lock: "Bloķēt komandu",
    create_team_waiting: "Gaida...",
    create_team_play: "Sākt spēli",
    report_reporting: "Ziņojam",
    report_id: "Ziņojuma ID:",
    report_instructions: `
      <p><strong>Lūdzu, izpildiet norādījumus zemāk!</strong> Ja to nedarīsiet, jūsu ziņojums tiks ignorēts.</p>
      <h4>Kā iesniegt ziņojumu</h4>
      <ol>
        <li>Pievienojieties <a href="https://discord.suroi.io">Discord serverim.</a></li>
        <li>Ieejiet <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports kanālā.</a></li>
        <li>Izlasiet ziņošanas vadlīnijas piestiprinātajā ziņojumā.</li>
        <li>Iesniedziet savu ziņojumu kā ierakstu.</li>
      </ol>`,
    languages: "Valodas",
    gauze: "Marle",
    medikit: "Medikaments",
    cola: "Kola",
    tablets: "Tabletes",
    basic_vest: "Pamata veste",
    regular_vest: "Parasta veste",
    tactical_vest: "Taktiskā veste",
    basic_helmet: "Pamats ķivere",
    regular_helmet: "Parasta ķivere",
    tactical_helmet: "Taktiskā ķivere",
    bag: "Soma",
    basic_pack: "Pamats somiņa",
    regular_pack: "Parasta somiņa",
    tactical_pack: "Taktiskā somiņa",
    "1x_scope": "1x Tēmēklis",
    "2x_scope": "2x Tēmēklis",
    "4x_scope": "4x Tēmēklis",
    "8x_scope": "8x Tēmēklis",
    "15x_scope": "15x Tēmēklis",
    fists: "Dūres",
    baseball_bat: "Beisbola nūja",
    hatchet: "Cirvis",
    kbar: "K-bar nazis",
    maul: "Kluča āmurs",
    gas_can: "Gāzes kanna",
    heap_sword: "HE-AP zobens",
    steelfang: "Tērauda zobens",
    ice_pick: "Ledus cērte",
    seax: "Seax nazis",
    crowbar: "Lauznis",
    sickle: "Sirpis",
    radio: "Radio",
    deathray: "Nāves stariņš",
    frag_grenade: "Fragmentācijas granāta",
    smoke_grenade: "Dūmu granāta",
    confetti_grenade: "Konfeti granāta",
    dual_template: "Dubult <gun>",
    region_dev: "Lokālais serveris",
    region_na: "Ziemeļamerika",
    region_eu: "Eiropa",
    region_sa: "Dienvidamerika",
    region_as: "Āzija"
}
  , Ln = {
    name: "lietuvių",
    flag: "🇱🇹",
    msg_rotate: "Geriau patirti pasukus į peizažo režimą.",
    msg_loading: "Jungiamasi",
    msg_err_joining: "Klaida jungiantis prie žaidimo.",
    msg_err_finding: "Klaida ieškant žaidimo.",
    msg_try_again: "Pabandykite dar kartą.",
    msg_warning: "Jūs buvote įspėti!",
    msg_warning_msg: "Moderatoriai jums suteikė įspėjimą dėl priežasties: <reason>",
    msg_temp_ban: "Laikinai uždrausta prisijungti!",
    msg_temp_ban_msg: "Jūs esate užblokuotas dėl priežasties: <reason>",
    msg_perma_ban: "Amžinai uždrausta prisijungti!",
    msg_perma_ban_msg: "Jūs esate užblokuotas dėl priežasties: <reason>",
    msg_no_reason: "Nenurodyta priežastis.",
    play_solo: "Žaisti vienam",
    play_duo: "Žaisti dviese",
    play_squad: "Žaisti komandoje",
    join_team: "Prisijunkite prie komandos",
    msg_locked_tooltip: "Žaidimas kas 24 valandas keičiasi tarp vienas ir dvejų žaidėjų dėl nepakankamo žaidėjų skaičiaus.",
    rules_and_tutorial: "Taisyklės ir pamokos",
    news: "Naujienos",
    loadout: "Įranga",
    settings: "Nustatymai",
    fullscreen: "Visas ekranas",
    resume: "Tęsti",
    quit: "Išeiti",
    none: "Nieko",
    copy: "Kopijuoti",
    health: "sveikata",
    adrenaline: "adrenalinas",
    settings_volume: "Garso lygis",
    settings_keybinds: "Klavišų susiejimai",
    settings_graphics: "Grafika",
    settings_interface: "Sąsaja",
    settings_save_load: "Išsaugoti/Ikrauti",
    settings_mobile: "Mobili",
    settings_require_reload: "* Norint pakeisti šiuos nustatymus, reikia perkrauti puslapį",
    settings_performance_warning: "* Šis nustatymas gali sukelti problemų kai kuriuose įrenginiuose. Išjunkite, jei negalite prisijungti prie žaidimo.",
    settings_master_volume: "Pagrindinis garso lygis",
    settings_sfx_volume: "SFX garso lygis",
    settings_music_volume: "Muzikos garso lygis",
    settings_old_menu_music: "Senasis meniu muzika",
    settings_render_mode: "Vaizdo režimas",
    settings_render_resolution: "Vaizdo raiška",
    settings_render_resolution_auto: "Automatinis",
    settings_hires_textures: "Aukštos raiškos tekstūros",
    settings_cooler_graphics: "Patrauklesnė grafika",
    settings_antialias: "Antialiazavimas",
    settings_movement_smoothing: "Judesio lyginimas",
    settings_responsive_rotation: "Reaguojantis sukimas",
    settings_camera_shake: "Kameros sudrebėjimas",
    settings_interface_scale: "Sąsajos mastelis",
    settings_minimap_opacity: "Minižemėlapio permatomumas",
    settings_fs_map_opacity: "Viso ekrano žemėlapio permatomumas",
    settings_hide_minimap: "Slėpti minižemėlapį",
    settings_blur_splash: "Išblukęs pradinis ekranas",
    settings_hide_rules: "Slėpti taisyklių mygtuką",
    settings_warn_before_leaving: "Įspėti prieš išeinant",
    settings_show_fps: "Rodyti FPS",
    settings_show_ping: "Rodyti pingą",
    settings_show_coordinates: "Rodyti koordinates",
    settings_anon_names: "Anoniminiai žaidėjų vardai",
    settings_hide_emotes: "Slėpti emocijas",
    settings_text_killfeed: "Teksto pagrindis ataskaitos šaukštas",
    settings_colored_weapon_slots: "Spalvoti ginklų laukai",
    settings_scope_looping: "Ciklinis taikiklio pasirinkimas",
    settings_draw_hud: "Piešti HUD",
    settings_autopickup: "Įgalinti automatinį surinkimą",
    settings_autopickup_dual_guns: "Automatinis dvigubų ginklų surinkimas",
    settings_load_settings: "Įkelti nustatymus",
    settings_copy_settings: "Nukopijuoti nustatymus į iškarpinę",
    settings_reset_settings: "Atkurti nustatymus",
    settings_reload: "Perkrauti",
    settings_mobile_controls: "Įgalinti mobilius valdiklius",
    settings_joystick_size: "Valdiklio dydis",
    settings_joystick_opacity: "Valdiklio permatomumas",
    loadout_skins: "Odos",
    loadout_emotes: "Emocijos",
    loadout_crosshairs: "Taikikliai",
    loadout_badges: "Ženklai",
    loadout_special: "Specialūs",
    loadout_crosshairs_default: "Sistemos numatytasis",
    loadout_crosshairs_size: "Dydis:",
    loadout_crosshairs_color: "Spalva:",
    loadout_crosshairs_stroke_size: "Storinys:",
    loadout_crosshairs_stroke_color: "Storinio spalva:",
    emotes_category_People: "Žmonės",
    emotes_category_Text: "Tekstas",
    emotes_category_Memes: "Memos",
    emotes_category_Icons: "Piktogramos",
    emotes_category_Misc: "Įvairūs",
    featured_youtubr: "Išskirtinis YouTuber",
    featured_streamr: "Išskirtinis transliuotojas",
    btn_report: "Pranešti",
    btn_spectate_kill_leader: "Stebėti žudiko lyderį",
    btn_spectate: "Stebėti",
    btn_play_again: "Žaisti dar kartą",
    btn_menu: "Meniu",
    msg_waiting_for_leader: "Laukiama lyderio",
    msg_you_died: "Jūs mirėte.",
    msg_player_died: "<player> mirė.",
    msg_win: "Nugalėtojas, Nugalėtojas, Vištienos vakarienė!",
    msg_your_rank: "Rangas",
    msg_kills: "Nužudymai: <kills>",
    gas_waiting: "Nuodingas dujas juda per <time>",
    gas_advancing: "Nuodingos dujos juda! Pereikite į saugią zoną",
    gas_inactive: "Laukiama žaidėjų...",
    action_open_door: "Atidaryti duris",
    action_close_door: "Uždaryti duris",
    action_revive: "Atgaivinti <player>",
    action_cancel: "Atšaukti",
    action_reloading: "Įkraunama...",
    action_reviving: "Atgaivinama...",
    action_being_revived: "Būna atgaivintas...",
    action_gauze_use: "Taikomas <item>",
    action_medikit_use: "Naudoti <item>",
    action_cola_use: "Gerti <item>",
    action_tablets_use: "Vartoti <item>",
    interact_airdrop_crate_locked: "Atidaryti oro lašo dėžę",
    interact_control_panel: "Aktyvuoti kontrolės skydelį",
    interact_generator: "Aktyvuoti generatorių",
    interact_button: "Paspausti mygtuką",
    loading_spritesheets: "Įkeliami sprites lapai <progress>",
    loading_connecting: "Jungiamasi",
    loading_joining_game: "Jungiamasi prie žaidimo",
    loading_fetching_data: "Gaunama serverio informacija...",
    loading_finding_game: "Ieškoma žaidimo",
    keybind_clear_tooltip: "Norėdami pašalinti klavišų priskyrimą, paspauskite klavišą ir tada paspauskite <kbd>Escape</kbd> arba <kbd>Backspace</kbd>.",
    keybind_reset: "Atstatyti į numatytuosius nustatymus",
    "bindings_+up": "Judėti į viršų",
    "bindings_+down": "Judėti į apačią",
    "bindings_+left": "Judėti į kairę",
    "bindings_+right": "Judėti į dešinę",
    bindings_interact: "Sąveika",
    bindings_loot: "Grožis",
    "bindings_slot 0": "Įrengti pagrindinį",
    "bindings_slot 1": "Įrengti antrinį",
    "bindings_slot 2": "Įrengti melee",
    "bindings_equip_or_cycle_throwables 1": "Įrengti/Ciklinis mestuvas",
    bindings_last_item: "Įrengti paskutinį ginklą",
    bindings_other_weapon: "Įrengti kitą ginklą",
    bindings_swap_gun_slots: "Keisti ginklų lizdus",
    "bindings_cycle_items -1": "Įrengti ankstesnį ginklą",
    "bindings_cycle_items 1": "Įrengti kitą ginklą",
    "bindings_+attack": "Naudoti ginklą",
    bindings_drop: "Išmesti aktyvų ginklą",
    bindings_reload: "Įkrauti",
    "bindings_cycle_scopes -1": "Ankstesnis taikiklis",
    "bindings_cycle_scopes 1": "Kitas taikiklis",
    "bindings_use_consumable gauze": "Naudoti gipsą",
    "bindings_use_consumable medikit": "Naudoti Medikit",
    "bindings_use_consumable cola": "Naudoti Cola",
    "bindings_use_consumable tablets": "Naudoti tablets",
    bindings_cancel_action: "Atšaukti veiksmą",
    "bindings_+view_map": "Peržiūrėti žemėlapį",
    bindings_toggle_map: "Perjungti viso ekrano žemėlapį",
    bindings_toggle_minimap: "Perjungti minižemėlapį",
    bindings_toggle_hud: "Perjungti HUD",
    "bindings_+emote_wheel": "Emocijų ratas",
    "bindings_+map_ping_wheel": "Perjungti į žemėlapio žymeklį",
    "bindings_+map_ping": "Žemėlapio žymeklio ratas",
    bindings_toggle_console: "Perjungti konsolę",
    bindings_toggle_slot_lock: "Perjungti lizdo užraktą",
    kf_suicide_kill: "<player> įvykė savižudybę",
    kf_suicide_down: "<player> pati save išgabeno",
    kf_two_party_kill: "<player> nužudė <victim>",
    kf_two_party_down: "<player> išgabeno <victim>",
    kf_bleed_out_kill: "<player> iškrito",
    kf_bleed_out_down: "<player> išgabeno be mirties",
    kf_finished_off_kill: "<player> galutinai nugalėjo <victim>",
    kf_finished_off_down: "<player> švelniai galutinai nugalėjo <victim>",
    kf_finally_died: "<player> galiausiai numirė",
    kf_finally_ended_themselves: "<player> galiausiai save nužudė",
    kf_finally_killed: "<player> buvo galiausiai nužudytas",
    kf_finally_down: "<player> buvo galiausiai išgabentas",
    kf_gas_kill: "<player> mirė nuo dujų",
    kf_gas_down: "<player> buvo išgabentas nuo dujų",
    kf_airdrop_kill: "<player> buvo mirtinai sutraiškytas oro nusileidimo metu",
    kf_airdrop_down: "<player> buvo išgabentas oro nusileidimo metu",
    kf_kl_promotion: "<player> yra pakeltas iki Žudiko lyderio!",
    kf_kl_killed: "<player> nužudė Žudiko lyderį",
    kf_kl_dead: "Žudiko lyderis mirė!",
    kf_kl_suicide: "Žudiko lyderis nužudė save!",
    tt_restores: "<item> atkuria <amount> <type>",
    tt_reduces: "<item> sumažina <percent>% žalą",
    go_kills: "Nužudymai:",
    go_damage_done: "Padaryta žala:",
    go_damage_taken: "Patirta žala:",
    go_time_alive: "Gyvavimo laikas:",
    create_team: "Sukurti komandą",
    create_team_autofill: "Automatinis užpildymas",
    create_team_lock: "Užrakinti komandą",
    create_team_waiting: "Laukiama...",
    create_team_play: "Pradėti žaidimą",
    report_reporting: "Pranešimas",
    report_id: "Pranešimo ID:",
    report_instructions: `
      <p><strong>Prašome laikytis žemiau pateiktų nurodymų!</strong> Jei jūs to nepadarysite, jūsų pranešimas bus ignoruojamas.</p>
      <h4>Kaip pateikti pranešimą</h4>
      <ol>
        <li>Prisijunkite prie <a href="https://discord.suroi.io">Discord serverio.</a></li>
        <li>Eikite į <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports
            kanalą.</a></li>
        <li>Perskaitykite pritvirtintą pranešimo gaires.</li>
        <li>Pateikite savo pranešimą kaip pranešimą.</li>
      </ol>`,
    languages: "Kalbos",
    gauze: "Gipsas",
    medikit: "Medikit",
    cola: "Cola",
    tablets: "Tablets",
    basic_vest: "Paprastas liemenėlis",
    regular_vest: "Įprastas liemenėlis",
    tactical_vest: "Taktinis liemenėlis",
    basic_helmet: "Paprastas šalmas",
    regular_helmet: "Įprastas šalmas",
    tactical_helmet: "Taktinis šalmas",
    bag: "Kuprinė",
    basic_pack: "Paprastas maišas",
    regular_pack: "Įprastas maišas",
    tactical_pack: "Taktinis maišas",
    "1x_scope": "1x taikiklis",
    "2x_scope": "2x taikiklis",
    "4x_scope": "4x taikiklis",
    "8x_scope": "8x taikiklis",
    "15x_scope": "15x taikiklis",
    fists: "Kumščiai",
    baseball_bat: "Beisbolo lazda",
    hatchet: "Kirvis",
    kbar: "K-bar",
    maul: "Mušis",
    gas_can: "Dujų talpa",
    heap_sword: "HE-AP kardas",
    steelfang: "Plieninė raganos",
    ice_pick: "Ledinės ištrynimo peilis",
    seax: "Seax",
    crowbar: "Kablys",
    sickle: "Sickle",
    radio: "Radijas",
    deathray: "Mirties spindulys",
    frag_grenade: "Fragmentavimo granata",
    smoke_grenade: "Dūmų granata",
    confetti_grenade: "Konfeti granata",
    dual_template: "Dual <gun>",
    region_dev: "Lokalini serveris",
    region_na: "Šiaurės Amerika",
    region_eu: "Europa",
    region_sa: "Pietų Amerika",
    region_as: "Azija"
}
  , On = {
    name: "Русский",
    flag: "🇷🇺",
    msg_rotate: "Для наилучшего процесса, переверните свое устройство.",
    msg_loading: "Подключение",
    msg_err_joining: "Ошибка при заходе в игру.",
    msg_err_finding: "Ошибка при поиске игры.",
    msg_try_again: "Пожалуйста, попробуйте еще раз.",
    msg_warning: "Вы были предупреждены!",
    msg_warning_msg: "Вы получили предупреждение по причине: <reason>",
    msg_temp_ban: "Вы были временно заблокированы!",
    msg_temp_ban_msg: "Вас заблокировали по причине: <reason>",
    msg_perma_ban: "Вы были перманентно заблокированы!",
    msg_perma_ban_msg: "Вас заблокировали по причине: <reason>",
    msg_no_reason: "Никакой причины не предоставлено.",
    play_solo: "Одиночный",
    play_duo: "Напарники",
    play_squad: "Отряд",
    join_team: "Присоединиться к группе",
    msg_locked_tooltip: "Режим игры переключается между Напарниками и Одиночным каждые 24 часа, потому-что недостаточно игроков для игры в оба режима.",
    rules_and_tutorial: "Правила&Обучение",
    news: "Новости",
    loadout: "Снаряга",
    settings: "Настройки",
    fullscreen: "Полноэкранный режим",
    resume: "Продолжить",
    quit: "Выйти",
    none: "Никакой",
    copy: "Копировать",
    health: "здоровья",
    adrenaline: "адреналина",
    settings_volume: "Громкость",
    settings_keybinds: "Управление",
    settings_graphics: "Графика",
    settings_interface: "Интерфейс",
    settings_save_load: "Сохранение/Загрузка",
    settings_mobile: "Мобильные устройства",
    settings_require_reload: "* Смена этих настроек требует перезагрузки страницы.",
    settings_performance_warning: "* Эта настройка может вызвать некоторые проблемы на определенных устройствах. Отключите, если не получается зайти в игру.",
    settings_master_volume: "Общая громкость",
    settings_sfx_volume: "Громкость звуков",
    settings_music_volume: "Громкость музыки",
    settings_old_menu_music: "Старая музыка в Лобби",
    settings_render_mode: "Режим рендера",
    settings_render_resolution: "Разрешение рендера",
    settings_render_resolution_auto: "Авто",
    settings_hires_textures: "Текстуры высокого разрешения",
    settings_cooler_graphics: "Графика, только лучше",
    settings_antialias: "Сглаживание",
    settings_movement_smoothing: "Сглаживание движений в матче",
    settings_responsive_rotation: "Отзывчивые движения мышью",
    settings_camera_shake: "Тряска экрана",
    settings_interface_scale: "Размер интерфейса",
    settings_minimap_opacity: "Прозрачность миникарты",
    settings_fs_map_opacity: "Прозрачность полноэкранной карты",
    settings_hide_minimap: "Скрыть миникарту",
    settings_blur_splash: "Размытие деталей интерфейса",
    settings_hide_rules: "Скрыть кнопку с Правилами",
    settings_warn_before_leaving: "Предупреждение перед выходом из Матча",
    settings_show_fps: "Показать FPS",
    settings_show_ping: "Показать пинг",
    settings_show_coordinates: "Показать координаты",
    settings_anon_names: "Анонимные имена игроков",
    settings_hide_emotes: "Скрыть эмоции",
    settings_text_killfeed: "Интерфейс с убийствами, основанный на тексте",
    settings_colored_weapon_slots: "Раскрашенные в цвет калибра слоты с оружием",
    settings_scope_looping: "Зацикленное переключение прицелов",
    settings_draw_hud: "Показать HUD",
    settings_autopickup: "Включить авто-подбор",
    settings_autopickup_dual_guns: "Авто-подбор второго короткоствольного оружия",
    settings_load_settings: "Загрузить настройки",
    settings_copy_settings: "Скопировать настройки в буфер",
    settings_reset_settings: "Сбросить настройки",
    settings_reload: "Перезарядка",
    settings_mobile_controls: "Включить мобильные настройки",
    settings_joystick_size: "Размер джойстика",
    settings_joystick_opacity: "Прозрачность джойстика",
    loadout_skins: "Скины",
    loadout_emotes: "Эмоции",
    loadout_crosshairs: "Прицелы",
    loadout_badges: "Значки",
    loadout_special: "Дополнительное",
    loadout_crosshairs_default: "Обычный прицел игры",
    loadout_crosshairs_size: "Размер:",
    loadout_crosshairs_color: "Цвет:",
    loadout_crosshairs_stroke_size: "Размер обводки:",
    loadout_crosshairs_stroke_color: "Цвет обводки:",
    emotes_category_People: "Лица",
    emotes_category_Text: "Текст",
    emotes_category_Memes: "Мемы",
    emotes_category_Icons: "Логотипы",
    emotes_category_Misc: "Разное",
    featured_youtubr: "Рекомендованный Ютубер",
    featured_streamr: "Рекомендованный Стример",
    btn_report: "Репорт/Жалоба",
    btn_spectate_kill_leader: "Наблюдать за лидером по убийствам",
    btn_spectate: "Наблюдать",
    btn_play_again: "Сыграть снова",
    btn_menu: "Выйти",
    msg_waiting_for_leader: "Ожидание лидера",
    msg_you_died: "Вы померли.",
    msg_player_died: "<player> помер.",
    msg_win: "Победа победа время обеда!",
    msg_your_rank: "Ранг",
    msg_kills: "Количество убийств: <kills>",
    gas_waiting: "Токсичный газ будет сужаться через <time>!",
    gas_advancing: "Токсичный газ приближается! Быстрее бегите к безопасной зоне.",
    gas_inactive: "Ожидание игроков...",
    action_open_door: "Открыть дверь",
    action_close_door: "Закрыть дверь",
    action_revive: "Поднять <player>",
    action_cancel: "Отмена",
    action_reloading: "Перезарядка...",
    action_reviving: "Оживление...",
    action_being_revived: "Оживляется...",
    action_gauze_use: "Вы перевязываетесь",
    action_medikit_use: "Вы используете аптечку",
    action_cola_use: "Вы пьете колу",
    action_tablets_use: "Вы выпиваете пару таблеток",
    interact_airdrop_crate_locked: "Открыть груз",
    interact_control_panel: "Активировать панель",
    interact_generator: "Включить генератор",
    interact_button: "Нажать кнопку",
    loading_spritesheets: "Загрузка ассетов <progress>",
    loading_connecting: "Подключение",
    loading_joining_game: "Присоединение к игре",
    loading_fetching_data: "Получение данных с сервера...",
    loading_finding_game: "Поиск игры",
    keybind_clear_tooltip: "Чтобы убрать горячую клавишу, нажмите <kbd>Escape</kbd> или <kbd>Backspace</kbd>.",
    keybind_reset: "Сброс настроек",
    "bindings_+up": "Движение вверх",
    "bindings_+down": "Движение вниз",
    "bindings_+left": "Движение влево",
    "bindings_+right": "Движение вправо",
    bindings_interact: "Взаимодействие",
    bindings_loot: "Взять предмет",
    "bindings_slot 0": "Вскинуть основное оружие",
    "bindings_slot 1": "Вскинуть вторичное оружие",
    "bindings_slot 2": "Достать холодное оружие",
    "bindings_equip_or_cycle_throwables 1": "Взять/Выбрать гранату",
    bindings_last_item: "Достать последнее оружие",
    bindings_other_weapon: "Вскинуть другое оружие",
    bindings_swap_gun_slots: "Поменять оружие местами",
    "bindings_cycle_items -1": "Достать прошлое оружие",
    "bindings_cycle_items 1": "Достать следующее оружие",
    "bindings_+attack": "Выстрелить/Ударить",
    bindings_drop: "Выкинуть оружие в руках",
    bindings_reload: "Перезарядка",
    "bindings_cycle_scopes -1": "Прошлый прицел",
    "bindings_cycle_scopes 1": "Следующий прицел",
    "bindings_use_consumable gauze": "Использовать повязку",
    "bindings_use_consumable medikit": "Использовать аптечку",
    "bindings_use_consumable cola": "Выпить колу",
    "bindings_use_consumable tablets": "Съесть таблеток",
    bindings_cancel_action: "Отмена",
    "bindings_+view_map": "Открыть карту",
    bindings_toggle_map: "Выключить/Включить полную карту",
    bindings_toggle_minimap: "Выключить/Включить мини-карту",
    bindings_toggle_hud: "Выключить/Включить Интерфейс",
    "bindings_+emote_wheel": "Колесо эмоций",
    "bindings_+map_ping_wheel": "Удерживать, чтобы переключиться на колесо меток",
    "bindings_+map_ping": "Колесо меток",
    bindings_toggle_console: "Выключить/Включить консоль",
    bindings_toggle_slot_lock: "Выключить/Включить блокировку слота ",
    kf_suicide_kill: "<player> совершил суицид",
    kf_suicide_down: "<player> сбил с ног сам себя",
    kf_two_party_kill: "<player> убил <victim>",
    kf_two_party_down: "<player> сбил с ног <victim>",
    kf_bleed_out_kill: "<player> истек кровью",
    kf_bleed_out_down: "<player истек кровью, но не потерял сознание",
    kf_finally_died: "<player> наконец-то умер",
    kf_finally_ended_themselves: "<player> наконец-то покончил с собой",
    kf_finally_killed: "<player> был наконец-то убит",
    kf_finally_down: "<player> был наконец-то сбит с ног",
    kf_gas_kill: "<player> жалостливо умер в газе",
    kf_gas_down: "<player> сбился с ног в газу",
    kf_airdrop_kill: "<player> раздавило воздушным грузом",
    kf_airdrop_down: "<player> сбит с ног от воздушного груза",
    kf_kl_promotion: "<player> стал лидером по убийствам!",
    kf_kl_killed: "<player> убил лидера по убийствам",
    kf_kl_dead: "Лидер по убийствам умер, какая досада!",
    kf_kl_suicide: "Лидер по убийствам покончил с собой!",
    kf_you_killed: "Вы убили <player>",
    kf_you_downed: "Вы повалили на землю <player>",
    tt_restores: "<item> восстанавливает <amount> <type>",
    tt_reduces: "<item> уменьшает <percent>% входящего урона",
    go_kills: "Убийства:",
    go_damage_done: "Урона нанесено:",
    go_damage_taken: "Урона принятно:",
    go_time_alive: "Всего вы прожили:",
    create_team: "Создать группу",
    create_team_autofill: "Авто-заполнение группы",
    create_team_lock: "Отключить возможность захода в группу",
    create_team_waiting: "Ожидание...",
    create_team_play: "Начать игру",
    report_reporting: "Оформление репорта на",
    report_id: "ID репорта:",
    report_instructions: `
    <p><strong>Пожалуйста, следуйте инструкциям!</strong> Если вы не будете, то ваш репорт останется незамеченным.</p>
    <h4>Как опубликовать репорт</h4>
    <ol>
      <li>Присоединитесь к <a href="https://discord.suroi.io">Discord server.</a></li>
      <li>Зайдите в <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports
          channel.</a></li>
      <li>Прочитайте инструкцию в закрепленном сообщении.</li>
      <li>Оставьте ваш репорт как пост в канале.</li>
    </ol>`,
    languages: "Языки",
    gauze: "Повязка",
    medikit: "Аптечка",
    cola: "Кола",
    tablets: "Таблетки",
    basic_vest: "Арамидный бронежилет",
    regular_vest: "Бронежилет с плитами",
    tactical_vest: "Тактический бронежилет",
    basic_helmet: "Шлем-каска",
    regular_helmet: "Военный шлем",
    tactical_helmet: "Тактический шлем",
    bag: "Мешок",
    basic_pack: "Обычный рюкзак",
    regular_pack: "Охотничий рюкзак",
    tactical_pack: "Тактический рюкзак",
    "1x_scope": "Без прицела",
    "2x_scope": "2x Оптика",
    "4x_scope": "4x Оптика",
    "8x_scope": "8x Оптика",
    "15x_scope": "15x Оптика",
    fists: "Кулаки",
    baseball_bat: "Бейсбольная бита",
    hatchet: "Топор",
    kbar: "Боевой нож",
    maul: "Кувалда",
    gas_can: "Канистра",
    heap_sword: "HE-AP Меч",
    steelfang: "Крутой керамбит",
    ice_pick: "Ледоруб",
    seax: "Пиратский меч",
    radio: "Рация",
    deathray: "Луч смерти",
    frag_grenade: "Осколочная граната",
    smoke_grenade: "Дымовая граната",
    confetti_grenade: "Граната с конфетти",
    dual_template: "Двойные <gun>",
    region_dev: "Локальный сервер",
    region_na: "Северная Америка",
    region_eu: "Европа",
    region_sa: "Южная Америка",
    region_as: "Азия",
    vss: 'ВСС "Винторез"',
    pp19: 'ПП-19 "Витязь"',
    vepr12: 'Вепрь-12 "Молот"',
    mosin: "Винтовка Мосина-Нагана",
    flues: "Обрез двустволки",
    m1895: "Револьвер Наган",
    lewis_gun: "Пулемет Льюиса",
    ak47: "Автомат Калашникова"
}
  , Bn = {
    name: "தமிழ்",
    flag: "🇮🇳",
    msg_rotate: "நல்ல அனுபவத்திற்கு கருவியை கிடைமட்டமாக திருப்பவும்.",
    msg_loading: "தொடர்பு கொல்கிறது",
    msg_err_joining: "விளையாட்டில் சேர முடியவில்லை.",
    msg_err_finding: "விளையாட்டை கண்டுபிடிக்க இயலவில்லை.",
    msg_try_again: "மருபடியும் முயர்சிக்கவும்.",
    msg_warning: "நீங்கள் எச்சரிக்கப்பட்டிருக்கிறீர்!",
    msg_warning_msg: "நிர்வாகிகள் உன்னை எச்சரித்துள்ளனர். காரணம்: <reason>",
    msg_temp_ban: "நீ தற்காலிகமாய் தடை செய்யப்பட்டுள்ளீர்!",
    msg_temp_ban_msg: "நீ தடை செய்யப்பட்டுள்ளாய்! காரணம்: <reason>",
    msg_perma_ban: "நீ வாழ்நால் முழுவதும் தடை செய்யப்பட்டுள்ளாய்!",
    msg_perma_ban_msg: "நீ தடை செய்யப்பட்டுள்ளாய். காரணம்: <reason>",
    msg_no_reason: "காரணம் கொடுக்கவில்லை.",
    play_solo: "ஒற்றைவீரராக விளையாடு",
    play_duo: "இரட்டைவீரராக விளையாடு",
    play_squad: "நான்குவீரராக விளையாடு",
    join_team: "குழுமத்தில் சேர்",
    msg_locked_tooltip: "இவ்விளையாட்டு ஒவ்வொரு 24 மனிநேரமும் ஒற்றைவீரர் மற்றும் இரட்டைவீரர் நடுவில் மாறும். எனென்றால் நிறைய வீரர்கள் அல்ல.",
    rules_and_tutorial: "விதிமுறைகள் & பயிற்சி",
    loadout: "அணிகலன்கள்",
    settings: "அமைப்புகள்",
    fullscreen: "முழுதிரை",
    resume: "தொடரு",
    quit: "வெளியேறு",
    none: "அல்ல",
    copy: "நகலெடு",
    health: "உடல்நிலை",
    adrenaline: "சக்தி",
    settings_volume: "சத்த அளவு",
    settings_keybinds: "விசைபினைப்புகள்",
    settings_graphics: "கிராஃபிக்ஸ்",
    settings_interface: "இன்டர்ஃபேஸ்",
    settings_save_load: "பதிவிறக்கு/பதிவேற்று",
    settings_mobile: "அலைபேசி",
    settings_require_reload: "* இந்த அமைப்புகளை மாற்றினால் ரீலோட் செய்யவேண்டும்",
    settings_performance_warning: "* இந்த அமைப்பு சில கருவிகளிள் பிரச்சனைகளை ஏர்படுத்தலாம். விளையாட முடியவில்லை என்றால் அனைக்கவும்.",
    settings_master_volume: "சத்த அளவு",
    settings_sfx_volume: "SFX சத்த அளவு",
    settings_music_volume: "பாட்டு சத்த அளவு",
    settings_old_menu_music: "பழைய மெனு பாட்டு",
    settings_render_mode: "ரென்டர் மோட்",
    settings_render_resolution: "ரென்டர் ரெஸல்யூஷன்",
    settings_render_resolution_auto: "தானியங்கி",
    settings_hires_textures: "அதிக ரெஸல்யூஷன் படங்கள்",
    settings_cooler_graphics: "மேம்பட்ட கிராஃபிக்ஸ்",
    settings_antialias: "விளையாட்டு அனுபவத்தை மேம்படுத்து",
    settings_movement_smoothing: "மேம்படுத்திய இயக்கம்",
    settings_responsive_rotation: "மேம்படுத்திய திருப்பம்",
    settings_camera_shake: "கேமரா ஷேக்",
    settings_interface_scale: "இன்டர்ஃபேஸ் அளவுகோல்",
    settings_minimap_opacity: "சிறிய வரைபடத்தின் மறைப்புதன்மை",
    settings_fs_map_opacity: "முழுதிறை வரைபட மறைப்புதன்மை",
    settings_hide_minimap: "சிறிய வரைபடத்தை மறைக்கவும்",
    settings_blur_splash: "மங்கலான ஸ்ப்லாஷ் ஸ்க்ரீன்",
    settings_hide_rules: "விதிமுறை பட்டனை மறைக்கவும்",
    settings_warn_before_leaving: "வெளியேருவதன்முன் எச்சரிக்கவும்",
    settings_show_fps: "FPSஐ காட்டு",
    settings_show_ping: "pingஐ காட்டு",
    settings_show_coordinates: "இடத்தை காட்டு",
    settings_anon_names: "மற்ற வீரரின் பெயரை மாற்று",
    settings_hide_emotes: "உணர்ச்சிகளை மறைக்கவும்",
    settings_text_killfeed: "எழுத்து சார்ந்த கொலை குறியீடு",
    settings_colored_weapon_slots: "வண்ணமான ஆயுதகாட்டி",
    settings_scope_looping: "உருப்பெருக்கான தேர்ந்தெடுத்தலை Loop செய்யவும் ",
    settings_draw_hud: "HUDஐ வரையவும்",
    settings_autopickup: "தானாக பொருட்களை எடுக்க",
    settings_autopickup_dual_guns: "இரட்டை துப்பாக்கிகளை தானாக எடுக்க",
    settings_load_settings: "அமைப்புகளை பதிவேற்றவும்",
    settings_copy_settings: "அமைப்புகளை நகலெடுக்கவும்",
    settings_reset_settings: "அமைப்புகளை மீட்டமைக்கவும்",
    settings_reload: "ரீலோட்",
    settings_mobile_controls: "அலைபேசி கட்டுப்பாடுகள்",
    settings_joystick_size: "ஜாய்ஸ்டிக் அளவு",
    settings_joystick_opacity: "ஜாய்ஸ்டிக் வெளிப்படைதன்மை",
    loadout_skins: "ஆடைகள்",
    loadout_emotes: "உணர்ச்சிகள்",
    loadout_crosshairs: "சுட்டிகள்",
    loadout_badges: "பதக்கங்கள்",
    loadout_special: "சிறப்பானது",
    loadout_crosshairs_default: "கருவியுடன் வந்தது",
    loadout_crosshairs_size: "அளவு:",
    loadout_crosshairs_color: "வண்ணம்:",
    loadout_crosshairs_stroke_size: "எல்லை-கோடு அளவு:",
    loadout_crosshairs_stroke_color: "எல்லை-கோடு வண்ணம்:",
    emotes_category_People: "மனிதர்கள்",
    emotes_category_Text: "எழுத்துகள்",
    emotes_category_Memes: "மீம்ஸுகள் (மொக்க)",
    emotes_category_Icons: "படங்கள்",
    emotes_category_Misc: "மேலும்",
    featured_youtubr: "சிறந்த Youtubr",
    featured_streamr: "சிறந்த Streamr",
    btn_report: "புகாரளி",
    btn_spectate_kill_leader: "கொலை முன்னனியை பார்வையிடு",
    btn_spectate: "பார்வையிடு",
    btn_play_again: "மருபடியும் விளையாடு",
    btn_menu: "மெனு பக்கம்",
    msg_waiting_for_leader: "முன்னனிக்காக காத்திறு",
    msg_you_died: "நீ செத்தாய்.",
    msg_player_died: "<player> செத்தார்.",
    msg_win: "வெற்றி வெற்றி சிக்கன் விருந்து!",
    msg_your_rank: "தரவரிசை",
    msg_kills: "கொலைகள்: <kills>",
    gas_waiting: "கொடிய வாயு <time>இல் முன்னேரும்",
    gas_advancing: "கொடிய வாயு முன்னேருகிறது! பாதுகாப்பான பகுதிகளுக்கு செல்!",
    gas_inactive: "வீரர்களுக்காக காத்திறுக்கிறது...",
    action_open_door: "கதவை திர",
    action_close_door: "கதவை மூடு",
    action_revive: "<player>ஐ காப்பாற்று",
    action_cancel: "நிறுத்து",
    action_reloading: "ரீலோட் ...",
    action_reviving: "காப்பிற்றுகிறாய்...",
    action_being_revived: "காப்பாற்றப்படுகிறாய்...",
    action_gauze_use: "<item> கட்டப்படுகிறது",
    action_medikit_use: "<item> பயன்படுத்தபடுகிறது",
    action_cola_use: "<item> குடிக்கப்படுகிறது",
    action_tablets_use: "<item> முழுங்கபடுகிறது",
    loading_spritesheets: "Spritesheet பதிவிறக்கப்படுகிறது: <progress>",
    loading_connecting: "தொடர்பு கொள்கிறது",
    loading_joining_game: "விளையாட்டிள் சேர்கிறது",
    loading_fetching_data: "சர்வர் விவரங்கள் பதிவிறக்கப்படுகின்றன...",
    loading_finding_game: "விளையாட்டை தேடுகிறது",
    keybind_clear_tooltip: "ஒரு விசைபினைப்பை அகற்ற, அந்த விசைபினைப்பு பட்டனை அழுத்திய பிறகு இவ்விரண்டில் ஒன்றை அழுத்தவும்:<kbd>Escape</kbd> அல்லது <kbd>Backspace</kbd>.",
    keybind_reset: "நிலைத்த பினைப்புகளுக்கு மீட்டமைக்க",
    "bindings_+up": "மேலே நகர",
    "bindings_+down": "கீழே நகர",
    "bindings_+left": "இடதுபுறம் நகர",
    "bindings_+right": "வலதுபுறம் நகரt",
    bindings_interact: "இயக்க",
    bindings_loot: "எடுக்க",
    "bindings_slot 0": "முதலாவதை பயன்படுத்த",
    "bindings_slot 1": "இரண்டாவதை பயன்படுத்த",
    "bindings_slot 2": "கையாயுதத்தை பயன்படுத்த",
    "bindings_equip_or_cycle_throwables 1": "Equip/Cycle Throwable",
    bindings_last_item: "அன்மை ஆயுதத்தை பயன்படுத்த",
    bindings_other_weapon: "மற்ற துப்பாக்கியை பயன்படுத்த",
    bindings_swap_gun_slots: "துப்பாக்கி இடமாற்ற",
    "bindings_cycle_items -1": "முந்திய ஆயுதத்தை பயன்படுத்த",
    "bindings_cycle_items 1": "அடுத்த ஆயுதத்தை பயன்படுத்த",
    "bindings_+attack": "ஆயுதத்தை இயக்க",
    bindings_drop: "வைத்திறுக்கும் ஆயுதத்தை போட",
    bindings_reload: "ரீலோட் செய்ய",
    "bindings_cycle_scopes -1": "முந்திய உருப்பெருக்கான்",
    "bindings_cycle_scopes 1": "அடுத்த உருப்பெருக்கான்",
    "bindings_use_consumable gauze": "கட்டுகளை கட்ட",
    "bindings_use_consumable medikit": "மருந்துபெட்டியை பயன்படுத்த",
    "bindings_use_consumable cola": "கோலாவை குடிக்க",
    "bindings_use_consumable tablets": "மாத்திறைகளை முழுங்க",
    bindings_cancel_action: "செயலை நிறுத்த",
    "bindings_+view_map": "களத்தை பாற்க்க",
    bindings_toggle_map: "முழுதிரை வரைபடத்தை காண்பிக்க/ மறைக்க",
    bindings_toggle_minimap: "சிறிய வரைபடம் காண்பிக்க/ மறைக்க",
    bindings_toggle_hud: "HUD காண்பிக்க/ மறைக்க",
    "bindings_+emote_wheel": "உணர்ச்சி சக்கரம்",
    "bindings_+map_ping_wheel": "கள குறியீடுக்கு மாற",
    "bindings_+map_ping": "கள குறியீடு சக்கரம்",
    bindings_toggle_console: "Console காண்பிக்கவும்",
    bindings_toggle_slot_lock: "ஸ்லாட் பூட்டு",
    kf_suicide_kill: "<player> தற்கொலை செய்துகொண்டார்",
    kf_suicide_down: "<player> தன்னைதானே செயலிழக்க செய்தார்",
    kf_two_party_kill: "<player> <victim>-ஐ கொலை செய்தார்",
    kf_two_party_down: "<player> <victim>-ஐ செயலிழக்க செய்தார்",
    kf_bleed_out_kill: "<player> இரத்தம் இழந்து செத்தார்",
    kf_bleed_out_down: "<player> இரத்தம் இழந்தார்",
    kf_finished_off_kill: "<player> <victim>-ஐ முடித்தார்",
    kf_finished_off_down: "<player> கருனையுடன் <victim>-ஐ முடித்தார்",
    kf_finally_died: "<player> இருதியில் செத்தார்",
    kf_finally_ended_themselves: "<player> இருதியில் தற்கொலை செய்தார்",
    kf_finally_killed: "<player> இருதியில் கொல்லப்பட்டார்",
    kf_finally_down: "<player> ஒருவழியாக செயலிழந்தார்",
    kf_gas_kill: "<player> கொடிய வாயுவினால் செத்தார்",
    kf_gas_down: "<player> கொடிய வாயுவினால் செயலிழந்தார்",
    kf_airdrop_kill: "<player> கருனையில்லாமல் காற்றுபெட்டியால் செத்தார்",
    kf_airdrop_down: "<player> காற்றுபெட்டியால் செயலிழந்தார்",
    tt_restores: "<item> <amount>ஐ திருப்பி தரும் <type>",
    tt_reduces: "<item> <percent>% சேதத்தை குறைக்கும்",
    go_kills: "கொலைகள்:",
    go_damage_done: "செய்த சேதம்:",
    go_damage_taken: "எடுத்த சேதம்:",
    go_time_alive: "உயிருடன் இருந்த நேரம்:",
    create_team: "குழுமத்தை உருவாக்கு",
    create_team_autofill: "தானாக செலுத்து",
    create_team_lock: "குழுமத்தை பூட்டு",
    create_team_play: "விளையாட்டை ஆரம்பி",
    report_reporting: "Reporting",
    report_id: "புகார் என்:",
    report_instructions: `
      <p><strong>இங்குள்ள குறியீடுகளை நங்கு கவனிக்கவும். </strong>அல்லது, உன்னுடயை புகார் நிறாகறிக்கபடும்.</p>
      <h4>புகாரளிப்பது எப்படி</h4>
      <ol>
        <li><a href="https://discord.suroi.io">Discord.</a> சர்வரில் சேரவும்</li>
        <li><a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports</a> சானலிற்கு செல்லவும்</li>
        <li>அங்குள்ள முதன்மையான பதிப்பிளுள்ள புகார் விதிமுறைகளை நன்கு படிக்கவும்.</li>
        <li>உன் புகாரை அங்கு பதிப்பாக செலுத்தவும்.</li>
      </ol>`,
    languages: "மொழிகள்",
    gauze: "கட்டுகள்",
    medikit: "மருந்துபெட்டி",
    cola: "கோலா",
    tablets: "மாத்திரைகள்",
    fists: "கைகள்",
    baseball_bat: "மட்டை",
    hatchet: "கோடாரி",
    kbar: "கே-பார்",
    maul: "மால்",
    gas_can: "வாயு கொள்கலன்",
    heap_sword: "HE-AP வாள்",
    steelfang: "ஸ்டீல்ஃபேன்கு",
    ice_pick: "பனி கோடாரி",
    seax: "ஸியக்ஸ்",
    radio: "வானொலி",
    deathray: "கொடிய கதிர்",
    dual_template: "இரட்டை <gun>",
    region_dev: "உங்கள் வீட்டு சர்வர்",
    region_na: "வட அமேரிக்கா",
    region_eu: "ஐரோப்பா",
    region_sa: "தென் அமேரிக்கா",
    region_as: "ஆசியா"
}
  , Vn = {
    name: "Turkısh",
    flag: "🇹🇷",
    msg_rotate: "Daha iyi bir deneyim için, lütfen cihazınızı yatay konuma döndürün.",
    msg_loading: "Bağlanılıyor",
    msg_err_joining: "Oyuna katılma hatası.",
    msg_err_finding: "Oyun bulma hatası.",
    msg_try_again: "Lütfen yeniden deneyin.",
    msg_warning: "Uyarıldın!",
    msg_warning_msg: "Moderatörler tarafından bir sebepten dolayı uyarı aldınız: <reason>",
    msg_temp_ban: "Geçici olarak yasaklandınız!",
    msg_temp_ban_msg: "Şu sebeple yasaklandınız: <reason>",
    msg_perma_ban: "Kalıcı olarak yasaklandın!",
    msg_perma_ban_msg: "Nedeniyle yasaklandınız: <reason>",
    msg_no_reason: "Herhangi bir neden belirtilmedi.",
    play_solo: "Tekli Oyna",
    play_duo: "İkili Oyna",
    play_squad: "Takımlı Oyna",
    join_team: "Takıma Katıl",
    msg_locked_tooltip: "Oyun her 24 saatte bir tekli ve ikili arasında geçiş yapar, çünkü ikisine de yetecek kadar oyuncu yok.",
    rules_and_tutorial: "Kurallar ve Eğitim",
    news: "Haberler",
    loadout: "Ekipman",
    settings: "Ayarlar",
    fullscreen: "Tam Ekran",
    resume: "Devam Et",
    quit: "Çık",
    none: "Hiçbiri",
    copy: "Kopyala",
    health: "Can",
    adrenaline: "Adrenalin",
    settings_volume: "Ses",
    settings_keybinds: "Tuş Takımları",
    settings_graphics: "Grafikler",
    settings_interface: "Arayüz",
    settings_save_load: "Kaydet/Yükle",
    settings_mobile: "Mobil",
    settings_require_reload: "* Bu ayarların değiştirilmesi sayfanın yeniden yüklenmesini gerektirir.",
    settings_performance_warning: "* Bu ayar bazı cihazlarda sorunlara neden olabilir. Oyuna katılamıyorsanız devre dışı bırakın.",
    settings_master_volume: "Ana Ses",
    settings_sfx_volume: "Özel Efekt Sesi",
    settings_music_volume: "Müzik Sesi",
    settings_old_menu_music: "Eski Menü Müziği",
    settings_render_mode: "İşleme modu",
    settings_render_resolution: "İşleme çözünürlüğü",
    settings_render_resolution_auto: "Otomatik",
    settings_hires_textures: "Yüksek çözünürlüklü dokular",
    settings_cooler_graphics: "Daha havalı grafikler",
    settings_antialias: "Kenar yumuşatma",
    settings_movement_smoothing: "Hareket yumuşatma",
    settings_responsive_rotation: "Duyarlı rotasyon",
    settings_camera_shake: "Kamera sallanması",
    settings_interface_scale: "Arayüz ölçeği",
    settings_minimap_opacity: "Mini harita opaklığı",
    settings_fs_map_opacity: "Tam ekran harita opaklığı",
    settings_hide_minimap: "Mini haritayı gizle",
    settings_blur_splash: "Açılış ekranını bulanıklaştır",
    settings_hide_rules: "Kuralları gizle düğmesi",
    settings_warn_before_leaving: "Ayrılmadan önce uyar",
    settings_show_fps: "FPS'yi göster",
    settings_show_ping: "Pingi göster",
    settings_show_coordinates: "Kordinatları göster",
    settings_anon_names: "Oyuncu isimlerini anonimleştir",
    settings_hide_emotes: "İfadeleri gizle",
    settings_text_killfeed: "Metin tabanlı öldürme tablosu",
    settings_colored_weapon_slots: "Renkli silah yuvaları",
    settings_scope_looping: "Dürbün döngüsü seçimi",
    settings_draw_hud: "HUD'u çiz",
    settings_autopickup: "Otomatik toplamayı aç",
    settings_autopickup_dual_guns: "Çift silahları otomatik al",
    settings_load_settings: "Ayarları yükle",
    settings_copy_settings: "Ayarları panoya kopyala",
    settings_reset_settings: "Ayarları Sıfırla",
    settings_reload: "Tekrar yükle",
    settings_mobile_controls: "Mobil kontrolleri etkinleştir",
    settings_joystick_size: "Kumanda kolu boyutu",
    settings_joystick_opacity: "Kumanda kolu opaklığı",
    loadout_skins: "Kostümler",
    loadout_emotes: "İfadeler",
    loadout_crosshairs: "Nişangahlar",
    loadout_badges: "Rozetler",
    loadout_special: "Özel",
    loadout_crosshairs_default: "Sistem varsayılanı",
    loadout_crosshairs_size: "Boyut:",
    loadout_crosshairs_color: "Renk:",
    loadout_crosshairs_stroke_size: "Kontur Boyutu:",
    loadout_crosshairs_stroke_color: "Kontur Rengi:",
    emotes_category_People: "İnsanlar",
    emotes_category_Text: "Metin",
    emotes_category_Memes: "Mizah",
    emotes_category_Icons: "Simgeler",
    emotes_category_Misc: "Çeşitli",
    featured_youtubr: "Öne Çıkan Youtuber",
    featured_streamr: "Öne Çıkan Yayıncı",
    btn_report: "Raporla",
    btn_spectate_kill_leader: "Seyirci Öldürme Lideri",
    btn_spectate: "Seyirci",
    btn_play_again: "Tekrar oyna",
    btn_menu: "Menü",
    msg_waiting_for_leader: "Lider bekleniyor",
    msg_you_died: "Öldün.",
    msg_player_died: "<player> öldü.",
    msg_win: "Winner Winner Chicken Dinner!",
    msg_your_rank: "Rütbe",
    msg_kills: "Öldürmeler: <kills>",
    gas_waiting: " <time> sonra toksik gaz geliyor!",
    gas_advancing: "Zehirli gaz ilerliyor! Güvenli bölgeye gidin!",
    gas_inactive: "Oyuncular bekleniyor...",
    action_open_door: "Kapıyı aç",
    action_close_door: "Kapıyı kapa",
    action_revive: " <player>'ı hayata döndür",
    action_cancel: "İptal et",
    action_reloading: "Yeniden dolduruluyor...",
    action_reviving: "Hayata döndürülüyor...",
    action_being_revived: "Hayata döndürülüyorsun...",
    action_gauze_use: "<item> Kullanılıyor",
    action_medikit_use: "<item> Kullanılıyor",
    action_cola_use: "<item> İçiliyor",
    action_tablets_use: "<item> Kullanılıyor",
    interact_airdrop_crate_locked: "Hava Yardımını Aç",
    interact_control_panel: "Kontrol Panelini Aktive Et",
    interact_generator: "Jeneratörü Aktive Et",
    interact_button: "Butona Bas",
    loading_spritesheets: "Model Sayfaları Yükleniyor <progress>",
    loading_connecting: "Bağlanılıyor",
    loading_joining_game: "Oyuna Katılınıyor",
    loading_fetching_data: "Sunucu Verileri Alınıyor...",
    loading_finding_game: "Oyun Bulunuyor",
    keybind_clear_tooltip: "Bir tuş bağlantısını kaldırmak için tuş bağlantısına basın ve ardından <kbd>Escape</kbd> veya <kbd>Geri</kbd> tuşuna basın.",
    keybind_reset: "Varsayılanlara dön",
    "bindings_+up": "Yukarı Git",
    "bindings_+down": "Aşağı Git",
    "bindings_+left": "Sola Git",
    "bindings_+right": "Sağa Git",
    bindings_interact: "Etkileşime Geç",
    bindings_loot: "Yağmala",
    "bindings_slot 0": "Birincili Kuşan",
    "bindings_slot 1": "İkincili Kuşan ",
    "bindings_slot 2": "Yakın Dövüş Silahını Kuşan",
    "bindings_equip_or_cycle_throwables 1": "Fırlatılabilir Kuşan",
    bindings_last_item: "Son Silahı Kuşan",
    bindings_other_weapon: "Diğer Silahı Kuşan",
    bindings_swap_gun_slots: "Silah Yuvalarını Değiştir",
    "bindings_cycle_items -1": "Önceki Silahı Kuşan",
    "bindings_cycle_items 1": "Sıradaki Silahı Kuşan",
    "bindings_+attack": "Ateş et",
    bindings_drop: "Elindeki Silahı At",
    bindings_reload: "Yeniden Doldur",
    "bindings_cycle_scopes -1": "Önceki Dürbün",
    "bindings_cycle_scopes 1": "Sıradaki Dürbün",
    "bindings_use_consumable gauze": "Bandaj Kullan",
    "bindings_use_consumable medikit": "İlk Yardım Çantası Kullan",
    "bindings_use_consumable cola": "Kola Kullan",
    "bindings_use_consumable tablets": "Hap Kullan",
    bindings_cancel_action: "Eylemi İptal Et",
    "bindings_+view_map": "Haritayı Göster",
    bindings_toggle_map: "Tam Ekran Haritayı Değiştir",
    bindings_toggle_minimap: "Mini Haritayı Değiştir",
    bindings_toggle_hud: "HUD'u değiştir",
    "bindings_+emote_wheel": "İfade Çarkı",
    "bindings_+map_ping_wheel": "Harita Ping'e geç",
    "bindings_+map_ping": "Harita Ping Çarkı",
    bindings_toggle_console: "Konsolu Değiştir",
    bindings_toggle_slot_lock: "Yuva Kilidini Değiştir",
    kf_suicide_kill: "<player> intihar etti",
    kf_suicide_down: "<player> kendini bayılttı",
    kf_two_party_kill: "<player> öldürdü <victim>",
    kf_two_party_down: "<player> bayılttı <victim>",
    kf_bleed_out_kill: "<player> kanayarak öldü",
    kf_bleed_out_down: "<player kanayarak bayıldı",
    kf_finished_off_kill: "<player> işini bitirdi <victim>",
    kf_finished_off_down: "<player> yavaşça işini bitirdi <victim>",
    kf_finally_died: "<player> sonunda öldü",
    kf_finally_ended_themselves: "<player> sonunda kendini öldürdü",
    kf_finally_killed: "<player> sonunda öldürüldü",
    kf_finally_down: "<player> sonunda bayıldı",
    kf_gas_kill: "<player> gaza öldü",
    kf_gas_down: "<player> gaz tarafından bayıltıldı",
    kf_airdrop_kill: "<player> hava yardımı tarafından ezildi ",
    kf_airdrop_down: "<player> hava yardımı tarafından bayıltıldı",
    kf_kl_promotion: "<player> artık Öldürme Lideri!",
    kf_kl_killed: "<player> Öldürme liderini öldürdü",
    kf_kl_dead: "Öldürme Lideri Öldü!",
    kf_kl_suicide: "Öldürme lideri kendini öldürdü!",
    tt_restores: "<item> yeniler <amount> <type>",
    tt_reduces: "<item> azaltır <percent>% damage",
    go_kills: "Öldürmeler:",
    go_damage_done: "Verilen Hasar:",
    go_damage_taken: "Alınan Hasar:",
    go_time_alive: "Hayatta Kalınan Süre:",
    create_team: "Takım Oluştur",
    create_team_autofill: "Otomatik Doldur",
    create_team_lock: "Takımı Kilitle",
    create_team_waiting: "Bekleniyor...",
    create_team_play: "Oyunu Başlat",
    report_reporting: "Raporlanıyor",
    report_id: "Raporlama Kimliği:",
    report_instructions: `
    <p><strong>Please follow the instructions below!</strong> If you don't, your report will be ignored.</p>
    <h4>How to Submit a Report</h4>
    <ol>
      <li>Join the <a href="https://discord.suroi.io">Discord server.</a></li>
      <li>Go to the <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports
          channel.</a></li>
      <li>Read the report guidelines in the pinned post.</li>
      <li>Submit your report as a post.</li>
    </ol>`,
    languages: "Diller",
    gauze: "Bandaj",
    medikit: "İlk Yardım Çantası",
    cola: "Kola",
    tablets: "Haplar",
    basic_vest: "Basit Yelek",
    regular_vest: "Normal Yelek",
    tactical_vest: "Taktiksel Yelek",
    basic_helmet: "Basit Kask",
    regular_helmet: "Normal Kask",
    tactical_helmet: "Taktiksel Kask",
    bag: "Çanta",
    basic_pack: "Basit Çanta",
    regular_pack: "Normal Çanta",
    tactical_pack: "Taktiksel Çanta",
    "1x_scope": "1x Dürbün",
    "2x_scope": "2x Dürbün",
    "4x_scope": "4x Dürbün",
    "8x_scope": "8x Dürbün",
    "15x_scope": "15x Dürbün",
    fists: "Yumruklar",
    baseball_bat: "Beyzbol Sopası",
    hatchet: "Balta",
    kbar: "K-bar",
    maul: "Çekiç",
    gas_can: "Benzin Bidonu",
    heap_sword: "Yüksek Enerjili Zırh Delme Kılıcı",
    steelfang: "Çelik Diş",
    ice_pick: "Dağcı Kazması",
    seax: "Seax",
    frag_grenade: "El Bombası",
    smoke_grenade: "Sis Bombası",
    confetti_grenade: "Konfeti Bombası",
    radio: "Radyo",
    deathray: "Ölüm Işını",
    dual_template: "Çift <gun>",
    region_dev: "Yerel ana bilgisayar sunucusu",
    region_na: "Kuzey Amerika",
    region_eu: "Avrupa",
    region_sa: "Güney Amerika",
    region_as: "Asya"
}
  , jn = {
    name: "Tiếng Việt",
    flag: "🇻🇳",
    msg_rotate: "Để có trải nghiệm game tốt hơn, vui lòng xoay thiết bị của bạn sang ngang.",
    msg_loading: "Đang Kết Nối",
    msg_err_joining: "Lỗi khi tham gia trò chơi.",
    msg_err_finding: "Lỗi khi tìm trò chơi.",
    msg_try_again: "Vui lòng thử lại.",
    msg_warning: "Bạn đã bị cảnh báo!",
    msg_warning_msg: "Bạn đã nhận được cảnh báo từ người điều hành trò chơi với lí do: <reason>",
    msg_temp_ban: "Bạn đã bị cấm chơi tạm thời.",
    msg_temp_ban_msg: "Bạn đã bị cấm chơi với lí do: <reason>",
    msg_perma_ban: "Bạn đã bị cấm chơi vĩnh viễn.",
    msg_perma_ban_msg: "Bạn đã bị cấm chơi với lí do: <reason>",
    msg_no_reason: "Không có lý do nào được cung cấp.",
    play_solo: "Chơi Solo",
    play_duo: "Chơi Duos",
    play_squad: "Chơi Squads",
    join_team: "Vào Nhóm",
    msg_locked_tooltip: "Trò chơi chuyển đổi giữa solo và duo mỗi 24 giờ vì không có đủ người chơi cho cả hai.",
    rules_and_tutorial: "Luật chơi & Hướng dẫn",
    news: "Thông Báo",
    loadout: "Loadout",
    settings: "Cài Đặt",
    fullscreen: "Toàn màn hình",
    resume: "Quay Lại",
    quit: "Rời Đi",
    none: "Không có",
    copy: "Sao Chép",
    copied: "Đã Sao Chép",
    health: "máu",
    adrenaline: "adrenaline",
    settings_volume: "Âm lượng",
    settings_keybinds: "Gán phím",
    settings_graphics: "Đồ họa",
    settings_interface: "Giao diện",
    settings_save_load: "Lưu/Tải",
    settings_mobile: "Điện thoại",
    settings_require_reload: "* Thay đổi cài đặt này yêu cầu tải lại trang",
    settings_performance_warning: "* Cài đặt này có thể gây ra sự cố trên một số thiết bị. Tắt nếu bạn không thể tham gia trò chơi.",
    settings_master_volume: "Âm lượng tổng",
    settings_sfx_volume: "Âm lượng hiệu ứng",
    settings_music_volume: "Âm lượng nhạc",
    settings_old_menu_music: "Nhạc menu cũ",
    settings_render_mode: "Chế độ Render",
    settings_render_resolution: "Độ phân giải",
    settings_render_resolution_auto: "Tự động",
    settings_hires_textures: "Đồ họa phân giải cao",
    settings_cooler_graphics: "Đồ họa thêm",
    settings_antialias: "Khử răng cưa",
    settings_movement_smoothing: "Làm mịn chuyển động",
    settings_responsive_rotation: "Xoay không lag",
    settings_camera_shake: "Rung màn hình",
    settings_interface_scale: "Độ lớn giao diện",
    settings_minimap_opacity: "Độ mờ minimap",
    settings_fs_map_opacity: "Độ mờ bản đồ toàn màn hình",
    settings_hide_minimap: "Che minimap",
    settings_blur_splash: "Menu mờ",
    settings_hide_rules: "Che nút Luật Chơi",
    settings_warn_before_leaving: "Cảnh báo trước khi rời trận",
    settings_show_fps: "Hiện FPS",
    settings_show_ping: "Hiện ping",
    settings_show_coordinates: "Hiện tọa độ",
    settings_anon_names: "Người chơi ẩn danh",
    settings_hide_emotes: "Che emote",
    settings_text_killfeed: "Killfeed dựa trên chữ",
    settings_colored_weapon_slots: "Màu vũ khí",
    settings_scope_looping: "Lặp ống nhòm",
    settings_draw_hud: "Hiện HUD",
    settings_autopickup: "Bật chế độ tự động nhặt đồ",
    settings_autopickup_dual_guns: "Tự động nhặt súng đôi",
    settings_load_settings: "Tải cài đặt",
    settings_copy_settings: "Copy cài đặt",
    settings_reset_settings: "Reset cài đặt",
    settings_reload: "Thay đạn",
    settings_mobile_controls: "Bật điều khiển điện thoại",
    settings_joystick_size: "Kích cỡ joystick",
    settings_joystick_opacity: "Độ mờ joystick",
    loadout_skins: "Skins",
    loadout_emotes: "Emotes",
    loadout_crosshairs: "Tâm",
    loadout_badges: "Danh hiệu",
    loadout_special: "Đặc biệt",
    loadout_crosshairs_default: "Mặc định",
    loadout_crosshairs_size: "Kích cỡ:",
    loadout_crosshairs_color: "Màu:",
    loadout_crosshairs_stroke_size: "Kích cỡ nét:",
    loadout_crosshairs_stroke_color: "Màu sắc nét:",
    emotes_category_People: "Mọi người",
    emotes_category_Text: "Từ ngữ",
    emotes_category_Memes: "Memes",
    emotes_category_Icons: "Biểu tượng",
    emotes_category_Misc: "Khác",
    featured_youtubr: "Youtubr nổi bật",
    featured_streamr: "Streamr nổi bật",
    btn_report: "Báo Cáo",
    btn_spectate_kill_leader: "Theo Dõi Kill Leader",
    btn_spectate: "Theo Dõi",
    btn_play_again: "Chơi Lại",
    btn_menu: "Menu",
    msg_waiting_for_leader: "Đang Chờ Kill Leader",
    msg_you_died: "Bạn đã chết.",
    msg_player_died: "<player> đã chết.",
    msg_win: "Winner Winner Chicken Dinner!",
    msg_your_rank: "Hạng",
    msg_kills: "Số lần hạ: <kills>",
    gas_waiting: "Vòng bo bắt đầu thu hẹp trong <time>",
    gas_advancing: "Vòng bo đang bị thu hẹp! Hãy chạy đến nơi an toàn.",
    gas_inactive: "Đang đợi người chơi...",
    action_open_door: "Mở Cửa",
    action_close_door: "Đóng Cửa",
    action_revive: "Hồi Cứu <player>",
    action_cancel: "Hủy",
    action_reloading: "Đang Thay Đạn...",
    action_reviving: "Đang Hồi Cứu...",
    action_being_revived: "Đang Được Hồi Cứu...",
    action_gauze_use: "Đang Sử dụng <item>",
    action_medikit_use: "Đang Sử dụng <item>",
    action_cola_use: "Đang Uống <item>",
    action_tablets_use: "Đang Uống <item>",
    interact_airdrop_crate_locked: "Mở Airdrop",
    interact_control_panel: "Kích Hoạt Bảng Điều Khiển",
    interact_generator: "Kích Hoạt Động Cơ",
    interact_button: "Nhấn Nút",
    loading_spritesheets: "Đang tải Spritesheets <progress>",
    loading_connecting: "Đang kết nối",
    loading_joining_game: "Đang vào game",
    loading_fetching_data: "Đang tìm dữ liệu máy chủ...",
    loading_finding_game: "Đang tìm trò chơi",
    keybind_clear_tooltip: "Để loại bỏ một gán phím, hãy nhấn phím đó rồi nhấn một trong hai nút <kbd>Esc</kbd> hoặc <kbd>Backspace</kbd>.",
    keybind_reset: "Mặc định",
    "bindings_+up": "Đi lên",
    "bindings_+down": "Đi xuống",
    "bindings_+left": "Đi trái",
    "bindings_+right": "Đi phải",
    bindings_interact: "Tương tác/nhặt đồ",
    bindings_loot: "Nhặt đồ",
    "bindings_slot 0": "Trang bị sơ cấp",
    "bindings_slot 1": "Trang bị phụ",
    "bindings_slot 2": "Trang bị melee",
    "bindings_equip_or_cycle_throwables 1": "Trang bị/Lặp các lựu đạn",
    bindings_last_item: "Trang bị vũ khí cuối cùng",
    bindings_other_weapon: "Trang bị súng còn lại",
    bindings_swap_gun_slots: "Hoán đổi vị trí súng",
    "bindings_cycle_items -1": "Trang bị vũ khí trước",
    "bindings_cycle_items 1": "Trang bị vũ khí sau",
    "bindings_+attack": "Dùng vũ khí",
    bindings_drop: "Bỏ vũ khí đang cầm",
    bindings_reload: "Thay đạn",
    "bindings_cycle_scopes -1": "Ống nhòm trước",
    "bindings_cycle_scopes 1": "Ống nhòm sau",
    "bindings_use_consumable gauze": "Sử dụng Bông băng",
    "bindings_use_consumable medikit": "Sử dụng Medikit",
    "bindings_use_consumable cola": "Sử dụng Cola",
    "bindings_use_consumable tablets": "Sử dụng Thuốc",
    bindings_cancel_action: "Hủy hành động",
    "bindings_+view_map": "Xem bản đồ",
    bindings_toggle_map: "Bản đồ toàn màn hình",
    bindings_toggle_minimap: "Minimap",
    bindings_toggle_hud: "HUD",
    "bindings_+emote_wheel": "Menu emote",
    "bindings_+map_ping_wheel": "Chuyển sang Ping Nhóm",
    "bindings_+map_ping": "Ping Nhóm",
    bindings_toggle_console: "Console",
    bindings_toggle_slot_lock: "Khóa trang bị súng",
    kf_suicide_kill: "<player> đã tự sát",
    kf_suicide_down: "<player> đã hạ gục chính họ",
    kf_two_party_kill: "<player> đã kêt liễu <victim>",
    kf_two_party_down: "<player> đã hạ gục <victim>",
    kf_bleed_out_kill: "<player> chảy máu đến chết",
    kf_bleed_out_down: "<player> chảy máu đến gục",
    kf_finished_off_kill: "<player> cuối cùng đã kết liễu <victim>",
    kf_finished_off_down: "<player> cuối cùng đã hạ gục <victim>",
    kf_finally_died: "<player> cuối cùng đã bị kết liễu",
    kf_finally_ended_themselves: "<player> cuối cùng đã kết liễu chính họ",
    kf_finally_killed: "<player> cuối cùng đã bị kết liễu",
    kf_finally_down: "<player> cuối cùng đã hạ gục",
    kf_gas_kill: "<player> đã bị kết liễu bởi vòng bo",
    kf_gas_down: "<player> đã bị hạ gục bởi vòng bo",
    kf_airdrop_kill: "<player> đã bị nghiền nát bởi airdrop",
    kf_airdrop_down: "<player> đã bị hạ gục bởi airdrop",
    kf_kl_promotion: "<player> đã được thăng lên làm Kill Leader!",
    kf_kl_killed: "<player> đã kết liễu Kill Leader",
    kf_kl_dead: "Kill Leader đã bị giết!",
    kf_kl_suicide: "Kill Leader đã tự sát!",
    kf_you_killed: "Bạn đã kết liễu <player>",
    kf_you_downed: "Bạn đã hạ gục <player>",
    tt_restores: "<item> hồi <amount> <type>",
    tt_reduces: "<item> giảm <percent>% sát thương nhận",
    go_kills: "Số lần hạ:",
    go_damage_done: "Sát thương gây:",
    go_damage_taken: "Sát thương nhận:",
    go_time_alive: "Thời gian sống sót:",
    create_team: "Tạo Nhóm",
    create_team_autofill: "Tự động cho người lạ gia nhập",
    create_team_lock: "Khóa Nhóm",
    create_team_waiting: "Đang đợi...",
    create_team_play: "Bắt đầu chơi",
    report_reporting: "Đang Báo Cáo",
    report_id: "ID Báo Cáo:",
    report_instructions: `
    <p><strong>Hãy làm theo những hướng dẫn dưới đây!</strong> Nếu không, báo cáo của bạn sẽ không có hiệu lực.</p>
    <h4>Cách làm Báo Báo</h4>
    <ol>
      <li>Gia nhập <a href="https://discord.suroi.io">server Discord.</a></li>
      <li>Vào kênh <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports
</a></li>
      <li>Đọc quy tắc báo cáo ở bài viết được ghim.</li>
      <li>Gửi báo cáo của bạn dưới dạng bài viết.</li>
    </ol>`,
    languages: "Ngôn ngữ",
    gauze: "Bông Băng",
    medikit: "Medikit",
    cola: "Cola",
    tablets: "Thuốc",
    basic_vest: "Giáp Cơ Bản",
    regular_vest: "Giáp Thường",
    tactical_vest: "Giáp Đặc Biệt",
    basic_helmet: "Mũ Cơ Bản",
    regular_helmet: "Mũ Thường",
    tactical_helmet: "Mũ Đặc Biệt",
    bag: "Túi",
    basic_pack: "Túi Cơ Bản",
    regular_pack: "Túi Thường",
    tactical_pack: "Túi Đặc Biệt",
    "1x_scope": "Ống Nhòm 1x",
    "2x_scope": "Ống Nhòm 2x",
    "4x_scope": "Ống Nhòm 4x",
    "8x_scope": "Ống Nhòm 8x",
    "15x_scope": "Ống Nhòm 15x",
    fists: "Nắm Đấm",
    baseball_bat: "Gậy Bóng Chày",
    hatchet: "Rìu Gỗ",
    kbar: "Dao Găm",
    maul: "Búa",
    gas_can: "Can Xăng",
    heap_sword: "Kiếm Xuyên Giáp",
    steelfang: "Karambit",
    ice_pick: "Cuốc Băng",
    seax: "Đao",
    crowbar: "Crowbar",
    sickle: "Sickle",
    mosin: "Mosin-Nagant",
    radio: "Radio",
    lewis_gun: "Súng máy Lewis",
    deathray: "Tia Tử Thần",
    firework_launcher: "Súng Phóng Pháo Hoa",
    arena_closer: "Kẻ Hủy Diệt Thế Giới",
    revitalizer: "Súng Hồi Sinh",
    s_g17: "G17 (Ống Ngắm)",
    frag_grenade: "Lựu Đạn",
    smoke_grenade: "Bom Khói",
    confetti_grenade: "Lựu Đạn Bông Giấy",
    dual_template: "<gun> Đôi",
    region_dev: "Mạng Cục Bộ",
    region_na: "Bắc Mỹ",
    region_eu: "Châu Âu",
    region_sa: "Nam Mỹ",
    region_as: "Châu Á"
}
  , Fn = {
    name: "Cute Engwish",
    flag: "🎀",
    msg_rotate: "Fow a bettew expewience, pwease wotate youw device to wandscape. UwU",
    msg_loading: "Connectwing >w<",
    msg_err_joining: "Ewwow joining game. OwO",
    msg_err_finding: "Ewwow finding game. OwO",
    msg_try_again: "Pwease twy again. *_*",
    msg_warning: "You have been wawned owo!",
    msg_warning_msg: "You hab weceived a wawning by da modewatows fow weason: <reason>",
    msg_temp_ban: "You hab been tempowawiwy banned!",
    msg_temp_ban_msg: "You hab been banned fow weason: <reason>",
    msg_perma_ban: "You hab been pewmanentwy banned! ToT",
    msg_perma_ban_msg: "You hab been banned fow weason: <reason>",
    msg_no_reason: "Nu weason pwovided. >o<",
    play_solo: "Pway sowo",
    play_duo: "Pway duos",
    play_squad: "Pway squads",
    join_team: "Jwoin Team",
    msg_locked_tooltip: "Da game switches between sowos and duos evewy day, as thewe awen't enough pwayers for both :3",
    rules_and_tutorial: "Wules & Tutowial",
    news: "News",
    loadout: "Lowdowt",
    settings: "Settwings",
    fullscreen: "Fullscween",
    resume: "Wesume",
    quit: "Quit",
    none: "None",
    copy: "Copwy",
    health: "heawth",
    adrenaline: "adwenaline",
    settings_volume: "Vowume",
    settings_keybinds: "Keybwinds",
    settings_graphics: "Grafwics",
    settings_interface: "Intewface",
    settings_save_load: "Save/Lowd",
    settings_mobile: "Mobiwle",
    settings_require_reload: "* Changing dese settwings wequiwes weloading da page. OwO",
    settings_performance_warning: "* This setting can cawze issues on some dewices. Disabwe if you'we unabwe to join da game. > ~ <",
    settings_master_volume: "Master vowume",
    settings_sfx_volume: "SFX vowume",
    settings_music_volume: "Meowsic vowume",
    settings_old_menu_music: "Owd menu meowsic",
    settings_render_mode: "Wendew mode",
    settings_render_resolution: "Wendew wesowution",
    settings_render_resolution_auto: "Auto",
    settings_hires_textures: "High wesowution textuwes",
    settings_cooler_graphics: "Cuter gwaphics",
    settings_antialias: "Anti-awiasing",
    settings_movement_smoothing: "Movement smuwuthing :3",
    settings_responsive_rotation: "Wesponsive wotation",
    settings_camera_shake: "Camawa shake",
    settings_interface_scale: "Intewface scawle",
    settings_minimap_opacity: "Minimap opwacity",
    settings_fs_map_opacity: "Fullscween map opwacity",
    settings_hide_minimap: "Hide minimwap",
    settings_blur_splash: "Bwur spwash scween",
    settings_hide_rules: "Hide wules button",
    settings_warn_before_leaving: "Wawn befowe leavwing",
    settings_show_fps: "Show Fwames pa second",
    settings_show_ping: "Show pwing",
    settings_show_coordinates: "Show coowdinates",
    settings_anon_names: "Anonymous pwayer names",
    settings_hide_emotes: "Hide emotes",
    settings_text_killfeed: "Text-based kwillfweed",
    settings_colored_weapon_slots: "Colowed weapon swots",
    settings_scope_looping: "Luwup scwope selection",
    settings_draw_hud: "Dwaw HUD",
    settings_autopickup: "Enabwle autopickup",
    settings_autopickup_dual_guns: "Autopickup duaw guns",
    settings_load_settings: "Lowd settwings",
    settings_copy_settings: "Copwy settwings to cwipboawd",
    settings_reset_settings: "Reset settwings",
    settings_reload: "Welowd",
    settings_mobile_controls: "Enabwle mobiwle contwols",
    settings_joystick_size: "Funstick size",
    settings_joystick_opacity: "Funstick opwacity",
    loadout_skins: "Fursuits",
    loadout_emotes: "Emotes",
    loadout_crosshairs: "Cwosshairs",
    loadout_badges: "Badges",
    loadout_special: "Special",
    loadout_crosshairs_default: "System defawlt",
    loadout_crosshairs_size: "Size:",
    loadout_crosshairs_color: "Colow:",
    loadout_crosshairs_stroke_size: "Stwoke Size:",
    loadout_crosshairs_stroke_color: "Stwoke Colow:",
    emotes_category_People: "Faces",
    emotes_category_Text: "Twext",
    emotes_category_Memes: "Memes",
    emotes_category_Icons: "Icwons",
    emotes_category_Misc: "Mwisc",
    featured_youtubr: "Featuwed Youtuba",
    featured_streamr: "Featuwed Stweama",
    btn_report: "Wepowt",
    btn_spectate_kill_leader: "Spectate Kwill Weader",
    btn_spectate: "Spectate",
    btn_play_again: "Pway Again",
    btn_menu: "Menu",
    msg_waiting_for_leader: "Waiting for weader",
    msg_you_died: "You died. OwO",
    msg_player_died: "<player> died. L",
    msg_win: "Winna Winna Chickwen Dinna!! UwU",
    msg_your_rank: "Wank",
    msg_kills: "Kwills: <kills>",
    gas_waiting: "Toxwic gas advances in <time>",
    gas_advancing: "Toxwic gas is advancing! Move to da safe zone",
    gas_inactive: "Waiting for pwayers...",
    action_open_door: "Opwen Door",
    action_close_door: "Clowse Door",
    action_revive: "Hug <player>",
    action_cancel: "Cancel",
    action_reloading: "Welowding...",
    action_reviving: "Hugging...",
    action_being_revived: "Being hugged >w< ...",
    action_gauze_use: "Appwying <item>",
    action_medikit_use: "Using <item>",
    action_cola_use: "Dwinking <item>",
    action_tablets_use: "Taking <item>",
    interact_airdrop_crate_locked: "Opwen Airdwop!!",
    interact_control_panel: "Activate Contwol Panel!!",
    interact_generator: "Activate Genewator!!",
    interact_button: "Pwess Button!!",
    loading_spritesheets: "Lowding Spwitesheets <progress>",
    loading_connecting: "Connecting",
    loading_joining_game: "Joining Game",
    loading_fetching_data: "Fwetching Serva Data...",
    loading_finding_game: "Fwinding Game",
    keybind_clear_tooltip: "To wemove a keybind, pwess da keybind and den pwess either <kbd>Escwape</kbd> or <kbd>Backspwace</kbd>.",
    keybind_reset: "Weset to defawlts >_<",
    "bindings_+up": "Move Up",
    "bindings_+down": "Move Down",
    "bindings_+left": "Move Left",
    "bindings_+right": "Move Wight",
    bindings_interact: "Intewact",
    bindings_loot: "Luwut",
    "bindings_slot 0": "Equwip Pwimawy",
    "bindings_slot 1": "Equwip Secondawy",
    "bindings_slot 2": "Equwip Melee",
    "bindings_equip_or_cycle_throwables 1": "Equwip/Cycle Thwowable",
    bindings_last_item: "Equwip Last Weapon",
    bindings_other_weapon: "Equwip Other Gun",
    bindings_swap_gun_slots: "Swap Gun Swots",
    "bindings_cycle_items -1": "Equwip Pwevious Weapon",
    "bindings_cycle_items 1": "Equwip Next Weapon",
    "bindings_+attack": "Use Weapon",
    bindings_drop: "Dwop Active Weapon",
    bindings_reload: "Weload",
    "bindings_cycle_scopes -1": "Pwevious Scwope",
    "bindings_cycle_scopes 1": "Next Scwope",
    "bindings_use_consumable gauze": "Use Gauze",
    "bindings_use_consumable medikit": "Use Medikit",
    "bindings_use_consumable cola": "Use Cowa",
    "bindings_use_consumable tablets": "Use Tabwets",
    bindings_cancel_action: "Cancel Action",
    "bindings_+view_map": "View Map",
    bindings_toggle_map: "Toggle Fullscween Map",
    bindings_toggle_minimap: "Toggle Minimap",
    bindings_toggle_hud: "Toggle HUD",
    "bindings_+emote_wheel": "Emote Wheel",
    "bindings_+map_ping_wheel": "Switch to Map Pwing",
    "bindings_+map_ping": "Map Pwing Wheel",
    bindings_toggle_console: "Toggle Console",
    bindings_toggle_slot_lock: "Toggle Swot Lock",
    kf_suicide_kill: "<player> died of cwinge OwO",
    kf_suicide_down: "<player> knocked themselves out",
    kf_two_party_kill: "<player> kwilled <victim>",
    kf_two_party_down: "<player> knocked out <victim>",
    kf_bleed_out_kill: "<player> bwed out",
    kf_bleed_out_down: "<player bwed out non-lethawwy",
    kf_finished_off_kill: "<player> fwinished off <victim>",
    kf_finished_off_down: "<player> gwently fwinished off <victim>",
    kf_finally_died: "<player> fwinally died",
    kf_finally_ended_themselves: "<player> fwinally died of cwinge OwO",
    kf_finally_killed: "<player> was fwinally kwilled",
    kf_finally_down: "<player> was fwinally knocked out",
    kf_gas_kill: "<player> died to the gas",
    kf_gas_down: "<player> was kwnocked out by the gas",
    kf_airdrop_kill: "<player> was siwently crushed by an airdwop",
    kf_airdrop_down: "<player> was knocked out by an airdwop",
    kf_kl_promotion: "<player> is pwomoted to the Kwill Weader!",
    kf_kl_killed: "<player> killed the Kwill Weader",
    kf_kl_dead: "The Kwill Weader is dead!! >w<",
    kf_kl_suicide: "The Kwill Weader died of cwinge!",
    tt_restores: "<item> westores <amount> <type>",
    tt_reduces: "<item> weduces <percent>% damage",
    go_kills: "Kwills:",
    go_damage_done: "Damage Done:",
    go_damage_taken: "Damage Taken:",
    go_time_alive: "Time Alive:",
    create_team: "Cweate Team",
    create_team_autofill: "Auto Fill",
    create_team_lock: "Lock Team",
    create_team_waiting: "Waiting...",
    create_team_play: "Stawt Game",
    report_reporting: "Weporting",
    report_id: "Weport ID:",
    report_instructions: `
      <p><strong>Pwease follow da instwuctions bewow!</strong> If you dwon't, your report will be ignowed. >_< </p>
      <h4>How to Submit a Weport</h4>
      <ol>
        <li>Join da <a href="https://discord.suroi.io">Discowd server.</a></li>
        <li>Go to da <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheata-wepowts
            channel.</a></li>
        <li>Wead the wepowt guidelines in the pwinned powst.</li>
        <li>Submit your weport as a powst.</li>
      </ol>`,
    languages: "Wangwages",
    gauze: "Gauze",
    medikit: "Medikit",
    cola: "Cowa",
    tablets: "Tabwets",
    basic_vest: "Basic Vest",
    regular_vest: "Reguwa Vest",
    tactical_vest: "Tactical Vest",
    basic_helmet: "Basic Hewlmet",
    regular_helmet: "Reguwa Hewlmet",
    tactical_helmet: "Tactical Hewlmet",
    bag: "Bag",
    basic_pack: "Basic Pawk",
    regular_pack: "Reguwa Pawk",
    tactical_pack: "Tactical Pawk",
    "1x_scope": "1x Scwope",
    "2x_scope": "2x Scwope",
    "4x_scope": "4x Scwope",
    "8x_scope": "8x Scwope",
    "15x_scope": "15x Scwope",
    fists: "Paws",
    baseball_bat: "Basebawl Bat",
    hatchet: "Hatchet",
    kbar: "K-bar",
    maul: "Mawl",
    gas_can: "Gas Can",
    heap_sword: "HE-AP Swowd",
    steelfang: "Steewfang",
    ice_pick: "Ice Pick",
    seax: "Sex",
    mosin: "Mosin-Nagant",
    radio: "Wadio",
    lewis_gun: "Wewis Gun",
    deathray: "Deathway",
    frag_grenade: "Fwag Gwenade",
    smoke_grenade: "Smoke Gwenade",
    confetti_grenade: "Confetti Gwenade",
    dual_template: "Dual <gun>",
    region_dev: "Wocalhost Server",
    region_na: "Nowth Amewica",
    region_eu: "Euwope",
    region_sa: "South Amewica",
    region_as: "Asia"
}
  , $n = {
    name: "廣東話(香港/澳門)",
    flag: "🇭🇰 🇲🇴",
    msg_rotate: "請將設備調成橫向嚟提升你嘅遊戲體驗。",
    msg_loading: "連接梗",
    msg_err_joining: "入隊嘅時候出錯。",
    msg_err_finding: "揾隊伍嘅時候出錯。",
    msg_try_again: "請重試。",
    msg_warning: "警告！",
    msg_warning_msg: "你已經被警告，因為：<reason>",
    msg_temp_ban: "暫時封禁通知",
    msg_temp_ban_msg: "我哋會將你暫時封禁，因為：<reason>",
    msg_perma_ban: "永久封禁通知",
    msg_perma_ban_msg: "我哋會將你永久封禁，原因：<reason>",
    msg_no_reason: "俾唔到原因。",
    play_solo: "單機",
    play_duo: "雙人",
    play_squad: "組隊",
    join_team: "入隊",
    msg_locked_tooltip: "因為唔夠人同時支撐唔同模式嘅Server, 遊戲會每日之間來回切換單機Mode同雙人Mode",
    rules_and_tutorial: "規則/教學",
    news: "最新消息",
    loadout: "倉庫",
    settings: "設定",
    fullscreen: "全屏幕",
    resume: "繼續",
    quit: "退出",
    none: "冇",
    copy: "複製",
    health: "血量",
    adrenaline: "腎上腺素",
    settings_volume: "聲音",
    settings_keybinds: "鍵盤掣嘅位置",
    settings_graphics: "圖形",
    settings_interface: "界面",
    settings_save_load: "儲存/加載",
    settings_mobile: "觸碰",
    settings_require_reload: "* 需要刷新網頁先致可以改呢啲設定",
    settings_performance_warning: "* 呢個設定可能喺部分設備上出現問題。如果你加入唔到遊戲，試吓停用呢個設定。",
    settings_master_volume: "主音量",
    settings_sfx_volume: "音效音量",
    settings_music_volume: "音樂音量",
    settings_old_menu_music: "舊介面音樂",
    settings_render_mode: "渲染Mode",
    settings_render_resolution: "渲染分辨率",
    settings_render_resolution_auto: "自動",
    settings_hires_textures: "高分辨率紋理",
    settings_cooler_graphics: "更好嘅圖形",
    settings_antialias: "反鋸齒",
    settings_movement_smoothing: "平滑移動",
    settings_responsive_rotation: "響應式旋轉",
    settings_camera_shake: "畫面抖動",
    settings_interface_scale: "界面縮放",
    settings_minimap_opacity: "細地圖可見度",
    settings_fs_map_opacity: "主要地圖可見度",
    settings_hide_minimap: "隱藏張細地圖",
    settings_blur_splash: "模糊嘅開始畫面",
    settings_hide_rules: "隱藏規則掣",
    settings_warn_before_leaving: "行開前警告",
    settings_show_fps: "顯示幀數",
    settings_show_ping: "顯示延遲",
    settings_show_coordinates: "顯示坐標",
    settings_anon_names: "隱藏挽家名",
    settings_hide_emotes: "隱藏表情",
    settings_text_killfeed: "文字擊殺訊息",
    settings_colored_weapon_slots: "武器槽顏色",
    settings_scope_looping: "循環揀倍鏡",
    settings_draw_hud: "平視螢幕",
    settings_autopickup: "自動執嘢",
    settings_autopickup_dual_guns: "自動執雙手槍",
    settings_load_settings: "加載設定",
    settings_copy_settings: "複製設定到剪貼簿",
    settings_reset_settings: "重設設定",
    settings_reload: "重新載入",
    settings_mobile_controls: "流動控制",
    settings_joystick_size: "搖桿大細",
    settings_joystick_opacity: "搖桿可見度",
    loadout_skins: "恤袗",
    loadout_emotes: "表情",
    loadout_crosshairs: "準心",
    loadout_badges: "襟章",
    loadout_special: "特別",
    loadout_crosshairs_default: "預設",
    loadout_crosshairs_size: "大細：",
    loadout_crosshairs_color: "顏色：",
    loadout_crosshairs_stroke_size: "描邊大細：",
    loadout_crosshairs_stroke_color: "描邊顏色：",
    emotes_category_People: "人物",
    emotes_category_Text: "文字",
    emotes_category_Memes: "MEME",
    emotes_category_Icons: "標誌",
    emotes_category_Misc: "其他雜項",
    featured_youtubr: "特別推介Youtuber",
    featured_streamr: "特別推介Streamr",
    btn_report: "投訴",
    btn_spectate_kill_leader: "擊殺隊長視角",
    btn_spectate: "睇人點挽",
    btn_play_again: "再嚟多鋪",
    btn_menu: "選單",
    msg_waiting_for_leader: "新嘅擊殺隊長係……？",
    msg_you_died: "可惜…… 下次再嚟！",
    msg_player_died: "<player>死咗",
    msg_win: "大吉大利，今晚去KFC開Party食燒雞！",
    msg_your_rank: "名次",
    msg_kills: "殺死<kills>",
    gas_waiting: "電網會喺<time>後擴大",
    gas_advancing: "電網擴大梗！盡快移步到安全區域",
    gas_inactive: "等梗挽家…",
    action_open_door: "開門",
    action_close_door: "閂門",
    action_revive: "救<player>",
    action_cancel: "取消",
    action_reloading: "裝梗彈",
    action_reviving: "搶救梗",
    action_being_revived: "好快好返",
    action_gauze_use: "用梗<item>",
    action_medikit_use: "用梗<item>",
    action_cola_use: "飲梗<item>",
    action_tablets_use: "食梗<item>",
    interact_airdrop_crate_locked: "解開空投",
    interact_control_panel: "暗掣開機",
    interact_generator: "開着個發電機",
    interact_button: "暗掣",
    loading_spritesheets: "Load梗個圖像<progress>",
    loading_connecting: "連接梗",
    loading_joining_game: "入梗去",
    loading_fetching_data: "從服務器攞梗數據…",
    loading_finding_game: "揾梗進入方式",
    keybind_clear_tooltip: "如果唔想要呢個快捷鍵，請暗一下所揀嘅嗰個快捷鍵然後暗<kbd>Escape鍵</kbd>或<kbd>Backspace鍵</kbd>。",
    keybind_reset: "重設全部",
    "bindings_+up": "向上行",
    "bindings_+down": "向下行",
    "bindings_+left": "向左行",
    "bindings_+right": "向右行",
    bindings_interact: "互動",
    bindings_loot: "執嘢",
    "bindings_slot 0": "轉到主武器",
    "bindings_slot 1": "轉到副武器",
    "bindings_slot 2": "轉到近戰武器",
    "bindings_equip_or_cycle_throwables 1": "轉到投擲武器",
    bindings_last_item: "裝備前一武器",
    bindings_other_weapon: "裝備主副武器",
    bindings_swap_gun_slots: "交換主副武器",
    "bindings_cycle_items -1": "裝備上一個武器",
    "bindings_cycle_items 1": "裝備下一個武器",
    "bindings_+attack": "用武器",
    bindings_drop: "掉低武器",
    bindings_reload: "裝彈",
    "bindings_cycle_scopes -1": "細一個倍鏡",
    "bindings_cycle_scopes 1": "大一個倍鏡",
    "bindings_use_consumable gauze": "用繃帶",
    "bindings_use_consumable medikit": "用醫療包",
    "bindings_use_consumable cola": "飲汽水",
    "bindings_use_consumable tablets": "食藥",
    bindings_cancel_action: "取消",
    "bindings_+view_map": "睇吓張地圖",
    bindings_toggle_map: "地圖嘅開閂",
    bindings_toggle_minimap: "細地圖嘅開閂",
    bindings_toggle_hud: "平視螢幕嘅開閂",
    "bindings_+emote_wheel": "表情輪盤",
    "bindings_+map_ping_wheel": "轉用地圖標誌",
    "bindings_+map_ping": "地圖標誌輪盤",
    bindings_toggle_console: "控制台嘅開閂",
    bindings_toggle_slot_lock: "Lock咗個武器槽",
    kf_suicide_kill: "<player>諗唔開自殺咗",
    kf_suicide_down: "<player>整到自己瞓低咗",
    kf_two_party_kill: "你嘅隊友<player>殺咗<victim>",
    kf_two_party_down: "你嘅隊友<player>Knockout咗<victim>",
    kf_bleed_out_kill: "<player>失血過多",
    kf_bleed_out_down: "<player>非致命咁失血過多",
    kf_finally_died: "<player>最終死了",
    kf_finally_ended_themselves: "<player>最終搞掂咗自己",
    kf_finally_killed: "<player>最終被人殺咗",
    kf_finally_down: "<player>最終被人Knockout咗",
    kf_gas_kill: "<player>被電網電死",
    kf_gas_down: "<player>被電網電親",
    kf_airdrop_kill: "<player>被空投壓死咗",
    kf_airdrop_down: "<player>被空投壓親",
    kf_kl_promotion: "<player>升級做擊殺隊長！",
    kf_kl_killed: "<player>殺咗擊殺隊長",
    kf_kl_dead: "擊殺隊長死咗！",
    kf_kl_suicide: "擊殺隊長諗唔開自殺咗",
    tt_restores: "<item>恢復<amount><type>",
    tt_reduces: "<item>減少<percent>%受到傷害",
    go_kills: "擊殺人數：",
    go_damage_done: "造成傷害：",
    go_damage_taken: "受到傷害：",
    go_time_alive: "生存時間：",
    create_team: "整個隊伍",
    create_team_autofill: "自動填充隊友",
    create_team_lock: "Lock住個隊",
    create_team_waiting: "等梗",
    create_team_play: "開始遊戲",
    report_reporting: "投訴",
    report_id: "投訴ID：",
    report_instructions: `
      <p><strong>請依照下面嘅說明操作！</strong>如果唔係嘅話你嘅投訴會唔受理。</p>
      <h4>點樣投訴</h4>
      <ol>
        <li>加入<a href="https://discord.suroi.io">Discord Server. </a></li>
        <li>去<a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheatr-reports
            頻道。</a></li>
        <li>瞭解置頂帖嘅投訴方式。</li>
        <li>以帖子嘅方式嚟提交你嘅投訴。</li>
      </ol>`,
    languages: "語言",
    gauze: "繃帶",
    medikit: "醫療包",
    cola: "汽水",
    tablets: "藥丸",
    basic_vest: "一級甲",
    regular_vest: "二級甲",
    tactical_vest: "三級甲",
    basic_helmet: "一級頭",
    regular_helmet: "二級頭",
    tactical_helmet: "三級頭",
    bag: "袋",
    basic_pack: "一級背",
    regular_pack: "二級背",
    tactical_pack: "三級背",
    "1x_scope": "普通視角",
    "2x_scope": "二倍鏡",
    "4x_scope": "四倍鏡",
    "8x_scope": "八倍鏡",
    "15x_scope": "十五倍鏡",
    fists: "拳頭",
    baseball_bat: "棒球棍",
    hatchet: "斧頭",
    kbar: "KBar軍刀",
    maul: "鎚仔",
    gas_can: "汽油箱",
    heap_sword: "神劍電光丸",
    steelfang: "鋼牙刀",
    ice_pick: "冰鎬",
    seax: "Seax匕首",
    radio: "對講機",
    lewis_gun: "Lewis輕機槍",
    deathray: "雷射槍",
    frag_grenade: "手榴彈",
    smoke_grenade: "煙彈",
    confetti_grenade: "煙火彈",
    dual_template: "雙<gun>",
    region_dev: "自動",
    region_na: "北美",
    region_eu: "歐洲",
    region_sa: "南美",
    region_as: "亞洲"
};
let aa, xt;
const zt = {
    get defaultLanguage() {
        if (!di)
            throw new Error("Translation API not yet setup");
        return aa
    },
    translations: {
        en: In,
        gr: Cn,
        tr: Vn,
        ab: xn,
        fr: Rn,
        ru: On,
        de: An,
        zn: Tn,
        hk_mo: $n,
        jp: zn,
        vi: jn,
        ta: Bn,
        hu: Dn,
        et: Pn,
        cz: Mn,
        lv: En,
        lt: Ln,
        hp18: {
            name: "HP-18",
            flag: '<img height="20" src="./img/game/weapons/hp18.svg" />'
        },
        qen: Fn
    }
};
let di = !1;
function Hn(i) {
    if (di) {
        console.error("Translation API already setup");
        return
    }
    di = !0,
    aa = typeof tt.cv_language == "object" ? tt.cv_language.value : tt.cv_language,
    xt = i.console.getBuiltInCVar("cv_language"),
    Wn()
}
function z(i, t) {
    var o, s;
    if (!di)
        return console.error("Translation API not yet setup"),
        i;
    if (xt === "hp18")
        return "HP-18";
    if (i.startsWith("emote_"))
        return Ce.reify(i.slice(6)).name;
    if (i.startsWith("badge_"))
        return pt.reify(i.slice(6)).name;
    let a;
    try {
        a = ((o = zt.translations[xt]) == null ? void 0 : o[i]) ?? ((s = zt.translations[aa]) == null ? void 0 : s[i]) ?? ae.reify(i).name
    } catch {
        a = ""
    }
    if (!a)
        return i;
    if (a instanceof Function)
        return a(t ?? {});
    if (!t)
        return a;
    for (const [n,r] of Object.entries(t))
        a = a.replaceAll(`<${n}>`, r);
    return a
}
function Nn(i) {
    var d;
    if (!i.textContent)
        return;
    const t = (d = i.parentElement) != null && d.classList.contains("tab") ? 12.5 : 15
      , a = 10
      , s = i.textContent.replace(/\s+/g, " ").length * a
      , n = i.getBoundingClientRect().width;
    let r;
    switch (xt) {
    case "ta":
        r = Math.max(t - 2, Math.min(n / s * a, 13));
        break;
    default:
        r = Math.max(t, Math.min(n / s * a, 20));
        break
    }
    i.style.fontSize = `${r}px`
}
function Wn() {
    if (document.querySelectorAll("body *").forEach(i=>{
        var o, s;
        if (!(i instanceof HTMLElement))
            return;
        const t = i.getAttribute("translation");
        if (!t)
            return;
        const a = z(t);
        i[i.getAttribute("use-html") === null ? "innerText" : "innerHTML"] = a,
        (i.classList.contains("btn") || (o = i.parentElement) != null && o.classList.contains("btn") || (s = i.parentElement) != null && s.classList.contains("tab")) && a.length >= 10 && !["en", "hp18"].includes(xt) && Nn(i)
    }
    ),
    xt !== "en") {
        const i = document.getElementById("toggle-text-kill-feed-option");
        if (i) {
            const t = i.innerHTML;
            i.innerHTML = `<i class="fa-solid fa-lock"></i> ${t}`
        }
    }
}
mt.disableAutoPause = !0;
class Gn {
    constructor(t, a, o) {
        c(this, "manager");
        c(this, "name");
        c(this, "position");
        c(this, "fallOff");
        c(this, "maxRange");
        c(this, "onEnd");
        c(this, "dynamic");
        c(this, "instance");
        c(this, "stereoFilter");
        c(this, "ended", !1);
        if (this.name = t,
        this.manager = o,
        this.position = a.position,
        this.fallOff = a.falloff,
        this.maxRange = a.maxRange,
        this.dynamic = a.dynamic,
        this.onEnd = a.onEnd,
        this.stereoFilter = new Ko(0),
        !mt.exists(t)) {
            console.warn(`Unknown sound with name ${t}`);
            return
        }
        const s = mt.play(t, {
            loaded: (n,r,d)=>{
                d && this.init(d)
            }
            ,
            filters: [this.stereoFilter],
            loop: a.loop,
            volume: this.manager.volume
        });
        s instanceof Promise || this.init(s)
    }
    init(t) {
        this.instance = t,
        t.on("end", ()=>{
            var a;
            (a = this.onEnd) == null || a.call(this),
            this.ended = !0
        }
        ),
        t.on("stop", ()=>{
            this.ended = !0
        }
        ),
        this.update()
    }
    update() {
        if (this.instance && this.position) {
            const t = e.sub(this.manager.position, this.position);
            this.instance.volume = (1 - Y.clamp(Math.abs(e.length(t) / this.maxRange), 0, 1)) ** (1 + this.fallOff * 2) * this.manager.volume,
            this.stereoFilter.pan = Y.clamp(t.x / this.maxRange * -1, -1, 1)
        }
    }
    stop() {
        var t;
        this.ended || ((t = this.instance) == null || t.stop(),
        this.ended = !0)
    }
}
const Bt = class Bt {
    constructor(t) {
        c(this, "dynamicSounds", new Set);
        c(this, "volume");
        c(this, "position", e.create(0, 0));
        if (this.game = t,
        Bt._instantiated)
            throw new Error("Class 'SoundManager' has already been instantiated");
        Bt._instantiated = !0,
        this.volume = t.console.getBuiltInCVar("cv_sfx_volume"),
        this.loadSounds()
    }
    play(t, a) {
        const o = new Gn(t,{
            falloff: 1,
            maxRange: 256,
            dynamic: !1,
            loop: !1,
            ...a
        },this);
        return o.dynamic && this.dynamicSounds.add(o),
        o
    }
    update() {
        for (const t of this.dynamicSounds) {
            if (t.ended) {
                this.dynamicSounds.delete(t);
                continue
            }
            t.update()
        }
    }
    stopAll() {
        mt.stopAll()
    }
    loadSounds() {
        var o, s;
        const t = Object.assign({
            "/public/audio/music/menu_music.mp3": ()=>u(()=>import("./menu_music-D-hVTD7Y.js"), []),
            "/public/audio/music/menu_music_halloween.mp3": ()=>u(()=>import("./menu_music_halloween-UyjhcSuj.js"), []),
            "/public/audio/music/menu_music_old.mp3": ()=>u(()=>import("./menu_music_old-C9scJvQf.js"), []),
            "/public/audio/music/menu_music_winter.mp3": ()=>u(()=>import("./menu_music_winter-8WuP-BFW.js"), []),
            "/public/audio/sfx/airdrop/airdrop_fall.mp3": ()=>u(()=>import("./airdrop_fall-Cfh8v9Q_.js"), []),
            "/public/audio/sfx/airdrop/airdrop_land.mp3": ()=>u(()=>import("./airdrop_land-CvTB-7O-.js"), []),
            "/public/audio/sfx/airdrop/airdrop_land_water.mp3": ()=>u(()=>import("./airdrop_land_water-C7cuBNnE.js"), []),
            "/public/audio/sfx/airdrop/airdrop_plane.mp3": ()=>u(()=>import("./airdrop_plane-DX0Hq4Mx.js"), []),
            "/public/audio/sfx/airdrop/airdrop_plane_winter.mp3": ()=>u(()=>import("./airdrop_plane_winter-BjRg0Ud4.js"), []),
            "/public/audio/sfx/airdrop/airdrop_unlock.mp3": ()=>u(()=>import("./airdrop_unlock-B_H0pRHr.js"), []),
            "/public/audio/sfx/bleed.mp3": ()=>u(()=>import("./bleed-E34gxjfU.js"), []),
            "/public/audio/sfx/bush_rustle.mp3": ()=>u(()=>import("./bush_rustle-DFQMkyyC.js"), []),
            "/public/audio/sfx/button_press.mp3": ()=>u(()=>import("./button_press-By1rnnoR.js"), []),
            "/public/audio/sfx/ceiling_collapse.mp3": ()=>u(()=>import("./ceiling_collapse-BxkweWng.js"), []),
            "/public/audio/sfx/door_close.mp3": ()=>u(()=>import("./door_close-Bdjew9qp.js"), []),
            "/public/audio/sfx/door_open.mp3": ()=>u(()=>import("./door_open-D4-xD8pW.js"), []),
            "/public/audio/sfx/emote.mp3": ()=>u(()=>import("./emote-DsSyIcHb.js"), []),
            "/public/audio/sfx/firework_rocket_explode.mp3": ()=>u(()=>import("./firework_rocket_explode-DQo0DCD4.js"), []),
            "/public/audio/sfx/footsteps/grass_step_1.mp3": ()=>u(()=>import("./grass_step_1-Bd4IK0Yz.js"), []),
            "/public/audio/sfx/footsteps/grass_step_2.mp3": ()=>u(()=>import("./grass_step_2-Be_msxZn.js"), []),
            "/public/audio/sfx/footsteps/metal_step_1.mp3": ()=>u(()=>import("./metal_step_1-C6ZdMIl-.js"), []),
            "/public/audio/sfx/footsteps/metal_step_2.mp3": ()=>u(()=>import("./metal_step_2-DZ84GP1J.js"), []),
            "/public/audio/sfx/footsteps/sand_step_1.mp3": ()=>u(()=>import("./sand_step_1-cIPHmCUG.js"), []),
            "/public/audio/sfx/footsteps/sand_step_2.mp3": ()=>u(()=>import("./sand_step_2-BO76ldyP.js"), []),
            "/public/audio/sfx/footsteps/stone_step_1.mp3": ()=>u(()=>import("./stone_step_1-ehUV5al2.js"), []),
            "/public/audio/sfx/footsteps/stone_step_2.mp3": ()=>u(()=>import("./stone_step_2-DUU2XJ7o.js"), []),
            "/public/audio/sfx/footsteps/water_step_1.mp3": ()=>u(()=>import("./water_step_1-I5CdpkhV.js"), []),
            "/public/audio/sfx/footsteps/water_step_2.mp3": ()=>u(()=>import("./water_step_2-gSqzgH1z.js"), []),
            "/public/audio/sfx/footsteps/wood_step_1.mp3": ()=>u(()=>import("./wood_step_1-oQ0rP6tc.js"), []),
            "/public/audio/sfx/footsteps/wood_step_2.mp3": ()=>u(()=>import("./wood_step_2-BmSB4DKm.js"), []),
            "/public/audio/sfx/frag_grenade.mp3": ()=>u(()=>import("./frag_grenade-D6AsnVRc.js"), []),
            "/public/audio/sfx/generator_running.mp3": ()=>u(()=>import("./generator_running-SPRjclEL.js"), []),
            "/public/audio/sfx/generator_starting.mp3": ()=>u(()=>import("./generator_starting-B1a3-FWe.js"), []),
            "/public/audio/sfx/gun_click.mp3": ()=>u(()=>import("./gun_click-D2VOerce.js"), []),
            "/public/audio/sfx/healing/cola.mp3": ()=>u(()=>import("./cola-C2ZU6xGd.js"), []),
            "/public/audio/sfx/healing/gauze.mp3": ()=>u(()=>import("./gauze-dTY3NPkk.js"), []),
            "/public/audio/sfx/healing/medikit.mp3": ()=>u(()=>import("./medikit-CmaJbOxo.js"), []),
            "/public/audio/sfx/healing/tablets.mp3": ()=>u(()=>import("./tablets-CQ6-K-hR.js"), []),
            "/public/audio/sfx/heavy_swing.mp3": ()=>u(()=>import("./heavy_swing-BVXr_OqJ.js"), []),
            "/public/audio/sfx/hits/appliance_destroyed.mp3": ()=>u(()=>import("./appliance_destroyed-CL2kkHzj.js"), []),
            "/public/audio/sfx/hits/appliance_hit_1.mp3": ()=>u(()=>import("./appliance_hit_1-CdxTJW10.js"), []),
            "/public/audio/sfx/hits/appliance_hit_2.mp3": ()=>u(()=>import("./appliance_hit_2-C0w_kMAg.js"), []),
            "/public/audio/sfx/hits/bush_destroyed.mp3": ()=>u(()=>import("./bush_destroyed-DrfarcJA.js"), []),
            "/public/audio/sfx/hits/bush_hit_1.mp3": ()=>u(()=>import("./bush_hit_1-CApO8l3k.js"), []),
            "/public/audio/sfx/hits/bush_hit_2.mp3": ()=>u(()=>import("./bush_hit_2-4zF0TfXf.js"), []),
            "/public/audio/sfx/hits/cardboard_destroyed.mp3": ()=>u(()=>import("./cardboard_destroyed-B-s303Hj.js"), []),
            "/public/audio/sfx/hits/cardboard_hit_1.mp3": ()=>u(()=>import("./cardboard_hit_1-BmV_8pQx.js"), []),
            "/public/audio/sfx/hits/cardboard_hit_2.mp3": ()=>u(()=>import("./cardboard_hit_2-BBEywzF2.js"), []),
            "/public/audio/sfx/hits/crate_destroyed.mp3": ()=>u(()=>import("./crate_destroyed-B-s303Hj.js"), []),
            "/public/audio/sfx/hits/crate_hit_1.mp3": ()=>u(()=>import("./crate_hit_1-DYPNB5S5.js"), []),
            "/public/audio/sfx/hits/crate_hit_2.mp3": ()=>u(()=>import("./crate_hit_2-ChXLSZQa.js"), []),
            "/public/audio/sfx/hits/fence_destroyed.mp3": ()=>u(()=>import("./fence_destroyed-CBrbhvUx.js"), []),
            "/public/audio/sfx/hits/fence_hit_1.mp3": ()=>u(()=>import("./fence_hit_1-DCaVaOsH.js"), []),
            "/public/audio/sfx/hits/fence_hit_2.mp3": ()=>u(()=>import("./fence_hit_2-C4wLubxK.js"), []),
            "/public/audio/sfx/hits/glass_destroyed.mp3": ()=>u(()=>import("./glass_destroyed-Bd469GlM.js"), []),
            "/public/audio/sfx/hits/glass_hit_1.mp3": ()=>u(()=>import("./glass_hit_1-DiUNtY6E.js"), []),
            "/public/audio/sfx/hits/glass_hit_2.mp3": ()=>u(()=>import("./glass_hit_2-B22J_cbt.js"), []),
            "/public/audio/sfx/hits/large_refinery_barrel_destroyed.mp3": ()=>u(()=>import("./large_refinery_barrel_destroyed-CBNVPtPB.js"), []),
            "/public/audio/sfx/hits/large_refinery_barrel_hit_1.mp3": ()=>u(()=>import("./large_refinery_barrel_hit_1-DIzV883X.js"), []),
            "/public/audio/sfx/hits/large_refinery_barrel_hit_2.mp3": ()=>u(()=>import("./large_refinery_barrel_hit_2-D7ZyV4tI.js"), []),
            "/public/audio/sfx/hits/metal_destroyed.mp3": ()=>u(()=>import("./metal_destroyed-Deln5ljL.js"), []),
            "/public/audio/sfx/hits/metal_hit_1.mp3": ()=>u(()=>import("./metal_hit_1-CAMzPz9i.js"), []),
            "/public/audio/sfx/hits/metal_hit_2.mp3": ()=>u(()=>import("./metal_hit_2-BfFbk21T.js"), []),
            "/public/audio/sfx/hits/player_hit_1.mp3": ()=>u(()=>import("./player_hit_1-CKLjZap5.js"), []),
            "/public/audio/sfx/hits/player_hit_2.mp3": ()=>u(()=>import("./player_hit_2-CjniS-2s.js"), []),
            "/public/audio/sfx/hits/porcelain_destroyed.mp3": ()=>u(()=>import("./porcelain_destroyed-CQ-RjEZ4.js"), []),
            "/public/audio/sfx/hits/porcelain_hit_1.mp3": ()=>u(()=>import("./porcelain_hit_1-C1ngR21C.js"), []),
            "/public/audio/sfx/hits/porcelain_hit_2.mp3": ()=>u(()=>import("./porcelain_hit_2-Cb_X6rw8.js"), []),
            "/public/audio/sfx/hits/pumpkin_destroyed.mp3": ()=>u(()=>import("./pumpkin_destroyed-BbkkDsey.js"), []),
            "/public/audio/sfx/hits/pumpkin_hit_1.mp3": ()=>u(()=>import("./pumpkin_hit_1-BmV_8pQx.js"), []),
            "/public/audio/sfx/hits/pumpkin_hit_2.mp3": ()=>u(()=>import("./pumpkin_hit_2-BBEywzF2.js"), []),
            "/public/audio/sfx/hits/sand_destroyed.mp3": ()=>u(()=>import("./sand_destroyed-BM1yPaer.js"), []),
            "/public/audio/sfx/hits/sand_hit_1.mp3": ()=>u(()=>import("./sand_hit_1-D-BvtzkW.js"), []),
            "/public/audio/sfx/hits/sand_hit_2.mp3": ()=>u(()=>import("./sand_hit_2-CQUJHw5p.js"), []),
            "/public/audio/sfx/hits/stone_destroyed.mp3": ()=>u(()=>import("./stone_destroyed-Cj2ejWFx.js"), []),
            "/public/audio/sfx/hits/stone_hit_1.mp3": ()=>u(()=>import("./stone_hit_1-BmV_8pQx.js"), []),
            "/public/audio/sfx/hits/stone_hit_2.mp3": ()=>u(()=>import("./stone_hit_2-BBEywzF2.js"), []),
            "/public/audio/sfx/hits/tree_destroyed.mp3": ()=>u(()=>import("./tree_destroyed-BaszeO-Z.js"), []),
            "/public/audio/sfx/hits/tree_hit_1.mp3": ()=>u(()=>import("./tree_hit_1-B6WvqHWA.js"), []),
            "/public/audio/sfx/hits/tree_hit_2.mp3": ()=>u(()=>import("./tree_hit_2-DBV_lYMc.js"), []),
            "/public/audio/sfx/hits/wood_destroyed.mp3": ()=>u(()=>import("./wood_destroyed-DrzFAjpG.js"), []),
            "/public/audio/sfx/hits/wood_hit_1.mp3": ()=>u(()=>import("./wood_hit_1-x9Q2rZrf.js"), []),
            "/public/audio/sfx/hits/wood_hit_2.mp3": ()=>u(()=>import("./wood_hit_2-CHqccbyw.js"), []),
            "/public/audio/sfx/join_notification.mp3": ()=>u(()=>import("./join_notification-CB8CxOzv.js"), []),
            "/public/audio/sfx/kill_leader_assigned.mp3": ()=>u(()=>import("./kill_leader_assigned-bapxCkwu.js"), []),
            "/public/audio/sfx/kill_leader_dead.mp3": ()=>u(()=>import("./kill_leader_dead-B2H1sjz5.js"), []),
            "/public/audio/sfx/pickup/ammo_pickup.mp3": ()=>u(()=>import("./ammo_pickup-BTLYaHja.js"), []),
            "/public/audio/sfx/pickup/backpack_pickup.mp3": ()=>u(()=>import("./backpack_pickup-DGTxEz83.js"), []),
            "/public/audio/sfx/pickup/cola_pickup.mp3": ()=>u(()=>import("./cola_pickup-94up1JC0.js"), []),
            "/public/audio/sfx/pickup/gauze_pickup.mp3": ()=>u(()=>import("./gauze_pickup-C8MMhc7l.js"), []),
            "/public/audio/sfx/pickup/grenade_pickup.mp3": ()=>u(()=>import("./grenade_pickup-C42gCWuK.js"), []),
            "/public/audio/sfx/pickup/helmet_pickup.mp3": ()=>u(()=>import("./helmet_pickup-hXKgM-lv.js"), []),
            "/public/audio/sfx/pickup/medikit_pickup.mp3": ()=>u(()=>import("./medikit_pickup-C-g5Ncw8.js"), []),
            "/public/audio/sfx/pickup/pickup.mp3": ()=>u(()=>import("./pickup-uec3Ww0L.js"), []),
            "/public/audio/sfx/pickup/scope_pickup.mp3": ()=>u(()=>import("./scope_pickup-Ce81SiAr.js"), []),
            "/public/audio/sfx/pickup/tablets_pickup.mp3": ()=>u(()=>import("./tablets_pickup-BTMSifaV.js"), []),
            "/public/audio/sfx/pickup/throwable_pickup.mp3": ()=>u(()=>import("./throwable_pickup-BEkXx_Fk.js"), []),
            "/public/audio/sfx/pickup/vest_pickup.mp3": ()=>u(()=>import("./vest_pickup-BwHBUHA8.js"), []),
            "/public/audio/sfx/pings/airdrop_ping.mp3": ()=>u(()=>import("./airdrop_ping-CcZhumtW.js"), []),
            "/public/audio/sfx/pings/arrow_ping.mp3": ()=>u(()=>import("./arrow_ping-CSt8zUoN.js"), []),
            "/public/audio/sfx/pings/gift_ping.mp3": ()=>u(()=>import("./gift_ping-DFoBvj3x.js"), []),
            "/public/audio/sfx/pings/heal_ping.mp3": ()=>u(()=>import("./heal_ping-BjSJ1xMK.js"), []),
            "/public/audio/sfx/pings/warning_ping.mp3": ()=>u(()=>import("./warning_ping-C-N3CEIS.js"), []),
            "/public/audio/sfx/puzzle_error.mp3": ()=>u(()=>import("./puzzle_error-DNRuqCJu.js"), []),
            "/public/audio/sfx/puzzle_solved.mp3": ()=>u(()=>import("./puzzle_solved-BIyC8uYB.js"), []),
            "/public/audio/sfx/smoke_grenade.mp3": ()=>u(()=>import("./smoke_grenade-DZ7wM5xJ.js"), []),
            "/public/audio/sfx/soft_swing.mp3": ()=>u(()=>import("./soft_swing-iPBRjQUU.js"), []),
            "/public/audio/sfx/swing.mp3": ()=>u(()=>import("./swing-Cn0WnNtr.js"), []),
            "/public/audio/sfx/throwable_pin.mp3": ()=>u(()=>import("./throwable_pin-BmQruZag.js"), []),
            "/public/audio/sfx/throwable_throw.mp3": ()=>u(()=>import("./throwable_throw-D_s6Ak_m.js"), []),
            "/public/audio/sfx/usas_explosion.mp3": ()=>u(()=>import("./usas_explosion-Dkylb96w.js"), []),
            "/public/audio/sfx/vault_door_open.mp3": ()=>u(()=>import("./vault_door_open-C7mbypoe.js"), []),
            "/public/audio/sfx/weapons/acr_fire.mp3": ()=>u(()=>import("./acr_fire-C_59fnwp.js"), []),
            "/public/audio/sfx/weapons/acr_reload.mp3": ()=>u(()=>import("./acr_reload-XpZiV_q6.js"), []),
            "/public/audio/sfx/weapons/acr_switch.mp3": ()=>u(()=>import("./acr_switch-DFMeuPRR.js"), []),
            "/public/audio/sfx/weapons/ak47_fire.mp3": ()=>u(()=>import("./ak47_fire-BuRpN_cb.js"), []),
            "/public/audio/sfx/weapons/ak47_reload.mp3": ()=>u(()=>import("./ak47_reload-BM65b6Ix.js"), []),
            "/public/audio/sfx/weapons/ak47_switch.mp3": ()=>u(()=>import("./ak47_switch-lKtfnWUz.js"), []),
            "/public/audio/sfx/weapons/arena_closer_fire.mp3": ()=>u(()=>import("./arena_closer_fire-hIbTb4RZ.js"), []),
            "/public/audio/sfx/weapons/arena_closer_reload.mp3": ()=>u(()=>import("./arena_closer_reload-CS2VcNUx.js"), []),
            "/public/audio/sfx/weapons/arena_closer_switch.mp3": ()=>u(()=>import("./arena_closer_switch-C7xblRq0.js"), []),
            "/public/audio/sfx/weapons/arx160_fire.mp3": ()=>u(()=>import("./arx160_fire-B-nO5Tzn.js"), []),
            "/public/audio/sfx/weapons/arx160_reload.mp3": ()=>u(()=>import("./arx160_reload-CCkvQgVU.js"), []),
            "/public/audio/sfx/weapons/arx160_switch.mp3": ()=>u(()=>import("./arx160_switch-CgDb7SOc.js"), []),
            "/public/audio/sfx/weapons/aug_fire.mp3": ()=>u(()=>import("./aug_fire-C7-VMilu.js"), []),
            "/public/audio/sfx/weapons/aug_reload.mp3": ()=>u(()=>import("./aug_reload-CvD9aF2e.js"), []),
            "/public/audio/sfx/weapons/aug_switch.mp3": ()=>u(()=>import("./aug_switch-D9iytuRB.js"), []),
            "/public/audio/sfx/weapons/barrett_fire.mp3": ()=>u(()=>import("./barrett_fire-BJIv52TP.js"), []),
            "/public/audio/sfx/weapons/barrett_reload.mp3": ()=>u(()=>import("./barrett_reload-D-DyTJRj.js"), []),
            "/public/audio/sfx/weapons/barrett_switch.mp3": ()=>u(()=>import("./barrett_switch-BeQEDPRl.js"), []),
            "/public/audio/sfx/weapons/confetti_grenade_switch.mp3": ()=>u(()=>import("./confetti_grenade_switch-C42gCWuK.js"), []),
            "/public/audio/sfx/weapons/crowbar_switch.mp3": ()=>u(()=>import("./crowbar_switch-Cc8gxvDl.js"), []),
            "/public/audio/sfx/weapons/cz600_fire.mp3": ()=>u(()=>import("./cz600_fire-Dc45E5iR.js"), []),
            "/public/audio/sfx/weapons/cz600_reload.mp3": ()=>u(()=>import("./cz600_reload-pOmRwLtW.js"), []),
            "/public/audio/sfx/weapons/cz600_switch.mp3": ()=>u(()=>import("./cz600_switch-Hp3jbl6n.js"), []),
            "/public/audio/sfx/weapons/cz75a_fire.mp3": ()=>u(()=>import("./cz75a_fire-JkXruQxs.js"), []),
            "/public/audio/sfx/weapons/cz75a_reload.mp3": ()=>u(()=>import("./cz75a_reload-BqxWuedl.js"), []),
            "/public/audio/sfx/weapons/cz75a_switch.mp3": ()=>u(()=>import("./cz75a_switch-DVrw0CSY.js"), []),
            "/public/audio/sfx/weapons/deathray_fire.mp3": ()=>u(()=>import("./deathray_fire-f2bvopZl.js"), []),
            "/public/audio/sfx/weapons/deathray_reload.mp3": ()=>u(()=>import("./deathray_reload-Dd2ZXk9r.js"), []),
            "/public/audio/sfx/weapons/deathray_switch.mp3": ()=>u(()=>import("./deathray_switch-BD1m2wVD.js"), []),
            "/public/audio/sfx/weapons/dual_cz75a_reload.mp3": ()=>u(()=>import("./dual_cz75a_reload-DDT4ZEq1.js"), []),
            "/public/audio/sfx/weapons/dual_g19_reload.mp3": ()=>u(()=>import("./dual_g19_reload-DbKBo6dw.js"), []),
            "/public/audio/sfx/weapons/dual_m1895_reload.mp3": ()=>u(()=>import("./dual_m1895_reload-BysdXKUr.js"), []),
            "/public/audio/sfx/weapons/dual_s_g17_reload.mp3": ()=>u(()=>import("./dual_s_g17_reload-BrAhcJTA.js"), []),
            "/public/audio/sfx/weapons/firework_launcher_fire.mp3": ()=>u(()=>import("./firework_launcher_fire-BWt4BAhO.js"), []),
            "/public/audio/sfx/weapons/firework_launcher_reload.mp3": ()=>u(()=>import("./firework_launcher_reload-BCbgeVF7.js"), []),
            "/public/audio/sfx/weapons/firework_launcher_switch.mp3": ()=>u(()=>import("./firework_launcher_switch-DF8UdrId.js"), []),
            "/public/audio/sfx/weapons/flues_fire.mp3": ()=>u(()=>import("./flues_fire-BHXzz4Y4.js"), []),
            "/public/audio/sfx/weapons/flues_reload.mp3": ()=>u(()=>import("./flues_reload-B4X2OnHg.js"), []),
            "/public/audio/sfx/weapons/flues_switch.mp3": ()=>u(()=>import("./flues_switch-C5YfOcgo.js"), []),
            "/public/audio/sfx/weapons/frag_grenade_switch.mp3": ()=>u(()=>import("./frag_grenade_switch-BEkXx_Fk.js"), []),
            "/public/audio/sfx/weapons/g19_fire.mp3": ()=>u(()=>import("./g19_fire-KCB1rajO.js"), []),
            "/public/audio/sfx/weapons/g19_reload.mp3": ()=>u(()=>import("./g19_reload-DfQTHNa8.js"), []),
            "/public/audio/sfx/weapons/g19_switch.mp3": ()=>u(()=>import("./g19_switch-CajVr7T6.js"), []),
            "/public/audio/sfx/weapons/hatchet_switch.mp3": ()=>u(()=>import("./hatchet_switch-D5G2kpF_.js"), []),
            "/public/audio/sfx/weapons/hp18_fire.mp3": ()=>u(()=>import("./hp18_fire-DYyswi3g.js"), []),
            "/public/audio/sfx/weapons/hp18_reload.mp3": ()=>u(()=>import("./hp18_reload-Dfl-vXRk.js"), []),
            "/public/audio/sfx/weapons/hp18_switch.mp3": ()=>u(()=>import("./hp18_switch-CePZpGKH.js"), []),
            "/public/audio/sfx/weapons/lewis_gun_fire.mp3": ()=>u(()=>import("./lewis_gun_fire-DXL3L9Eb.js"), []),
            "/public/audio/sfx/weapons/lewis_gun_reload.mp3": ()=>u(()=>import("./lewis_gun_reload-D9Nqz9mA.js"), []),
            "/public/audio/sfx/weapons/lewis_gun_switch.mp3": ()=>u(()=>import("./lewis_gun_switch-D5mMWBde.js"), []),
            "/public/audio/sfx/weapons/m16a4_fire.mp3": ()=>u(()=>import("./m16a4_fire-DhM-AAXS.js"), []),
            "/public/audio/sfx/weapons/m16a4_reload.mp3": ()=>u(()=>import("./m16a4_reload-CVErh12O.js"), []),
            "/public/audio/sfx/weapons/m16a4_switch.mp3": ()=>u(()=>import("./m16a4_switch-B5jHVZbk.js"), []),
            "/public/audio/sfx/weapons/m1895_fire.mp3": ()=>u(()=>import("./m1895_fire-aSagu5G0.js"), []),
            "/public/audio/sfx/weapons/m1895_reload.mp3": ()=>u(()=>import("./m1895_reload-3PMSlOZM.js"), []),
            "/public/audio/sfx/weapons/m1895_switch.mp3": ()=>u(()=>import("./m1895_switch-BE8WKCq4.js"), []),
            "/public/audio/sfx/weapons/m1_garand_fire.mp3": ()=>u(()=>import("./m1_garand_fire-nInzDC_5.js"), []),
            "/public/audio/sfx/weapons/m1_garand_last_shot.mp3": ()=>u(()=>import("./m1_garand_last_shot-CyeR5Gv5.js"), []),
            "/public/audio/sfx/weapons/m1_garand_reload.mp3": ()=>u(()=>import("./m1_garand_reload-ZxCEqUSr.js"), []),
            "/public/audio/sfx/weapons/m1_garand_switch.mp3": ()=>u(()=>import("./m1_garand_switch-Bi7Zb9FA.js"), []),
            "/public/audio/sfx/weapons/m3k_fire.mp3": ()=>u(()=>import("./m3k_fire-DnnuT5aN.js"), []),
            "/public/audio/sfx/weapons/m3k_reload.mp3": ()=>u(()=>import("./m3k_reload-klXjFvWV.js"), []),
            "/public/audio/sfx/weapons/m3k_switch.mp3": ()=>u(()=>import("./m3k_switch-D-A3gnsz.js"), []),
            "/public/audio/sfx/weapons/mcx_spear_fire.mp3": ()=>u(()=>import("./mcx_spear_fire-Coj-0IP3.js"), []),
            "/public/audio/sfx/weapons/mcx_spear_reload.mp3": ()=>u(()=>import("./mcx_spear_reload-Dsvg40n-.js"), []),
            "/public/audio/sfx/weapons/mcx_spear_switch.mp3": ()=>u(()=>import("./mcx_spear_switch-BF-Srq5b.js"), []),
            "/public/audio/sfx/weapons/mg36_fire.mp3": ()=>u(()=>import("./mg36_fire-BPp48UuT.js"), []),
            "/public/audio/sfx/weapons/mg36_reload.mp3": ()=>u(()=>import("./mg36_reload-DbKCwDL8.js"), []),
            "/public/audio/sfx/weapons/mg36_switch.mp3": ()=>u(()=>import("./mg36_switch-BekuL54l.js"), []),
            "/public/audio/sfx/weapons/mg5_fire.mp3": ()=>u(()=>import("./mg5_fire-BL2kz6FC.js"), []),
            "/public/audio/sfx/weapons/mg5_reload.mp3": ()=>u(()=>import("./mg5_reload-CEmzqTaK.js"), []),
            "/public/audio/sfx/weapons/mg5_switch.mp3": ()=>u(()=>import("./mg5_switch-BQk2LmT9.js"), []),
            "/public/audio/sfx/weapons/micro_uzi_fire.mp3": ()=>u(()=>import("./micro_uzi_fire-CjDT6IW4.js"), []),
            "/public/audio/sfx/weapons/micro_uzi_reload.mp3": ()=>u(()=>import("./micro_uzi_reload-Cb3OA6-C.js"), []),
            "/public/audio/sfx/weapons/micro_uzi_switch.mp3": ()=>u(()=>import("./micro_uzi_switch-kJiqwMh-.js"), []),
            "/public/audio/sfx/weapons/mini14_fire.mp3": ()=>u(()=>import("./mini14_fire-X-JWB1Gq.js"), []),
            "/public/audio/sfx/weapons/mini14_reload.mp3": ()=>u(()=>import("./mini14_reload-phT24ySV.js"), []),
            "/public/audio/sfx/weapons/mini14_switch.mp3": ()=>u(()=>import("./mini14_switch-DoK2dBQ8.js"), []),
            "/public/audio/sfx/weapons/model_37_fire.mp3": ()=>u(()=>import("./model_37_fire-CwLbTrrH.js"), []),
            "/public/audio/sfx/weapons/model_37_reload.mp3": ()=>u(()=>import("./model_37_reload-oKw4DAXi.js"), []),
            "/public/audio/sfx/weapons/model_37_switch.mp3": ()=>u(()=>import("./model_37_switch-DAnRGk2V.js"), []),
            "/public/audio/sfx/weapons/model_89_fire.mp3": ()=>u(()=>import("./model_89_fire-DViTftaX.js"), []),
            "/public/audio/sfx/weapons/model_89_reload.mp3": ()=>u(()=>import("./model_89_reload-B4HmvH-h.js"), []),
            "/public/audio/sfx/weapons/model_89_switch.mp3": ()=>u(()=>import("./model_89_switch-BCRaXSqc.js"), []),
            "/public/audio/sfx/weapons/mosin_fire.mp3": ()=>u(()=>import("./mosin_fire-CHvWJ9Br.js"), []),
            "/public/audio/sfx/weapons/mosin_reload.mp3": ()=>u(()=>import("./mosin_reload-DnEMfSCm.js"), []),
            "/public/audio/sfx/weapons/mosin_switch.mp3": ()=>u(()=>import("./mosin_switch-ClIvn5Rt.js"), []),
            "/public/audio/sfx/weapons/mp40_fire.mp3": ()=>u(()=>import("./mp40_fire-q8s3cDv3.js"), []),
            "/public/audio/sfx/weapons/mp40_reload.mp3": ()=>u(()=>import("./mp40_reload-Bzf9_LqF.js"), []),
            "/public/audio/sfx/weapons/mp40_switch.mp3": ()=>u(()=>import("./mp40_switch-nyjM7GIH.js"), []),
            "/public/audio/sfx/weapons/negev_fire.mp3": ()=>u(()=>import("./negev_fire-CmY1Wqj2.js"), []),
            "/public/audio/sfx/weapons/negev_reload.mp3": ()=>u(()=>import("./negev_reload-MO_gJZhq.js"), []),
            "/public/audio/sfx/weapons/negev_switch.mp3": ()=>u(()=>import("./negev_switch-GXOEE_cD.js"), []),
            "/public/audio/sfx/weapons/pp19_fire.mp3": ()=>u(()=>import("./pp19_fire-DvzXpCED.js"), []),
            "/public/audio/sfx/weapons/pp19_reload.mp3": ()=>u(()=>import("./pp19_reload-DWPb3xp6.js"), []),
            "/public/audio/sfx/weapons/pp19_switch.mp3": ()=>u(()=>import("./pp19_switch-BrGNaQAt.js"), []),
            "/public/audio/sfx/weapons/radio_fire.mp3": ()=>u(()=>import("./radio_fire-Dg6bWgRq.js"), []),
            "/public/audio/sfx/weapons/radio_reload.mp3": ()=>u(()=>import("./radio_reload-DbImtR3M.js"), []),
            "/public/audio/sfx/weapons/radio_switch.mp3": ()=>u(()=>import("./radio_switch-BbLA6PJp.js"), []),
            "/public/audio/sfx/weapons/revitalizer_fire.mp3": ()=>u(()=>import("./revitalizer_fire-CwLbTrrH.js"), []),
            "/public/audio/sfx/weapons/revitalizer_reload.mp3": ()=>u(()=>import("./revitalizer_reload-oKw4DAXi.js"), []),
            "/public/audio/sfx/weapons/revitalizer_switch.mp3": ()=>u(()=>import("./revitalizer_switch-DAnRGk2V.js"), []),
            "/public/audio/sfx/weapons/s_g17_fire.mp3": ()=>u(()=>import("./s_g17_fire-DhUJxNiz.js"), []),
            "/public/audio/sfx/weapons/s_g17_reload.mp3": ()=>u(()=>import("./s_g17_reload-D_Wgw-d7.js"), []),
            "/public/audio/sfx/weapons/s_g17_switch.mp3": ()=>u(()=>import("./s_g17_switch-KyoYZ4-t.js"), []),
            "/public/audio/sfx/weapons/saf_200_fire.mp3": ()=>u(()=>import("./saf_200_fire-Bt3il1Gg.js"), []),
            "/public/audio/sfx/weapons/saf_200_reload.mp3": ()=>u(()=>import("./saf_200_reload-15vK87SB.js"), []),
            "/public/audio/sfx/weapons/saf_200_switch.mp3": ()=>u(()=>import("./saf_200_switch-BGn1W_f1.js"), []),
            "/public/audio/sfx/weapons/smoke_grenade_switch.mp3": ()=>u(()=>import("./smoke_grenade_switch-C42gCWuK.js"), []),
            "/public/audio/sfx/weapons/sr25_fire.mp3": ()=>u(()=>import("./sr25_fire-CqEKWzJ8.js"), []),
            "/public/audio/sfx/weapons/sr25_reload.mp3": ()=>u(()=>import("./sr25_reload-DVs02AKY.js"), []),
            "/public/audio/sfx/weapons/sr25_switch.mp3": ()=>u(()=>import("./sr25_switch-BT4dExLI.js"), []),
            "/public/audio/sfx/weapons/stoner_63_fire.mp3": ()=>u(()=>import("./stoner_63_fire-iZkDreT5.js"), []),
            "/public/audio/sfx/weapons/stoner_63_reload.mp3": ()=>u(()=>import("./stoner_63_reload-wYyBXuyI.js"), []),
            "/public/audio/sfx/weapons/stoner_63_switch.mp3": ()=>u(()=>import("./stoner_63_switch-C_-3zp1D.js"), []),
            "/public/audio/sfx/weapons/tango_51_fire.mp3": ()=>u(()=>import("./tango_51_fire-n_Hzrdfd.js"), []),
            "/public/audio/sfx/weapons/tango_51_reload.mp3": ()=>u(()=>import("./tango_51_reload-Cj-V9Ly0.js"), []),
            "/public/audio/sfx/weapons/tango_51_switch.mp3": ()=>u(()=>import("./tango_51_switch-CgYqSUBB.js"), []),
            "/public/audio/sfx/weapons/usas12_fire.mp3": ()=>u(()=>import("./usas12_fire-lGwzxyfA.js"), []),
            "/public/audio/sfx/weapons/usas12_reload.mp3": ()=>u(()=>import("./usas12_reload-fbOCL-LL.js"), []),
            "/public/audio/sfx/weapons/usas12_switch.mp3": ()=>u(()=>import("./usas12_switch-CsQO9k0l.js"), []),
            "/public/audio/sfx/weapons/vector_fire.mp3": ()=>u(()=>import("./vector_fire-CzLFHKWp.js"), []),
            "/public/audio/sfx/weapons/vector_reload.mp3": ()=>u(()=>import("./vector_reload-p11LiTzA.js"), []),
            "/public/audio/sfx/weapons/vector_switch.mp3": ()=>u(()=>import("./vector_switch-DvTyNI-b.js"), []),
            "/public/audio/sfx/weapons/vepr12_fire.mp3": ()=>u(()=>import("./vepr12_fire-DB76XlxD.js"), []),
            "/public/audio/sfx/weapons/vepr12_reload.mp3": ()=>u(()=>import("./vepr12_reload-Cy8cGXiY.js"), []),
            "/public/audio/sfx/weapons/vepr12_switch.mp3": ()=>u(()=>import("./vepr12_switch-BDS3KUWC.js"), []),
            "/public/audio/sfx/weapons/vss_fire.mp3": ()=>u(()=>import("./vss_fire-DTz0LnIG.js"), []),
            "/public/audio/sfx/weapons/vss_reload.mp3": ()=>u(()=>import("./vss_reload-CwOQwwgl.js"), []),
            "/public/audio/sfx/weapons/vss_switch.mp3": ()=>u(()=>import("./vss_switch-C0F-_3aw.js"), [])
        })
          , a = {};
        for (const n in t) {
            const r = n.split("/")
              , d = r[r.length - 1].replace(".mp3", "");
            a[d] && console.warn(`Duplicated sound: ${d}`),
            a[d] = n.replace("/public", "")
        }
        for (const n in a) {
            let r = a[n];
            et.reskin && ((s = (o = an[et.reskin]) == null ? void 0 : o.sounds) != null && s.includes(n)) && (r += `_${et.reskin}`),
            a[n] = `.${r}`
        }
        for (const [n,r] of Object.entries(a)) {
            let d = !1;
            mt.add(n, {
                url: r,
                preload: !0,
                loaded(g) {
                    g !== null && !d && (d = !0,
                    console.warn(`Failed to load sound '${n}' (path '${r}')
Error object provided below`),
                    console.error(g))
                }
            })
        }
    }
}
;
c(Bt, "_instantiated", !1);
let Fi = Bt;
const Xt = {}
  , Kn = m("#loading-text");
async function Un(i, t) {
    if (i.type === eo.WEBGL) {
        const g = i.gl;
        g.getParameter(g.MAX_TEXTURE_SIZE) < 4096 && (t = !1)
    }
    const a = t ? (await u(async()=>{
        const {atlases: g} = await import("./_virtual_spritesheets-jsons-high-res-BWnIRpBQ.js");
        return {
            atlases: g
        }
    }
    , [])).atlases : (await u(async()=>{
        const {atlases: g} = await import("./_virtual_spritesheets-jsons-low-res-2gb8rqNa.js");
        return {
            atlases: g
        }
    }
    , [])).atlases
      , s = [...a.main, ...(et.reskin !== void 0 ? a[et.reskin] : void 0) ?? []];
    let n = 0;
    const r = s.length
      , d = qn(i);
    await Promise.all(s.map(g=>{
        const h = g.meta.image;
        return new Promise(_=>{
            d(g, h).then(()=>{
                const b = `(${++n} / ${r})`;
                console.log(`Atlas ${h} loaded ${b}`),
                Kn.text(z("loading_spritesheets", {
                    progress: b
                }))
            }
            ).catch(f=>{
                ++n,
                console.error(`Atlas ${h} failed to load`),
                console.error(f)
            }
            ).finally(_)
        }
        )
    }
    ))
}
const qn = i=>async(t,a)=>{
    console.log(`Loading spritesheet ${location.origin}/${a}`),
    await new Promise(o=>{
        Uo.load(a).then(s=>{
            i.prepare.upload(s),
            new qo(s,t).parse().then(n=>{
                for (const r in n)
                    Xt[r] = n[r];
                o()
            }
            )
        }
        )
    }
    )
}
;
class W extends Zi {
    static getTexture(t) {
        return t in Xt ? Xt[t] : (console.warn(`Texture not found: "${t}"`),
        Xt._missing_texture)
    }
    constructor(t) {
        super(t ? W.getTexture(t) : void 0),
        this.anchor.set(.5),
        this.setPos(0, 0)
    }
    setFrame(t) {
        return this.texture = W.getTexture(t),
        this
    }
    setAnchor(t) {
        return this.anchor.copyFrom(t),
        this
    }
    setPos(t, a) {
        return this.position.set(t, a),
        this
    }
    setVPos(t) {
        return this.position.set(t.x, t.y),
        this
    }
    setVisible(t) {
        return this.visible = t,
        this
    }
    setAngle(t) {
        return this.angle = t ?? 0,
        this
    }
    setRotation(t) {
        return this.rotation = t ?? 0,
        this
    }
    setScale(t) {
        return this.scale = e.create(t ?? 1, t ?? 1),
        this
    }
    setTint(t) {
        return this.tint = t,
        this
    }
    setZIndex(t) {
        return this.zIndex = t,
        this
    }
    setAlpha(t) {
        return this.alpha = t,
        this
    }
}
function se(i) {
    return e.scale(i, te)
}
function wt(i, t, a) {
    switch (a.setStrokeStyle({
        color: t,
        width: 2
    }),
    a.beginPath(),
    i.type) {
    case ot.Rect:
        {
            const o = se(i.min)
              , s = se(i.max);
            a.moveTo(o.x, o.y).lineTo(s.x, o.y).lineTo(s.x, s.y).lineTo(o.x, s.y).lineTo(o.x, o.y);
            break
        }
    case ot.Circle:
        {
            const o = se(i.position);
            a.arc(o.x, o.y, i.radius * te, 0, Math.PI * 2);
            break
        }
    case ot.Group:
        for (const o of i.hitboxes)
            wt(o, t, a);
        break;
    case ot.Polygon:
        a.poly(i.points.map(o=>se(o)));
        break
    }
    return a.closePath(),
    a.stroke(),
    a
}
class it {
    constructor(t, a) {
        c(this, "id");
        c(this, "game");
        c(this, "damageable", !1);
        c(this, "destroyed", !1);
        c(this, "debugGraphics");
        c(this, "_oldPosition");
        c(this, "_lastPositionChange");
        c(this, "_position", e.create(0, 0));
        c(this, "_positionManuallySet", !1);
        c(this, "_oldRotation");
        c(this, "_lastRotationChange");
        c(this, "_rotationManuallySet", !1);
        c(this, "_rotation", 0);
        c(this, "dead", !1);
        c(this, "container");
        c(this, "timeouts", new Set);
        this.game = t,
        this.id = a,
        this.container = new Re,
        this.game.camera.addObject(this.container)
    }
    get position() {
        return this._position
    }
    set position(t) {
        this._positionManuallySet && (this._oldPosition = e.clone(this._position)),
        this._positionManuallySet = !0,
        this._lastPositionChange = Date.now(),
        this._position = t
    }
    updateContainerPosition() {
        this.destroyed || this._oldPosition === void 0 || this._lastPositionChange === void 0 || (this.container.position = se(e.lerp(this._oldPosition, this.position, Math.min((Date.now() - this._lastPositionChange) / this.game.serverDt, 1))))
    }
    get rotation() {
        return this._rotation
    }
    set rotation(t) {
        this._rotationManuallySet && (this._oldRotation = this._rotation),
        this._rotationManuallySet = !0,
        this._lastRotationChange = Date.now(),
        this._rotation = t
    }
    updateContainerRotation() {
        this._oldRotation === void 0 || this._lastRotationChange === void 0 || (this.container.rotation = Y.lerp(this._oldRotation, this._oldRotation + Ke.minimize(this._oldRotation, this._rotation), Math.min((Date.now() - this._lastRotationChange) / this.game.serverDt, 1)))
    }
    addTimeout(t, a) {
        const o = this.game.addTimeout(t, a);
        return this.timeouts.add(o),
        o
    }
    destroy() {
        this.destroyed = !0;
        for (const t of this.timeouts)
            t.kill();
        this.container.destroy()
    }
    playSound(t, a) {
        return this.game.soundManager.play(t, {
            position: this.position,
            ...a
        })
    }
}
const Se = {
    grass: {
        debugColor: 21760
    },
    stone: {
        debugColor: 1184274
    },
    wood: {
        debugColor: 8344832
    },
    sand: {
        debugColor: 16733440
    },
    metal: {
        debugColor: 8421504
    },
    water: {
        debugColor: 56831,
        speedMultiplier: .7,
        overlay: !0,
        particles: !0
    }
};
class Za {
    constructor(t, a, o, s, n, r) {
        c(this, "width");
        c(this, "height");
        c(this, "cellSize", 64);
        c(this, "floors", new Map);
        c(this, "rivers");
        c(this, "beachHitbox");
        c(this, "grassHitbox");
        c(this, "groundRect");
        c(this, "_grid", []);
        this.width = Math.floor(t / this.cellSize),
        this.height = Math.floor(a / this.cellSize);
        for (let v = 0; v <= this.width; v++) {
            this._grid[v] = [];
            for (let w = 0; w <= this.height; w++)
                this._grid[v][w] = {
                    rivers: [],
                    floors: []
                }
        }
        const d = o + s
          , g = new on(n)
          , h = 16
          , _ = 8
          , f = this.groundRect = new l(e.create(o, o),e.create(t - o, a - o))
          , b = new l(e.create(d, d),e.create(t - d, a - d));
        this.beachHitbox = new at(Xa(f, h, _, g)),
        this.grassHitbox = new at(Xa(b, h, _, g)),
        this.rivers = r;
        for (const v of r) {
            const w = v.bankHitbox.toRectangle()
              , k = this._roundToCells(w.min)
              , S = this._roundToCells(w.max);
            for (let x = k.x; x <= S.x; x++)
                for (let I = k.y; I <= S.y; I++) {
                    const R = e.create(x * this.cellSize, I * this.cellSize)
                      , O = new l(R,e.add(R, e.create(this.cellSize, this.cellSize)));
                    v.bankHitbox.collidesWith(O) && this._grid[x][I].rivers.push(v)
                }
        }
    }
    addFloor(t, a) {
        this.floors.set(a, t);
        const o = a.toRectangle()
          , s = this._roundToCells(o.min)
          , n = this._roundToCells(o.max);
        for (let r = s.x; r <= n.x; r++)
            for (let d = s.y; d <= n.y; d++)
                this._grid[r][d].floors.push({
                    type: t,
                    hitbox: a
                })
    }
    getFloor(t) {
        const a = this._roundToCells(t);
        let o = "water";
        const s = this.beachHitbox.isPointInside(t);
        s && (o = "sand",
        this.grassHitbox.isPointInside(t) && (o = "grass"));
        const n = this._grid[a.x][a.y];
        if (s) {
            for (const r of n.rivers)
                if (r.bankHitbox.isPointInside(t) && (o = "sand"),
                r.waterHitbox.isPointInside(t)) {
                    o = "water";
                    break
                }
        }
        for (const r of n.floors)
            if (r.hitbox.isPointInside(t))
                return r.type;
        return o
    }
    getRiversInPosition(t) {
        const a = this._roundToCells(t);
        return this._grid[a.x][a.y].rivers
    }
    getRiversInHitbox(t) {
        const a = new Set
          , o = t.toRectangle()
          , s = this._roundToCells(o.min)
          , n = this._roundToCells(o.max);
        for (let r = s.x; r <= n.x; r++)
            for (let d = s.y; d <= n.y; d++)
                for (const g of this._grid[r][d].rivers)
                    a.add(g);
        return [...a]
    }
    _roundToCells(t) {
        return e.create(Y.clamp(Math.floor(t.x / this.cellSize), 0, this.width), Y.clamp(Math.floor(t.y / this.cellSize), 0, this.height))
    }
}
function Ja(i, t, a, o, s) {
    return .5 * (o - t + 2 * i * (2 * t - 5 * a + 4 * o - s) + 3 * i * i * (3 * a - 3 * o + s - t))
}
function Ya(i, t, a, o, s) {
    const n = i * i;
    return .5 * (2 * a + i * (o - t) + n * (2 * t - 5 * a + 4 * o - s) + n * i * (3 * a - 3 * o + s - t))
}
class Zn {
    constructor(t, a, o, s) {
        c(this, "bankWidth");
        c(this, "waterHitbox");
        c(this, "bankHitbox");
        this.width = t,
        this.points = a;
        const n = this.points.length - 1;
        this.bankWidth = Y.clamp(this.width * .75, 12, 20);
        const r = new Array(n * 2)
          , d = new Array(n * 2)
          , g = !s.isPointInside(this.points[this.points.length - 1]);
        for (let h = 0; h < this.points.length; h++) {
            const _ = this.points[h]
              , f = this.getNormal(h / n);
            let b = this.bankWidth
              , v = null;
            for (const F of o) {
                const re = e.length(e.sub(F.getPosition(F.getClosestT(_)), _));
                re < F.width * 2 && (b = Math.max(b, F.bankWidth)),
                (h === 0 || h === this.points.length - 1) && re < 48 && (v = F)
            }
            let w = this.width;
            const k = 2 * (Math.max(1 - h / n, h / n) - .5);
            (h < this.points.length / 2 || g) && (w = (1 + k ** 3 * 1.5) * this.width);
            const S = (F,re,Oe)=>{
                const Fe = e.add(F, re);
                if (!Oe.isPointInside(Fe)) {
                    const qe = ei.rayIntersectsPolygon(F, re, Oe.points);
                    if (qe)
                        return e.scale(re, qe)
                }
                return re
            }
              , x = w + b;
            let I = e.scale(f, w)
              , R = e.scale(f, -w)
              , O = e.scale(f, x)
              , J = e.scale(f, -x);
            v && (I = S(_, I, v.waterHitbox),
            R = S(_, R, v.waterHitbox),
            O = S(_, O, v.bankHitbox),
            J = S(_, J, v.bankHitbox));
            const V = e.add(_, I)
              , B = e.add(_, R);
            r[h] = V,
            r[this.points.length + n - h] = B;
            const le = e.add(_, O)
              , ce = e.add(_, J);
            d[h] = le,
            d[this.points.length + n - h] = ce
        }
        this.waterHitbox = new at(r),
        this.bankHitbox = new at(d)
    }
    getControlPoints(t) {
        const a = this.points.length;
        t = Y.clamp(t, 0, 1);
        const o = ~~(t * (a - 1))
          , s = o === a - 1 ? o - 1 : o
          , n = s + 1
          , r = s > 0 ? s - 1 : s
          , d = n < a - 1 ? n + 1 : n;
        return {
            pt: t * (a - 1) - s,
            p0: this.points[r],
            p1: this.points[s],
            p2: this.points[n],
            p3: this.points[d]
        }
    }
    getTangent(t) {
        const {pt: a, p0: o, p1: s, p2: n, p3: r} = this.getControlPoints(t);
        return {
            x: Ja(a, o.x, s.x, n.x, r.x),
            y: Ja(a, o.y, s.y, n.y, r.y)
        }
    }
    getNormal(t) {
        const a = this.getTangent(t)
          , o = e.normalizeSafe(a, e.create(1, 0));
        return e.create(-o.y, o.x)
    }
    getPosition(t) {
        const {pt: a, p0: o, p1: s, p2: n, p3: r} = this.getControlPoints(t);
        return {
            x: Ya(a, o.x, s.x, n.x, r.x),
            y: Ya(a, o.y, s.y, n.y, r.y)
        }
    }
    getClosestT(t) {
        let a = Number.MAX_VALUE
          , o = 0;
        for (let I = 0; I < this.points.length - 1; I++) {
            const R = ei.distanceToLine(t, this.points[I], this.points[I + 1]);
            R < a && (a = R,
            o = I)
        }
        const s = o
          , n = s + 1
          , r = this.points[s]
          , d = this.points[n]
          , g = e.sub(d, r)
          , h = Y.clamp(e.dotProduct(e.sub(t, r), g) / e.dotProduct(g, g), 0, 1)
          , _ = this.points.length - 1
          , f = Y.clamp((s + h - .1) / _, 0, 1)
          , b = Y.clamp((s + h + .1) / _, 0, 1);
        let v = (s + h) / _
          , w = Number.MAX_VALUE;
        const k = 8;
        for (let I = 0; I <= k; I++) {
            const R = Y.lerp(I / k, f, b)
              , O = this.getPosition(R)
              , J = e.squaredLength(e.sub(O, t));
            J < w && (v = R,
            w = J)
        }
        const S = this.getTangent(v)
          , x = e.length(S);
        if (x > 0) {
            const I = this.getPosition(v)
              , R = e.dotProduct(S, e.sub(t, I)) / x
              , O = v + R / (x * _);
            e.squaredLength(e.sub(t, this.getPosition(O))) < e.squaredLength(e.sub(t, I)) && (v = O)
        }
        return v
    }
}
function Xa(i, t, a, o) {
    const s = e.clone(i.min)
      , n = e.create(i.max.x, i.min.y)
      , r = e.clone(i.max)
      , d = e.create(i.min.x, i.max.y)
      , g = [];
    a = a / 2;
    const h = ()=>o.get(-a, a);
    for (let _ = s.x + t; _ < n.x; _ += t)
        g.push(e.create(_, s.y + h()));
    for (let _ = n.y + t; _ < r.y; _ += t)
        g.push(e.create(n.x + h(), _));
    for (let _ = r.x - t; _ > d.x; _ -= t)
        g.push(e.create(_, r.y + h()));
    for (let _ = d.y - t; _ > s.y; _ -= t)
        g.push(e.create(d.x + h(), _));
    return g
}
class Jn {
    constructor(t, a) {
        c(this, "game");
        c(this, "startTime", Date.now());
        c(this, "_endTime");
        c(this, "target");
        c(this, "duration");
        c(this, "startValues", {});
        c(this, "endValues", {});
        c(this, "ease");
        c(this, "yoyo");
        c(this, "onUpdate");
        c(this, "onComplete");
        this.game = t,
        this.target = a.target;
        for (const o in a.to)
            this.startValues[o] = a.target[o],
            this.endValues[o] = a.to[o];
        this.duration = a.duration,
        this.ease = a.ease ?? (o=>o),
        this.yoyo = a.yoyo ?? !1,
        this.onUpdate = a.onUpdate,
        this.onComplete = a.onComplete,
        this._endTime = this.startTime + this.duration
    }
    get endTime() {
        return this._endTime
    }
    update() {
        var o, s;
        const t = Date.now();
        if (this.target instanceof Re && this.target.destroyed) {
            this.kill();
            return
        }
        const a = Y.clamp((t - this.startTime) / this.duration, 0, 1);
        for (const n in this.startValues) {
            const r = this.startValues[n]
              , d = this.endValues[n];
            this.target[n] = Y.lerp(r, d, this.ease(a))
        }
        (o = this.onUpdate) == null || o.call(this),
        t >= this.endTime && (this.yoyo ? (this.yoyo = !1,
        this.startTime = t,
        this._endTime = this.startTime + this.duration,
        [this.startValues,this.endValues] = [this.endValues, this.startValues]) : (this.kill(),
        (s = this.onComplete) == null || s.call(this)))
    }
    kill() {
        this.game.removeTween(this)
    }
}
var We = (i=>(i[i.Join = 0] = "Join",
i[i.PlayerJoin = 1] = "PlayerJoin",
i[i.PlayerLeave = 2] = "PlayerLeave",
i[i.Settings = 3] = "Settings",
i[i.Start = 4] = "Start",
i[i.Started = 5] = "Started",
i))(We || {});
const Vt = class Vt {
    constructor(t) {
        c(this, "particles", new Set);
        c(this, "emitters", new Set);
        if (this.game = t,
        Vt._instantiated)
            throw new Error("Class 'ParticleManager' has already been instantiated");
        Vt._instantiated = !0
    }
    update(t) {
        var a, o;
        for (const s of this.particles)
            s.update(t),
            s.dead && (this.particles.delete(s),
            s.image.destroy(),
            (o = (a = s.options).onDeath) == null || o.call(a, s));
        for (const s of this.emitters) {
            if (s.dead) {
                this.emitters.delete(s);
                continue
            }
            s.active && s.lastSpawn + s.delay < Date.now() && (this.spawnParticle(s.spawnOptions()),
            s.lastSpawn = Date.now())
        }
    }
    spawnParticle(t) {
        const a = new Yn(this,t);
        return this.particles.add(a),
        this.game.camera.addObject(a.image),
        a
    }
    spawnParticles(t, a) {
        for (let o = 0; o < t; o++)
            this.spawnParticle(a())
    }
    addEmitter(t) {
        const a = new Xn(t);
        return this.emitters.add(a),
        a
    }
    clear() {
        this.particles.clear(),
        this.emitters.clear()
    }
}
;
c(Vt, "_instantiated", !1);
let $i = Vt;
class Yn {
    constructor(t, a) {
        c(this, "position");
        c(this, "image");
        c(this, "_spawnTime", Date.now());
        c(this, "_deathTime", Date.now());
        c(this, "_dead", !1);
        c(this, "options");
        c(this, "scale");
        c(this, "alpha");
        c(this, "rotation");
        this.manager = t,
        this._deathTime = this._spawnTime + a.lifetime,
        this.position = a.position;
        const o = a.frames
          , s = typeof o == "string" ? o : o[nt(0, o.length - 1)];
        this.image = new W(s),
        this.image.tint = a.tint ?? 16777215,
        this.image.setZIndex(a.zIndex),
        this.scale = typeof a.scale == "number" ? a.scale : 1,
        this.alpha = typeof a.alpha == "number" ? a.alpha : 1,
        this.rotation = typeof a.rotation == "number" ? a.rotation : Ae(),
        this.options = a
    }
    get spawnTime() {
        return this._spawnTime
    }
    get deathTime() {
        return this._deathTime
    }
    get dead() {
        return this._dead
    }
    update(t) {
        this.position = e.add(this.position, e.scale(e.scale(this.options.speed, t), .001));
        const a = this.options
          , o = Date.now();
        let s;
        o >= this._deathTime ? (this._dead = !0,
        s = 1) : s = (o - this._spawnTime) / a.lifetime,
        typeof a.scale == "object" && (this.scale = Y.lerp(a.scale.start, a.scale.end, (a.scale.ease ?? (n=>n))(s))),
        typeof a.alpha == "object" && (this.alpha = Y.lerp(a.alpha.start, a.alpha.end, (a.alpha.ease ?? (n=>n))(s))),
        typeof a.rotation == "object" && (this.rotation = Y.lerp(a.rotation.start, a.rotation.end, (a.rotation.ease ?? (n=>n))(s))),
        this.image.position.copyFrom(se(this.position)),
        this.image.scale.set(this.scale),
        this.image.setRotation(this.rotation).setAlpha(this.alpha)
    }
    kill() {
        this._dead = !0,
        this.manager.particles.delete(this),
        this.image.destroy()
    }
}
class Xn {
    constructor(t) {
        c(this, "_dead", !1);
        c(this, "lastSpawn", 0);
        c(this, "delay");
        c(this, "active");
        c(this, "spawnOptions");
        this.delay = t.delay,
        this.active = t.active,
        this.spawnOptions = t.spawnOptions
    }
    get dead() {
        return this._dead
    }
    destroy() {
        this._dead = !0
    }
}
class Qe extends it {
    constructor(a, o, s) {
        super(a, o);
        c(this, "type", j.Obstacle);
        c(this, "damageable", !0);
        c(this, "image");
        c(this, "smokeEmitter");
        c(this, "particleFrames");
        c(this, "definition");
        c(this, "scale");
        c(this, "variation");
        c(this, "_door");
        c(this, "activated");
        c(this, "hitbox");
        c(this, "orientation", 0);
        c(this, "hitSound");
        this.image = new W,
        this.container.addChild(this.image),
        this.updateFromData(s, !0)
    }
    get door() {
        return this._door
    }
    get isDoor() {
        return this._door !== void 0
    }
    updateFromData(a, o=!1) {
        var h, _;
        let s;
        if (a.full) {
            const f = a.full
              , b = this.definition = f.definition;
            this.position = f.position,
            this.rotation = f.rotation.rotation,
            this.orientation = f.rotation.orientation,
            this.variation = f.variation,
            b.invisible && (this.container.visible = !1);
            const v = b.frames.particle ?? `${b.idString}_particle`;
            if (this.particleFrames = b.particleVariations !== void 0 ? Array.from({
                length: b.particleVariations
            }, (w,k)=>`${v}_${k + 1}`) : [v],
            (b.explosion ?? "emitParticles"in b) && !this.smokeEmitter && (this.smokeEmitter = this.game.particleManager.addEmitter({
                delay: 400,
                active: !1,
                spawnOptions: ()=>({
                    frames: "smoke_particle",
                    position: this.position,
                    zIndex: Math.max((b.zIndex ?? P.ObstaclesLayer1) + 1, P.Players),
                    lifetime: 3500,
                    scale: {
                        start: 0,
                        end: Z(4, 5)
                    },
                    alpha: {
                        start: .9,
                        end: 0
                    },
                    speed: e.fromPolar(Z(-1.9, -2.1), Z(5, 6))
                })
            })),
            b.sound && !b.role && !this.destroyed && ("names"in b.sound ? b.sound.names.forEach(w=>this.playSound(w, b.sound)) : this.playSound(b.sound.name, b.sound)),
            this.activated !== f.activated && (this.activated = f.activated,
            !o && !this.destroyed && (b.role === ee.Activatable && b.sound && ("names"in b.sound ? b.sound.names.forEach(w=>this.playSound(w, b.sound)) : this.playSound(b.sound.name, b.sound)),
            this.definition.idString === "airdrop_crate_locked"))) {
                const w = (k,S)=>({
                    zIndex: Math.max((this.definition.zIndex ?? P.Players) + 1, 4),
                    lifetime: 1e3,
                    scale: {
                        start: Z(.85, .95),
                        end: 0,
                        ease: ue.quarticIn
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        ease: ue.sexticIn
                    },
                    rotation: {
                        start: Ae(),
                        end: Ae()
                    },
                    speed: e.fromPolar(Ae(), Z(k, S))
                });
                this.game.particleManager.spawnParticle({
                    frames: "airdrop_particle_1",
                    position: this.position,
                    ...w(8, 18),
                    rotation: {
                        start: 0,
                        end: Z(Math.PI / 2, Math.PI * 2)
                    }
                }),
                s = "airdrop_crate_unlocking",
                this.addTimeout(()=>{
                    this.game.particleManager.spawnParticles(4, ()=>({
                        frames: "airdrop_particle_2",
                        position: this.hitbox.randomPoint(),
                        ...w(4, 9)
                    }))
                }
                , 800)
            }
            this.updateDoor(f, o)
        }
        const n = this.definition;
        this.scale = a.scale;
        const r = ((h = n.scale) == null ? void 0 : h.destroy) ?? 1
          , d = (this.scale - r) / ((((_ = n.scale) == null ? void 0 : _.spawnMax) ?? 1) - r);
        if (this.smokeEmitter && (this.smokeEmitter.active = !this.dead && ("emitParticles"in n && this.activated || d > 0 && d < .5),
        "emitParticles"in n ? this.smokeEmitter.delay = 300 : this.smokeEmitter.delay = Y.lerp(150, 3e3, d)),
        this.container.scale.set(this.dead ? 1 : this.scale),
        !this.dead && a.dead && (this.dead = !0,
        !o && !("replaceWith"in n && n.replaceWith))) {
            const f = b=>{
                this.playSound(b, {
                    falloff: .2,
                    maxRange: 96
                })
            }
            ;
            f(`${n.material}_destroyed`);
            for (const b of n.additionalDestroySounds)
                f(b);
            n.noResidue ? this.image.setVisible(!1) : this.image.setFrame(n.frames.residue ?? `${n.idString}_residue`),
            this.container.rotation = this.rotation,
            this.container.scale.set(this.scale),
            this.smokeEmitter && (this.smokeEmitter.active = !1,
            this.smokeEmitter.destroy()),
            this.game.particleManager.spawnParticles(10, ()=>({
                frames: this.particleFrames,
                position: this.hitbox.randomPoint(),
                zIndex: (n.zIndex ?? P.ObstaclesLayer1) + 1,
                lifetime: 1500,
                rotation: {
                    start: Ae(),
                    end: Ae()
                },
                scale: {
                    start: Z(.85, .95),
                    end: 0,
                    ease: ue.quarticIn
                },
                alpha: {
                    start: 1,
                    end: 0,
                    ease: ue.sexticIn
                },
                speed: e.fromPolar(Ae(), Z(4, 9) * (n.explosion ? 3 : 1))
            }))
        }
        this.container.zIndex = this.dead ? P.DeadObstacles : n.zIndex ?? P.ObstaclesLayer1,
        this.dead && Se[this.game.map.terrain.getFloor(this.position)].overlay && (this.container.zIndex = P.UnderWaterDeadObstacles),
        this._door === void 0 && (this.hitbox = n.hitbox.transform(this.position, this.scale, this.orientation));
        const g = se(this.position);
        if (this.container.position.copyFrom(g),
        this.image.setVisible(!(this.dead && n.noResidue)),
        s ?? (s = this.dead ? n.frames.residue ?? `${n.idString}_residue` : this.activated && n.frames.activated ? n.frames.activated : n.frames.base ?? n.idString),
        this.variation !== void 0 && !this.dead && (s += `_${this.variation + 1}`),
        !n.invisible && !n.wall && !(this.dead && n.noResidue) && this.image.setFrame(s),
        n.tint !== void 0 && this.image.setTint(n.tint),
        n.wall && !this.dead && n.hitbox instanceof l) {
            this.container.removeChildren();
            const f = n.hitbox.clone();
            f.scale(te);
            const b = new Ye
              , v = f.min.x
              , w = f.min.y
              , k = f.max.x - f.min.x
              , S = f.max.y - f.min.y;
            b.rect(v, w, k, S).fill({
                color: n.wall.borderColor
            }).roundRect(v + Rt, w + Rt, k - Rt * 2, S - Rt * 2, Rt).fill({
                color: n.wall.color
            }),
            this.container.addChild(b)
        }
        n.wall && this.dead && (this.container.removeChildren(),
        n.noResidue || this.container.addChild(this.image)),
        this.container.rotation = this.rotation
    }
    updateDoor(a, o=!1) {
        if (!(a != null && a.door) || a.definition.role !== ee.Door)
            return;
        const s = a.definition;
        this._door || (this._door = {
            offset: 0
        }),
        this.rotation = Ke.orientationToRotation(this.orientation);
        const n = nn(s, this.position, this.orientation);
        this._door.openHitbox = n.openHitbox,
        "openAltHitbox"in n && (this._door.openAltHitbox = n.openAltHitbox),
        this._door.locked = s.locked;
        let r = s.hitbox.transform(this.position, this.scale, this.orientation);
        switch (this._door.closedHitbox = r.clone(),
        a.door.offset) {
        case 1:
            {
                r = this._door.openHitbox.clone();
                break
            }
        case 3:
            {
                r = this._door.openAltHitbox.clone();
                break
            }
        }
        this.hitbox = this._door.hitbox = r;
        const d = a.door.offset;
        switch (s.operationStyle) {
        case "slide":
            if (o) {
                const g = d ? (s.slideFactor ?? 1) * (this.orientation & 1 ? r.min.y - r.max.y : r.min.x - r.max.x) * te : 0;
                this.image.setPos(g, 0)
            }
            break;
        case "swivel":
        default:
            o && this.image.setRotation(Ke.orientationToRotation(d)),
            this.image.anchor.set(0, .5),
            this.image.setPos(s.hingeOffset.x * te, s.hingeOffset.y * te);
            break
        }
        if (o)
            this._door.offset = d;
        else if (d !== this._door.offset) {
            this._door.offset = d;
            const g = s.doorSound ?? "door";
            if (this.playSound(`${g}_${d ? "open" : "close"}`, {
                falloff: .3,
                maxRange: 48
            }),
            s.operationStyle !== "slide")
                this.game.addTween({
                    target: this.image,
                    to: {
                        rotation: Ke.orientationToRotation(d)
                    },
                    duration: s.animationDuration ?? 150
                });
            else {
                const h = d ? (s.slideFactor ?? 1) * (this.orientation & 1 ? r.min.y - r.max.y : r.min.x - r.max.x) * te : 0;
                this.game.addTween({
                    target: this.image.position,
                    to: {
                        x: h,
                        y: 0
                    },
                    duration: 150
                })
            }
        }
    }
    canInteract(a) {
        return !this.dead && (this._door !== void 0 && !this._door.locked || this.definition.role === ee.Activatable && (a.activeItem.idString === this.definition.requiredItem || !this.definition.requiredItem) && !this.activated)
    }
    hitEffect(a, o) {
        var s;
        (s = this.hitSound) == null || s.stop(),
        this.hitSound = this.game.soundManager.play(`${this.definition.material}_hit_${zi() ? "1" : "2"}`, {
            position: a,
            falloff: .2,
            maxRange: 96
        }),
        this.game.particleManager.spawnParticle({
            frames: this.particleFrames,
            position: a,
            zIndex: Math.max((this.definition.zIndex ?? P.Players) + 1, 4),
            lifetime: 600,
            scale: {
                start: .9,
                end: .2
            },
            alpha: {
                start: 1,
                end: .65
            },
            speed: e.fromPolar(o + Z(-.3, .3), Z(2.5, 4.5))
        })
    }
    destroy() {
        var a;
        super.destroy(),
        this.image.destroy(),
        (a = this.smokeEmitter) == null || a.destroy()
    }
}
class rt extends it {
    constructor(a, o, s) {
        super(a, o);
        c(this, "type", j.Player);
        c(this, "teamID");
        c(this, "activeItem", ae.fromString("fists"));
        c(this, "_oldItem", this.activeItem);
        c(this, "equipment", {
            backpack: ae.fromString("bag")
        });
        c(this, "distTraveled", 0);
        c(this, "footstepSound");
        c(this, "actionSound");
        c(this, "action", {
            type: Xe.None,
            item: void 0
        });
        c(this, "damageable", !0);
        c(this, "hideEquipment", !1);
        c(this, "downed", !1);
        c(this, "beingRevived", !1);
        c(this, "bleedEffectInterval");
        c(this, "_skin", "");
        c(this, "images");
        c(this, "emote");
        c(this, "teammateName");
        c(this, "healingParticlesEmitter");
        c(this, "anims", {});
        c(this, "_emoteHideTimeout");
        c(this, "distSinceLastFootstep", 0);
        c(this, "helmetLevel", NaN);
        c(this, "vestLevel", NaN);
        c(this, "backpackLevel", NaN);
        c(this, "hitbox", new M($.player.radius));
        c(this, "floorType", "grass");
        c(this, "_bloodDecals", new Set);
        this.images = {
            aimTrail: new Zo({
                texture: W.getTexture("aimTrail"),
                width: 20,
                height: 6e3
            }),
            vest: new W().setVisible(!1),
            body: new W,
            leftFist: new W,
            rightFist: new W,
            leftLeg: a.teamMode ? new W().setPos(-35, 26).setZIndex(-1) : void 0,
            rightLeg: a.teamMode ? new W().setPos(-35, -26).setZIndex(-1) : void 0,
            backpack: new W().setPos(-35, 0).setVisible(!1).setZIndex(-1),
            helmet: new W().setPos(-8, 0).setVisible(!1).setZIndex(6),
            weapon: new W().setZIndex(3),
            altWeapon: new W().setZIndex(3),
            muzzleFlash: new W("muzzle_flash").setVisible(!1).setZIndex(7).setAnchor(e.create(0, .5)),
            waterOverlay: new W("water_overlay").setVisible(!1).setTint(je.water),
            blood: new Re
        },
        this.container.addChild(this.images.aimTrail, this.images.vest, this.images.body, this.images.leftFist, this.images.rightFist, ...a.teamMode ? [this.images.leftLeg, this.images.rightLeg] : [], this.images.backpack, this.images.helmet, this.images.weapon, this.images.altWeapon, this.images.muzzleFlash, this.images.waterOverlay, this.images.blood),
        this.images.blood.zIndex = 4,
        a.teamMode && (this.images.leftLeg.scale = this.images.rightLeg.scale = e.create(1.5, .8)),
        this.images.aimTrail.angle = 90,
        this.images.aimTrail.position = e.create(6e3, -8),
        this.images.aimTrail.alpha = 0,
        this.isActivePlayer || (this.images.aimTrail.alpha = 0);
        let n;
        this.emote = n = {
            background: new W("emote_background").setPos(0, 0),
            image: new W().setPos(0, 0),
            container: new Re
        },
        this.game.camera.addObject(n.container),
        n.container.addChild(n.background, n.image),
        n.container.zIndex = P.Emotes,
        n.container.visible = !1,
        this.updateFistsPosition(!1),
        this.updateWeapon(),
        this.healingParticlesEmitter = this.game.particleManager.addEmitter({
            delay: 350,
            active: !1,
            spawnOptions: ()=>{
                var d;
                let r = "";
                return ((d = this.action.item) == null ? void 0 : d.itemType) === C.Healing && (r = Qi[this.action.item.healType].toLowerCase()),
                {
                    frames: `${r}_particle`,
                    position: this.hitbox.randomPoint(),
                    lifetime: 1e3,
                    zIndex: P.Players,
                    rotation: 0,
                    alpha: {
                        start: 1,
                        end: 0
                    },
                    scale: {
                        start: 1,
                        end: 1.5
                    },
                    speed: e.create(Z(-1, 1), -3)
                }
            }
        }),
        this.images.body.eventMode = "static",
        this.images.body.on("pointerdown", ()=>{
            !this.game.spectating || this.game.activePlayerID === this.id || this.game.sendPacket(pi.create({
                spectateAction: ze.SpectateSpecific,
                playerID: this.id
            }))
        }
        ),
        this.updateFromData(s, !0)
    }
    get isActivePlayer() {
        return this.id === this.game.activePlayerID
    }
    updateContainerPosition() {
        super.updateContainerPosition(),
        this.destroyed || (this.emote.container.position = e.addComponent(this.container.position, 0, -175),
        this.teammateName && (this.teammateName.container.position = e.addComponent(this.container.position, 0, 95)))
    }
    spawnCasingParticles(a, o=!1) {
        const s = this.activeItem
          , n = this._getItemReference()
          , r = this.rotation + Math.PI / 2
          , d = n.casingParticles.filter(g=>(g.on ?? "fire") === a);
        if (d.length)
            for (const g of d) {
                const h = e.clone(g.position);
                s.isDual && (h.y = (o ? -1 : 1) * (h.y + s.leftRightOffset));
                const _ = ()=>{
                    var v, w;
                    const f = (v = g.velocity) == null ? void 0 : v.x
                      , b = (w = g.velocity) == null ? void 0 : w.y;
                    this.game.particleManager.spawnParticles(g.count ?? 1, ()=>{
                        const k = Z(Math.PI / 2, Math.PI)
                          , S = At((f == null ? void 0 : f.min) ?? 2, (f == null ? void 0 : f.max) ?? -5, (b == null ? void 0 : b.min) ?? 10, (b == null ? void 0 : b.max) ?? 15);
                        return f != null && f.randomSign && (S.x *= Qt()),
                        b != null && b.randomSign && (S.y *= Qt()),
                        {
                            frames: g.frame ?? ut.fromString(s.ammoType).defaultCasingFrame,
                            zIndex: P.Players,
                            position: e.add(this.position, e.rotate(h, this.rotation)),
                            lifetime: 400,
                            scale: {
                                start: .8,
                                end: .4
                            },
                            alpha: {
                                start: 1,
                                end: 0,
                                ease: ue.sexticIn
                            },
                            rotation: {
                                start: r,
                                end: r + Math.sign(S.y) * k
                            },
                            speed: e.rotate(e.addComponent(S, -(k / 4), 0), this.rotation)
                        }
                    }
                    )
                }
                ;
                if (!g.ejectionDelay)
                    _();
                else {
                    const f = s.idString;
                    this.addTimeout(()=>{
                        f === this.activeItem.idString && _()
                    }
                    , g.ejectionDelay)
                }
            }
    }
    updateFromData(a, o=!1) {
        var _, f, b, v, w;
        const {uiManager: s} = this.game
          , n = e.clone(this.position);
        this.position = a.position,
        this.hitbox.position = this.position,
        this.rotation = a.rotation;
        const r = !this.game.console.getBuiltInCVar("cv_movement_smoothing");
        (r || o) && (this.container.rotation = this.rotation),
        this.isActivePlayer && (this.game.soundManager.position = this.position,
        this.game.map.setPosition(this.position),
        r && (this.game.camera.position = se(this.position)),
        this.game.console.getBuiltInCVar("pf_show_pos") && s.debugReadouts.pos.text(`X: ${this.position.x.toFixed(2)} Y: ${this.position.y.toFixed(2)}`));
        const d = this.game.map.terrain.getFloor(this.position)
          , g = Se[d].overlay;
        let h = o || Se[this.floorType].overlay !== g;
        if (d !== this.floorType && (g && this.images.waterOverlay.setVisible(!0),
        (_ = this.anims.waterOverlay) == null || _.kill(),
        this.anims.waterOverlay = this.game.addTween({
            target: this.images.waterOverlay,
            to: {
                alpha: g ? 1 : 0
            },
            duration: 200,
            onComplete: ()=>{
                g || this.images.waterOverlay.setVisible(!1),
                this.anims.waterOverlay = void 0
            }
        })),
        this.floorType = d,
        n !== void 0 && (this.distSinceLastFootstep += Ue.distance(n, this.position),
        this.distTraveled += Ue.distance(n, this.position),
        this.distTraveled > 8 && this.downed && (this.playAnimation(ke.Downed),
        this.distTraveled = 0),
        this.distSinceLastFootstep > 10 && (this.footstepSound = this.playSound(`${this.floorType}_step_${nt(1, 2)}`, {
            falloff: .6,
            maxRange: 48
        }),
        this.distSinceLastFootstep = 0,
        Se[d].particles))) {
            const k = {
                frames: "ripple_particle",
                zIndex: P.Ground,
                position: this.hitbox.randomPoint(),
                lifetime: 1e3,
                speed: e.create(0, 0)
            };
            this.game.particleManager.spawnParticle({
                ...k,
                scale: {
                    start: Z(.45, .55),
                    end: Z(2.95, 3.05)
                },
                alpha: {
                    start: Z(.55, .65),
                    end: 0
                }
            }),
            this.game.particleManager.spawnParticle({
                ...k,
                scale: {
                    start: Z(.15, .35),
                    end: Z(1.45, 1.55)
                },
                alpha: {
                    start: Z(.25, .35),
                    end: 0
                }
            })
        }
        if ((o || !this.game.console.getBuiltInCVar("cv_movement_smoothing")) && (this.container.position.copyFrom(se(this.position)),
        this.emote.container.position.copyFrom(e.add(se(this.position), e.create(0, -175))),
        (f = this.teammateName) == null || f.container.position.copyFrom(e.add(se(this.position), e.create(0, 95)))),
        a.animation !== void 0 && this.playAnimation(a.animation),
        a.full) {
            const k = a.full;
            if (this.container.visible = !k.dead,
            this.dead = k.dead,
            this.teamID = a.full.teamID,
            !this.isActivePlayer && !this.teammateName && !this.dead && this.teamID === this.game.teamID) {
                const oe = this.game.playerNames.get(this.id);
                this.teammateName = {
                    text: new Ji({
                        text: s.getRawPlayerName(this.id),
                        style: {
                            fill: oe != null && oe.hasColor ? oe == null ? void 0 : oe.nameColor : "#00ffff",
                            fontSize: 36,
                            fontFamily: "Inter",
                            fontWeight: "600",
                            dropShadow: {
                                alpha: .8,
                                color: "black",
                                blur: 2,
                                distance: 2
                            }
                        }
                    }),
                    badge: oe != null && oe.badge ? new W(oe.badge.idString) : void 0,
                    container: new Re
                };
                const {text: dt, badge: xe, container: Tt} = this.teammateName;
                if (dt.anchor.set(.5),
                Tt.addChild(this.teammateName.text),
                xe) {
                    const Ut = xe.width;
                    xe.width = dt.height / 1.25,
                    xe.height *= xe.width / Ut,
                    xe.position = e.create(dt.width / 2 + 20, 0),
                    Tt.addChild(xe)
                }
                Tt.zIndex = P.DeathMarkers,
                this.game.camera.addObject(Tt)
            }
            if (this.container.alpha = k.invulnerable ? .5 : 1,
            this.downed !== k.downed && (this.downed = k.downed,
            h = !0,
            this.updateFistsPosition(!1),
            this.updateWeapon(o),
            this.updateEquipment()),
            this.beingRevived !== k.beingRevived && (this.beingRevived = k.beingRevived,
            this.isActivePlayer && (this.beingRevived ? s.animateAction(z("action_being_revived"), $.player.reviveTime, !0) : s.cancelAction())),
            this.downed && !this.beingRevived && !this.bleedEffectInterval) {
                const oe = ()=>this.hitEffect(this.position, Ae(), "bleed");
                oe(),
                this.bleedEffectInterval = setInterval(oe, 1e3)
            }
            (this.dead || this.beingRevived) && (clearInterval(this.bleedEffectInterval),
            this.bleedEffectInterval = void 0),
            this.dead && (this.teammateName && (this.teammateName.container.visible = !1),
            this.game.console.getBuiltInCVar("cv_cooler_graphics") && this.game.particleManager.spawnParticles(nt(15, 30), ()=>({
                frames: "blood_particle",
                lifetime: nt(1e3, 3e3),
                position: this.position,
                alpha: {
                    start: 1,
                    end: 0
                },
                scale: {
                    start: Z(.8, 1.6),
                    end: 0
                },
                speed: gt(e.create(0, 0), 4),
                zIndex: P.Players + 1
            }))),
            this._oldItem = this.activeItem;
            const S = this.activeItem !== k.activeItem;
            this.activeItem = k.activeItem;
            const x = k.skin.idString;
            this.isActivePlayer && (s.skinID = x,
            s.updateWeapons()),
            this._skin = x;
            const I = ae.fromString(x)
              , R = I.grassTint ? Xi : 16777215
              , {body: O, leftFist: J, rightFist: V, leftLeg: B, rightLeg: le} = this.images;
            O.setFrame(`${x}_base`).setTint(R),
            J.setFrame(`${x}_fist`).setTint(R),
            V.setFrame(`${x}_fist`).setTint(R),
            B == null || B.setFrame(`${x}_fist`).setTint(R),
            le == null || le.setFrame(`${x}_fist`).setTint(R);
            const {hideEquipment: ce, helmetLevel: F, vestLevel: re, backpackLevel: Oe} = this;
            this.hideEquipment = I.hideEquipment,
            this.helmetLevel = ((b = this.equipment.helmet = k.helmet) == null ? void 0 : b.level) ?? 0,
            this.vestLevel = ((v = this.equipment.vest = k.vest) == null ? void 0 : v.level) ?? 0,
            this.backpackLevel = (this.equipment.backpack = k.backpack).level;
            const Fe = ai.definitions.find(oe=>oe.level === this.backpackLevel)
              , qe = I.backpackTint ?? (Fe == null ? void 0 : Fe.defaultTint) ?? 16777215;
            this.images.backpack.setTint(qe),
            (ce !== this.hideEquipment || F !== this.helmetLevel || re !== this.vestLevel || Oe !== this.backpackLevel) && this.updateEquipment(),
            S && (this.updateFistsPosition(!0),
            this.updateWeapon(o))
        }
        if (h && (this.container.zIndex = g ? this.downed ? P.UnderwaterDownedPlayers : P.UnderwaterPlayers : this.downed ? P.DownedPlayers : P.Players),
        a.action !== void 0) {
            const k = a.action;
            let S = "";
            switch (this.healingParticlesEmitter.active = !1,
            (w = this.actionSound) == null || w.stop(),
            k.type) {
            case Xe.None:
                {
                    this.action.type === Xe.Revive && (this.updateFistsPosition(!0),
                    this.updateWeapon()),
                    this.isActivePlayer && s.cancelAction();
                    break
                }
            case Xe.Reload:
                {
                    const x = this.activeItem;
                    x.isDual && this.spawnCasingParticles("reload", !0),
                    this.spawnCasingParticles("reload", !1),
                    S = `${x.idString}_reload`,
                    this.isActivePlayer && s.animateAction(z("action_reloading"), x.reloadTime);
                    break
                }
            case Xe.UseItem:
                {
                    const x = k.item;
                    S = x.idString,
                    this.healingParticlesEmitter.active = !0,
                    this.isActivePlayer && s.animateAction(z(`action_${x.idString}_use`, {
                        item: z(x.idString)
                    }), x.useTime);
                    break
                }
            case Xe.Revive:
                {
                    this.isActivePlayer && s.animateAction(z("action_reviving"), $.player.reviveTime);
                    break
                }
            }
            S && (this.actionSound = this.playSound(S, {
                falloff: .6,
                maxRange: 48
            })),
            this.action = k
        }
    }
    _getItemReference() {
        const a = this.activeItem;
        return a.itemType === C.Gun && a.isDual ? ae.fromString(a.singleVariant) : a
    }
    _getOffset() {
        const a = this.activeItem;
        return a.itemType === C.Gun && a.isDual ? a.leftRightOffset * te : 0
    }
    updateFistsPosition(a) {
        var r, d, g, h, _, f, b;
        if ((r = this.anims.leftFist) == null || r.kill(),
        (d = this.anims.rightFist) == null || d.kill(),
        (g = this.anims.weapon) == null || g.kill(),
        (h = this.images.leftLeg) == null || h.setVisible(this.downed),
        (_ = this.images.rightLeg) == null || _.setVisible(this.downed),
        this.downed) {
            this.images.leftFist.setPos(38, -35),
            this.images.rightFist.setPos(38, 35),
            (f = this.images.leftLeg) == null || f.setPos(-35, 26),
            (b = this.images.rightLeg) == null || b.setPos(-35, -26);
            return
        }
        const o = this._getItemReference()
          , s = o.fists ?? oo
          , n = this._getOffset();
        if (a) {
            const v = "animationDuration"in s ? s.animationDuration : 150;
            this.anims.leftFist = this.game.addTween({
                target: this.images.leftFist,
                to: {
                    x: s.left.x,
                    y: s.left.y - n
                },
                duration: v,
                onComplete: ()=>{
                    this.anims.leftFist = void 0
                }
            }),
            this.anims.rightFist = this.game.addTween({
                target: this.images.rightFist,
                to: {
                    x: s.right.x,
                    y: s.right.y + n
                },
                duration: v,
                onComplete: ()=>{
                    this.anims.rightFist = void 0
                }
            })
        } else
            this.images.leftFist.setPos(s.left.x, s.left.y - n),
            this.images.rightFist.setPos(s.right.x, s.right.y + n);
        if (o.image) {
            const {image: {position: v, angle: w}} = o;
            this.images.weapon.setPos(v.x, v.y + n),
            this.images.altWeapon.setPos(v.x, v.y - n),
            this.images.weapon.setAngle(w)
        }
    }
    updateWeapon(a=!1) {
        var g, h, _, f;
        if (this.downed) {
            this.images.weapon.setVisible(!1),
            this.images.altWeapon.setVisible(!1),
            this.images.muzzleFlash.setVisible(!1),
            this.images.leftFist.setZIndex(-1),
            this.images.rightFist.setZIndex(-1),
            this.container.sortChildren();
            return
        }
        const o = this.activeItem
          , s = this._getItemReference()
          , {fists: n, image: r} = s
          , d = r !== void 0;
        if (d) {
            const b = `${s.idString}${o.itemType === C.Gun || r.separateWorldImage ? "_world" : ""}`
              , {angle: v, position: {x: w, y: k}} = r;
            this.images.weapon.setFrame(b),
            this.images.altWeapon.setFrame(b),
            this.images.weapon.setAngle(v),
            this.images.altWeapon.setAngle(v),
            this.activeItem !== this._oldItem && ((g = this.anims.muzzleFlashFade) == null || g.kill(),
            (h = this.anims.muzzleFlashRecoil) == null || h.kill(),
            this.images.muzzleFlash.alpha = 0,
            this.isActivePlayer && !a && this.game.soundManager.play(`${s.idString}_switch`));
            const S = this._getOffset();
            this.images.weapon.setPos(w, k + S),
            this.images.altWeapon.setPos(w, k - S)
        }
        switch (this.images.weapon.setVisible(d),
        this.images.muzzleFlash.setVisible(d),
        this.images.altWeapon.setVisible(o.itemType === C.Gun && (o.isDual ?? !1)),
        o.itemType) {
        case C.Gun:
            {
                this.images.rightFist.setZIndex(n.rightZIndex),
                this.images.leftFist.setZIndex(n.leftZIndex),
                this.images.weapon.setZIndex((r == null ? void 0 : r.zIndex) ?? 2),
                this.images.altWeapon.setZIndex(2),
                this.images.body.setZIndex(3);
                break
            }
        case C.Melee:
            {
                this.images.leftFist.setZIndex(4),
                this.images.rightFist.setZIndex(4),
                this.images.body.setZIndex(2),
                this.images.weapon.setZIndex(((_ = s.image) == null ? void 0 : _.zIndex) ?? 1);
                break
            }
        case C.Throwable:
            {
                this.images.leftFist.setZIndex(4),
                this.images.rightFist.setZIndex(4),
                this.images.body.setZIndex(2),
                this.images.weapon.setZIndex(((f = s.image) == null ? void 0 : f.zIndex) ?? 5);
                break
            }
        }
        this.images.waterOverlay.setZIndex(this.images.body.zIndex + 1),
        this.container.sortChildren()
    }
    updateEquipment() {
        for (const a of ["helmet", "vest", "backpack"])
            this.updateEquipmentWorldImage(a, this.equipment[a]),
            this.isActivePlayer && this.updateEquipmentSlot(a, this.equipment[a])
    }
    updateEquipmentWorldImage(a, o) {
        const s = this.images[a];
        o && o.level > 0 && !this.hideEquipment && (a !== "backpack" || !this.downed) ? (s.setFrame(`${o.idString}_world`).setVisible(!0),
        a === "helmet" && s.setPos(this.downed ? 10 : -8, 0)) : s.setVisible(!1)
    }
    updateEquipmentSlot(a, o) {
        const s = m(`#${a}-slot`);
        if (o && o.level > 0) {
            s.children(".item-name").text(`Lvl. ${o.level}`),
            s.children(".item-image").attr("src", `./img/game/loot/${o.idString}.svg`);
            let n = z(o.idString);
            o.itemType === C.Armor && (n = z("tt_reduces", {
                item: `${z(o.idString)}<br>`,
                percent: (o.damageReduction * 100).toString()
            })),
            s.children(".item-tooltip").html(n)
        }
        s.css("visibility", ((o == null ? void 0 : o.level) ?? 0) > 0 ? "visible" : "hidden"),
        s[0].addEventListener("pointerdown", n=>{
            n.stopImmediatePropagation(),
            n.button === 2 && o && this.game.teamMode && this.game.inputManager.addAction({
                type: L.DropItem,
                item: o
            })
        }
        ),
        a === "backpack" && this.game.uiManager.updateItems()
    }
    getEquipment(a) {
        switch (a) {
        case "helmet":
            return this.equipment.helmet;
        case "vest":
            return this.equipment.vest;
        case "backpack":
            return this.equipment.backpack
        }
    }
    canInteract(a) {
        return this.game.teamMode && !a.downed && this.downed && !this.beingRevived && this !== a && this.teamID === a.teamID
    }
    sendEmote(a) {
        var s, n, r;
        (s = this.anims.emote) == null || s.kill(),
        (n = this.anims.emoteHide) == null || n.kill(),
        (r = this._emoteHideTimeout) == null || r.kill(),
        this.playSound("emote", {
            falloff: .4,
            maxRange: 128
        }),
        this.emote.image.setFrame(a.idString);
        const o = this.emote.container;
        o.visible = !0,
        o.scale.set(0),
        o.alpha = 0,
        this.anims.emote = this.game.addTween({
            target: o,
            to: {
                alpha: 1
            },
            duration: 250,
            ease: ue.backOut,
            onUpdate: ()=>{
                o.scale.set(o.alpha)
            }
            ,
            onComplete: ()=>{
                this.anims.emote = void 0
            }
        }),
        this._emoteHideTimeout = this.addTimeout(()=>{
            this.anims.emoteHide = this.game.addTween({
                target: o,
                to: {
                    alpha: 0
                },
                duration: 200,
                onUpdate: ()=>{
                    o.scale.set(o.alpha)
                }
                ,
                onComplete: ()=>{
                    var d;
                    this._emoteHideTimeout = void 0,
                    this.anims.emoteHide = void 0,
                    o.visible = !1,
                    (d = this.anims.emote) == null || d.kill(),
                    this.anims.emote = void 0,
                    this._emoteHideTimeout = void 0
                }
            })
        }
        , 4e3)
    }
    playAnimation(a) {
        var o, s, n, r, d;
        switch (a) {
        case ke.Melee:
            {
                if (this.activeItem.itemType !== C.Melee) {
                    console.warn(`Attempted to play melee animation with non-melee item '${this.activeItem.idString}'`);
                    return
                }
                this.updateFistsPosition(!1);
                const g = this.activeItem;
                let h = Math.random() < .5;
                g.fists.randomFist || (h = !0);
                const _ = g.fists.animationDuration;
                (!g.fists.randomFist || !h) && (this.anims.leftFist = this.game.addTween({
                    target: this.images.leftFist,
                    to: {
                        x: g.fists.useLeft.x,
                        y: g.fists.useLeft.y
                    },
                    duration: _,
                    ease: ue.sineIn,
                    yoyo: !0
                })),
                h && (this.anims.rightFist = this.game.addTween({
                    target: this.images.rightFist,
                    to: {
                        x: g.fists.useRight.x,
                        y: g.fists.useRight.y
                    },
                    duration: _,
                    ease: ue.sineIn,
                    yoyo: !0
                })),
                g.image !== void 0 && (this.anims.weapon = this.game.addTween({
                    target: this.images.weapon,
                    to: {
                        x: g.image.usePosition.x,
                        y: g.image.usePosition.y,
                        angle: g.image.useAngle
                    },
                    duration: _,
                    ease: ue.sineIn,
                    yoyo: !0
                })),
                this.playSound(g.swingSound, {
                    falloff: .4,
                    maxRange: 96
                }),
                this.addTimeout(()=>{
                    const f = this.hitbox
                      , b = e.add(this.position, e.rotate(g.offset, this.rotation))
                      , v = new M(g.radius,b)
                      , w = Ke.betweenPoints(this.position, b);
                    for (const k of [...this.game.objects].filter(S=>!S.dead && S !== this && S.damageable && (S instanceof Qe || S instanceof rt) && S.hitbox.collidesWith(v)).sort((S,x)=>S instanceof Qe && S.definition.noMeleeCollision ? 1 / 0 : x instanceof Qe && x.definition.noMeleeCollision ? -1 / 0 : S.hitbox.distanceTo(f).distance - x.hitbox.distanceTo(f).distance).slice(0, g.maxTargets))
                        k.hitEffect(b, w)
                }
                , 50);
                break
            }
        case ke.Downed:
            {
                this.updateFistsPosition(!1),
                this.images.rightLeg && !this.destroyed && (this.anims.rightLeg = this.game.addTween({
                    target: this.images.rightLeg,
                    to: {
                        x: this.images.rightLeg.x - 10,
                        y: this.images.rightLeg.y
                    },
                    duration: 200,
                    ease: ue.sineIn,
                    yoyo: !0,
                    onComplete: ()=>{
                        this.anims.rightLeg = void 0
                    }
                }),
                this.anims.leftFist = this.game.addTween({
                    target: this.images.leftFist,
                    to: {
                        x: this.images.leftFist.x - 10,
                        y: this.images.leftFist.y - 5
                    },
                    duration: 200,
                    ease: ue.sineIn,
                    yoyo: !0,
                    onComplete: ()=>{
                        this.anims.leftFist = void 0
                    }
                })),
                setTimeout(()=>{
                    this.images.leftLeg && !this.destroyed && (this.anims.leftLeg = this.game.addTween({
                        target: this.images.leftLeg,
                        to: {
                            x: this.images.leftLeg.x - 10,
                            y: this.images.leftLeg.y
                        },
                        duration: 200,
                        ease: ue.sineIn,
                        yoyo: !0,
                        onComplete: ()=>{
                            this.anims.leftLeg = void 0
                        }
                    }),
                    this.anims.rightFist = this.game.addTween({
                        target: this.images.rightFist,
                        to: {
                            x: this.images.rightFist.x - 10,
                            y: this.images.rightFist.y + 5
                        },
                        duration: 200,
                        ease: ue.sineIn,
                        yoyo: !0,
                        onComplete: ()=>{
                            this.anims.rightFist = void 0
                        }
                    }))
                }
                , 200);
                break
            }
        case ke.GunFire:
        case ke.GunFireAlt:
        case ke.LastShot:
            {
                if (this.activeItem.itemType !== C.Gun) {
                    console.warn(`Attempted to play gun animation (${ke[a]}) with non-gun item '${this.activeItem.idString}'`);
                    return
                }
                const g = this.activeItem
                  , {idString: h, image: {position: {x: _}}, fists: {left: {x: f}, right: {x: b}}} = this._getItemReference();
                this.playSound(`${h}_fire`, {
                    falloff: .5
                }),
                a === ke.LastShot && this.playSound(`${h}_last_shot`, {
                    falloff: .5
                });
                const v = g.isDual ? a === ke.GunFireAlt : void 0;
                this.updateFistsPosition(!1);
                const w = te * (1 - g.recoilMultiplier);
                if (this.anims.weapon = this.game.addTween({
                    target: v ? this.images.altWeapon : this.images.weapon,
                    to: {
                        x: _ - w
                    },
                    duration: 50,
                    yoyo: !0
                }),
                g.gasParticles && this.game.console.getBuiltInCVar("cv_cooler_graphics")) {
                    const k = g.gasParticles
                      , S = .5 * k.spread;
                    this.game.particleManager.spawnParticles(k.amount, ()=>({
                        frames: "small_gas",
                        lifetime: nt(k.minLife, k.maxSize),
                        scale: {
                            start: 0,
                            end: Z(k.minSize, k.maxSize)
                        },
                        position: e.add(gt(this.position, 2), e.fromPolar(this.rotation, g.length)),
                        speed: e.fromPolar(this.rotation + Ke.degreesToRadians(Z(-S, S)), Z(k.minSpeed, k.maxSpeed)),
                        zIndex: P.ObstaclesLayer5 - 2,
                        alpha: {
                            start: Z(.5, 1),
                            end: 0
                        },
                        tint: 5592405
                    }))
                }
                if (!g.noMuzzleFlash) {
                    const k = this.images.muzzleFlash;
                    k.x = g.length * te,
                    k.y = (v ? -1 : 1) * this._getOffset(),
                    k.setVisible(!0),
                    k.alpha = .95,
                    k.scale = e.create(Z(.75, 1.25), Z(.5, 1.5) * (zi() ? 1 : -1)),
                    (o = this.anims.muzzleFlashFade) == null || o.kill(),
                    (s = this.anims.muzzleFlashRecoil) == null || s.kill(),
                    this.anims.muzzleFlashFade = this.game.addTween({
                        target: k,
                        to: {
                            alpha: 0
                        },
                        duration: 100,
                        onComplete: ()=>{
                            k.setVisible(!1),
                            this.anims.muzzleFlashFade = void 0
                        }
                    }),
                    this.anims.muzzleFlashRecoil = this.game.addTween({
                        target: k,
                        to: {
                            x: k.x - w
                        },
                        duration: 50,
                        yoyo: !0,
                        onComplete: ()=>{
                            this.anims.muzzleFlashRecoil = void 0
                        }
                    })
                }
                v !== !1 && (this.anims.leftFist = this.game.addTween({
                    target: this.images.leftFist,
                    to: {
                        x: f - w
                    },
                    duration: 50,
                    yoyo: !0,
                    onComplete: ()=>{
                        this.anims.leftFist = void 0
                    }
                })),
                v !== !0 && (this.anims.rightFist = this.game.addTween({
                    target: this.images.rightFist,
                    to: {
                        x: b - w
                    },
                    duration: 50,
                    yoyo: !0,
                    onComplete: ()=>{
                        this.anims.rightFist = void 0
                    }
                })),
                this.spawnCasingParticles("fire", v);
                break
            }
        case ke.GunClick:
            {
                this.playSound("gun_click", {
                    falloff: .8,
                    maxRange: 48
                });
                break
            }
        case ke.ThrowableCook:
            {
                if (this.activeItem.itemType !== C.Throwable) {
                    console.warn(`Attempted to play throwable cooking animation with non-throwable item '${this.activeItem.idString}'`);
                    return
                }
                this.playSound("throwable_pin");
                const g = this.activeItem
                  , h = this.images.weapon
                  , _ = this.images.altWeapon;
                h.visible = !0,
                _.setFrame(g.animation.pinImage),
                _.setPos(35, 0),
                _.setZIndex(P.Players + 1),
                h.setFrame(g.animation.cook.cookingImage ?? g.animation.liveImage),
                this.updateFistsPosition(!1),
                this.anims.leftFist = this.game.addTween({
                    target: this.images.leftFist,
                    to: {
                        x: 35,
                        y: 0
                    },
                    duration: g.cookTime / 2,
                    onComplete: ()=>{
                        this.anims.leftFist = this.game.addTween({
                            target: this.images.leftFist,
                            to: e.scale(g.animation.cook.leftFist, te),
                            duration: g.cookTime / 2,
                            onComplete: ()=>{
                                this.anims.leftFist = void 0
                            }
                        }),
                        _.visible = !0,
                        this.anims.pin = this.game.addTween({
                            target: _,
                            duration: g.cookTime / 2,
                            to: {
                                ...e.add(e.scale(g.animation.cook.leftFist, te), e.create(15, 0))
                            },
                            onComplete: ()=>{
                                this.anims.pin = void 0
                            }
                        })
                    }
                }),
                g.cookable && this.game.particleManager.spawnParticle({
                    frames: g.animation.leverImage,
                    lifetime: 600,
                    position: this.position,
                    zIndex: P.Players + 1,
                    speed: e.rotate(e.create(8, 8), this.rotation),
                    rotation: this.rotation,
                    alpha: {
                        start: 1,
                        end: 0
                    },
                    scale: {
                        start: .8,
                        end: 1
                    }
                }),
                this.anims.weapon = this.game.addTween({
                    target: h,
                    to: {
                        x: 25,
                        y: 10
                    },
                    duration: g.cookTime / 2,
                    onComplete: ()=>{
                        this.anims.weapon = void 0
                    }
                }),
                this.anims.rightFist = this.game.addTween({
                    target: this.images.rightFist,
                    to: {
                        x: 25,
                        y: 10
                    },
                    duration: g.cookTime / 2,
                    onComplete: ()=>{
                        this.anims.weapon = this.game.addTween({
                            target: h,
                            to: e.scale(g.animation.cook.rightFist, te),
                            duration: g.cookTime / 2,
                            onComplete: ()=>{
                                this.anims.weapon = void 0
                            }
                        }),
                        this.anims.rightFist = this.game.addTween({
                            target: this.images.rightFist,
                            to: e.scale(g.animation.cook.rightFist, te),
                            duration: g.cookTime / 2,
                            onComplete: ()=>{
                                this.anims.rightFist = void 0
                            }
                        })
                    }
                });
                break
            }
        case ke.ThrowableThrow:
            {
                if (this.activeItem.itemType !== C.Throwable) {
                    console.warn(`Attempted to play throwable throwing animation with non-throwable item '${this.activeItem.idString}'`);
                    return
                }
                this.playSound("throwable_throw");
                const g = this.activeItem;
                this.images.altWeapon.visible = !1;
                const h = this.images.weapon;
                h.visible = !1,
                h.setFrame(g.idString),
                g.cookable || this.game.particleManager.spawnParticle({
                    frames: g.animation.leverImage,
                    lifetime: 600,
                    position: this.position,
                    zIndex: P.Players + 1,
                    speed: e.rotate(e.create(8, 8), this.rotation),
                    rotation: this.rotation,
                    alpha: {
                        start: 1,
                        end: 0
                    },
                    scale: {
                        start: .8,
                        end: 1
                    }
                }),
                (n = this.anims.rightFist) == null || n.kill(),
                (r = this.anims.leftFist) == null || r.kill(),
                (d = this.anims.weapon) == null || d.kill(),
                this.anims.leftFist = this.game.addTween({
                    target: this.images.leftFist,
                    to: e.scale(g.animation.throw.leftFist, te),
                    duration: g.throwTime,
                    onComplete: ()=>{
                        this.anims.leftFist = void 0,
                        h.setVisible(!0),
                        this.updateFistsPosition(!0)
                    }
                }),
                this.anims.rightFist = this.game.addTween({
                    target: this.images.rightFist,
                    to: e.scale(g.animation.throw.rightFist, te),
                    duration: g.throwTime,
                    onComplete: ()=>{
                        this.anims.rightFist = void 0
                    }
                });
                break
            }
        case ke.Revive:
            {
                this.images.weapon.setVisible(!1),
                this.images.altWeapon.setVisible(!1),
                this.images.muzzleFlash.setVisible(!1),
                this.images.leftFist.setZIndex(4),
                this.images.rightFist.setZIndex(4),
                this.anims.leftFist = this.game.addTween({
                    target: this.images.leftFist,
                    to: e.create(28, -45),
                    duration: 100,
                    onComplete: ()=>{
                        this.anims.leftFist = void 0
                    }
                }),
                this.anims.rightFist = this.game.addTween({
                    target: this.images.rightFist,
                    to: e.create(58, 48),
                    duration: 100,
                    onComplete: ()=>{
                        this.anims.rightFist = void 0
                    }
                });
                break
            }
        }
    }
    get bloodDecals() {
        return this._bloodDecals
    }
    hitEffect(a, o, s) {
        if (this.game.soundManager.play(s ?? (zi() ? "player_hit_1" : "player_hit_2"), {
            position: a,
            falloff: .2,
            maxRange: 96
        }),
        this.game.particleManager.spawnParticle({
            frames: "blood_particle",
            zIndex: P.Players + .5,
            position: a,
            lifetime: 1e3,
            scale: {
                start: .5,
                end: 1
            },
            alpha: {
                start: 1,
                end: 0
            },
            speed: e.fromPolar(o, Z(.5, 1))
        }),
        this.game.console.getBuiltInCVar("cv_cooler_graphics") && !this.downed) {
            if (this._bloodDecals.add(this.game.particleManager.spawnParticle({
                frames: "blood_particle",
                zIndex: P.Decals,
                position: gt(a, 2.5),
                lifetime: 6e4 * (this.floorType === "water" ? .1 : 1),
                scale: Z(.8, 1.6),
                alpha: {
                    start: this.floorType !== "water" ? 1 : .5,
                    end: 0,
                    ease: ue.expoIn
                },
                speed: e.create(0, 0),
                tint: this.floorType !== "water" ? 15658734 : 11206655,
                onDeath: r=>{
                    this._bloodDecals.delete(r)
                }
            })),
            St.reify(this._skin).hideBlood || Math.random() > .6)
                return;
            const n = new W("blood_particle");
            n.position = gt(e.create(0, 0), 45),
            n.rotation = Ae(),
            n.scale = Z(.4, .8),
            this.images.blood.addChild(n),
            setTimeout(()=>{
                n.destroyed || n.destroy()
            }
            , 3e4)
        }
    }
    destroy() {
        var r, d, g, h, _, f, b, v, w, k;
        super.destroy();
        const {images: a, emote: o, teammateName: s, anims: n} = this;
        a.aimTrail.destroy(),
        a.vest.destroy(),
        a.body.destroy(),
        a.leftFist.destroy(),
        a.rightFist.destroy(),
        a.backpack.destroy(),
        a.helmet.destroy(),
        a.weapon.destroy(),
        a.altWeapon.destroy(),
        a.muzzleFlash.destroy(),
        a.waterOverlay.destroy(),
        a.blood.destroy(),
        o.image.destroy(),
        o.background.destroy(),
        o.container.destroy(),
        s == null || s.text.destroy(),
        (r = s == null ? void 0 : s.badge) == null || r.destroy(),
        s == null || s.container.destroy(),
        (d = n.emoteHide) == null || d.kill(),
        (g = n.waterOverlay) == null || g.kill(),
        (h = n.emote) == null || h.kill(),
        (_ = n.leftFist) == null || _.kill(),
        (f = n.rightFist) == null || f.kill(),
        (b = n.weapon) == null || b.kill(),
        (v = n.muzzleFlashFade) == null || v.kill(),
        (w = n.muzzleFlashRecoil) == null || w.kill(),
        this.healingParticlesEmitter.destroy(),
        (k = this.actionSound) == null || k.stop(),
        clearInterval(this.bleedEffectInterval),
        this.isActivePlayer && m("#action-container").hide()
    }
}
function ft(i) {
    return 0 < i && i <= 1 ? 1 : Math.round(i)
}
const Ge = class Ge {
    constructor(t) {
        c(this, "maxHealth", $.player.defaultHealth);
        c(this, "health", $.player.defaultHealth);
        c(this, "maxAdrenaline", $.player.maxAdrenaline);
        c(this, "minAdrenaline", 0);
        c(this, "adrenaline", 0);
        c(this, "inventory", {
            activeWeaponIndex: 0,
            weapons: new Array($.player.maxWeapons).fill(void 0),
            lockedSlots: 0,
            items: JSON.parse(JSON.stringify(Nt)),
            scope: to
        });
        c(this, "emotes", []);
        c(this, "teammates", []);
        c(this, "debugReadouts", Object.freeze({
            fps: m("#fps-counter"),
            ping: m("#ping-counter"),
            pos: m("#coordinates-hud")
        }));
        c(this, "ui", Object.freeze({
            loadingText: m("#loading-text"),
            ammoCounterContainer: m("#weapon-ammo-container"),
            activeAmmo: m("#weapon-clip-ammo-count"),
            reserveAmmo: m("#weapon-inventory-ammo"),
            killStreakIndicator: m("#killstreak-indicator-container"),
            killStreakCounter: m("#killstreak-indicator-counter"),
            weaponsContainer: m("#weapons-container"),
            minMaxAdren: m("#adrenaline-bar-min-max"),
            maxHealth: m("#health-bar-max"),
            healthBar: m("#health-bar"),
            healthBarAmount: m("#health-bar-amount"),
            healthAnim: m("#health-bar-animation"),
            adrenalineBar: m("#adrenaline-bar"),
            adrenalineBarAmount: m("#adrenaline-bar-amount"),
            killFeed: m("#kill-feed"),
            gameUi: m("#game-ui"),
            interactMsg: m("#interact-message"),
            interactKey: m("#interact-key"),
            interactText: m("#interact-text"),
            teamContainer: m("#team-container"),
            createTeamMenu: m("#create-team-menu"),
            emoteButton: m("#btn-emotes"),
            pingToggle: m("#btn-toggle-ping"),
            menuButton: m("#btn-game-menu"),
            emoteWheel: m("#emote-wheel"),
            emoteSelectors: [".emote-top", ".emote-right", ".emote-bottom", ".emote-left"].map(t=>m(`#emote-wheel > ${t}`)),
            actionContainer: m("#action-container"),
            actionName: m("#action-name"),
            actionTime: m("#action-time"),
            actionTimer: m("#action-timer-anim"),
            spectatingContainer: m("#spectating-container"),
            spectatingMsg: m("#spectating-msg"),
            spectatingMsgPlayer: m("#spectating-msg-player"),
            btnSpectate: m("#btn-spectate"),
            spectatePrevious: m("#btn-spectate-previous"),
            spectateNext: m("#btn-spectate-next"),
            gasMsg: m("#gas-msg"),
            gasMsgInfo: m("#gas-msg-info"),
            joystickContainer: m("#joysticks-containers"),
            gameOverOverlay: m("#game-over-overlay"),
            gameOverText: m("#game-over-text"),
            gameOverPlayerName: m("#game-over-player-name"),
            gameOverKills: m("#game-over-kills"),
            gameOverDamageDone: m("#game-over-damage-done"),
            gameOverDamageTaken: m("#game-over-damage-taken"),
            gameOverTime: m("#game-over-time"),
            gameOverRank: m("#game-over-rank"),
            chickenDinner: m("#chicken-dinner"),
            killMsgModal: m("#kill-msg"),
            killMsgHeader: m("#kill-msg-kills"),
            killMsgCounter: m("#ui-kills"),
            killMsgContainer: m("#kill-msg-cont"),
            killLeaderLeader: m("#kill-leader-leader"),
            killLeaderCount: m("#kill-leader-kills-counter"),
            spectateKillLeader: m("#btn-spectate-kill-leader"),
            splashMsgText: m("#splash-server-message-text"),
            splashMsg: m("#splash-server-message"),
            splashUi: m("#splash-ui"),
            splashOptions: m("#splash-options"),
            btnReport: m("#btn-report"),
            reportingName: m("#reporting-name"),
            reportingId: m("#report-id"),
            reportingModal: m("#report-modal"),
            game: m("#game"),
            gameMenu: m("#game-menu"),
            canvas: m("canvas"),
            playerAlive: m("#ui-players-alive"),
            newsPosts: m("#news-posts"),
            lockedInfo: m("#locked-info"),
            lockedTooltip: m("#locked-tooltip"),
            lockedTime: m("#locked-time"),
            warningTitle: m("#warning-modal-title"),
            warningText: m("#warning-modal-text"),
            warningAgreeOpts: m("#warning-modal-agree-options"),
            warningAgreeCheckbox: m("#warning-modal-agree-checkbox"),
            warningModal: m("#warning-modal"),
            btnStartGame: m("#btn-start-game"),
            createTeamToggles: m("#create-team-toggles"),
            createTeamUrl: m("#create-team-url-field"),
            createTeamAutoFill: m("#create-team-toggle-auto-fill"),
            createTeamLock: m("#create-team-toggle-lock"),
            createTeamPlayers: m("#create-team-players"),
            closeCreateTeam: m("#close-create-team")
        }));
        c(this, "_weaponSlotCache", new Yi);
        c(this, "_itemCountCache", {});
        c(this, "_itemSlotCache", {});
        c(this, "_scopeSlotCache", {});
        c(this, "action", {
            active: !1,
            fake: !1,
            start: -1,
            time: 0
        });
        c(this, "gameOverScreenTimeout");
        c(this, "mapPings", ["warning_ping", "arrow_ping", "gift_ping", "heal_ping"].map(t=>Wt.fromString(t)));
        c(this, "_teammateDataCache", new Map);
        c(this, "_lastHealthBarAnimTime", 0);
        c(this, "_oldHealth", 0);
        c(this, "skinID");
        c(this, "_killMessageTimeoutID");
        if (this.game = t,
        Ge._instantiated)
            throw new Error("Class 'UIManager' has already been instantiated");
        Ge._instantiated = !0
    }
    getRawPlayerNameNullish(t) {
        const a = this.game.playerNames.get(t) ?? this._teammateDataCache.get(t);
        let o;
        return a ? this.game.console.getBuiltInCVar("cv_anonymize_player_names") ? o = `${$.player.defaultName}_${t}` : o = a.name : console.warn(`Unknown player name with id ${t}`),
        o
    }
    getRawPlayerName(t) {
        return this.getRawPlayerNameNullish(t) ?? "[Unknown Player]"
    }
    getPlayerName(t) {
        var n;
        const a = m("<span>")
          , o = this.game.playerNames.get(t) ?? this._teammateDataCache.get(t)
          , s = this.getRawPlayerName(t);
        return o && o.hasColor && !this.game.console.getBuiltInCVar("cv_anonymize_player_names") && a.css("color", ((n = o.nameColor) == null ? void 0 : n.toHex()) ?? ""),
        a.text(s),
        a.prop("outerHTML")
    }
    getPlayerBadge(t) {
        if (this.game.console.getBuiltInCVar("cv_anonymize_player_names"))
            return;
        const a = this.game.playerNames.get(t) ?? this._teammateDataCache.get(t);
        switch (!0) {
        case this.game.console.getBuiltInCVar("cv_anonymize_player_names"):
            return;
        case a === void 0:
            {
                console.warn(`Unknown player name with id ${t}`);
                return
            }
        default:
            return a.badge
        }
    }
    static getHealthColor(t, a) {
        switch (!0) {
        case t <= .25:
        case a:
            return "#ff0000";
        case (t > .25 && t < .6):
            return `rgb(255, ${(t * 100 - 10) * 4}, ${(t * 100 - 10) * 4})`;
        case t === 1:
            return "#bdc7d0";
        default:
            return "#f8f9fa"
        }
    }
    _getSlotUI(t) {
        return this._weaponSlotCache.getAndGetDefaultIfAbsent(t, ()=>{
            const a = m(`#weapon-slot-${t}`)
              , o = a.children(".main-container");
            return {
                container: a,
                inner: o,
                name: o.children(".item-name"),
                image: o.children(".item-image"),
                ammo: o.children(".item-ammo")
            }
        }
        )
    }
    animateAction(t, a, o=!1) {
        this.action.fake = o,
        a > 0 && (this.action.start = Date.now(),
        this.ui.actionTimer.stop().css({
            "stroke-dashoffset": "226"
        }).animate({
            "stroke-dashoffset": "0"
        }, a * 1e3, "linear", ()=>{
            this.ui.actionContainer.hide(),
            this.action.active = !1
        }
        )),
        t && (this.ui.actionName.text(t),
        this.ui.actionContainer.show()),
        this.action.active = !0,
        this.action.time = a
    }
    updateAction() {
        const t = this.action.time - (Date.now() - this.action.start) / 1e3;
        t > 0 && this.ui.actionTime.text(t.toFixed(1))
    }
    cancelAction() {
        this.ui.actionContainer.hide().stop(),
        this.action.active = !1
    }
    showGameOverScreen(t) {
        var k, S;
        const a = this.game;
        this.ui.interactMsg.hide(),
        this.ui.spectatingContainer.hide(),
        (S = (k = a.activePlayer) == null ? void 0 : k.actionSound) == null || S.stop(),
        this.ui.gasMsg.fadeOut(500),
        this.ui.joystickContainer.hide();
        const {gameOverOverlay: o, chickenDinner: s, gameOverText: n, gameOverRank: r, gameOverPlayerName: d, gameOverKills: g, gameOverDamageDone: h, gameOverDamageTaken: _, gameOverTime: f} = this.ui;
        a.gameOver = !0,
        t.won ? this.ui.btnSpectate.hide() : (this.ui.btnSpectate.removeClass("btn-disabled").show(),
        a.map.indicator.setFrame("player_indicator_dead")),
        s.toggle(t.won);
        const b = this.getPlayerName(t.playerID)
          , v = this.getPlayerBadge(t.playerID)
          , w = v ? pe`<img class="badge-icon" src="./img/game/badges/${v.idString}.svg" alt="${v.name} badge">` : "";
        n.html(t.won ? z("msg_win") : this.game.spectating ? z("msg_player_died", {
            player: this.getPlayerName(t.playerID)
        }) : z("msg_you_died")),
        d.html(b + w),
        g.text(t.kills),
        h.text(t.damageDone),
        _.text(t.damageTaken),
        f.text(bo(t.timeAlive)),
        t.won && a.music.play(),
        this.gameOverScreenTimeout = window.setTimeout(()=>o.fadeIn(500), 500),
        r.text(`#${t.rank}`).toggleClass("won", t.won)
    }
    updateEmoteWheel() {
        const {pingWheelActive: t} = this.game.inputManager;
        for (let a = 0; a < 4; a++) {
            const o = (t ? this.mapPings : this.emotes)[a];
            this.ui.emoteSelectors[a].css("background-image", o ? `url("./img/game/${t ? "mapPings" : "emotes"}/${o.idString}.svg")` : "")
        }
    }
    clearTeammateCache() {
        for (const [,t] of this._teammateDataCache)
            t.destroy();
        this._teammateDataCache.clear()
    }
    updateUI(t) {
        var f, b, v;
        const {minMax: a, health: o, adrenaline: s, zoom: n, id: r, teammates: d, inventory: g, lockedSlots: h, items: _} = t;
        if (r !== void 0 && (this.game.activePlayerID = r.id),
        r) {
            const w = r.spectating;
            if (this.game.spectating = w,
            w) {
                const k = this.getPlayerBadge(r.id)
                  , S = k ? pe`<img class="badge-icon" src="./img/game/badges/${k.idString}.svg" alt="${k.name} badge">` : "";
                this.ui.gameOverOverlay.fadeOut(),
                this.ui.spectatingMsgPlayer.html(this.getPlayerName(r.id) + S)
            }
            this.ui.spectatingContainer.toggle(w),
            this.ui.spectatingMsg.toggle(w),
            this.clearTeammateCache(),
            this.game.inputManager.isMobile && (this.ui.emoteButton.toggle(!w),
            this.ui.pingToggle.toggle(!w),
            this.ui.menuButton.toggle(!w))
        }
        if (d && this.game.teamMode) {
            this.teammates = d;
            const w = this._teammateDataCache
              , k = new Set(w.keys());
            [{
                id: this.game.activePlayerID,
                normalizedHealth: this.health / this.maxHealth,
                downed: (f = this.game.activePlayer) == null ? void 0 : f.downed,
                disconnected: !1,
                position: void 0
            }, ...d].forEach((S,x)=>{
                const {id: I} = S;
                k.delete(I);
                const R = w.get(I)
                  , O = this.game.playerNames.get(I)
                  , J = {
                    hasColor: O == null ? void 0 : O.hasColor,
                    nameColor: O != null && O.hasColor ? O.nameColor : null,
                    name: O == null ? void 0 : O.name,
                    badge: (O == null ? void 0 : O.badge) ?? null
                };
                if (R !== void 0) {
                    R.update({
                        ...S,
                        ...J,
                        colorIndex: x
                    });
                    return
                }
                const V = new Qn(this.game,{
                    id: I,
                    colorIndex: x,
                    downed: S.downed,
                    normalizedHealth: S.normalizedHealth,
                    position: S.position,
                    ...J
                });
                w.set(I, V),
                this.ui.teamContainer.append(V.container)
            }
            );
            for (const S of k)
                w.get(S).destroy(),
                w.delete(S)
        }
        if (n && (this.game.camera.zoom = n),
        a && (this.maxHealth = a.maxHealth,
        this.minAdrenaline = a.minAdrenaline,
        this.maxAdrenaline = a.maxAdrenaline,
        this.maxHealth === $.player.defaultHealth ? this.ui.maxHealth.text("").hide() : this.ui.maxHealth.text(ft(this.maxHealth)).show(),
        this.maxAdrenaline === $.player.maxAdrenaline && this.minAdrenaline === 0 ? this.ui.minMaxAdren.text("").hide() : this.ui.minMaxAdren.text(`${this.minAdrenaline === 0 ? "" : `${ft(this.minAdrenaline)}/`}${ft(this.maxAdrenaline)}`).show()),
        o !== void 0) {
            this.health = Y.remap(o, 0, 1, 0, this.maxHealth);
            const w = this.health / this.maxHealth
              , k = 100 * w
              , S = ft(k);
            this.ui.healthBar.width(`${k}%`).css("background-color", Ge.getHealthColor(w, (b = this.game.activePlayer) == null ? void 0 : b.downed)).toggleClass("flashing", S <= 25),
            k === 0 ? this.ui.healthAnim.stop().width(0) : Date.now() - this._lastHealthBarAnimTime > 500 && (this.ui.healthAnim.stop().width(`${this._oldHealth}%`).animate({
                width: `${k}%`
            }, 500),
            this._oldHealth = k,
            this._lastHealthBarAnimTime = Date.now()),
            this.ui.healthBarAmount.text(ft(this.health)).css("color", S <= 40 || (v = this.game.activePlayer) != null && v.downed ? "#ffffff" : "#000000")
        }
        if (s !== void 0) {
            this.adrenaline = Y.remap(s, 0, 1, this.minAdrenaline, this.maxAdrenaline);
            const w = 100 * this.adrenaline / this.maxAdrenaline;
            this.ui.adrenalineBar.width(`${w}%`),
            this.ui.adrenalineBarAmount.text(ft(this.adrenaline)).css("color", this.adrenaline < 7 ? "#ffffff" : "#000000")
        }
        g != null && g.weapons && (this.inventory.weapons = g.weapons,
        this.inventory.activeWeaponIndex = g.activeWeaponIndex),
        h !== void 0 && (this.inventory.lockedSlots = h,
        this.updateSlotLocks()),
        _ && (this.inventory.items = _.items,
        this.inventory.scope = _.scope,
        this.updateItems()),
        (g != null && g.weapons || _) && this.updateWeapons()
    }
    updateWeapons() {
        var n;
        const t = this.inventory
          , a = t.activeWeaponIndex
          , o = t.weapons[a]
          , s = o == null ? void 0 : o.count;
        if (o === void 0 || s === void 0 || Ei)
            this.ui.ammoCounterContainer.hide();
        else {
            this.ui.ammoCounterContainer.show(),
            this.ui.activeAmmo.text(s).css("color", s > 0 ? "inherit" : "red");
            let r = !1;
            if (o.definition.itemType === C.Gun) {
                const d = o.definition.ammoType;
                let g = this.inventory.items[d];
                for (const h of ut)
                    if (h.idString === d && h.ephemeral) {
                        g = "∞";
                        break
                    }
                r = g !== 0,
                this.ui.reserveAmmo.show().text(g)
            }
            this.ui.ammoCounterContainer.toggleClass("has-reserve", r),
            r || this.ui.reserveAmmo.hide()
        }
        ((n = o == null ? void 0 : o.stats) == null ? void 0 : n.kills) === void 0 ? this.ui.killStreakIndicator.hide() : (this.ui.killStreakIndicator.show(),
        this.ui.killStreakCounter.text(`Streak: ${o.stats.kills}`)),
        this.updateWeaponSlots()
    }
    updateSlotLocks() {
        const t = $.player.maxWeapons;
        for (let a = 0; a < t; this._getSlotUI(a + 1).container.toggleClass("locked", !!(this.inventory.lockedSlots & 1 << a)),
        a++)
            ;
    }
    updateWeaponSlots() {
        const t = this.inventory;
        let a;
        (s=>{
            s.HasItem = "has-item",
            s.IsActive = "active"
        }
        )(a || (a = {}));
        const o = $.player.maxWeapons;
        for (let s = 0; s < o; s++) {
            const {container: n, image: r, ammo: d, name: g} = this._getSlotUI(s + 1)
              , h = t.weapons[s]
              , _ = this.inventory.activeWeaponIndex === s
              , f = d.text()
              , b = f.length ? +f !== (h == null ? void 0 : h.count) : (h == null ? void 0 : h.count) !== void 0
              , v = n.hasClass("has-item")
              , w = n.hasClass("active") !== _;
            if (h) {
                const k = h.definition
                  , S = "ammoType"in k
                  , x = S ? ut.fromString(k.ammoType).characteristicColor : {
                    hue: 0,
                    saturation: 0,
                    lightness: 0
                };
                v || n.addClass("has-item"),
                w && n.toggleClass("active", _),
                n.css(S && this.game.console.getBuiltInCVar("cv_weapon_slot_style") === "colored" ? {
                    "outline-color": `hsl(${x.hue}, ${x.saturation}%, ${(x.lightness + 50) / 3}%)`,
                    "background-color": `hsla(${x.hue}, ${x.saturation}%, ${x.lightness / 2}%, 50%)`,
                    color: `hsla(${x.hue}, ${x.saturation}%, 90%)`
                } : {
                    "outline-color": "",
                    "background-color": "",
                    color: ""
                }),
                g.text(h.definition.idString.startsWith("dual_") ? z("dual_template", {
                    gun: z(h.definition.idString.slice(5))
                }) : z(h.definition.idString));
                const I = h.definition.idString === "fists"
                  , R = r.attr("src")
                  , O = `./img/game/weapons/${h.definition.idString}.svg`;
                R !== O && (this._playSlotAnimation(n),
                r.attr("src", O)),
                r.css("background-image", I ? `url(./img/game/skins/${this.skinID ?? this.game.console.getBuiltInCVar("cv_loadout_skin")}_fist.svg)` : "none").toggleClass("is-fists", I).show(),
                h.definition.idString === "ghillie_suit" && r.css("background-color", Xi.toHex());
                const J = h.count;
                b && J !== void 0 && d.text(J).css("color", J > 0 ? "unset" : "red")
            } else
                n.removeClass("has-item").removeClass("active").css({
                    "outline-color": "",
                    "background-color": "",
                    color: ""
                }),
                g.css("color", "").text(""),
                r.removeAttr("src").hide(),
                d.text("")
        }
    }
    _playSlotAnimation(t) {
        t.toggleClass("active"),
        t[0].offsetWidth,
        t.toggleClass("active")
    }
    updateItems() {
        var t, a, o, s;
        for (const n in this.inventory.items) {
            const r = this.inventory.items[n]
              , d = (t = this._itemCountCache)[n] ?? (t[n] = m(`#${n}-count`))
              , g = (a = this._itemSlotCache)[n] ?? (a[n] = m(`#${n}-slot`))
              , h = ae.fromString(n);
            if (+d.text() < r && g.length && this._playSlotAnimation(g),
            d.text(r),
            this.game.activePlayer) {
                const f = this.game.activePlayer.equipment.backpack;
                g.toggleClass("full", r >= f.maxCapacity[n])
            }
            const _ = r > 0;
            g.toggleClass("has-item", _),
            h.itemType === C.Ammo && h.hideUnlessPresent && g.css("visibility", _ ? "visible" : "hidden"),
            h.itemType === C.Scope && !Ei && g.toggle(_).removeClass("active")
        }
        ((o = this._scopeSlotCache)[s = this.inventory.scope.idString] ?? (o[s] = m(`#${this.inventory.scope.idString}-slot`))).addClass("active")
    }
    _addKillMessage(t) {
        const {severity: a, victimName: o, weaponUsed: s, type: n} = t
          , {killMsgHeader: r, killMsgCounter: d} = this.ui;
        let g = "";
        switch (a) {
        case q.Kill:
            {
                const {streak: h, kills: _} = t;
                r.text(z("msg_kills", {
                    kills: _.toString()
                })),
                d.text(_),
                g = h ? ` (streak: ${h})` : "";
                break
            }
        case q.Down:
            r.text("")
        }
        this.ui.killMsgContainer.html(`${Ge._killModalEventDescription[n][a](m(o).addClass("kill-msg-player-name")[0].outerHTML)} ${s !== void 0 ? ` with ${s}` : ""}${g}`),
        this.ui.killMsgModal.fadeIn(350, ()=>{
            clearTimeout(this._killMessageTimeoutID),
            this._killMessageTimeoutID = window.setTimeout(()=>{
                this.ui.killMsgModal.fadeOut(350)
            }
            , 3e3)
        }
        )
    }
    _addKillFeedMessage(t, a) {
        var n;
        const o = m('<div class="kill-feed-item">');
        o.html(t),
        o.addClass(a);
        const s = this._getKillFeedElements();
        this.ui.killFeed.prepend(o),
        o.css("opacity", 0),
        s.forEach(r=>{
            const d = r.element.getBoundingClientRect();
            d.y !== r.position.y && r.element.animate([{
                transform: `translateY(${r.position.y - d.y}px)`
            }, {
                transform: "translateY(0px)"
            }], {
                duration: 300,
                iterations: 1,
                easing: "ease-in"
            })
        }
        ),
        o.css("opacity", ""),
        (n = o.get(0)) == null || n.animate([{
            opacity: 0
        }, {
            opacity: 1
        }], {
            duration: 300,
            iterations: 1,
            easing: "ease-in"
        });
        {
            let r = 0;
            for (; this.ui.killFeed.children().length > 5; )
                ++r === 1e3 && console.warn("1000 iterations of removing killfeed entries; possible infinite loop"),
                this.ui.killFeed.children().last().remove()
        }
        setTimeout(()=>{
            var d;
            const r = (d = o.get(0)) == null ? void 0 : d.animate([{
                opacity: 1,
                transform: "translateX(0%)"
            }, {
                opacity: 0,
                transform: "translateY(100%)"
            }], {
                duration: 300,
                fill: "backwards",
                easing: "ease-out"
            });
            r && (r.onfinish = ()=>{
                o.remove()
            }
            )
        }
        , 7e3)
    }
    _getKillFeedElements() {
        return this.ui.killFeed.children().toArray().map(t=>{
            const a = t.getBoundingClientRect();
            return {
                element: t,
                position: e.create(a.x, a.y)
            }
        }
        )
    }
    processKillFeedPacket(t) {
        const {messageType: a} = t
          , o = r=>{
            const d = r !== void 0
              , g = d ? this.getPlayerBadge(r) : void 0;
            return {
                name: d ? this.getPlayerName(r) : "",
                badgeText: g ? pe`<img class="badge-icon" src="./img/game/badges/${g.idString}.svg" alt="${g.name} badge">` : ""
            }
        }
        ;
        let s;
        const n = [];
        switch (a) {
        case _e.DeathOrDown:
            {
                const {victimId: r, severity: d, eventType: g, weaponUsed: h} = t
                  , _ = h !== void 0
                  , f = _ && "itemType"in h && h.itemType === C.Throwable
                  , b = "attackerId"in t ? t.attackerId : void 0
                  , {name: v, badgeText: w} = o(r)
                  , {name: k, badgeText: S} = b !== void 0 ? o(b) : {
                    name: "",
                    badgeText: ""
                }
                  , x = v + w
                  , I = k + S
                  , R = "killstreak"in t ? t.killstreak : void 0
                  , O = !!R;
                switch (this.game.console.getBuiltInCVar("cv_killfeed_style")) {
                case "text":
                    {
                        let V = "";
                        const B = Ge._killfeedEventDescription[g][d];
                        e: switch (g) {
                        case K.FinallyKilled:
                            switch (b) {
                            case void 0:
                                V = `${x} finally died`;
                                break e;
                            case r:
                                V = `${x} finally ended themselves`;
                                break e
                            }
                        case K.NormalTwoParty:
                        case K.FinishedOff:
                            V = `${I} ${B} ${x}`;
                            break;
                        case K.Suicide:
                        case K.BleedOut:
                            V = `${x} ${B}`;
                            break;
                        case K.Gas:
                            V = `${x} ${B} the gas`;
                            break;
                        case K.Airdrop:
                            V = `${x} ${B} by an airdrop`;
                            break
                        }
                        const le = _ ? h.name : ""
                          , ce = `a${"aeiou".includes(le[0]) ? "n" : ""}`
                          , F = _ ? ` with ${f ? `the impact of ${ce} ` : ""}${le}` : ""
                          , re = (()=>{
                            switch (d) {
                            case q.Down:
                                return pe`<img class="kill-icon" src="./img/misc/downed.svg" alt="Downed">`;
                            case q.Kill:
                                return pe`<img class="kill-icon" src="./img/misc/skull_icon.svg" alt="Skull">`
                            }
                        }
                        )();
                        s = `
                        ${O && d === q.Kill ? R : ""}
                        ${re}
                        ${V}${F}`;
                        break
                    }
                case "icon":
                    {
                        const V = pe`<img class="kill-icon" src="./img/misc/downed.svg" alt="Downed">`
                          , B = pe`<img class="kill-icon" src="./img/misc/skull_icon.svg" alt="Finished off">`
                          , le = pe`<img class="kill-icon" src="./img/misc/bleed_out.svg" alt="Bleed out">`
                          , ce = pe`<img class="kill-icon" src="./img/misc/finally_killed.svg" alt="Finally killed">`
                          , F = O ? pe`
                            <span style="font-size: 80%">(${R}
                                <img class="kill-icon" src="./img/misc/skull_icon.svg" alt="Skull" height=12>)
                            </span>` : "";
                        let re = "";
                        switch (g) {
                        case K.Gas:
                            re = "gas";
                            break;
                        case K.Airdrop:
                            re = "airdrop";
                            break;
                        default:
                            re = (h == null ? void 0 : h.idString) ?? "";
                            break
                        }
                        const Oe = h ? h.name : re
                          , Fe = pe`<img class="kill-icon" src="./img/killfeed/${re}_killfeed.svg" alt="${Oe}">`
                          , qe = (()=>{
                            switch (d) {
                            case q.Down:
                                return V;
                            case q.Kill:
                                return ""
                            }
                        }
                        )();
                        let oe = "";
                        switch (g) {
                        case K.FinallyKilled:
                            switch (b) {
                            case void 0:
                                oe = `${B} ${x}`;
                                break;
                            case r:
                                oe = `${ce} ${x}`;
                                break;
                            default:
                                oe = `${I} ${F} ${ce} ${x}`;
                                break
                            }
                            break;
                        case K.NormalTwoParty:
                            oe = `${I} ${F} ${Fe} ${x}`;
                            break;
                        case K.FinishedOff:
                            oe = `${B} ${I} ${F} ${Fe} ${x}`;
                            break;
                        case K.Suicide:
                        case K.Gas:
                        case K.Airdrop:
                            oe = `${Fe} ${x}`;
                            break;
                        case K.BleedOut:
                            oe = `${le} ${x}`;
                            break
                        }
                        s = qe + oe;
                        break
                    }
                }
                const J = V=>{
                    let B;
                    return V === this.game.activePlayerID || V !== void 0 && ((B = this.game.objects.get(V)) && B instanceof rt && B.teamID === this.game.teamID || this._teammateDataCache.has(V))
                }
                ;
                switch (!0) {
                case J(r):
                    {
                        n.push("kill-feed-item-victim");
                        break
                    }
                case J(b):
                    {
                        if (n.push("kill-feed-item-killer"),
                        b === this.game.activePlayerID) {
                            const V = {
                                victimName: x,
                                weaponUsed: h == null ? void 0 : h.name,
                                type: g
                            };
                            this._addKillMessage(d === q.Kill ? {
                                severity: d,
                                ...V,
                                weaponUsed: g !== K.FinallyKilled ? V.weaponUsed : void 0,
                                kills: "attackerKills"in t ? t.attackerKills : 0,
                                streak: R
                            } : {
                                severity: d,
                                ...V
                            })
                        }
                        break
                    }
                }
                break
            }
        case _e.KillLeaderAssigned:
            {
                const {killLeaderLeader: r, killLeaderCount: d, spectateKillLeader: g} = this.ui
                  , {victimId: h, attackerKills: _, hideFromKillfeed: f} = t
                  , {name: b, badgeText: v} = o(h)
                  , w = b + v;
                n.push(h === this.game.activePlayerID ? "kill-feed-item-killer" : "kill-feed-kill-leader"),
                r.html(w),
                d.text(_),
                f || (s = pe`<i class="fa-solid fa-crown"></i> ${z("kf_kl_promotion", {
                    player: w
                })}`,
                this.game.soundManager.play("kill_leader_assigned")),
                g.removeClass("btn-disabled");
                break
            }
        case _e.KillLeaderUpdated:
            {
                const {attackerKills: r} = t;
                this.ui.killLeaderCount.text(r);
                break
            }
        case _e.KillLeaderDead:
            {
                const {killLeaderLeader: r, killLeaderCount: d, spectateKillLeader: g} = this.ui
                  , {attackerId: h, victimId: _} = t
                  , {name: f, badgeText: b} = h !== void 0 ? o(h) : {
                    name: "",
                    badgeText: ""
                }
                  , v = f + b;
                switch (r.text(z("msg_waiting_for_leader")),
                d.text("0"),
                s = pe`<img class="kill-icon" src="./img/misc/skull_icon.svg" alt="Skull"> ${h ? h !== _ ? z("kf_kl_killed", {
                    player: v
                }) : z("kf_kl_dead") : z("kf_kl_suicide")}`,
                this.game.activePlayerID) {
                case h:
                    {
                        n.push("kill-feed-item-killer");
                        break
                    }
                case _:
                    {
                        n.push("kill-feed-item-victim");
                        break
                    }
                default:
                    {
                        n.push("kill-feed-kill-leader");
                        break
                    }
                }
                this.game.soundManager.play("kill_leader_dead"),
                g.addClass("btn-disabled");
                break
            }
        }
        s && this._addKillFeedMessage(s, n)
    }
}
;
c(Ge, "_instantiated", !1),
c(Ge, "_killfeedEventDescription", Di({
    [K.Suicide]: {
        [q.Kill]: "committed suicide",
        [q.Down]: "knocked themselves out"
    },
    [K.NormalTwoParty]: {
        [q.Kill]: "killed",
        [q.Down]: "knocked out"
    },
    [K.BleedOut]: {
        [q.Kill]: "bled out",
        [q.Down]: "bled out non-lethally"
    },
    [K.FinishedOff]: {
        [q.Kill]: "finished off",
        [q.Down]: "gently finished off"
    },
    [K.FinallyKilled]: {
        [q.Kill]: "finally killed",
        [q.Down]: "finally knocked out"
    },
    [K.Gas]: {
        [q.Kill]: "died to",
        [q.Down]: "was knocked out by"
    },
    [K.Airdrop]: {
        [q.Kill]: "was fatally crushed",
        [q.Down]: "was knocked out"
    }
})),
c(Ge, "_killModalEventDescription", Di({
    [K.Suicide]: {
        [q.Kill]: t=>"You committed suicide",
        [q.Down]: t=>"You knocked yourself out"
    },
    [K.NormalTwoParty]: {
        [q.Kill]: t=>`You killed ${t}`,
        [q.Down]: t=>`You knocked out ${t}`
    },
    [K.BleedOut]: {
        [q.Kill]: t=>`${t} bled out`,
        [q.Down]: t=>`${t} bled out non-lethally`
    },
    [K.FinishedOff]: {
        [q.Kill]: t=>`${t} was finished off`,
        [q.Down]: t=>`${t} was gently finished off`
    },
    [K.FinallyKilled]: {
        [q.Kill]: t=>`${t} was finally killed`,
        [q.Down]: t=>`${t} was finally knocked out`
    },
    [K.Gas]: {
        [q.Kill]: t=>`${t} died to the gas`,
        [q.Down]: t=>`${t} was knocked out by the gas`
    },
    [K.Airdrop]: {
        [q.Kill]: t=>`${t} was fatally crushed by an airdrop`,
        [q.Down]: t=>`${t} was knocked out by an airdrop`
    }
}));
let _i = Ge;
class He {
    constructor(t) {
        c(this, "_dirty", !0);
        c(this, "_value");
        this._value = t
    }
    get dirty() {
        return this._dirty
    }
    get value() {
        return this._value
    }
    set value(t) {
        this._value !== t && (this._dirty = !0,
        this._value = t)
    }
    markClean() {
        this._dirty && (this._dirty = !1)
    }
}
class Qn {
    constructor(t, a) {
        c(this, "game");
        c(this, "container");
        c(this, "svgContainer");
        c(this, "healthDisplay");
        c(this, "indicatorContainer");
        c(this, "teammateIndicator");
        c(this, "nameLabel");
        c(this, "badgeImage");
        c(this, "_id", new He(-1));
        c(this, "_normalizedHealth", new He(1));
        c(this, "_downed", new He(void 0));
        c(this, "_disconnected", new He(!1));
        c(this, "_position", new He(void 0));
        c(this, "_colorIndex", new He(0));
        c(this, "_name", new He($.player.defaultName));
        c(this, "_hasColor", new He(!1));
        c(this, "_nameColor", new He(void 0));
        c(this, "_badge", new He(void 0));
        this.game = t,
        this.container = m('<div class="teammate-container"></div>'),
        this.svgContainer = m('<svg class="teammate-health-indicator" width="48" height="48" xmlns="http://www.w3.org/2000/svg"></svg>'),
        this.healthDisplay = m('<svg><circle r="21" cy="24" cx="24" stroke-width="6" stroke-dasharray="132" fill="none" style="transition: stroke-dashoffset ease-in-out 50ms;" /></svg>').find("circle"),
        this.indicatorContainer = m('<div class="teammate-indicator-container"></div>'),
        this.teammateIndicator = m('<img class="teammate-indicator" />'),
        this.nameLabel = m('<span class="teammate-name"></span>'),
        this.badgeImage = m('<img class="teammate-badge" />'),
        this.container.append(this.svgContainer.append(this.healthDisplay), this.indicatorContainer.append(this.teammateIndicator), this.nameLabel, this.badgeImage),
        typeof (a == null ? void 0 : a.id) == "number" && (this._id.value = a.id,
        this._id.markClean()),
        this.update(a)
    }
    get id() {
        return this._id.value
    }
    get normalizedHealth() {
        return this._normalizedHealth.value
    }
    get downed() {
        return this._downed.value
    }
    get disconnected() {
        return this._disconnected.value
    }
    get position() {
        return this._position.value
    }
    get colorIndex() {
        return this._colorIndex.value
    }
    get name() {
        return this._name.value
    }
    get hasColor() {
        return this._hasColor.value
    }
    get nameColor() {
        return this._nameColor.value
    }
    get badge() {
        return this._badge.value
    }
    update(t) {
        const a = this._id.value
          , o = this._normalizedHealth.value <= 0;
        t !== void 0 && ["id", "colorIndex", "downed", "disconnected", "normalizedHealth", "position", "name", "hasColor", "nameColor", "badge"].forEach(r=>{
            const d = t[r];
            r in t && d !== null && (this[`_${r}`].value = d)
        }
        ),
        this._id.dirty && console.warn(`PlayerHealthUI id unexpectedly marked dirty (was ${a}, currently ${this._id.value}); ignoring change request.`);
        let s = !1;
        if (this._normalizedHealth.dirty) {
            const r = this._normalizedHealth.value;
            this.healthDisplay.css("stroke", _i.getHealthColor(r, this._downed.value)).css("stroke-dashoffset", 132 * (1 - r)),
            s = o !== r <= 0
        }
        if (this._downed.dirty && (this.container.toggleClass("downed", this._downed.value === !0),
        s = !0),
        this._disconnected.dirty) {
            this.container.toggleClass("disconnected", this._disconnected.value);
            const r = this.game.map.teammateIndicators.get(a);
            r == null || r.setAlpha(this._disconnected.value ? .5 : 1),
            s = !0
        }
        let n;
        if (a === this.game.activePlayerID)
            n = this.game.map.indicator;
        else {
            const {teammateIndicators: r} = this.game.map;
            this._position.dirty && this._position.value && ((n = r.get(a)) === void 0 && (r.set(a, n = new W("player_indicator").setTint(ti[this._colorIndex.value])),
            this.game.map.teammateIndicatorContainer.addChild(n)),
            n.setVPos(this._position.value).setScale(this.game.map.expanded ? 1 : .75)),
            n ?? (n = r.get(a))
        }
        if (s) {
            const r = `player_indicator${this._normalizedHealth.value === 0 ? "_dead" : this._downed.value ? "_downed" : ""}`
              , d = `./img/game/player/${r}.svg`;
            this.teammateIndicator.attr("src") !== d && this.teammateIndicator.attr("src", d),
            n == null || n.setFrame(r)
        }
        if (this._colorIndex.dirty) {
            const r = ti[this._colorIndex.value];
            this.indicatorContainer.css("background-color", r.toHex()),
            n == null || n.setTint(r)
        }
        if (this._name.dirty && this.nameLabel.text((this.game.uiManager.getRawPlayerNameNullish(a) ?? this._name.value) || "Loading…"),
        (this._hasColor.dirty && this._nameColor.value || this._nameColor.dirty && this._hasColor.value) && this.nameLabel.css("color", this._hasColor.value && this._nameColor.value ? this._nameColor.value.toHex() : ""),
        this._badge.dirty) {
            const r = this.game.playerNames.get(a);
            if (r != null && r.badge) {
                const d = `./img/game/badges/${r.badge.idString}.svg`;
                this.badgeImage.attr("src") !== d && this.badgeImage.attr("src", d).css({
                    display: "",
                    visibility: ""
                })
            } else
                this.badgeImage.attr("src", "").css({
                    display: "none",
                    visibility: "none"
                })
        }
        ["id", "colorIndex", "downed", "disconnected", "normalizedHealth", "position", "name", "hasColor", "nameColor", "badge"].forEach(r=>{
            this[`_${r}`].markClean()
        }
        )
    }
    destroy() {
        var o;
        this.container.remove();
        const t = this._id.value
          , a = this.game.map.teammateIndicators;
        (o = a.get(t)) == null || o.destroy(),
        a.delete(t)
    }
}
class es extends it {
    constructor(a, o, s) {
        super(a, o);
        c(this, "type", j.Building);
        c(this, "ceilingContainer");
        c(this, "definition");
        c(this, "ceilingHitbox");
        c(this, "ceilingTween");
        c(this, "orientation");
        c(this, "ceilingVisible", !1);
        c(this, "errorSeq");
        c(this, "sound");
        this.container.zIndex = P.BuildingsFloor,
        this.ceilingContainer = new Re,
        this.game.camera.addObject(this.ceilingContainer),
        this.updateFromData(s, !0)
    }
    toggleCeiling() {
        var s, n;
        if (this.ceilingHitbox === void 0 || this.dead)
            return;
        const a = this.game.activePlayer;
        if (a === void 0)
            return;
        let o = !1;
        if (this.ceilingHitbox.collidesWith(a.hitbox))
            o = !0;
        else {
            const d = new M(14,a.position)
              , g = this.ceilingHitbox instanceof H ? this.ceilingHitbox.hitboxes : [this.ceilingHitbox];
            for (const h of g) {
                let _ = null;
                switch (!0) {
                case h instanceof M:
                    {
                        _ = ei.circleCircleIntersection(h.position, h.radius, d.position, d.radius);
                        break
                    }
                case h instanceof l:
                    {
                        _ = ei.rectCircleIntersection(h.min, h.max, d.position, d.radius);
                        break
                    }
                }
                const f = _ == null ? void 0 : _.dir;
                if (f) {
                    const b = Math.atan2(f.y, f.x);
                    let v = !1;
                    const w = Math.PI / 2;
                    for (let k = b - w; k < b + w; k += .1) {
                        v = !1;
                        const S = (s = this.ceilingHitbox.intersectsLine(a.position, e.add(a.position, e.scale(e.create(Math.cos(k), Math.sin(k)), 14)))) == null ? void 0 : s.point;
                        if (!S) {
                            v = !0;
                            continue
                        }
                        if (!(v || (v = [...this.game.objects.getCategory(j.Obstacle)].some(({damageable: x, dead: I, definition: {role: R}, hitbox: O})=>x && !I && R !== ee.Window && (O == null ? void 0 : O.intersectsLine(a.position, S))))))
                            break
                    }
                    o = !v
                } else
                    o = !1;
                if (o)
                    break
            }
        }
        this.ceilingVisible !== o && (this.ceilingVisible = o,
        (n = this.ceilingTween) == null || n.kill(),
        this.ceilingTween = this.game.addTween({
            target: this.ceilingContainer,
            to: {
                alpha: o ? 0 : 1
            },
            duration: o ? 150 : 300,
            ease: ue.sineOut,
            onComplete: ()=>{
                this.ceilingTween = void 0
            }
        }))
    }
    updateFromData(a, o=!1) {
        var n, r, d, g, h, _, f, b, v;
        if (a.full) {
            const w = a.full;
            this.definition = w.definition,
            this.position = w.position;
            for (const S of this.definition.floorImages) {
                const x = new W(S.key);
                x.setVPos(se(S.position)),
                S.tint !== void 0 && x.setTint(S.tint),
                S.rotation && x.setRotation(S.rotation),
                S.scale && (x.scale = S.scale),
                this.container.addChild(x)
            }
            const k = se(this.position);
            this.container.position.copyFrom(k),
            this.ceilingContainer.position.copyFrom(k),
            this.ceilingContainer.zIndex = this.definition.ceilingZIndex,
            this.orientation = w.rotation,
            this.rotation = Ke.orientationToRotation(this.orientation),
            this.container.rotation = this.rotation,
            this.ceilingContainer.rotation = this.rotation,
            this.ceilingHitbox = (n = this.definition.scopeHitbox ?? this.definition.ceilingHitbox) == null ? void 0 : n.transform(this.position, 1, this.orientation)
        }
        const s = this.definition;
        if (s === void 0 && console.warn("Building partially updated before being fully updated"),
        s.sounds) {
            const {sounds: w} = s
              , k = {
                position: e.add(e.rotate(w.position ?? e.create(0, 0), this.rotation), this.position),
                fallOff: w.falloff,
                maxRange: w.maxRange,
                dynamic: !0,
                loop: !0
            };
            w.normal && !((r = a.puzzle) != null && r.solved) && ((d = this.sound) == null ? void 0 : d.name) !== w.normal && ((g = this.sound) == null || g.stop(),
            this.sound = this.game.soundManager.play(w.normal, k)),
            w.solved && ((h = a.puzzle) != null && h.solved) && ((_ = this.sound) == null ? void 0 : _.name) !== w.solved && ((f = this.sound) == null || f.stop(),
            this.sound = this.game.soundManager.play(w.solved, k))
        }
        a.dead && (!this.dead && !o && (this.game.particleManager.spawnParticles(10, ()=>{
            var w;
            return {
                frames: `${this.definition.idString}_particle`,
                position: ((w = this.ceilingHitbox) == null ? void 0 : w.randomPoint()) ?? {
                    x: 0,
                    y: 0
                },
                zIndex: 10,
                lifetime: 2e3,
                rotation: {
                    start: Ae(),
                    end: Ae()
                },
                alpha: {
                    start: 1,
                    end: 0,
                    ease: ue.sexticIn
                },
                scale: {
                    start: 1,
                    end: .2
                },
                speed: e.fromPolar(Ae(), Z(1, 2))
            }
        }
        ),
        this.playSound("ceiling_collapse", {
            falloff: .5,
            maxRange: 96
        })),
        (b = this.ceilingTween) == null || b.kill(),
        this.ceilingContainer.zIndex = P.DeadObstacles,
        this.ceilingContainer.alpha = 1,
        this.ceilingContainer.addChild(new W(`${s.idString}_residue`))),
        this.dead = a.dead,
        a.puzzle && (!o && a.puzzle.errorSeq !== this.errorSeq && this.playSound("puzzle_error"),
        this.errorSeq = a.puzzle.errorSeq,
        !o && a.puzzle.solved && ((v = s.puzzle) != null && v.solvedSound) && this.playSound("puzzle_solved")),
        this.ceilingContainer.removeChildren();
        for (const w of s.ceilingImages) {
            let k = w.key;
            this.dead && w.residue && (k = w.residue);
            const S = new W(k);
            S.setVPos(se(w.position)),
            w.rotation && S.setRotation(w.rotation),
            w.scale && (S.scale = w.scale),
            w.tint !== void 0 && S.setTint(w.tint),
            this.ceilingContainer.addChild(S)
        }
    }
    destroy() {
        var a, o;
        super.destroy(),
        (a = this.ceilingTween) == null || a.kill(),
        this.ceilingContainer.destroy(),
        (o = this.sound) == null || o.stop()
    }
}
class ts extends po {
    constructor(a, o) {
        super(o);
        c(this, "game");
        c(this, "image");
        c(this, "maxLength");
        c(this, "tracerLength");
        c(this, "_trailReachedMaxLength", !1);
        c(this, "_trailTicks", 0);
        c(this, "_lastParticleTrail", Date.now());
        this.game = a;
        const s = this.definition.tracer;
        this.image = new W(s.image).setRotation(this.rotation - Math.PI / 2).setVPos(se(this.position)),
        this.tracerLength = s.length,
        this.maxLength = this.image.width * this.tracerLength,
        this.image.scale.y = s.width,
        this.image.alpha = s.opacity / (this.reflectionCount + 1),
        this.game.console.getBuiltInCVar("cv_cooler_graphics") && (this.image.filters = new Jo({
            strength: 5
        })),
        s.particle || this.image.anchor.set(1, .5);
        const n = 16777215
          , r = new vt(s.color === -1 ? nt(0, n) : s.color ?? n);
        et.bulletTrailAdjust && r.multiply(et.bulletTrailAdjust),
        this.image.tint = r,
        this.image.zIndex = s.zIndex,
        this.game.camera.addObject(this.image)
    }
    update(a) {
        if (!this.dead) {
            const s = this.updateAndGetCollisions(a, this.game.objects);
            for (const n of s) {
                const r = n.object
                  , d = r.type === j.Obstacle
                  , g = r.type === j.Player;
                if ((d || g) && r.hitEffect(n.intersection.point, Math.atan2(n.intersection.normal.y, n.intersection.normal.x)),
                this.damagedIDs.add(r.id),
                !(d && (this.definition.penetration.obstacles && !r.definition.impenetrable || r.definition.noBulletCollision || r.definition.noCollisions)) && !(this.definition.penetration.players && g)) {
                    this.dead = !0,
                    this.position = n.intersection.point;
                    break
                }
            }
        }
        !this.dead && !this._trailReachedMaxLength ? this._trailTicks += a : (this.dead || this.definition.tracer.particle) && (this._trailTicks -= a);
        const o = Ue.distance(this.initialPosition, this.position);
        if (this.definition.tracer.particle)
            this.image.scale.set(1 + o / this.maxDistance),
            this.image.alpha = 2 * this.definition.speed * this._trailTicks / this.maxDistance,
            this._trailReachedMaxLength || (this._trailReachedMaxLength = this.image.alpha >= 1);
        else {
            const s = Math.min(Math.min(this.definition.speed * this._trailTicks, o) * te, this.maxLength);
            this.image.width = s,
            this._trailReachedMaxLength || (this._trailReachedMaxLength = s >= this.maxLength)
        }
        this.image.setVPos(se(this.position)),
        this.particleTrail(),
        this._trailTicks <= 0 && this.dead && this.destroy()
    }
    particleTrail() {
        if (!this.definition.trail || !this.game.console.getBuiltInCVar("cv_cooler_graphics") || Date.now() - this._lastParticleTrail < this.definition.trail.interval)
            return;
        const a = this.definition.trail;
        this.game.particleManager.spawnParticles(a.amount ?? 1, ()=>({
            frames: a.frame,
            speed: e.fromPolar(Ae(), Z(a.spreadSpeed.min, a.spreadSpeed.max)),
            position: this.position,
            lifetime: nt(a.lifetime.min, a.lifetime.max),
            zIndex: P.Bullets - 1,
            scale: Z(a.scale.min, a.scale.max),
            alpha: {
                start: Z(a.alpha.min, a.alpha.max),
                end: 0
            },
            tint: a.tint === -1 ? new vt({
                h: nt(0, 6) * 60,
                s: 60,
                l: 70
            }).toNumber() : a.tint
        })),
        this._lastParticleTrail = Date.now()
    }
    destroy() {
        this.image.destroy(),
        this.game.bullets.delete(this)
    }
}
class is extends it {
    constructor(a, o, s) {
        super(a, o);
        c(this, "type", j.DeathMarker);
        c(this, "playerName");
        c(this, "nameColor", 14474460);
        c(this, "playerBadge");
        c(this, "image");
        c(this, "playerNameText");
        c(this, "scaleAnim");
        c(this, "alphaAnim");
        this.image = new W("death_marker"),
        this.playerNameText = new Ji({
            text: "",
            style: {
                fontSize: 36,
                fontFamily: "Inter",
                dropShadow: {
                    alpha: .8,
                    color: "black",
                    blur: 2,
                    distance: 2
                }
            }
        }),
        this.playerNameText.y = 95,
        this.playerNameText.anchor.set(.5),
        this.container.addChild(this.image, this.playerNameText),
        this.updateFromData(s, !0)
    }
    updateFromData(a, o=!1) {
        this.position = a.position,
        this.container.position.copyFrom(se(this.position)),
        this.container.zIndex = P.DeathMarkers,
        Se[this.game.map.terrain.getFloor(this.position)].overlay && (this.container.zIndex = P.UnderWaterDeadObstacles);
        const s = this.game.playerNames.get(a.playerID)
          , n = this.game.uiManager.getRawPlayerName(a.playerID);
        if (s) {
            if (this.playerName = n,
            this.playerNameText.text = this.playerName,
            s.badge) {
                const r = new W(s.badge.idString)
                  , d = r.width;
                r.width = this.playerNameText.height / 1.25,
                r.height *= r.width / d,
                r.position = e.create(this.playerNameText.width / 2 + 20, 96),
                this.container.addChild(r)
            }
            s.hasColor && (this.nameColor = s.nameColor.toNumber())
        }
        this.playerNameText.style.fill = this.nameColor,
        a.isNew && o && (this.container.scale.set(.5),
        this.container.alpha = 0,
        this.scaleAnim = this.game.addTween({
            target: this.container.scale,
            to: {
                x: 1,
                y: 1
            },
            duration: 400,
            onComplete: ()=>{
                this.scaleAnim = void 0
            }
        }),
        this.alphaAnim = this.game.addTween({
            target: this.container,
            to: {
                alpha: 1
            },
            duration: 400,
            onComplete: ()=>{
                this.alphaAnim = void 0
            }
        }))
    }
    destroy() {
        var a, o;
        super.destroy(),
        this.image.destroy(),
        this.playerNameText.destroy(),
        (a = this.scaleAnim) == null || a.kill(),
        (o = this.alphaAnim) == null || o.kill()
    }
}
class as extends it {
    constructor(a, o, s) {
        super(a, o);
        c(this, "type", j.Decal);
        c(this, "definition");
        c(this, "image");
        this.image = new W,
        this.updateFromData(s)
    }
    updateFromData(a) {
        this.position = a.position;
        const o = this.definition = a.definition;
        this.image.setFrame(o.image),
        this.container.addChild(this.image),
        this.container.zIndex = o.zIndex ?? P.Decals,
        this.container.scale.set(o.scale),
        this.container.position.copyFrom(se(this.position)),
        this.container.rotation = a.rotation,
        Se[this.game.map.terrain.getFloor(this.position)].overlay && o.zIndex === void 0 && (this.container.zIndex = P.UnderWaterDeadObstacles)
    }
    destroy() {
        this.image.destroy()
    }
}
function os(i, t, a) {
    const o = se(a)
      , s = new W("explosion_1");
    s.scale.set(0),
    s.tint = t.animation.tint,
    s.setVPos(o),
    i.camera.addObject(s),
    i.addTween({
        target: s.scale,
        to: {
            x: t.animation.scale,
            y: t.animation.scale
        },
        duration: t.animation.duration,
        ease: ue.expoOut
    }),
    i.addTween({
        target: s,
        to: {
            alpha: 0
        },
        duration: t.animation.duration * 1.5,
        ease: ue.expoOut,
        onComplete: ()=>{
            s.destroy()
        }
    }),
    Se[i.map.terrain.getFloor(a)].particles && i.particleManager.spawnParticles(4, ()=>({
        frames: "ripple_particle",
        zIndex: P.Ground,
        position: gt(a, 6),
        lifetime: 1e3,
        speed: e.create(0, 0),
        scale: {
            start: Z(.45, .55),
            end: Z(2.95, 3.05)
        },
        alpha: {
            start: Z(.55, .65),
            end: 0
        }
    })),
    i.camera.shake(t.cameraShake.duration, t.cameraShake.intensity),
    i.console.getBuiltInCVar("cv_cooler_graphics") && i.camera.shockwave(t.cameraShake.duration * Jt.time, o, t.cameraShake.intensity * Jt.amplitude, t.radius.min * 100 * Jt.wavelength, t.ballistics.speed * Jt.speed),
    t.sound !== void 0 && i.soundManager.play(t.sound, {
        position: a,
        falloff: .4
    })
}
class kt extends it {
    constructor(a, o, s) {
        super(a, o);
        c(this, "type", j.Loot);
        c(this, "definition");
        c(this, "images");
        c(this, "_count", 0);
        c(this, "hitbox");
        c(this, "animation");
        this.images = {
            background: new W,
            item: new W
        },
        this.updateFromData(s, !0)
    }
    get count() {
        return this._count
    }
    updateFromData(a, o=!1) {
        var n;
        if (a.full) {
            const r = this.definition = a.full.definition
              , d = r.itemType;
            this.images.item.setFrame(`${r.idString}${d === C.Skin ? "_base" : ""}`),
            this.container.addChild(this.images.background, this.images.item),
            this.container.zIndex = P.Loot;
            let g;
            switch (d) {
            case C.Gun:
                {
                    g = `loot_background_gun_${r.ammoType}`,
                    this.images.item.scale.set(.85);
                    break
                }
            case C.Melee:
                {
                    g = "loot_background_melee";
                    const h = (n = r.image) == null ? void 0 : n.lootScale;
                    h !== void 0 && this.images.item.scale.set(h);
                    break
                }
            case C.Healing:
                {
                    g = "loot_background_healing";
                    break
                }
            case C.Armor:
            case C.Backpack:
            case C.Scope:
            case C.Skin:
                {
                    g = "loot_background_equipment",
                    r.itemType === C.Skin && (r.grassTint && this.images.item.setTint(Xi),
                    this.images.item.setAngle(90).setScale(.75));
                    break
                }
            case C.Throwable:
                {
                    g = "loot_background_throwable";
                    break
                }
            }
            g !== void 0 ? this.images.background.setFrame(g) : this.images.background.setVisible(!1),
            this.hitbox = new M(sn[d]),
            this._count = a.full.count || 1 / 0,
            a.full.isNew && o && (this.container.scale.set(0),
            this.animation = this.game.addTween({
                target: this.container.scale,
                to: {
                    x: 1,
                    y: 1
                },
                duration: 1e3,
                ease: ue.elasticOut2,
                onComplete: ()=>{
                    this.animation = void 0
                }
            }))
        }
        this.position = a.position,
        this.hitbox.position = this.position;
        const s = this.game.map.terrain.getFloor(this.position);
        this.container.zIndex = Se[s].overlay ? P.UnderWaterLoot : P.Loot,
        (!this.game.console.getBuiltInCVar("cv_movement_smoothing") || o) && (this.container.position = se(this.position))
    }
    destroy() {
        var a;
        super.destroy(),
        this.images.background.destroy(),
        this.images.item.destroy(),
        (a = this.animation) == null || a.kill()
    }
    canInteract(a) {
        var d, g;
        if (a.dead || a.downed)
            return !1;
        const o = this.game.uiManager.inventory
          , {weapons: s, lockedSlots: n} = o
          , r = this.definition;
        switch (r.itemType) {
        case C.Gun:
            {
                for (const _ of s)
                    if ((_ == null ? void 0 : _.definition.itemType) === C.Gun && (r.idString === _.definition.dualVariant || r === _.definition && _.definition.dualVariant))
                        return !0;
                const h = o.activeWeaponIndex;
                return !s[0] && !(n & 1) || !s[1] && !(n & 2) || h < 2 && r !== ((d = s[h]) == null ? void 0 : d.definition) && !(n & 1 << h)
            }
        case C.Melee:
            return r !== ((g = s[2]) == null ? void 0 : g.definition) && !(n & 4);
        case C.Healing:
        case C.Ammo:
        case C.Throwable:
            {
                const {idString: h} = r;
                return !(n & 8) && o.items[h] + 1 <= a.equipment.backpack.maxCapacity[h]
            }
        case C.Armor:
            switch (!0) {
            case r.armorType === ii.Helmet:
                return r.level > a.helmetLevel;
            case r.armorType === ii.Vest:
                return r.level > a.vestLevel;
            default:
                return !1
            }
        case C.Backpack:
            return r.level > a.backpackLevel;
        case C.Scope:
            return o.items[r.idString] === 0;
        case C.Skin:
            return !0
        }
    }
}
class ns extends it {
    constructor(a, o, s) {
        super(a, o);
        c(this, "type", j.Parachute);
        c(this, "image", new W("airdrop_parachute"));
        c(this, "scaleAnim");
        c(this, "fallSound");
        this.container.addChild(this.image),
        this.container.zIndex = P.ObstaclesLayer5,
        this.updateFromData(s, !0)
    }
    updateFromData(a, o=!1) {
        var n;
        a.full && (this.position = a.full.position,
        this.container.position = se(this.position),
        this.fallSound = this.playSound("airdrop_fall", {
            falloff: 1,
            maxRange: 128,
            dynamic: !0
        }));
        const s = Y.lerp(.5, 1, a.height);
        if (o ? this.container.scale.set(s) : ((n = this.scaleAnim) == null || n.kill(),
        this.scaleAnim = this.game.addTween({
            target: this.container.scale,
            to: {
                x: s,
                y: s
            },
            duration: this.game.serverDt,
            onComplete: ()=>{
                this.scaleAnim = void 0
            }
        })),
        a.height === 0) {
            this.playSound(this.game.map.terrain.getFloor(this.position) === "water" ? "airdrop_land_water" : "airdrop_land");
            const r = this.game.map.terrain.getFloor(this.position);
            Se[r].particles && this.game.particleManager.spawnParticles(6, ()=>({
                frames: "ripple_particle",
                zIndex: P.Ground,
                position: gt(this.position, 6),
                lifetime: 1e3,
                speed: e.create(0, 0),
                scale: {
                    start: Z(.45, .55),
                    end: Z(2.95, 3.05)
                },
                alpha: {
                    start: Z(.55, .65),
                    end: 0
                }
            }))
        }
    }
    destroy() {
        var a, o;
        super.destroy(),
        this.image.destroy(),
        (a = this.scaleAnim) == null || a.kill(),
        (o = this.fallSound) == null || o.stop()
    }
}
const mi = class mi {
    constructor(t, a, o) {
        c(this, "game");
        c(this, "startPosition");
        c(this, "endPosition");
        c(this, "image");
        c(this, "sound");
        c(this, "startTime", Date.now());
        this.game = t,
        this.startPosition = a,
        this.endPosition = e.add(this.startPosition, e.fromPolar(o, $.maxPosition * 2)),
        this.image = new W("airdrop_plane").setZIndex(P.Gas + 1).setRotation(o).setScale(4),
        this.sound = t.soundManager.play("airdrop_plane", {
            position: a,
            falloff: .5,
            maxRange: 256,
            dynamic: !0
        }),
        t.camera.addObject(this.image)
    }
    update() {
        const t = this.sound.position = e.lerp(this.startPosition, this.endPosition, (Date.now() - this.startTime) / ($.airdrop.flyTime * 2));
        this.image.setVPos(e.scale(t, te)),
        Ue.distanceSquared(t, this.startPosition) > mi.maxDistanceSquared && (this.destroy(),
        this.game.planes.delete(this))
    }
    destroy() {
        this.image.destroy()
    }
}
;
c(mi, "maxDistanceSquared", ($.maxPosition * 2) ** 2);
let Hi = mi;
class ss extends it {
    constructor(a, o, s) {
        super(a, o);
        c(this, "type", j.SyncedParticle);
        c(this, "image", new W);
        c(this, "_alpha", 1);
        c(this, "_oldScale");
        c(this, "_lastScaleChange");
        c(this, "_scaleManuallySet", !1);
        c(this, "_scale", 0);
        c(this, "_definition");
        this.container.addChild(this.image),
        this.updateFromData(s, !0)
    }
    get scale() {
        return this._scale
    }
    set scale(a) {
        this._scaleManuallySet && (this._oldScale = this._scale),
        this._scaleManuallySet = !0,
        this._lastScaleChange = Date.now(),
        this._scale = a
    }
    get definition() {
        return this._definition
    }
    updateContainerScale() {
        this._oldScale === void 0 || this._lastScaleChange === void 0 || this.container.scale === void 0 || this.container.scale.set(Y.lerp(this._oldScale, this._scale, Math.min((Date.now() - this._lastScaleChange) / this.game.serverDt, 1)))
    }
    updateFromData(a, o=!1) {
        const s = a.full;
        if (s) {
            const {variant: n, definition: r} = s;
            this._definition = r,
            this.image.setFrame(`${r.frame}${n !== void 0 ? `_${n}` : ""}`),
            r.tint && (this.image.tint = r.tint),
            this.container.zIndex = r.zIndex
        }
        this.position = a.position,
        this.rotation = a.rotation,
        this.scale = a.scale ?? this._scale,
        this.container.alpha = this._alpha = a.alpha ?? this._alpha,
        (!this.game.console.getBuiltInCVar("cv_movement_smoothing") || o) && (this.container.position = se(this.position),
        this.container.rotation = this.rotation,
        this.container.scale.set(this._scale))
    }
    destroy() {
        super.destroy(),
        this.image.destroy()
    }
}
class rs extends it {
    constructor(a, o, s) {
        super(a, o);
        c(this, "type", j.ThrowableProjectile);
        c(this, "image", new W);
        c(this, "waterOverlay", new W("water_overlay").setVisible(!1).setScale(.75).setTint(je.water));
        c(this, "_waterAnim");
        c(this, "radius");
        c(this, "floorType", "grass");
        this.container.addChild(this.image, this.waterOverlay),
        this.updateFromData(s)
    }
    updateFromData(a, o=!1) {
        var s;
        if (a.full && (this.image.setFrame(a.full.definition.animation.liveImage),
        this.radius = a.full.definition.hitboxRadius),
        this.position = a.position,
        this.rotation = a.rotation,
        a.airborne)
            this.container.zIndex = P.AirborneThrowables;
        else {
            const n = this.game.map.terrain.getFloor(this.position)
              , r = Se[n].overlay;
            this.container.zIndex = r ? P.UnderwaterGroundedThrowables : P.GroundedThrowables,
            n !== this.floorType && (r && this.waterOverlay.setVisible(!0),
            (s = this._waterAnim) == null || s.kill(),
            this._waterAnim = this.game.addTween({
                target: this.waterOverlay,
                to: {
                    alpha: r ? 1 : 0
                },
                duration: 200,
                onComplete: ()=>{
                    r || this.waterOverlay.setVisible(!1),
                    this._waterAnim = void 0
                }
            })),
            this.floorType = n
        }
        (!this.game.console.getBuiltInCVar("cv_movement_smoothing") || o) && (this.container.position = se(this.position),
        this.container.rotation = this.rotation)
    }
    destroy() {
        super.destroy(),
        this.image.destroy()
    }
}
const jt = class jt {
    constructor(t) {
        c(this, "pixi");
        c(this, "container");
        c(this, "position", e.create(0, 0));
        c(this, "_zoom", to.zoomLevel);
        c(this, "zoomTween");
        c(this, "shaking", !1);
        c(this, "shakeStart");
        c(this, "shakeDuration");
        c(this, "shakeIntensity");
        c(this, "shockwaves", new Set);
        c(this, "width", 1);
        c(this, "height", 1);
        if (this.game = t,
        jt._instantiated)
            throw new Error("Class 'Camera' has already been instantiated");
        jt._instantiated = !0,
        this.pixi = t.pixi,
        this.container = new Re({
            isRenderGroup: !0,
            sortableChildren: !0,
            filters: []
        })
    }
    get zoom() {
        return this._zoom
    }
    set zoom(t) {
        this._zoom = t,
        this.resize(!0)
    }
    resize(t=!1) {
        var r;
        this.width = this.pixi.screen.width,
        this.height = this.pixi.screen.height;
        const a = Math.min(this.width, this.height)
          , o = Math.max(this.width, this.height)
          , n = Math.max(a * (16 / 9), o) * .5 / (this._zoom * te);
        (r = this.zoomTween) == null || r.kill(),
        t ? this.zoomTween = this.game.addTween({
            target: this.container.scale,
            to: {
                x: n,
                y: n
            },
            duration: 800,
            ease: ue.cubicOut,
            onComplete: ()=>{
                this.zoomTween = void 0
            }
        }) : this.container.scale.set(n)
    }
    update() {
        let t = this.position;
        this.shaking && (t = e.add(t, gt(e.create(0, 0), this.shakeIntensity)),
        Date.now() - this.shakeStart > this.shakeDuration && (this.shaking = !1));
        for (const o of this.shockwaves)
            o.update();
        const a = e.add(e.scale(t, this.container.scale.x), e.create(-this.width / 2, -this.height / 2));
        this.container.position.set(-a.x, -a.y)
    }
    shake(t, a) {
        this.game.console.getBuiltInCVar("cv_camera_shake_fx") && (this.shaking = !0,
        this.shakeStart = Date.now(),
        this.shakeDuration = t,
        this.shakeIntensity = a)
    }
    shockwave(t, a, o, s, n) {
        this.game.console.getBuiltInCVar("cv_cooler_graphics") && this.shockwaves.add(new ls(this.game,t,a,o,s,n))
    }
    addObject(...t) {
        this.container.addChild(...t)
    }
}
;
c(jt, "_instantiated", !1);
let Ni = jt;
class ls {
    constructor(t, a, o, s, n, r) {
        c(this, "lifeStart");
        c(this, "lifeEnd");
        c(this, "filter");
        c(this, "anchorContainer");
        this.game = t,
        this.amplitude = s,
        this.wavelength = n,
        this.speed = r,
        this.lifeStart = Date.now(),
        this.lifeEnd = this.lifeStart + a,
        this.anchorContainer = new W,
        this.wavelength = n,
        this.game.camera.addObject(this.anchorContainer),
        this.anchorContainer.setVPos(o),
        this.filter = new Yo,
        this.update(),
        this.game.camera.container.filters = [this.game.camera.container.filters].flat().concat(this.filter)
    }
    update() {
        const t = Date.now();
        if (t > this.lifeEnd) {
            this.destroy();
            return
        }
        const a = this.scale()
          , o = this.anchorContainer.getGlobalPosition();
        this.filter.centerX = o.x,
        this.filter.centerY = o.y,
        this.filter.wavelength = this.wavelength * a,
        this.filter.speed = this.speed * a,
        this.filter.time = t - this.lifeStart,
        this.filter.amplitude = this.amplitude * ue.linear(1 - (t - this.lifeStart) / (this.lifeEnd - this.lifeStart))
    }
    scale() {
        return te / this.game.camera.zoom
    }
    destroy() {
        this.game.camera.container.filters = [this.game.camera.container.filters].flat().filter(t=>this.filter !== t),
        this.game.camera.shockwaves.delete(this),
        this.anchorContainer.destroy()
    }
}
const Ft = class Ft {
    constructor(t) {
        c(this, "state", Ve.Inactive);
        c(this, "currentDuration", 0);
        c(this, "oldPosition", e.create(0, 0));
        c(this, "lastPosition", e.create(0, 0));
        c(this, "position", e.create(0, 0));
        c(this, "newPosition", e.create(0, 0));
        c(this, "oldRadius", 2048);
        c(this, "lastRadius", 2048);
        c(this, "radius", 2048);
        c(this, "newRadius", 2048);
        c(this, "lastUpdateTime", Date.now());
        c(this, "_ui");
        if (this.game = t,
        Ft._instantiated)
            throw new Error("Class 'Gas' has already been instantiated");
        Ft._instantiated = !0,
        this._ui = {
            msgText: this.game.uiManager.ui.gasMsgInfo,
            msgContainer: this.game.uiManager.ui.gasMsg,
            timer: m("#gas-timer"),
            timerText: m("#gas-timer-text"),
            timerImg: m("#gas-timer-image")
        }
    }
    updateFrom(t) {
        const a = t.gas
          , o = t.gasProgress;
        if (a) {
            this.state = a.state,
            this.currentDuration = a.currentDuration,
            this.oldPosition = a.oldPosition,
            this.newPosition = a.newPosition,
            this.oldRadius = a.oldRadius,
            this.newRadius = a.newRadius;
            const [s,n] = [a.state === Ve.Inactive, a.state === Ve.Advancing]
              , r = this.currentDuration - Math.round(this.currentDuration * (o ?? 1));
            let d = "";
            switch (this.state) {
            case Ve.Waiting:
                {
                    d = z("gas_waiting", {
                        time: bo(r)
                    });
                    break
                }
            case Ve.Advancing:
                {
                    d = z("gas_advancing");
                    break
                }
            case Ve.Inactive:
                {
                    d = z("gas_inactive");
                    break
                }
            }
            n ? (this._ui.timer.addClass("advancing"),
            this._ui.timerImg.attr("src", "./img/misc/gas-advancing-icon.svg")) : (this._ui.timer.removeClass("advancing"),
            this._ui.timerImg.attr("src", "./img/misc/gas-waiting-icon.svg")),
            (s || a.currentDuration !== 0) && !Ei && (!this.game.gameOver || this.game.spectating) && (this._ui.msgText.text(d),
            this._ui.msgContainer.fadeIn(),
            s ? this._ui.msgText.css("color", "white") : (this._ui.msgText.css("color", "cyan"),
            setTimeout(()=>this._ui.msgContainer.fadeOut(1e3), 5e3)))
        }
        if (o !== void 0) {
            const s = this.currentDuration - Math.round(this.currentDuration * o);
            this._ui.timerText.text(`${Math.floor(s / 60)}:${s % 60 < 10 ? "0" : ""}${s % 60}`),
            this.state !== Ve.Advancing && (this.position = this.oldPosition,
            this.radius = this.oldRadius),
            this.state === Ve.Advancing && (this.lastPosition = e.clone(this.position),
            this.lastRadius = this.radius,
            this.position = e.lerp(this.oldPosition, this.newPosition, o),
            this.radius = Y.lerp(this.oldRadius, this.newRadius, o),
            this.lastUpdateTime = Date.now())
        }
    }
}
;
c(Ft, "_instantiated", !1);
let Wi = Ft;
const ye = class ye {
    constructor(t) {
        c(this, "_graphics");
        c(this, "_scale");
        this._scale = t,
        this._graphics = new Ye,
        this._graphics.zIndex = P.Gas,
        this.graphics.clear().beginPath().moveTo(-ye._overdraw, -ye._overdraw).lineTo(ye._overdraw, -ye._overdraw).lineTo(ye._overdraw, ye._overdraw).lineTo(-ye._overdraw, ye._overdraw).closePath().fill(je.gas).moveTo(0, 1);
        const a = 2 * Math.PI;
        for (let o = 0; o < ye._segments; o++) {
            const s = o / ye._segments;
            this.graphics.lineTo(Math.sin(a * s), Math.cos(a * s))
        }
        this.graphics.closePath().cut()
    }
    get graphics() {
        return this._graphics
    }
    update(t) {
        let a, o;
        if (t.state === Ve.Advancing) {
            const r = Y.clamp((Date.now() - t.lastUpdateTime) / t.game.serverDt, 0, 1);
            a = e.lerp(t.lastPosition, t.position, r),
            o = Y.lerp(t.lastRadius, t.radius, r)
        } else
            a = t.position,
            o = t.radius;
        const s = e.scale(a, this._scale);
        let n = o * this._scale;
        n < .1 && (n = 1,
        s.x += .5 * ye._overdraw),
        this._graphics.position.copyFrom(s),
        this._graphics.scale.set(n)
    }
}
;
c(ye, "_overdraw", 100 * 1e3),
c(ye, "_segments", 512);
let gi = ye;
const $t = class $t {
    constructor(t) {
        c(this, "_expanded", !1);
        c(this, "_visible", !0);
        c(this, "_position", e.create(0, 0));
        c(this, "_lastPosition", e.create(0, 0));
        c(this, "_gasPos", e.create(0, 0));
        c(this, "_gasRadius", 0);
        c(this, "safeZone", new Ye);
        c(this, "_objectsContainer", new Re);
        c(this, "container", new Re);
        c(this, "mask", new Ye);
        c(this, "sprite", new Zi);
        c(this, "_texture");
        c(this, "indicator", new W("player_indicator").setTint(ti[0]).setZIndex(1e3));
        c(this, "teammateIndicators", new Map);
        c(this, "teammateIndicatorContainer", new Re);
        c(this, "_width", 0);
        c(this, "_height", 0);
        c(this, "_minimapWidth", 0);
        c(this, "_minimapHeight", 0);
        c(this, "_margins", e.create(0, 0));
        c(this, "gasRender", new gi(1));
        c(this, "placesContainer", new Re);
        c(this, "_terrain", new Za(0,0,0,0,0,[]));
        c(this, "pings", new Set);
        c(this, "_border", new Ye);
        c(this, "pingsContainer", new Re);
        c(this, "pingGraphics", new Ye);
        c(this, "_terrainGraphics", new Ye);
        c(this, "_objects", []);
        c(this, "_places", []);
        c(this, "debugGraphics", new Ye);
        c(this, "_borderContainer", m("#minimap-border"));
        c(this, "_uiCache", Object.freeze({
            scopes: m("#scopes-container"),
            closeMinimap: m("#btn-close-minimap"),
            killLeader: m("#ui-kill-leader"),
            centerBottom: m("#center-bottom-container"),
            killCounter: m("#kill-counter")
        }));
        if (this.game = t,
        $t._instantiated)
            throw new Error("Class 'Minimap' has already been instantiated");
        $t._instantiated = !0,
        this._objectsContainer.mask = this.mask,
        this.container.addChild(this._objectsContainer),
        this.container.addChild(this._border),
        this.safeZone.zIndex = 997,
        this.pingsContainer.zIndex = 998,
        this.teammateIndicatorContainer.zIndex = 999,
        this._objectsContainer.addChild(this.sprite, this.placesContainer, this.gasRender.graphics, this.safeZone, this.pingGraphics, this.pingsContainer, this.indicator, this.teammateIndicatorContainer).sortChildren(),
        this._borderContainer.on("click", a=>{
            this.game.inputManager.isMobile && (this.switchToBigMap(),
            a.stopImmediatePropagation())
        }
        ),
        this.sprite.eventMode = "static",
        this.sprite.on("pointerdown", a=>{
            this.game.inputManager.pingWheelPosition = this.sprite.toLocal(a),
            this.game.inputManager.pingWheelMinimap = !0
        }
        ),
        m("#btn-close-minimap").on("pointerdown", a=>{
            this.switchToSmallMap(),
            a.stopImmediatePropagation()
        }
        )
    }
    get expanded() {
        return this._expanded
    }
    set expanded(t) {
        this._expanded !== t && ((this._expanded = t) ? this.switchToBigMap() : this.switchToSmallMap())
    }
    toggle() {
        this.expanded = !this._expanded
    }
    get visible() {
        return this._visible
    }
    set visible(t) {
        this._visible !== t && (this._visible = t,
        this.switchToSmallMap(),
        this.container.visible = t,
        this._borderContainer.toggle(t))
    }
    toggleMinimap() {
        this.visible = !this._visible
    }
    get width() {
        return this._width
    }
    get height() {
        return this._height
    }
    get minimapWidth() {
        return this._minimapWidth
    }
    get minimapHeight() {
        return this._minimapHeight
    }
    get terrain() {
        return this._terrain
    }
    drawTerrain(t, a, o) {
        var v;
        t.zIndex = P.Ground;
        const s = 20 * a
          , [{points: n},{points: r}] = [this._terrain.beachHitbox, this._terrain.grassHitbox]
          , d = a === 1 ? n : n.map(w=>e.scale(w, a));
        t.roundShape(d, s),
        t.cut(),
        (v = t.roundShape) == null || v.call(t, d, s),
        t.fill(je.beach);
        const g = a === 1 ? r : r.map(w=>e.scale(w, a));
        t.roundShape(g, s),
        t.cut();
        function h(w) {
            const k = w.length / 2;
            return w.map((S,x)=>({
                x: S.x * a,
                y: S.y * a,
                radius: x === k || x === k - 1 ? 0 : s
            }))
        }
        t.beginPath();
        for (const w of this._terrain.rivers)
            t.roundShape(h(w.bankHitbox.points), 0, !0);
        t.fill(je.riverBank),
        t.beginPath();
        for (const w of this._terrain.rivers)
            t.roundShape(h(w.waterHitbox.points), 0, !0);
        t.fill(je.water),
        t.beginPath(),
        t.rect(0, 0, this._width * a, this._height * a),
        t.fill(je.water),
        t.roundShape(d, s),
        t.cut(),
        t.setStrokeStyle({
            color: 0,
            alpha: .1,
            width: o
        });
        const _ = $.gridSize * a
          , f = this._width * a
          , b = this._height * a;
        for (let w = 0; w <= f; w += _)
            t.moveTo(w, 0),
            t.lineTo(w, b);
        for (let w = 0; w <= b; w += _)
            t.moveTo(0, w),
            t.lineTo(f, w);
        t.stroke();
        for (const w of this._objects) {
            if (w.type !== j.Building)
                continue;
            const k = w.definition
              , S = x=>{
                switch (x.type) {
                case ot.Rect:
                    {
                        t.rect(x.min.x * a, x.min.y * a, (x.max.x - x.min.x) * a, (x.max.y - x.min.y) * a);
                        break
                    }
                case ot.Circle:
                    t.arc(x.position.x * a, x.position.y * a, x.radius * a, 0, Math.PI * 2);
                    break;
                case ot.Polygon:
                    t.poly(x.points.map(I=>e.scale(I, a)));
                    break;
                case ot.Group:
                    for (const I of x.hitboxes)
                        S(I);
                    break
                }
            }
            ;
            for (const x of k.groundGraphics)
                t.beginPath(),
                S(x.hitbox.transform(w.position, 1, w.rotation)),
                t.closePath(),
                t.fill(x.color)
        }
    }
    renderMap() {
        var g, h, _;
        const t = this._terrainGraphics;
        t.clear();
        const a = new Ye;
        this.drawTerrain(t, te, 6),
        this.drawTerrain(a, 1, 2);
        const o = 5120
          , s = o * 2
          , n = this._width * te
          , r = this._height * te;
        t.rect(-o, -o, n + s, o),
        t.rect(-o, r, n + s, o),
        t.rect(-o, -o, o, r + s),
        t.rect(n, -o, o, r + s),
        t.fill(je.border),
        this.game.camera.addObject(t);
        const d = new Re;
        d.addChild(a);
        for (const f of this._objects)
            switch (f.type) {
            case j.Obstacle:
                {
                    const b = f.definition;
                    let v = b.frames.base ?? b.idString;
                    f.variation !== void 0 && (v += `_${f.variation + 1}`);
                    const w = new W(v).setVPos(f.position).setRotation(f.rotation).setZIndex(b.zIndex ?? P.ObstaclesLayer1);
                    b.tint !== void 0 && w.setTint(b.tint),
                    w.scale.set((f.scale ?? 1) * (1 / te)),
                    d.addChild(w);
                    break
                }
            case j.Building:
                {
                    const b = f.definition
                      , v = Ke.orientationToRotation(f.rotation);
                    for (const w of b.floorImages) {
                        const k = new W(w.key).setVPos(e.addAdjust(f.position, w.position, f.rotation)).setRotation(v + (w.rotation ?? 0)).setZIndex(P.BuildingsFloor);
                        w.tint !== void 0 && k.setTint(w.tint),
                        k.scale = e.scale(w.scale ?? e.create(1, 1), 1 / te),
                        d.addChild(k)
                    }
                    for (const w of b.ceilingImages) {
                        const k = new W(w.key).setVPos(e.addAdjust(f.position, w.position, f.rotation)).setRotation(v).setZIndex(b.ceilingZIndex);
                        k.scale.set(1 / te),
                        k.scale.x *= ((g = w.scale) == null ? void 0 : g.x) ?? 1,
                        k.scale.y *= ((h = w.scale) == null ? void 0 : h.y) ?? 1,
                        w.tint !== void 0 && k.setTint(w.tint),
                        d.addChild(k)
                    }
                    break
                }
            }
        d.sortChildren(),
        (_ = this._texture) == null || _.destroy(!0),
        this._texture = Xo.create({
            width: this._width,
            height: this._height,
            resolution: ui.any ? 1 : 2
        }),
        this.game.pixi.renderer.render({
            container: d,
            target: this._texture,
            clearColor: je.grass
        }),
        this.sprite.texture.destroy(!0),
        this.sprite.texture = this._texture,
        d.destroy({
            children: !0,
            texture: !1
        }),
        this.placesContainer.removeChildren();
        for (const f of this._places) {
            const b = new Ji({
                text: f.name,
                style: {
                    fill: "white",
                    fontFamily: "Inter",
                    fontWeight: "600",
                    stroke: {
                        color: "black",
                        width: 2
                    },
                    fontSize: 18,
                    dropShadow: {
                        alpha: .8,
                        color: "black",
                        blur: 2,
                        distance: 5
                    }
                }
            });
            b.alpha = .7,
            b.anchor.set(.5),
            b.position.copyFrom(f.position),
            this.placesContainer.addChild(b)
        }
    }
    renderMapDebug() {
        const t = this.debugGraphics;
        t.clear(),
        t.zIndex = 99;
        for (const [a,o] of this._terrain.floors)
            wt(a, Se[o].debugColor, t);
        wt(this._terrain.beachHitbox, Se.sand.debugColor, t),
        wt(this._terrain.grassHitbox, Se.grass.debugColor, t);
        for (const a of this._terrain.rivers) {
            const o = a.points.map(s=>e.scale(s, te));
            wt(a.waterHitbox, Se.water.debugColor, t),
            wt(a.bankHitbox, Se.sand.debugColor, t),
            t.setStrokeStyle({
                width: 10,
                color: 0
            }),
            t.beginPath(),
            t.moveTo(o[0].x, o[0].y);
            for (let s = 1; s < o.length; s++) {
                const n = o[s];
                t.lineTo(n.x, n.y)
            }
            t.stroke();
            for (const s of o)
                t.beginPath(),
                t.arc(s.x, s.y, 20, 0, Math.PI * 2),
                t.fill(16711680)
        }
        this.game.camera.addObject(t)
    }
    updateFromPacket(t) {
        console.log(`Joining game with seed: ${t.seed}`),
        this.game.uiManager.ui.loadingText.text(z("loading_joining_game"));
        const a = this._width = t.width
          , o = this._height = t.height;
        this._objects = t.objects,
        this._places = t.places;
        const s = new l(e.create(t.oceanSize, t.oceanSize),e.create(t.width - t.oceanSize, t.height - t.oceanSize))
          , n = [];
        n.push(...t.rivers.map(({width: r, points: d})=>new Zn(r,d,n,s))),
        this._terrain = new Za(a,o,t.oceanSize,t.beachSize,t.seed,n);
        for (const r of this._objects)
            if (r.type === j.Building)
                for (const d of r.definition.floors) {
                    const g = d.hitbox.transform(r.position, 1, r.rotation);
                    this._terrain.addFloor(d.type, g)
                }
        this.renderMap(),
        this.resize()
    }
    update() {
        if (this.pings.size > 0) {
            this.pingGraphics.clear();
            const a = Date.now();
            for (const o of this.pings) {
                const s = Y.lerp(0, 2048, (a - o.startTime) / 7e3);
                if (a > o.endTime) {
                    this.pings.delete(o),
                    o.destroy();
                    continue
                }
                s >= 2048 || (this.pingGraphics.setStrokeStyle({
                    color: o.color,
                    width: 5,
                    cap: "round"
                }),
                this.pingGraphics.arc(o.position.x, o.position.y, s, 0, Math.PI * 2),
                this.pingGraphics.stroke())
            }
        }
        const t = this.game.gas;
        this.gasRender.update(t),
        !(t.state === Ve.Inactive || this._position.x === this._lastPosition.x && this._position.y === this._lastPosition.y && t.newRadius === this._gasRadius && t.newPosition.x === this._gasPos.x && t.newPosition.y === this._gasPos.y) && (this._lastPosition = this._position,
        this._gasPos = t.newPosition,
        this._gasRadius = t.newRadius,
        this.safeZone.clear(),
        this.safeZone.beginPath(),
        this.safeZone.setStrokeStyle({
            color: 63993,
            width: 2,
            cap: "round"
        }),
        this.safeZone.moveTo(this._position.x, this._position.y).lineTo(this._gasPos.x, this._gasPos.y).closePath().stroke(),
        this.safeZone.beginPath().setStrokeStyle({
            color: 16777215,
            width: 2,
            cap: "round"
        }).arc(this._gasPos.x, this._gasPos.y, this._gasRadius, 0, Math.PI * 2).closePath().stroke())
    }
    resize() {
        this._border.visible = this._expanded;
        const t = this.game.console.getBuiltInCVar("cv_ui_scale");
        if (this._expanded) {
            const a = window.innerWidth
              , o = window.innerHeight
              , s = Math.min(o, a);
            this.container.scale.set(s / this._height),
            this._minimapWidth = this.sprite.width * this.container.scale.x,
            this._minimapHeight = this.sprite.height * this.container.scale.y,
            this._margins = e.create(a / 2 - this._minimapWidth / 2, o / 2 - this._minimapHeight / 2);
            const n = m("#btn-close-minimap")
              , r = Math.min(this._margins.x + this._minimapWidth + 16, a - (n.outerWidth() ?? 0)) / t;
            n.css("left", `${r}px`),
            this._border.clear(),
            this._border.setStrokeStyle({
                width: 4,
                color: 0
            }),
            this._border.rect(-this.sprite.width / 2, 0, this.sprite.width, this.sprite.height),
            this._border.stroke(),
            this.indicator.scale.set(1);
            for (const [,d] of this.teammateIndicators)
                d.setScale(1)
        } else {
            if (!this._visible)
                return;
            const a = this._borderContainer[0].getBoundingClientRect()
              , o = parseInt(this._borderContainer.css("border-width")) * t;
            this._minimapWidth = a.width - o * 2,
            this._minimapHeight = a.height - o * 2,
            this._margins = e.create(a.left + o, a.top + o),
            window.innerWidth > 1200 ? this.container.scale.set(1 / 1.25 * t) : this.container.scale.set(1 / 2 * t),
            this.indicator.scale.set(.75);
            for (const [,s] of this.teammateIndicators)
                s.setScale(.75)
        }
        this.mask.clear().rect(this._margins.x, this._margins.y, this._minimapWidth, this._minimapHeight).fill(),
        this.updatePosition(),
        this.updateTransparency();
        for (const a of this.placesContainer.children)
            a.scale.set(1 / this.container.scale.x)
    }
    setPosition(t) {
        this._position = e.clone(t),
        this.indicator.setVPos(t),
        this.updatePosition()
    }
    updatePosition() {
        if (this._expanded) {
            this.container.position.set(window.innerWidth / 2, window.innerHeight / 2 - this._minimapHeight / 2),
            this._objectsContainer.position.set(-this._width / 2, 0);
            return
        }
        const t = e.clone(this._position);
        t.x -= (this._minimapWidth / 2 + this._margins.x) / this.container.scale.x,
        t.y -= (this._minimapHeight / 2 + this._margins.y) / this.container.scale.y,
        this.container.position.set(0, 0),
        this._objectsContainer.position.copyFrom(e.scale(t, -1))
    }
    switchToBigMap() {
        this._expanded = !0;
        const t = this.game.uiManager.ui;
        this.container.visible = !0,
        this._borderContainer.hide(),
        this._uiCache.scopes.hide(),
        t.spectatingContainer.hide(),
        t.gasMsgInfo.hide(),
        this._uiCache.closeMinimap.show(),
        this._uiCache.killLeader.hide(),
        this._uiCache.centerBottom.hide(),
        this._uiCache.killCounter.show(),
        t.killFeed.hide(),
        this.resize()
    }
    switchToSmallMap() {
        this._expanded = !1;
        const t = this.game.uiManager.ui;
        if (this._uiCache.closeMinimap.hide(),
        this._uiCache.centerBottom.show(),
        t.gasMsgInfo.show(),
        this._uiCache.scopes.show(),
        t.killFeed.show(),
        this.game.spectating && t.spectatingContainer.show(),
        window.innerWidth > 768 && this._uiCache.killLeader.show(),
        this._uiCache.killCounter.hide(),
        !this._visible) {
            this.container.visible = !1;
            return
        }
        this._borderContainer.show(),
        this.resize()
    }
    updateTransparency() {
        this.container.alpha = this.game.console.getBuiltInCVar(this._expanded ? "cv_map_transparency" : "cv_minimap_transparency")
    }
    addMapPing(t) {
        const {position: a, definition: o} = t
          , s = o.isPlayerPing ? t.playerId : void 0
          , n = new cs(a,o,this.game,s);
        if (o.sound !== void 0 && this.game.soundManager.play(o.sound),
        this.pingsContainer.addChild(n.mapImage),
        n.inGameImage && this.game.camera.addObject(n.inGameImage),
        n.definition.isPlayerPing)
            for (const r of this.pings)
                r.definition !== n.definition || r.playerId !== s || (r.destroy(),
                this.pings.delete(r));
        this.pings.add(n),
        n.definition.ignoreExpiration || this.game.addTimeout(()=>{
            n.destroy()
        }
        , 1e4)
    }
}
;
c($t, "_instantiated", !1);
let Gi = $t;
class cs {
    constructor(t, a, o, s) {
        c(this, "startTime");
        c(this, "endTime");
        c(this, "mapImage");
        c(this, "inGameImage");
        c(this, "color");
        this.position = t,
        this.definition = a,
        this.game = o,
        this.playerId = s,
        this.startTime = Date.now(),
        this.endTime = this.startTime + this.definition.lifetime * 1e3,
        this.color = a.color,
        a.isPlayerPing && s && (this.color = ti[o.uiManager.teammates.findIndex(({id: n})=>n === s) + 1]),
        this.mapImage = new W(a.idString).setVPos(t).setTint(this.color).setScale(.5),
        this.definition.showInGame && (this.inGameImage = new W(a.idString).setVPos(se(t)).setTint(this.color).setZIndex(P.Gas + 1))
    }
    destroy() {
        var t;
        this.mapImage.destroy(),
        (t = this.inGameImage) == null || t.destroy()
    }
}
const Ki = [void 0, '<path d="m2.5135417.52916667v1.98437503h-1.98437503v.2645833h1.98437503v1.9843749h.2645833v-1.9843749h1.9843749v-.2645833h-1.9843749v-1.98437503z"/>', '<path d="m2.441453.5291666v1.453658h.4092773v-1.453658zm-1.1983765.7002157v1.0924397h.344165v-.7482747h.7482748v-.344165zm1.7135905 0v.344165h.7482747v.7482747h.3441651v-1.0924397zm-2.4406779 1.1983764v.4092774h1.453658v-.4092774zm2.8060303 0v.4092774h1.453658v-.4092774zm-2.0789429.5152141v1.0924397h1.0924398v-.344165h-.7482748v-.7482747zm2.4618652 0v.7482747h-.7482747v.344165h1.0924398v-1.0924397zm-1.2634887.3658691v1.453658h.4092773v-1.453658z"/>', '<path d="m 2.6429911,0.52916667 c -0.073289,0 -0.1322916,0.059002 -0.1322916,0.13229166 V 1.0645345 C 1.7411327,1.1286256 1.1257834,1.7439749 1.0616923,2.5135417 H 0.66430054 c -0.0732897,0 -0.13229166,0.059002 -0.13229166,0.1322916 0,0.073289 0.059002,0.1322917 0.13229166,0.1322917 H 1.0611755 c 0.063612,0.7700628 0.6796027,1.38592 1.449524,1.4500406 v 0.4020427 c 0,0.07329 0.059002,0.1322916 0.1322916,0.1322916 0.073289,0 0.1322917,-0.059002 0.1322917,-0.1322916 V 4.2286824 C 3.5457002,4.1650414 4.1621991,3.5485424 4.2258402,2.778125 h 0.4015259 c 0.07329,0 0.1322916,-0.059002 0.1322916,-0.1322917 0,-0.073289 -0.059002,-0.1322916 -0.1322916,-0.1322916 H 4.2253234 C 4.1612028,1.7436204 3.5453456,1.1276296 2.7752828,1.0640177 V 0.66145833 c 0,-0.0732897 -0.059002,-0.13229166 -0.1322917,-0.13229166 z M 2.7752828,1.3286011 c 0.6261544,0.061742 1.1218721,0.5587361 1.183907,1.1849406 H 3.8336161 c -0.07329,0 -0.1322917,0.059002 -0.1322917,0.1322916 0,0.073289 0.059002,0.1322917 0.1322917,0.1322917 H 3.9591898 C 3.8975952,3.4046039 3.4017617,3.9004374 2.7752828,3.962032 V 3.8364583 c 0,-0.07329 -0.059002,-0.1322917 -0.1322917,-0.1322917 -0.073289,0 -0.1322916,0.059002 -0.1322916,0.1322917 V 3.962032 C 1.884495,3.8999971 1.3875006,3.4042794 1.3257589,2.778125 h 0.1322916 c 0.07329,0 0.1322917,-0.059002 0.1322917,-0.1322917 0,-0.073289 -0.059002,-0.1322916 -0.1322917,-0.1322916 H 1.3262756 C 1.3884739,1.8876926 1.8848504,1.3913161 2.5106995,1.3291178 v 0.1260905 c 0,0.07329 0.059002,0.1322917 0.1322916,0.1322917 0.073289,0 0.1322917,-0.059002 0.1322917,-0.1322917 z M 2.6455749,2.4634155 A 0.182548,0.182548 0 0 0 2.4631571,2.6458333 0.182548,0.182548 0 0 0 2.6455749,2.8282511 0.182548,0.182548 0 0 0 2.8285095,2.6458333 0.182548,0.182548 0 0 0 2.6455749,2.4634155 Z" />', '<path d="m.94981276.52916708-.42064637.43201478 1.45003981 1.44590634.4278807-.0000001.0000001-.4247802zm3.38067114-.00000056-1.4459065 1.45004098-.0000002.4278807h.4247802l1.4531412-1.45727563zm-2.348177 2.35541208-1.45314118 1.4572756.43201471.420646 1.44590657-1.4500408.0000001-.4278808zm.9022702-.0000002-.0000001.4247803 1.4572745 1.453141.4206494-.4320118-1.4500399-1.4459063z"/>', '<path d="M 2.9786295,0.55397134 V 0.92500812 A 1.7565619,1.7565619 0 0 1 4.3651082,2.3114868 H 4.7366617 A 2.1186512,2.1186512 0 0 0 2.9786295,0.55397134 Z M 2.3104533,0.5560384 A 2.1186512,2.1186512 0 0 0 0.55500485,2.3114868 H 0.92449136 A 1.7565619,1.7565619 0 0 1 2.3104533,0.92552489 Z M 2.6447998,1.3358358 A 1.3099111,1.3099111 0 0 0 1.3348022,2.6458333 1.3099111,1.3099111 0 0 0 1.526005,3.3238281 L 1.8334798,3.0163533 a 0.89495105,0.89495105 0 0 1 -0.083716,-0.37052 0.89495105,0.89495105 0 0 1 0.8950358,-0.8950358 0.89495105,0.89495105 0 0 1 0.372587,0.081649 L 3.3238281,1.526005 A 1.3099111,1.3099111 0 0 0 2.6447998,1.3358358 Z M 3.7641113,1.9662882 3.45767,2.2727295 A 0.89495105,0.89495105 0 0 1 3.5398356,2.6458333 0.89495105,0.89495105 0 0 1 2.6447998,3.5408691 0.89495105,0.89495105 0 0 1 2.273763,3.4566365 L 1.9662882,3.7641113 A 1.3099111,1.3099111 0 0 0 2.6447998,3.9558308 1.3099111,1.3099111 0 0 0 3.9547973,2.6458333 1.3099111,1.3099111 0 0 0 3.7641113,1.9662882 Z M 2.6447998,2.4029541 A 0.24300306,0.24300306 0 0 0 2.4019205,2.6458333 0.24300306,0.24300306 0 0 0 2.6447998,2.8887125 0.24300306,0.24300306 0 0 0 2.887679,2.6458333 0.24300306,0.24300306 0 0 0 2.6447998,2.4029541 Z M 0.55500485,2.979663 A 2.1186512,2.1186512 0 0 0 2.3104533,4.7356282 V 4.3661417 A 1.7565619,1.7565619 0 0 1 0.92397457,2.979663 Z m 3.81062005,0 A 1.7565619,1.7565619 0 0 1 2.9786295,4.3666585 V 4.7376952 A 2.1186512,2.1186512 0 0 0 4.7366617,2.979663 Z" />', '<path d="M 2.6458332,0.52916667 A 2.1166668,2.1166668 0 0 0 0.52916662,2.6458334 2.1166668,2.1166668 0 0 0 2.6458332,4.7624999 2.1166668,2.1166668 0 0 0 4.7624999,2.6458334 2.1166668,2.1166668 0 0 0 2.6458332,0.52916667 Z m 0,0.38602294 A 1.7304204,1.7304204 0 0 1 3.7243203,1.2929443 L 2.6458332,2.3714315 1.5694131,1.2955281 A 1.7304204,1.7304204 0 0 1 2.6458332,0.91518961 Z M 3.9987222,1.5673463 A 1.7304204,1.7304204 0 0 1 4.3764769,2.6458334 1.7304204,1.7304204 0 0 1 3.9987222,3.7243205 L 2.920235,2.6458334 Z M 1.2950113,1.5699301 2.3709146,2.6458334 1.2950113,3.7217367 A 1.7304204,1.7304204 0 0 1 0.91518952,2.6458334 1.7304204,1.7304204 0 0 1 1.2950113,1.5699301 Z M 2.6453164,2.9202352 3.7243203,3.9987224 A 1.7304204,1.7304204 0 0 1 2.6458332,4.3764771 1.7304204,1.7304204 0 0 1 1.5694131,3.9961386 Z" />', '<path id="path1" d="M 2.6458333,0.52916665 A 2.1166674,2.1166674 0 0 0 0.52916665,2.6458333 2.1166674,2.1166674 0 0 0 2.6458333,4.7624999 2.1166674,2.1166674 0 0 0 4.7624999,2.6458333 2.1166674,2.1166674 0 0 0 2.6458333,0.52916665 Z m 0,0.37310384 A 1.7437392,1.7437392 0 0 1 4.3893961,2.6458333 1.7437392,1.7437392 0 0 1 2.6458333,4.3893961 1.7437392,1.7437392 0 0 1 0.90227049,2.6458333 1.7437392,1.7437392 0 0 1 2.6458333,0.90227049 Z M 2.5460978,2.3859008 v 0.160197 h -0.160197 v 0.199471 h 0.160197 v 0.1601969 h 0.199471 V 2.7455688 H 2.9057657 V 2.5460978 H 2.7455688 v -0.160197 z" />', '<path d="M 2.3796997,0.52916665 V 1.7600992 H 2.9119669 V 0.52916665 Z M 2.9993001,0.83405759 V 1.2236979 A 1.4707091,1.4707091 0 0 1 4.0731363,2.2923665 H 4.4617431 A 1.8502945,1.8502945 0 0 0 2.9993001,0.83405759 Z M 2.2923665,0.83457435 A 1.8502945,1.8502945 0 0 0 0.83405759,2.2923665 H 1.2226644 A 1.4707091,1.4707091 0 0 1 2.2923665,1.2247314 Z M 0.52916665,2.3796997 V 2.9119669 H 1.7600992 V 2.3796997 Z m 3.00240065,0 V 2.9119669 H 4.7624999 V 2.3796997 Z M 0.83405759,2.9993001 A 1.8502945,1.8502945 0 0 0 2.2944335,4.457609 V 4.0674519 A 1.4707091,1.4707091 0 0 1 1.2226644,2.9993001 Z m 3.23494461,0 A 1.4707091,1.4707091 0 0 1 3.0013671,4.0664184 v 0.390157 A 1.8502945,1.8502945 0 0 0 4.457609,2.9993001 Z M 2.3796997,3.5315673 V 4.7624999 H 2.9119669 V 3.5315673 Z" />', '<path d="M 2.6458333,0.20153806 0.52916665,1.4236857 V 3.8679809 L 2.6458333,5.0901285 4.7624999,3.8679809 V 1.4236857 Z m 0,0.47077229 L 4.1692545,1.55236 2.661853,2.4225911 1.137915,1.5430582 Z M 0.93689369,1.8872233 2.4499796,2.7610717 V 4.5061848 L 0.93689369,3.6323363 Z M 4.3547729,1.90531 v 1.7270263 l -1.506368,0.8702311 v -1.727543 z" />', '<path d="M 2.4179402,0.31677652 1.6190226,1.7006713 1.0454142,1.3694254 0.74259031,1.8939412 1.3156819,2.2251871 0.52916665,3.5878946 1.1275797,3.2426961 2.4179402,1.0076904 Z m 0.4557861,0 V 1.0076904 L 4.1640868,3.2426961 4.7624999,3.5878946 3.9759846,2.2251871 4.5490762,1.8939412 4.2462523,1.3694254 3.672644,1.7006713 Z M 2.6458333,2.4024373 c -0.1344125,2.74e-5 -0.2433686,0.1089835 -0.243396,0.243396 2.74e-5,0.1344125 0.1089835,0.2433686 0.243396,0.243396 0.1344125,-2.74e-5 0.2433686,-0.1089835 0.243396,-0.243396 C 2.8892019,2.5114208 2.7802458,2.4024647 2.6458333,2.4024373 Z M 1.3192993,3.6581746 0.75705971,3.9832193 H 2.3430094 V 4.665865 H 2.9486572 V 3.9832193 H 4.5346068 L 3.9723673,3.6581746 Z" />', '<path d="M 2.4318929,0.52916665 V 0.83095701 A 1.8305234,1.8305234 0 0 0 0.83095701,2.4318929 H 0.52916665 V 2.8597737 H 0.83095701 A 1.8305234,1.8305234 0 0 0 2.4318929,4.4607095 V 4.7624999 H 2.8597737 V 4.4607095 A 1.8305234,1.8305234 0 0 0 4.4607095,2.8597737 H 4.7624999 V 2.4318929 H 4.4607095 A 1.8305234,1.8305234 0 0 0 2.8597737,0.83095701 V 0.52916665 Z M 2.8597737,1.2407511 A 1.4216013,1.4216013 0 0 1 4.0509154,2.4318929 H 2.9739786 a 0.39187496,0.39187496 0 0 1 0.063562,0.2139404 0.39187496,0.39187496 0 0 1 -0.063562,0.2139404 H 4.0509154 A 1.4216013,1.4216013 0 0 1 2.8597737,4.0509154 V 2.9739786 A 0.39187496,0.39187496 0 0 1 2.6458333,3.0375406 0.39187496,0.39187496 0 0 1 2.4318929,2.9739786 v 1.0764201 a 1.4216013,1.4216013 0 0 1 -1.190625,-1.190625 h 1.07642 A 0.39187496,0.39187496 0 0 1 2.2541259,2.6458333 0.39187496,0.39187496 0 0 1 2.3176879,2.4318929 h -1.07642 a 1.4216013,1.4216013 0 0 1 1.190625,-1.190625 v 1.07642 a 0.39187496,0.39187496 0 0 1 0.2139404,-0.063562 0.39187496,0.39187496 0 0 1 0.2139404,0.063562 z M 2.6458333,2.3430094 A 0.30300418,0.30300418 0 0 0 2.3430094,2.6458333 0.30300418,0.30300418 0 0 0 2.6458333,2.9486572 0.30300418,0.30300418 0 0 0 2.9486572,2.6458333 0.30300418,0.30300418 0 0 0 2.6458333,2.3430094 Z" />', '<path d="M 1.3519537,2.2068079 C 1.357793,2.1741734 1.637807,2.2525412 1.9879066,2.1096426 1.6258102,1.556659 0.50167915,1.0305177 0.50167915,1.0305177 L 1.0118737,0.47138692 C 1.3086718,0.58971178 1.5818046,0.75145785 1.8384366,0.93722354 2.2934379,1.2785435 2.4561453,1.5675021 2.4905588,1.5940244 2.5158608,1.6135334 2.6088899,1.1368476 2.6088899,1.1368476 l 0.097282,0.00117 c 0,0 0.2137755,1.0403756 -0.029994,1.5078154 C 2.2339244,2.5140167 1.7847855,2.4073078 1.3338091,2.3082146 Z" />'];
function Qa(i, t, a, o, s) {
    const n = Ki[i];
    return n ? `data:image/svg+xml,${encodeURIComponent(`<svg fill="${t}" height="${a}" width="${a}" stroke="${o}" stroke-width="${s}" viewBox="0 0 5.2916665 5.2916666" xmlns="http://www.w3.org/2000/svg">${n}</svg>`)}` : "crosshair"
}
let Me;
const yt = lt.regions;
let me, be, Ci = !1, Yt = !1, Ui = !0, ko = !0;
function ds() {
    ko = !1
}
let _s;
function De() {
    if (ko)
        return;
    m("#splash-options").removeClass("loading"),
    m("#loading-text").text(z("loading_connecting"));
    const {maxTeamSize: i} = Me ?? yt[lt.defaultRegion]
      , t = i === st.Solo;
    for (const [a,o] of _s ?? (_s = [[st.Solo, m("#btn-play-solo")], [st.Duo, m("#btn-play-duo")], [st.Squad, m("#btn-play-squad")]]))
        o.toggleClass("locked", i !== a);
    m("#team-option-btns").toggleClass("locked", t),
    m("#locked-msg").css("top", t ? "225px" : "153px").show()
}
async function gs(i) {
    const {inputManager: t, uiManager: {ui: a}} = i
      , o = m("#select-language-menu");
    m("#btn-language").on("click", ()=>{
        o.css("display", "")
    }
    ),
    m("#close-select-language").on("click", ()=>{
        m("#select-language-menu").css("display", "none")
    }
    ),
    i.console.getBuiltInCVar("cv_language") !== "en" && (m("#toggle-text-kill-feed-option").addClass("modal-locked"),
    i.console.setBuiltInCVar("cv_killfeed_style", "icon"));
    const s = m("#select-language-container fieldset");
    for (const [p,y] of Object.entries(zt.translations)) {
        const T = (Object.values(y).length - 2) / (Object.values(zt.translations[zt.defaultLanguage]).length - 2);
        s.append(pe`
            <div>
              <input type="radio" name="selected-language" id="language-${p}" value="${p}">
              <label for="language-${p}">${y.flag} ${y.name} (${y.name === "HP-18" ? "HP-18" : Math.ceil(T * 100)}%)</label>
            </div>
        `),
        m(`#language-${p}`).on("click", ()=>{
            i.console.setBuiltInCVar("cv_language", p)
        }
        ).prop("checked", i.console.getBuiltInCVar("cv_language") === p)
    }
    i.console.variables.addChangeListener("cv_language", ()=>location.reload());
    const n = new URLSearchParams(window.location.search);
    n.has("region") && (()=>{
        const p = n.get("region");
        n.delete("region"),
        p !== null && Object.hasOwn(lt.regions, p) && i.console.setBuiltInCVar("cv_region", p)
    }
    )();
    let r = "";
    for (const p of ln.slice(0, 5)) {
        const y = new Date(p.date).toLocaleDateString("default", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });
        r += '<article class="splash-news-entry">',
        r += `<div class="news-date">${y}</div>`,
        r += `<div class="news-title">${p.title}</div>`,
        r += `<p>${p.content}<br><i>- ${p.author}</i></p></article>`
    }
    a.newsPosts.html(r),
    a.lockedInfo.on("click", ()=>a.lockedTooltip.fadeToggle(250));
    const d = p=>p < 10 ? `0${p}` : p
      , g = ()=>{
        if (!(Me != null && Me.nextSwitchTime)) {
            a.lockedTime.text("--:--:--");
            return
        }
        const p = Me.nextSwitchTime - Date.now();
        if (p < 0) {
            location.reload();
            return
        }
        const y = Math.floor(p / 36e5) % 24
          , T = Math.floor(p / 6e4) % 60
          , E = Math.floor(p / 1e3) % 60;
        a.lockedTime.text(`${d(y)}:${d(T)}:${d(E)}`)
    }
    ;
    setInterval(g, 1e3);
    const h = Object.entries(yt)
      , _ = m("#server-list")
      , f = {};
    for (const [p] of h)
        _.append(f[p] = m(`
                <li class="server-list-item" data-region="${p}">
                    <span class="server-name">${z(`region_${p}`)}</span>
                    <span style="margin-left: auto">
                      <img src="./img/misc/player_icon.svg" width="16" height="16" alt="Player count">
                      <span class="server-player-count">-</span>
                    </span>
                </li>
            `));
    a.loadingText.text(z("loading_fetching_data"));
    const b = Object.entries(h).map(async([p,[y,T]])=>{
        var G;
        const E = f[y]
          , D = Date.now();
        try {
            const X = await ((G = await fetch(`${T.mainAddress}/api/serverInfo`, {
                signal: AbortSignal.timeout(5e3)
            })) == null ? void 0 : G.json())
              , Be = Date.now() - D;
            if (yt[y] = {
                ...T,
                ...X,
                ping: Be
            },
            X.protocolVersion !== $.protocolVersion) {
                console.error(`Protocol version mismatch for region ${y}. Expected ${$.protocolVersion}, got ${X.protocolVersion}`);
                return
            }
            E.find(".server-player-count").text(X.playerCount ?? "-")
        } catch (X) {
            console.error(`Failed to load server info for region ${y}. Details: `, X)
        }
    }
    );
    await Promise.all(b);
    const v = m("#server-name")
      , w = m("#server-player-count")
      , k = ()=>{
        Me || (Me = yt[lt.defaultRegion],
        i.console.setBuiltInCVar("cv_region", "")),
        v.text(z(`region_${i.console.getBuiltInCVar("cv_region")}`)),
        w.text(Me.playerCount ?? "-"),
        g(),
        De()
    }
    ;
    Me = yt[i.console.getBuiltInCVar("cv_region") ?? lt.defaultRegion],
    k(),
    _.children("li.server-list-item").on("click", function() {
        const p = this.getAttribute("data-region");
        if (p === null)
            return;
        const y = yt[p];
        y !== void 0 && (De(),
        Me = y,
        i.console.setBuiltInCVar("cv_region", p),
        k())
    });
    const S = ()=>{
        if (a.splashOptions.addClass("loading"),
        a.loadingText.text(z("loading_finding_game")),
        Me === void 0)
            return;
        const p = Me;
        m.get(`${p.mainAddress}/api/getGame${be ? `?teamID=${be}` : ""}`, y=>{
            if (y.success) {
                const T = new URLSearchParams;
                be && T.set("teamID", be),
                Yt && T.set("autoFill", String(Yt));
                const E = i.console.getBuiltInCVar("dv_password");
                E && T.set("password", E);
                const D = i.console.getBuiltInCVar("dv_role");
                D && T.set("role", D),
                i.console.getBuiltInCVar("dv_lobby_clearing") && T.set("lobbyClearing", "true");
                const X = i.console.getBuiltInCVar("dv_weapon_preset");
                X && T.set("weaponPreset", X);
                const Be = i.console.getBuiltInCVar("dv_name_color");
                if (Be)
                    try {
                        T.set("nameColor", new vt(Be).toNumber().toString())
                    } catch (Je) {
                        i.console.setBuiltInCVar("dv_name_color", ""),
                        console.error(Je)
                    }
                i.connect(`${p.gameAddress.replace("<ID>", (y.gameID + 1).toString())}/play?${T.toString()}`),
                a.splashMsg.hide()
            } else {
                let T = !1, E;
                const D = y.reportID || "No report ID provided.";
                let G;
                switch (y.message) {
                case "warn":
                    T = !0,
                    E = z("msg_warning"),
                    G = z("msg_warning_msg", {
                        reason: y.reason ?? z("msg_no_reason")
                    });
                    break;
                case "temp":
                    T = !0,
                    E = z("msg_temp_ban"),
                    G = z("msg_temp_ban_msg", {
                        reason: y.reason ?? z("msg_no_reason")
                    });
                    break;
                case "perma":
                    T = !0,
                    E = z("msg_perma_ban"),
                    G = z("msg_perma_ban_msg", {
                        reason: y.reason ?? z("msg_no_reason")
                    });
                    break;
                default:
                    G = pe`
                                ${z("msg_err_joining")}
                                <br>
                                ${z("msg_try_again")}
                            `;
                    break
                }
                T ? (a.warningTitle.text(E ?? ""),
                a.warningText.html(`<span style="font-size:20px">Case ID: ${D ?? ""}</span><br>${G ?? ""}`),
                a.warningAgreeOpts.toggle(y.message === "warn"),
                a.warningAgreeCheckbox.prop("checked", !1),
                a.warningModal.show(),
                a.splashOptions.addClass("loading")) : (a.splashMsgText.html(G),
                a.splashMsg.show()),
                De()
            }
        }
        ).fail(()=>{
            a.splashMsgText.html(pe`
                ${z("msg_err_finding")}
                <br>
                ${z("msg_try_again")}
            `),
            a.splashMsg.show(),
            De()
        }
        )
    }
    ;
    let x = 0;
    m("#btn-play-solo, #btn-play-duo, #btn-play-squad").on("click", ()=>{
        const p = Date.now();
        p - x < 1500 || (x = p,
        S())
    }
    );
    const I = m("#create-team-menu");
    m("#btn-create-team, #btn-join-team").on("click", function() {
        const p = Date.now();
        if (p - x < 1500 || me || Me === void 0)
            return;
        x = p,
        a.splashOptions.addClass("loading"),
        a.loadingText.text(z("loading_connecting"));
        const y = new URLSearchParams;
        if (this.id === "btn-join-team") {
            for (a.btnStartGame.addClass("btn-disabled").text(z("create_team_waiting")),
            a.createTeamToggles.addClass("disabled"); !be; ) {
                if (be = prompt("Enter a team code:"),
                !be) {
                    De();
                    return
                }
                if (be.includes("#") && (be = be.split("#")[1]),
                /^[a-zA-Z0-9]{4}$/.test(be))
                    break;
                alert("Invalid team code.")
            }
            y.set("teamID", be)
        } else
            a.btnStartGame.removeClass("btn-disabled").text(z("create_team_play")),
            a.createTeamToggles.removeClass("disabled");
        y.set("name", i.console.getBuiltInCVar("cv_player_name")),
        y.set("skin", i.console.getBuiltInCVar("cv_loadout_skin"));
        const E = i.console.getBuiltInCVar("cv_loadout_badge");
        E && y.set("badge", E);
        const D = i.console.getBuiltInCVar("dv_password");
        D && y.set("password", D);
        const G = i.console.getBuiltInCVar("dv_role");
        G && y.set("role", G);
        const X = i.console.getBuiltInCVar("dv_name_color");
        if (X)
            try {
                y.set("nameColor", new vt(X).toNumber().toString())
            } catch (Te) {
                i.console.setBuiltInCVar("dv_name_color", ""),
                console.error(Te)
            }
        me = new WebSocket(`${Me.mainAddress.replace("http", "ws")}/team?${y.toString()}`);
        const Be = Te=>`
            <div class="create-team-player-container" data-id="${Te.id}">
              <i class="fa-solid fa-crown"${Te.isLeader ? "" : ' style="display: none"'}></i>
              <div class="skin">
                <div class="skin-base" style="background-image: url('./img/game/skins/${Te.skin}_base.svg')"></div>
                <div class="skin-left-fist" style="background-image: url('./img/game/skins/${Te.skin}_fist.svg')"></div>
                <div class="skin-right-fist" style="background-image: url('./img/game/skins/${Te.skin}_fist.svg')"></div>
              </div>
              <div class="create-team-player-name-container">
                <span class="create-team-player-name"${Te.nameColor ? ` style="color: ${new vt(Te.nameColor).toHex()}"` : ""};>${Te.name}</span>
                ${Te.badge ? `<img class="create-team-player-badge" src="./img/game/badges/${Te.badge}.svg" />` : ""}
              </div>
            </div>
            `;
        let Je;
        me.onmessage = Te=>{
            const Pe = JSON.parse(Te.data);
            switch (Pe.type) {
            case We.Join:
                {
                    Ci = !0,
                    Je = Pe.id,
                    be = Pe.teamID,
                    window.location.hash = `#${be}`,
                    a.createTeamUrl.val(`${window.location.origin}/?region=${i.console.getBuiltInCVar("cv_region")}#${be}`),
                    a.createTeamAutoFill.prop("checked", Pe.autoFill),
                    a.createTeamLock.prop("checked", Pe.locked),
                    a.createTeamPlayers.html(Pe.players.map(Be).join(""));
                    break
                }
            case We.PlayerJoin:
                {
                    a.createTeamPlayers.append(Be(Pe));
                    break
                }
            case We.PlayerLeave:
                {
                    if (a.createTeamPlayers.find(`[data-id="${Pe.id}"]`).remove(),
                    Pe.newLeaderID === void 0)
                        break;
                    a.createTeamPlayers.find(`[data-id="${Pe.newLeaderID}"] .fa-crown`).show(),
                    Pe.newLeaderID === Je && (a.btnStartGame.removeClass("btn-disabled").text("Start Game"),
                    a.createTeamToggles.removeClass("disabled"));
                    break
                }
            case We.Settings:
                {
                    a.createTeamAutoFill.prop("checked", Pe.autoFill),
                    a.createTeamLock.prop("checked", Pe.locked);
                    break
                }
            case We.Started:
                {
                    I.hide(),
                    S();
                    break
                }
            }
        }
        ,
        me.onerror = ()=>{
            a.splashMsgText.html("Error joining team.<br>It may not exist or it is full."),
            a.splashMsg.show(),
            De(),
            I.fadeOut(250),
            a.splashUi.css({
                filter: "",
                pointerEvents: ""
            })
        }
        ,
        me.onclose = ()=>{
            me && (a.splashMsgText.html(Ci ? "Lost connection to team." : "Error joining team.<br>It may not exist or it is full."),
            a.splashMsg.show()),
            De(),
            me = void 0,
            be = void 0,
            Ci = !1,
            window.location.hash = "",
            I.fadeOut(250),
            a.splashUi.css({
                filter: "",
                pointerEvents: ""
            })
        }
        ,
        I.fadeIn(250),
        a.splashUi.css({
            filter: "brightness(0.6)",
            pointerEvents: "none"
        })
    }),
    a.closeCreateTeam.on("click", ()=>{
        const p = me;
        me = void 0,
        p == null || p.close()
    }
    );
    const R = m("#btn-copy-team-url")
      , O = m("#btn-hide-team-url");
    R.on("click", ()=>{
        const p = a.createTeamUrl.val();
        if (!p) {
            alert("Unable to copy link to clipboard.");
            return
        }
        navigator.clipboard.writeText(p).then(()=>{
            R.addClass("btn-success").css("pointer-events", "none").html(`
                        <i class="fa-solid fa-check" id="copy-team-btn-icon"></i>
                        Copied`),
            window.setTimeout(()=>{
                R.removeClass("btn-success").css("pointer-events", "").html(`
                            <i class="fa-solid fa-clipboard" id="copy-team-btn-icon"></i>
                            Copy`)
            }
            , 2e3)
        }
        ).catch(()=>{
            alert("Unable to copy link to clipboard.")
        }
        )
    }
    );
    const J = O.children("i");
    O.on("click", ()=>{
        const p = a.createTeamUrl;
        if (p.hasClass("hidden")) {
            J.removeClass("fa-eye").addClass("fa-eye-slash"),
            p.removeClass("hidden").css("color", "");
            return
        }
        J.removeClass("fa-eye-slash").addClass("fa-eye"),
        p.addClass("hidden").css("color", "#FFFFFF00")
    }
    ),
    m("#create-team-toggle-auto-fill").on("click", function() {
        Yt = this.checked,
        me == null || me.send(JSON.stringify({
            type: We.Settings,
            autoFill: Yt
        }))
    }),
    m("#create-team-toggle-lock").on("click", function() {
        me == null || me.send(JSON.stringify({
            type: We.Settings,
            locked: this.checked
        }))
    }),
    a.btnStartGame.on("click", ()=>{
        me == null || me.send(JSON.stringify({
            type: We.Start
        }))
    }
    );
    const V = n.get("nameColor");
    V && i.console.setBuiltInCVar("dv_name_color", V);
    const B = n.get("lobbyClearing");
    B && i.console.setBuiltInCVar("dv_lobby_clearing", B === "true");
    const le = n.get("password");
    le && (i.console.setBuiltInCVar("dv_password", le),
    location.search = "");
    const ce = n.get("role");
    ce && (i.console.setBuiltInCVar("dv_role", ce),
    location.search = "");
    const F = m("#username-input")
      , Oe = Ma([{
        name: "123OP",
        link: "https://www.youtube.com/@123op."
    }, {
        name: "TEAMFIGHTER 27",
        link: "https://www.youtube.com/@TEAMFIGHTER27"
    }, {
        name: "NAMERIO",
        link: "https://www.youtube.com/@NAMERIO1"
    }, {
        name: "AWMZ",
        link: "https://www.youtube.com/@AWMZfn"
    }, {
        name: "Ukraines dude",
        link: "https://www.youtube.com/@Ukrainesdude"
    }, {
        name: "monet",
        link: "https://www.youtube.com/@stardust_737"
    }, {
        name: "Tuncres",
        link: "https://www.youtube.com/@Tuncres2022"
    }, {
        name: "silverdotware",
        link: "https://www.youtube.com/@silverdotware"
    }, {
        name: "Pablo_Fan_",
        link: "https://www.youtube.com/@Pablo_Fan_"
    }, {
        name: "g0dak",
        link: "https://www.youtube.com/@g0dak"
    }, {
        name: "GAMERIO",
        link: "https://www.youtube.com/@GAMERIO1"
    }]);
    m("#youtube-featured-name").text(Oe.name),
    m("#youtube-featured-content").attr("href", Oe.link).removeAttr("target");
    const qe = Ma([{
        name: "ikou",
        link: "https://www.twitch.tv/ikou_yt"
    }, {
        name: "seth_mayo",
        link: "https://www.twitch.tv/seth_mayo"
    }, {
        name: "PatchesSC",
        link: "https://www.twitch.tv/patchessc"
    }]);
    m("#twitch-featured-name").text(qe.name),
    m("#twitch-featured-content").attr("data-href", qe.link).removeAttr("target");
    const oe = ()=>m("#splash-rotate-message").toggle(window.innerWidth < window.innerHeight);
    oe(),
    m(window).on("resize", oe),
    i.console.variables.addChangeListener("cv_console_open", (p,y)=>i.console.isOpen = y);
    const dt = a.gameMenu
      , xe = m("#settings-menu");
    F.val(i.console.getBuiltInCVar("cv_player_name")),
    F.on("input", function() {
        i.console.setBuiltInCVar("cv_player_name", this.value = this.value.replace(/[\u201c\u201d\u201f]/g, '"').replace(/[\u2018\u2019\u201b]/g, "'").replace(/[\u2013\u2014]/g, "-").replace(/[^\x20-\x7E]/g, ""))
    }),
    $o("#server-select"),
    m("#server-select").on("change", ()=>{}
    );
    const Ut = m("#btn-rules");
    i.console.getBuiltInCVar("cv_rules_acknowledged") || Ut.removeClass("btn-secondary").addClass("highlighted"),
    Ut.on("click", ()=>{
        i.console.setBuiltInCVar("cv_rules_acknowledged", !0),
        location.href = "./rules/"
    }
    ),
    m("#btn-quit-game, #btn-spectate-menu, #btn-menu").on("click", ()=>{
        i.endGame()
    }
    ),
    m("#btn-play-again, #btn-spectate-replay").on("click", async()=>{
        await i.endGame(),
        me ? me.send(JSON.stringify({
            type: We.Start
        })) : S()
    }
    );
    const Mt = p=>{
        i.sendPacket(pi.create({
            spectateAction: p
        }))
    }
    ;
    a.btnSpectate.on("click", ()=>{
        Mt(ze.BeginSpectating),
        i.spectating = !0,
        i.map.indicator.setFrame("player_indicator")
    }
    ),
    a.spectatePrevious.on("click", ()=>{
        Mt(ze.SpectatePrevious)
    }
    ),
    a.spectateKillLeader.on("click", ()=>{
        Mt(ze.SpectateKillLeader)
    }
    ),
    a.btnReport.on("click", ()=>{
        confirm(`Are you sure you want to report this player?
Players should only be reported for teaming or hacking.
Video evidence is required.`) && Mt(ze.Report)
    }
    ),
    a.spectateNext.on("click", ()=>{
        Mt(ze.SpectateNext)
    }
    ),
    m("#btn-resume-game").on("click", ()=>dt.hide()),
    m("#btn-fullscreen").on("click", ()=>{
        bn(),
        a.gameMenu.hide()
    }
    ),
    Ho.on("keydown", p=>{
        p.key === "Escape" && (a.canvas.hasClass("active") && !i.console.isOpen && (dt.fadeToggle(250),
        xe.hide()),
        i.console.isOpen = !1)
    }
    ),
    m("#btn-settings").on("click", ()=>{
        m(".dialog").hide(),
        xe.fadeToggle(250),
        xe.removeClass("in-game")
    }
    ),
    m("#btn-settings-game").on("click", ()=>{
        dt.hide(),
        xe.fadeToggle(250),
        xe.addClass("in-game")
    }
    ),
    m("#close-settings").on("click", ()=>{
        xe.fadeOut(250)
    }
    );
    const oa = m("#customize-menu");
    m("#btn-customize").on("click", ()=>{
        m(".dialog").hide(),
        oa.fadeToggle(250)
    }
    ),
    m("#close-customize").on("click", ()=>oa.fadeOut(250)),
    m("#close-report").on("click", ()=>a.reportingModal.fadeOut(250));
    const hi = i.console.getBuiltInCVar("dv_role");
    St.definitions.some(p=>p.idString === i.console.getBuiltInCVar("cv_loadout_skin")) || i.console.setBuiltInCVar("cv_loadout_skin", tt.cv_loadout_skin);
    const yo = m("#skin-base")
      , vo = m("#skin-left-fist, #skin-right-fist")
      , na = p=>{
        yo.css("background-image", `url("./img/game/skins/${p}_base.svg")`),
        vo.css("background-image", `url("./img/game/skins/${p}_fist.svg")`)
    }
      , sa = i.console.getBuiltInCVar("cv_loadout_skin");
    na(sa);
    const So = m("#skins-list")
      , ra = {};
    function la(p) {
        ra[p].addClass("selected").siblings().removeClass("selected"),
        na(p)
    }
    for (const {idString: p, hideFromLoadout: y, roleRequired: T} of St) {
        if (y || (T ?? hi) !== hi)
            continue;
        const E = ra[p] = m(`<div id="skin-${p}" class="skins-list-item-container${p === sa ? " selected" : ""}">
                <div class="skin">
                    <div class="skin-base" style="background-image: url('./img/game/skins/${p}_base.svg')"></div>
                    <div class="skin-left-fist" style="background-image: url('./img/game/skins/${p}_fist.svg')"></div>
                    <div class="skin-right-fist" style="background-image: url('./img/game/skins/${p}_fist.svg')"></div>
                </div>
                <span class="skin-name">${z(p)}</span>
            </div>`);
        E.on("click", ()=>{
            i.console.setBuiltInCVar("cv_loadout_skin", p),
            la(p)
        }
        ),
        So.append(E)
    }
    i.console.variables.addChangeListener("cv_loadout_skin", (p,y)=>{
        la(y)
    }
    );
    function ca(p) {
        const y = m(`#emote-wheel-bottom .emote-${p} .fa-xmark`)
          , T = `cv_loadout_${p}_emote`
          , E = m(`#emote-wheel-container .emote-${p}`);
        y.on("click", ()=>{
            i.console.setBuiltInCVar(T, ""),
            E.css("background-image", "none"),
            y.hide()
        }
        ),
        i.console.getBuiltInCVar(`cv_loadout_${p}_emote`) === "" && y.hide()
    }
    ca("win"),
    ca("death");
    let Ze;
    const fi = m("#emotes-list")
      , bi = {}
      , fe = {};
    function da() {
        fi.empty();
        const p = [...Ce.definitions].sort((T,E)=>T.category - E.category);
        let y = -1;
        for (const T of p) {
            if (T.isTeamEmote)
                continue;
            if (T.category !== y) {
                const D = m(`<div class="emote-list-header">${z(`emotes_category_${io[T.category]}`)}</div>`);
                fi.append(D),
                y = T.category
            }
            const E = m(`<div id="emote-${T.idString}" class="emotes-list-item-container">
                    <div class="emotes-list-item" style="background-image: url('./img/game/emotes/${T.idString}.svg')"></div>
                    <span class="emote-name">${z(`emote_${T.idString}`)}</span>
                </div>`);
            E.on("click", ()=>{
                if (Ze === void 0)
                    return;
                const D = Ze;
                (bi[D] ?? (bi[D] = m(`#emote-wheel-bottom .emote-${D} .fa-xmark`))).show(),
                i.console.setBuiltInCVar(`cv_loadout_${D}_emote`, T.idString),
                E.addClass("selected").siblings().removeClass("selected"),
                (fe[D] ?? (fe[D] = m(`#emote-wheel-container .emote-${D}`))).css("background-image", `url("./img/game/emotes/${T.idString}.svg")`)
            }
            ),
            fi.append(E)
        }
    }
    da();
    const _a = m("#emote-customize-wheel")
      , xo = m(".emotes-list-item-container");
    function ga(p, y) {
        return (fe[p] ?? (fe[p] = m(`#emote-wheel-container .emote-${p}`))).css("background-image", y ? `url("./img/game/emotes/${y}.svg")` : "none")
    }
    for (const p of Li) {
        const y = `cv_loadout_${p}_emote`
          , T = i.console.getBuiltInCVar(y);
        i.console.variables.addChangeListener(y, (E,D)=>{
            ga(p, D)
        }
        ),
        ga(p, T).on("click", ()=>{
            Ze !== p && (Ze !== void 0 && (fe[Ze] ?? (fe[Ze] = m(`#emote-wheel-container .emote-${Ze}`))).removeClass("selected"),
            Ze = p,
            da(),
            Li.indexOf(p) > 3 ? (_a.css("background-image", "url('/img/misc/emote_wheel.svg')"),
            (fe[p] ?? (fe[p] = m(`#emote-wheel-container .emote-${p}`))).addClass("selected")) : _a.css("background-image", `url("./img/misc/emote_wheel_highlight_${p}.svg"), url("/img/misc/emote_wheel.svg")`),
            xo.removeClass("selected").css("cursor", "pointer"),
            m(`#emote-${i.console.getBuiltInCVar(y) || "none"}`).addClass("selected"))
        }
        ),
        (fe[p] ?? (fe[p] = m(`#emote-wheel-container .emote-${p}`))).children(".remove-emote-btn").on("click", ()=>{
            i.console.setBuiltInCVar(y, ""),
            (fe[p] ?? (fe[p] = m(`#emote-wheel-container .emote-${p}`))).css("background-image", "none")
        }
        )
    }
    const To = m("#crosshair-image")
      , Mo = m("#crosshair-controls")
      , Io = m("#crosshair-preview, #game");
    function _t() {
        const p = 20 * i.console.getBuiltInCVar("cv_crosshair_size")
          , y = Qa(i.console.getBuiltInCVar("cv_loadout_crosshair"), i.console.getBuiltInCVar("cv_crosshair_color"), p, i.console.getBuiltInCVar("cv_crosshair_stroke_color"), i.console.getBuiltInCVar("cv_crosshair_stroke_size"))
          , T = y === "crosshair" ? y : `url("${y}") ${p / 2} ${p / 2}, crosshair`;
        To.css({
            backgroundImage: `url("${y}")`,
            width: p,
            height: p
        }),
        Mo.toggleClass("disabled", !Ki[i.console.getBuiltInCVar("cv_loadout_crosshair")]),
        Io.css({
            cursor: T
        })
    }
    _t();
    const wi = [];
    i.console.variables.addChangeListener("cv_loadout_crosshair", (p,y)=>{
        (wi[y] ?? (wi[y] = m(`#crosshair-${y}`))).addClass("selected").siblings().removeClass("selected"),
        _t()
    }
    );
    const Po = i.console.getBuiltInCVar("cv_crosshair_size")
      , Ro = i.console.getBuiltInCVar("cv_loadout_crosshair");
    m("#crosshairs-list").append(Ki.map((p,y)=>{
        const T = m('<div class="crosshairs-list-item"></div>')
          , E = m(`<div id="crosshair-${y}" class="crosshairs-list-item-container${Ro === y ? " selected" : ""}"></div>`);
        return E.append(T),
        T.css({
            backgroundImage: `url("${Qa(y, "#fff", Po, "#0", 0)}")`,
            "background-size": "contain",
            "background-repeat": "no-repeat"
        }),
        E.on("click", ()=>{
            i.console.setBuiltInCVar("cv_loadout_crosshair", y),
            _t(),
            E.addClass("selected").siblings().removeClass("selected")
        }
        ),
        E
    }
    )),
    i.console.getBuiltInCVar("dv_role") !== "" && (m("#tab-special").show(),
    m("#role-name").val(i.console.getBuiltInCVar("dv_role")).on("input", p=>{
        i.console.setBuiltInCVar("dv_role", p.target.value)
    }
    ),
    m("#role-password").on("input", p=>{
        i.console.setBuiltInCVar("dv_password", p.target.value)
    }
    ),
    ge("#toggle-lobbyclearing", "dv_lobby_clearing"),
    i.console.getBuiltInCVar("dv_name_color") === "" && i.console.setBuiltInCVar("dv_name_color", "#FFFFFF"),
    m("#namecolor-color-picker").val(i.console.getBuiltInCVar("dv_name_color")).on("input", p=>{
        i.console.setBuiltInCVar("dv_name_color", p.target.value)
    }
    ),
    m("#weapon-preset").val(i.console.getBuiltInCVar("dv_weapon_preset")).on("input", p=>{
        i.console.setBuiltInCVar("dv_weapon_preset", p.target.value)
    }
    ));
    const ma = pt.definitions.filter(({roles: p})=>!(p != null && p.length) || p.includes(hi));
    if (ma.length > 0) {
        let p = function(D) {
            E[D].addClass("selected").siblings().removeClass("selected")
        };
        m("#tab-badges").show();
        const y = m(pe`<div id="badge-" class="badges-list-item-container">\
                <div class="badges-list-item"> </div>\
                <span class="badge-name">${z("none")}</span>\
            </div>`);
        y.on("click", ()=>{
            i.console.setBuiltInCVar("cv_loadout_badge", ""),
            y.addClass("selected").siblings().removeClass("selected")
        }
        );
        const T = i.console.getBuiltInCVar("cv_loadout_badge")
          , E = {
            "": y
        };
        m("#badges-list").append(y, ...ma.map(({idString: D, name: G})=>{
            const X = E[D] = m(`<div id="badge-${D}" class="badges-list-item-container${D === T ? " selected" : ""}">                        <div class="badges-list-item">                            <div style="background-image: url('./img/game/badges/${D}.svg')"></div>                        </div>                        <span class="badge-name">${z(`badge_${D}`)}</span>                    </div>`);
            return X.on("click", ()=>{
                i.console.setBuiltInCVar("cv_loadout_badge", D),
                p(D)
            }
            ),
            X
        }
        )),
        i.console.variables.addChangeListener("cv_loadout_badge", (D,G)=>{
            p(G)
        }
        )
    }
    function $e(p, y, T) {
        const E = m(p)[0];
        if (!E) {
            console.error("Invalid element id");
            return
        }
        let D = !1;
        E.addEventListener("input", ()=>{
            if (D)
                return;
            const X = +E.value;
            D = !0,
            i.console.setBuiltInCVar(y, X),
            D = !1,
            T == null || T(X)
        }
        ),
        i.console.variables.addChangeListener(y, (X,Be)=>{
            if (D)
                return;
            const Je = +Be;
            T == null || T(Je),
            D = !0,
            E.value = `${Je}`,
            E.dispatchEvent(new InputEvent("input")),
            D = !1
        }
        );
        const G = i.console.getBuiltInCVar(y);
        T == null || T(G),
        E.value = G.toString()
    }
    function ge(p, y, T) {
        const E = m(p)[0];
        if (!E) {
            console.error("Invalid element id");
            return
        }
        E.addEventListener("input", ()=>{
            const D = E.checked;
            i.console.setBuiltInCVar(y, D),
            T == null || T(D)
        }
        ),
        i.console.variables.addChangeListener(y, (D,G)=>{
            const X = !!G;
            T == null || T(X),
            E.checked = X
        }
        ),
        E.checked = i.console.getBuiltInCVar(y)
    }
    $e("#slider-crosshair-size", "cv_crosshair_size", _t),
    $e("#slider-crosshair-stroke-size", "cv_crosshair_stroke_size", _t);
    const ua = m("#crosshair-color-picker");
    ua.on("input", function() {
        i.console.setBuiltInCVar("cv_crosshair_color", this.value),
        _t()
    }),
    i.console.variables.addChangeListener("cv_crosshair_color", (p,y)=>{
        ua.val(y)
    }
    );
    const pa = m("#crosshair-stroke-picker");
    pa.on("input", function() {
        i.console.setBuiltInCVar("cv_crosshair_stroke_color", this.value),
        _t()
    }),
    i.console.variables.addChangeListener("cv_crosshair_stroke_color", (p,y)=>{
        pa.val(y)
    }
    ),
    a.game.on("contextmenu", p=>{
        p.preventDefault()
    }
    ),
    ge("#toggle-scope-looping", "cv_loop_scope_selection"),
    ge("#toggle-autopickup", "cv_autopickup"),
    m("#toggle-autopickup").parent().parent().toggle(t.isMobile),
    ge("#toggle-autopickup-dual-guns", "cv_autopickup_dual_guns"),
    m("#toggle-autopickup-dual-guns").parent().parent().toggle(t.isMobile),
    ge("#toggle-anonymous-player", "cv_anonymize_player_names"),
    ge("#toggle-hide-emote", "cv_hide_emotes"),
    $e("#slider-music-volume", "cv_music_volume", p=>{
        i.music.volume = p
    }
    ),
    $e("#slider-sfx-volume", "cv_sfx_volume", p=>{
        i.soundManager.volume = p
    }
    ),
    $e("#slider-master-volume", "cv_master_volume", p=>{
        mt.volumeAll = p
    }
    ),
    ge("#toggle-old-music", "cv_use_old_menu_music"),
    ge("#toggle-camera-shake", "cv_camera_shake_fx");
    for (const p of ["fps", "ping", "pos"]) {
        const y = i.uiManager.debugReadouts[p];
        y.toggle(i.console.getBuiltInCVar(`pf_show_${p}`)),
        ge(`#toggle-${p}`, `pf_show_${p}`, T=>y.toggle(T))
    }
    {
        const p = m("#toggle-text-kill-feed")[0];
        p.addEventListener("input", ()=>{
            i.console.setBuiltInCVar("cv_killfeed_style", p.checked ? "text" : "icon")
        }
        ),
        i.console.variables.addChangeListener("cv_killfeed_style", (y,T)=>{
            p.checked = T === "text",
            y.uiManager.updateWeaponSlots()
        }
        ),
        p.checked = i.console.getBuiltInCVar("cv_killfeed_style") === "text"
    }
    {
        const p = m("#toggle-colored-slots")[0];
        p.addEventListener("input", ()=>{
            i.console.setBuiltInCVar("cv_weapon_slot_style", p.checked ? "colored" : "simple"),
            i.uiManager.updateWeaponSlots()
        }
        ),
        i.console.variables.addChangeListener("cv_weapon_slot_style", (y,T)=>{
            console.trace(),
            p.checked = T === "colored",
            y.uiManager.updateWeaponSlots()
        }
        ),
        p.checked = i.console.getBuiltInCVar("cv_weapon_slot_style") === "colored"
    }
    const ki = m("#render-mode-select")[0];
    ki.addEventListener("input", ()=>{
        i.console.setBuiltInCVar("cv_renderer", ki.value)
    }
    ),
    ki.value = i.console.getBuiltInCVar("cv_renderer"),
    (async()=>m("#webgpu-option").toggle(await Qo()))();
    const yi = m("#render-res-select")[0];
    yi.addEventListener("input", ()=>{
        i.console.setBuiltInCVar("cv_renderer_res", yi.value)
    }
    ),
    yi.value = i.console.getBuiltInCVar("cv_renderer_res"),
    m("#toggle-high-res").parent().parent().toggle(!t.isMobile),
    ge("#toggle-high-res", "cv_high_res_textures"),
    ge("#toggle-cooler-graphics", "cv_cooler_graphics"),
    i.console.variables.addChangeListener("cv_cooler_graphics", (p,y,T)=>{
        if (y !== T && !y)
            for (const E of i.objects.getCategory(j.Player)) {
                const {images: {blood: {children: D}}, bloodDecals: G} = E;
                for (const X of D)
                    X.destroy();
                D.length = 0;
                for (const X of G)
                    X.kill()
            }
    }
    );
    const {gameUi: qt} = i.uiManager.ui;
    i.console.variables.addChangeListener("cv_draw_hud", (p,y)=>{
        qt.toggle(y),
        i.map.visible = !i.console.getBuiltInCVar("cv_minimap_minimized") && y
    }
    ),
    ge("#toggle-draw-hud", "cv_draw_hud"),
    ge("#toggle-antialias", "cv_antialias"),
    ge("#toggle-movement-smoothing", "cv_movement_smoothing"),
    ge("#toggle-responsive-rotation", "cv_responsive_rotation"),
    ge("#toggle-mobile-controls", "mb_controls_enabled"),
    $e("#slider-joystick-size", "mb_joystick_size"),
    $e("#slider-joystick-transparency", "mb_joystick_transparency"),
    ge("#toggle-high-res-mobile", "mb_high_res_textures");
    function vi() {
        const p = i.console.getBuiltInCVar("cv_ui_scale");
        qt.width(window.innerWidth / p),
        qt.height(window.innerHeight / p),
        qt.css("transform", `scale(${p})`)
    }
    vi(),
    window.addEventListener("resize", ()=>vi()),
    $e("#slider-ui-scale", "cv_ui_scale", ()=>{
        vi(),
        i.map.resize()
    }
    ),
    t.isMobile && (m("#ui-scale-container").hide(),
    i.console.setBuiltInCVar("cv_ui_scale", 1)),
    $e("#slider-minimap-transparency", "cv_minimap_transparency", ()=>{
        i.map.updateTransparency()
    }
    ),
    $e("#slider-big-map-transparency", "cv_map_transparency", ()=>{
        i.map.updateTransparency()
    }
    ),
    ge("#toggle-hide-minimap", "cv_minimap_minimized", p=>{
        i.map.visible = !p
    }
    ),
    i.console.variables.addChangeListener("cv_map_expanded", (p,y)=>{
        i.map.expanded = y
    }
    ),
    ge("#toggle-leave-warning", "cv_leave_warning");
    const ha = m("#splash-ui");
    ge("#toggle-blur-splash", "cv_blur_splash", p=>{
        ha.toggleClass("blur", p)
    }
    ),
    ha.toggleClass("blur", i.console.getBuiltInCVar("cv_blur_splash"));
    const fa = m("#btn-rules, #rules-close-btn");
    ge("#toggle-hide-rules", "cv_hide_rules_button", p=>{
        fa.toggle(!p)
    }
    ),
    fa.toggle(!i.console.getBuiltInCVar("cv_hide_rules_button")),
    m(".checkbox-setting").has("#toggle-hide-rules").toggle(i.console.getBuiltInCVar("cv_rules_acknowledged"));
    const Ao = m("#btn-rules, #rules-close-btn")
      , Co = m("#toggle-hide-rules");
    m("#rules-close-btn").on("click", ()=>{
        Ao.hide(),
        i.console.setBuiltInCVar("cv_hide_rules_button", !0),
        Co.prop("checked", !0)
    }
    ).toggle(i.console.getBuiltInCVar("cv_rules_acknowledged") && !i.console.getBuiltInCVar("cv_hide_rules_button")),
    m("#import-settings-btn").on("click", ()=>{
        if (!confirm("This option will overwrite all settings and reload the page. Continue?"))
            return;
        const p = ()=>{
            alert("Invalid config.")
        }
        ;
        try {
            const y = prompt("Enter a config:");
            if (!y) {
                p();
                return
            }
            const T = JSON.parse(y);
            if (typeof T != "object" || T === null || !("variables"in T)) {
                p();
                return
            }
            localStorage.setItem("suroi_config", y),
            alert("Settings loaded successfully."),
            window.location.reload()
        } catch {
            p()
        }
    }
    ),
    m("#export-settings-btn").on("click", ()=>{
        const p = localStorage.getItem("suroi_config")
          , y = ()=>{
            alert('Unable to copy settings. To export settings manually, open the dev tools with Ctrl+Shift+I (Cmd+Opt+I on Mac) and, after typing in the following, copy the result manually: localStorage.getItem("suroi_config")')
        }
        ;
        if (p === null) {
            y();
            return
        }
        navigator.clipboard.writeText(p).then(()=>{
            alert("Settings copied to clipboard.")
        }
        ).catch(y)
    }
    ),
    m("#reset-settings-btn").on("click", ()=>{
        confirm("This option will reset all settings and reload the page. Continue?") && confirm("Are you sure? This action cannot be undone.") && (localStorage.removeItem("suroi_config"),
        window.location.reload())
    }
    );
    const Do = 1
      , zo = $.player.inventorySlotTypings
      , Zt = (p,y)=>{
        p[0].addEventListener("pointerdown", T=>{
            y(T.button),
            T.stopPropagation()
        }
        )
    }
    ;
    let ht;
    function It(p, y, T, E) {
        ht = window.setTimeout(()=>{
            p === 0 && y && (E !== void 0 ? t.addAction({
                type: L.DropWeapon,
                slot: E
            }) : T !== void 0 && t.addAction({
                type: L.DropItem,
                item: T
            }),
            Ui = !1,
            window.setTimeout(()=>{
                Ui = !0
            }
            , 600))
        }
        , 600)
    }
    m("#weapons-container").append(...Array.from({
        length: $.player.maxWeapons
    }, (p,y)=>{
        const T = m(`<div class="inventory-slot" id="weapon-slot-${y + 1}">                        <div class="main-container">                            <span class="slot-number">${y + 1}</span>                            <span class="item-ammo"></span>                            <img class="item-image" draggable="false" />                            <span class="item-name"></span>                        </div>                        <img class="lock-icon" src="./img/misc/lock.svg"></span>                    </div>`)
          , E = zo[y] === C.Throwable
          , D = T[0];
        return D.addEventListener("pointerup", ()=>clearTimeout(ht)),
        D.addEventListener("pointerdown", G=>{
            var X;
            T.hasClass("has-item") && (G.stopImmediatePropagation(),
            E && ((X = i.activePlayer) == null ? void 0 : X.activeItem.itemType) === C.Throwable && t.cycleThrowable(Do),
            t.addAction({
                type: G.button === 2 ? L.DropWeapon : L.EquipItem,
                slot: y
            }),
            It(G.button, !0, void 0, y))
        }
        ),
        T
    }
    )),
    m("#scopes-container").append(Ee.definitions.map(p=>{
        const y = m(`<div class="inventory-slot item-slot" id="${p.idString}-slot" style="display: none;">
                    <img class="item-image" src="./img/game/loot/${p.idString}.svg" draggable="false">
                    <div class="item-tooltip">${p.name.split(" ")[0]}</div>
                </div>`);
        return y[0].addEventListener("pointerup", ()=>clearTimeout(ht)),
        Zt(y, T=>{
            const E = T === 0
              , D = T === 2
              , G = i.teamMode;
            E && (t.addAction({
                type: L.UseItem,
                item: p
            }),
            It(T, G, p)),
            D && G && t.addAction({
                type: L.DropItem,
                item: p
            })
        }
        ),
        y
    }
    )),
    m("#healing-items-container").append(Gt.definitions.map(p=>{
        const y = m(pe`<div class="inventory-slot item-slot active" id="${p.idString}-slot">
                    <img class="item-image" src="./img/game/loot/${p.idString}.svg" draggable="false">
                    <span class="item-count" id="${p.idString}-count">0</span>
                    <div class="item-tooltip">
                        ${z("tt_restores", {
            item: z(p.idString),
            amount: p.restoreAmount.toString(),
            type: p.healType === Qi.Adrenaline ? z("adrenaline") : z("health")
        })}
                    </div>
                </div>`);
        return y[0].addEventListener("pointerup", ()=>clearTimeout(ht)),
        Zt(y, T=>{
            const E = T === 0
              , D = T === 2
              , G = i.teamMode;
            E && (t.pingWheelActive ? t.addAction({
                type: L.Emote,
                emote: Ce.fromString(p.idString)
            }) : t.addAction({
                type: L.UseItem,
                item: p
            }),
            It(T, G, p)),
            D && G && t.addAction({
                type: L.DropItem,
                item: p
            })
        }
        ),
        y
    }
    ));
    const Eo = {
        true: m("#special-ammo-container"),
        false: m("#ammo-container")
    };
    for (const p of ut) {
        if (p.ephemeral)
            continue;
        const y = m(`<div class="inventory-slot item-slot ammo-slot active" id="${p.idString}-slot">
                <img class="item-image" src="./img/game/loot/${p.idString}.svg" draggable="false">
                <span class="item-count" id="${p.idString}-count">0</span>
            </div>`);
        Eo[`${p.hideUnlessPresent}`].append(y),
        y[0].addEventListener("pointerup", T=>{
            clearTimeout(ht)
        }
        ),
        Zt(y, T=>{
            const E = T === 0
              , D = T === 2
              , G = i.teamMode;
            E && (t.pingWheelActive && t.addAction({
                type: L.Emote,
                emote: Ce.fromString(p.idString)
            }),
            It(T, G, p)),
            D && G && t.addAction({
                type: L.DropItem,
                item: p
            })
        }
        )
    }
    for (const [p,y] of [[m("#helmet-slot"), "helmet"], [m("#vest-slot"), "vest"]])
        p[0].addEventListener("pointerup", ()=>clearTimeout(ht)),
        Zt(p, T=>{
            var G;
            const E = T === 2
              , D = i.activePlayer && i.teamMode;
            if (E && D) {
                const X = i.activePlayer.getEquipment(y);
                X && t.addAction({
                    type: L.DropItem,
                    item: X
                })
            }
            D !== void 0 && It(T, D, (G = i.activePlayer) == null ? void 0 : G.getEquipment(y))
        }
        );
    const Lo = m("#btn-spectate-options-icon");
    if (m("#btn-spectate-options").on("click", ()=>{
        a.spectatingContainer.toggle();
        const p = a.spectatingContainer.is(":visible");
        Lo.toggleClass("fa-eye", !p).toggleClass("fa-eye-slash", p)
    }
    ),
    m("#tab-mobile").toggle(ui.any),
    t.isMobile) {
        a.interactMsg.on("click", ()=>{
            i.uiManager.action.active ? t.addAction(L.Cancel) : (t.addAction(L.Interact),
            t.addAction(L.Loot))
        }
        ),
        a.interactKey.html('<img src="./img/misc/tap-icon.svg" alt="Tap">'),
        m("#weapon-clip-reload-icon").show(),
        a.activeAmmo.on("click", ()=>i.console.handleQuery("reload")),
        a.emoteWheel.css("top", "50%").css("left", "50%");
        const p = (y,T)=>{
            m(`#emote-wheel .emote-${y}`).on("click", ()=>{
                a.emoteWheel.hide();
                let E = !0;
                if (t.pingWheelActive) {
                    const D = i.uiManager.mapPings[T];
                    setTimeout(()=>{
                        let G;
                        i.map.expanded ? a.game.one("click", ()=>{
                            G = t.pingWheelPosition,
                            D && t.pingWheelActive && E && (t.addAction({
                                type: L.MapPing,
                                ping: D,
                                position: G
                            }),
                            E = !1)
                        }
                        ) : a.game.one("click", X=>{
                            const Be = e.create(X.clientX, X.clientY)
                              , Je = i.camera.container.toLocal(Be);
                            G = e.scale(Je, 1 / te),
                            D && t.pingWheelActive && E && (t.addAction({
                                type: L.MapPing,
                                ping: D,
                                position: G
                            }),
                            E = !1)
                        }
                        )
                    }
                    , 100)
                } else {
                    const D = i.uiManager.emotes[T];
                    D && t.addAction({
                        type: L.Emote,
                        emote: D
                    })
                }
            }
            )
        }
        ;
        p("top", 0),
        p("right", 1),
        p("bottom", 2),
        p("left", 3),
        m("#mobile-options").show(),
        a.menuButton.on("click", ()=>a.gameMenu.toggle()),
        a.emoteButton.on("click", ()=>a.emoteWheel.show()),
        a.pingToggle.on("click", ()=>{
            t.pingWheelActive = !t.pingWheelActive;
            const {pingWheelActive: y} = t;
            a.pingToggle.toggleClass("btn-danger", y).toggleClass("btn-primary", !y),
            i.uiManager.updateEmoteWheel()
        }
        )
    }
    window.addEventListener("beforeunload", p=>{
        a.canvas.hasClass("active") && i.console.getBuiltInCVar("cv_leave_warning") && !i.gameOver && p.preventDefault()
    }
    );
    const ba = new Yi;
    function wa(p) {
        const y = +p.value
          , T = +p.min
          , E = +p.max
          , D = (y - T) / (E - T) * 100;
        ba.getAndGetDefaultIfAbsent(p, ()=>m(p)).css("--background", `linear-gradient(to right, #ff7500 0%, #ff7500 ${D}%, #f8f9fa ${D}%, #f8f9fa 100%)`).siblings(".range-input-value").text(p.id !== "slider-joystick-size" ? `${Math.round(y * 100)}%` : y)
    }
    m("input[type=range]").on("input", ({target: p})=>{
        wa(p)
    }
    ).each((p,y)=>{
        wa(y)
    }
    ),
    m(".tab").on("click", ({target: p})=>{
        const y = ba.getAndGetDefaultIfAbsent(p, ()=>m(p));
        y.addClass("active"),
        y.siblings().removeClass("active");
        const T = m(`#${p.id}-content`);
        T.siblings().removeClass("active"),
        T.siblings().hide(),
        T.addClass("active"),
        T.show()
    }
    );
    const Oo = m("#warning-btn-play-solo, #btn-play-solo");
    m("#warning-modal-agree-checkbox").on("click", function() {
        Oo.toggleClass("btn-disabled", !this.checked)
    });
    const Bo = m("#btn-play-solo");
    m("#warning-btn-play-solo").on("click", ()=>{
        a.warningModal.hide(),
        Bo.trigger("click")
    }
    );
    const Vo = m("#btn-join-team");
    window.location.hash && (be = window.location.hash.slice(1),
    Vo.trigger("click"))
}
const ms = Object.freeze({
    [j.Player]: rt,
    [j.Obstacle]: Qe,
    [j.DeathMarker]: is,
    [j.Loot]: kt,
    [j.Building]: es,
    [j.Decal]: as,
    [j.Parachute]: ns,
    [j.ThrowableProjectile]: rs,
    [j.SyncedParticle]: ss
})
  , Ht = class Ht {
    constructor() {
        c(this, "_socket");
        c(this, "objects", new fn);
        c(this, "bullets", new Set);
        c(this, "planes", new Set);
        c(this, "playerNames", new Map);
        c(this, "activePlayerID", -1);
        c(this, "teamID", -1);
        c(this, "teamMode", !1);
        c(this, "gameStarted", !1);
        c(this, "gameOver", !1);
        c(this, "spectating", !1);
        c(this, "error", !1);
        c(this, "lastPingDate", 0);
        c(this, "disconnectReason", "");
        c(this, "uiManager", new _i(this));
        c(this, "pixi", new en);
        c(this, "particleManager", new $i(this));
        c(this, "map", new Gi(this));
        c(this, "camera", new Ni(this));
        c(this, "console", new Vi(this));
        c(this, "inputManager", new ci(this));
        c(this, "soundManager", new Fi(this));
        c(this, "gasRender", new gi(te));
        c(this, "gas", new Wi(this));
        c(this, "music");
        c(this, "tweens", new Set);
        c(this, "_timeouts", new Set);
        c(this, "_packetStream", new Ua(new ArrayBuffer(1024)));
        c(this, "_lastUpdateTime", 0);
        c(this, "_serverDt", 0);
        c(this, "tick", (()=>{
            const t = {};
            let a = !1;
            return ()=>{
                var w, k, S, x, I;
                if (!this.gameStarted || this.gameOver && !this.spectating)
                    return;
                this.inputManager.update(),
                this.soundManager.update();
                const o = this.activePlayer;
                if (!o)
                    return;
                for (const R of this.objects.getCategory(j.Building))
                    R.toggleCeiling();
                const s = this.uiManager.action.active
                  , n = s && !this.uiManager.action.fake;
                let r = !0;
                s && this.uiManager.updateAction();
                const d = {
                    object: void 0,
                    minDist: Number.MAX_VALUE
                }
                  , g = {
                    object: void 0,
                    minDist: Number.MAX_VALUE
                }
                  , h = new M(3,o.position);
                for (const R of this.objects)
                    if ((R instanceof kt || (R instanceof Qe || R instanceof rt) && R.canInteract(o)) && R.hitbox.collidesWith(h)) {
                        const O = Ue.distanceSquared(R.position, o.position);
                        (R.canInteract(o) || R instanceof Qe || R instanceof rt) && O < d.minDist ? (d.minDist = O,
                        d.object = R) : R instanceof kt && O < g.minDist && (g.minDist = O,
                        g.object = R)
                    }
                const _ = d.object ?? g.object
                  , f = _ instanceof Qe ? (w = _.door) == null ? void 0 : w.offset : void 0;
                r = d.object !== void 0;
                const b = this.inputManager.binds.getInputsBoundToAction(_ === void 0 ? "cancel_action" : "interact")[0]
                  , v = {
                    object: ((k = t.object) == null ? void 0 : k.id) !== (_ == null ? void 0 : _.id),
                    offset: t.offset !== f,
                    isAction: t.isAction !== s,
                    bind: t.bind !== b,
                    canInteract: t.canInteract !== r
                };
                if (v.bind && (a = !1),
                v.object || v.offset || v.isAction || v.bind || v.canInteract) {
                    t.object = _,
                    t.offset = f,
                    t.isAction = s,
                    t.bind = b,
                    t.canInteract = r;
                    const {interactKey: R, interactMsg: O, interactText: J} = this.uiManager.ui
                      , V = _ instanceof kt ? _.definition.itemType : void 0;
                    if (_ !== void 0 || s && n) {
                        if (v.object || v.offset || v.isAction) {
                            let B;
                            switch (!0) {
                            case _ instanceof Qe:
                                {
                                    switch (_.definition.role) {
                                    case ee.Door:
                                        B = ((S = _.door) == null ? void 0 : S.offset) === 0 ? z("action_open_door") : z("action_close_door");
                                        break;
                                    case ee.Activatable:
                                        B = z(`interact_${_.definition.idString}`);
                                        break
                                    }
                                    break
                                }
                            case _ instanceof kt:
                                {
                                    B = `${_.definition.idString.startsWith("dual_") ? z("dual_template", {
                                        gun: z(_.definition.idString.slice(5))
                                    }) : z(_.definition.idString)}${_.count > 1 ? ` (${_.count})` : ""}`;
                                    break
                                }
                            case _ instanceof rt:
                                {
                                    B = z("action_revive", {
                                        player: this.uiManager.getRawPlayerName(_.id)
                                    });
                                    break
                                }
                            case s:
                                {
                                    B = z("action_cancel");
                                    break
                                }
                            }
                            B && J.text(B)
                        }
                        if (!this.inputManager.isMobile && (!a || _ === void 0 && s)) {
                            a = !0;
                            const B = b === void 0 ? void 0 : ci.getIconFromInputName(b);
                            B === void 0 ? R.text(b ?? "") : R.html(`<img src="${B}" alt="${b}"/>`)
                        }
                        r || _ === void 0 && s ? R.addClass("active").show() : R.removeClass("active").hide(),
                        O.show()
                    } else
                        O.hide();
                    if (this.inputManager.isMobile && r) {
                        const B = this.uiManager.inventory.weapons;
                        this.console.getBuiltInCVar("cv_autopickup") && _ instanceof kt && Ui && ((V !== C.Melee || ((x = B == null ? void 0 : B[2]) == null ? void 0 : x.definition.idString) === "fists") && (V !== C.Gun || !(B != null && B[0]) || !(B != null && B[1])) && V !== C.Skin || V === C.Gun && (B != null && B.some(le=>{
                            var F;
                            const ce = le == null ? void 0 : le.definition;
                            return (ce == null ? void 0 : ce.itemType) === C.Gun && ((_ == null ? void 0 : _.definition) === ce && !ce.isDual && ce.dualVariant || ((F = _.definition) == null ? void 0 : F.singleVariant) === ce.idString)
                        }
                        ))) ? this.inputManager.addAction(L.Loot) : _ instanceof Qe && _.canInteract(o) && _.definition.role === ee.Door && ((I = _.door) == null ? void 0 : I.offset) === 0 && this.inputManager.addAction(L.Interact)
                    }
                }
            }
        }
        )());
        if (Ht._instantiated)
            throw new Error("Class 'Game' has already been instantiated.");
        Ht._instantiated = !0,
        this.console.readFromLocalStorage(),
        Hn(this),
        this.inputManager.setupInputs();
        const t = async()=>{
            const a = this.console.getBuiltInCVar("cv_renderer")
              , o = this.console.getBuiltInCVar("cv_renderer_res");
            await this.pixi.init({
                resizeTo: window,
                background: je.grass,
                antialias: this.console.getBuiltInCVar("cv_antialias"),
                autoDensity: !0,
                preferWebGLVersion: a === "webgl1" ? 1 : 2,
                preference: a === "webgpu" ? "webgpu" : "webgl",
                resolution: o === "auto" ? window.devicePixelRatio || 1 : parseFloat(o),
                hello: !0,
                canvas: document.getElementById("game-canvas"),
                eventFeatures: {
                    move: !1,
                    globalMove: !1,
                    wheel: !1,
                    click: !0
                }
            });
            const s = this.pixi;
            await Un(s.renderer, this.inputManager.isMobile ? this.console.getBuiltInCVar("mb_high_res_textures") : this.console.getBuiltInCVar("cv_high_res_textures")),
            this.uiManager.ui.gameUi[0].addEventListener("pointerdown", n=>{
                s.canvas.dispatchEvent(new PointerEvent("pointerdown",{
                    pointerId: n.pointerId,
                    button: n.button,
                    clientX: n.clientX,
                    clientY: n.clientY,
                    screenY: n.screenY,
                    screenX: n.screenX
                }))
            }
            ),
            s.ticker.add(this.render.bind(this)),
            s.stage.addChild(this.camera.container, this.map.container, this.map.mask),
            this.map.visible = !this.console.getBuiltInCVar("cv_minimap_minimized"),
            this.map.expanded = this.console.getBuiltInCVar("cv_map_expanded"),
            this.uiManager.ui.gameUi.toggle(this.console.getBuiltInCVar("cv_draw_hud")),
            s.renderer.on("resize", ()=>this.resize()),
            this.resize(),
            setInterval(()=>{
                this.console.getBuiltInCVar("pf_show_fps") && this.uiManager.debugReadouts.fps.text(`${Math.round(this.pixi.ticker.FPS)} fps`)
            }
            , 500)
        }
        ;
        Promise.all([t(), gs(this)]).then(()=>{
            ds(),
            De()
        }
        ),
        vn(this),
        this.inputManager.generateBindsConfigScreen(),
        this.music = mt.add("menu_music", {
            url: `./audio/music/menu_music${this.console.getBuiltInCVar("cv_use_old_menu_music") ? "_old" : et.specialMenuMusic ? `_${et.idString}` : ""}.mp3`,
            singleInstance: !0,
            preload: !0,
            autoPlay: !0,
            volume: this.console.getBuiltInCVar("cv_music_volume")
        })
    }
    get activePlayer() {
        return this.objects.get(this.activePlayerID)
    }
    addTimeout(t, a) {
        const o = new rn(t,Date.now() + (a ?? 0));
        return this._timeouts.add(o),
        o
    }
    resize() {
        this.map.resize(),
        this.camera.resize(!0)
    }
    connect(t) {
        if (this.error = !1,
        this.gameStarted)
            return;
        this._socket = new WebSocket(t),
        this._socket.binaryType = "arraybuffer",
        this._socket.onopen = ()=>{
            this.music.stop(),
            this.gameStarted = !0,
            this.gameOver = !1,
            this.spectating = !1,
            this.disconnectReason = "";
            {
                clearTimeout(this.uiManager.gameOverScreenTimeout);
                const n = this.uiManager.ui;
                n.gameOverOverlay.hide(),
                n.killMsgModal.hide(),
                n.killMsgCounter.text("0"),
                n.killFeed.html(""),
                n.spectatingContainer.hide(),
                n.joystickContainer.show()
            }
            this.sendPacket(Dt.create()),
            this.lastPingDate = Date.now();
            let o;
            const s = {
                isMobile: this.inputManager.isMobile,
                name: this.console.getBuiltInCVar("cv_player_name"),
                skin: ae.fromStringSafe(this.console.getBuiltInCVar("cv_loadout_skin")) ?? ae.fromString(typeof (o = tt.cv_loadout_skin) == "object" ? o.value : o),
                badge: pt.fromStringSafe(this.console.getBuiltInCVar("cv_loadout_badge")),
                emotes: Li.map(n=>Ce.fromStringSafe(this.console.getBuiltInCVar(`cv_loadout_${n}_emote`)))
            };
            this.sendPacket(co.create(s)),
            this.camera.addObject(this.gasRender.graphics),
            this.map.indicator.setFrame("player_indicator")
        }
        ,
        this._socket.onmessage = o=>{
            const s = new Ua(o.data);
            let n = 0;
            for (; ; ) {
                ++n === 1e3 && console.warn("1000 iterations of packet reading; possible infinite loop");
                const r = s.deserializeServerPacket();
                if (r === void 0)
                    break;
                this.onPacket(r)
            }
        }
        ;
        const a = this.uiManager.ui;
        this._socket.onerror = ()=>{
            this.error = !0,
            a.splashMsgText.html(z("msg_err_joining")),
            a.splashMsg.show(),
            De()
        }
        ,
        this._socket.onclose = ()=>{
            De();
            const o = this.disconnectReason || "Connection lost";
            this.gameOver || (this.gameStarted && (a.splashUi.fadeIn(400),
            a.splashMsgText.html(this.disconnectReason || "Connection lost."),
            a.splashMsg.show()),
            this.uiManager.ui.btnSpectate.addClass("btn-disabled"),
            this.error || this.endGame()),
            o.startsWith("Invalid game version") && (alert(o),
            location.search = `t=${Date.now()}`)
        }
    }
    onPacket(t) {
        switch (!0) {
        case t instanceof lo:
            this.startGame(t.output);
            break;
        case t instanceof go:
            this.map.updateFromPacket(t.output);
            break;
        case t instanceof ho:
            this.processUpdate(t.output);
            break;
        case t instanceof ro:
            this.uiManager.showGameOverScreen(t.output);
            break;
        case t instanceof _o:
            this.uiManager.processKillFeedPacket(t.output);
            break;
        case t instanceof Dt:
            {
                this.uiManager.debugReadouts.ping.text(`${Date.now() - this.lastPingDate} ms`),
                setTimeout(()=>{
                    this.sendPacket(Dt.create()),
                    this.lastPingDate = Date.now()
                }
                , 5e3);
                break
            }
        case t instanceof uo:
            {
                const a = this.uiManager.ui
                  , {output: o} = t;
                a.reportingName.text(o.playerName),
                a.reportingId.text(o.reportID),
                a.reportingModal.fadeIn(250);
                break
            }
        case t instanceof mo:
            {
                let a;
                const {output: o} = t;
                switch (o.item.itemType) {
                case C.Ammo:
                    a = "ammo_pickup";
                    break;
                case C.Healing:
                    a = `${o.item.idString}_pickup`;
                    break;
                case C.Scope:
                    a = "scope_pickup";
                    break;
                case C.Armor:
                    o.item.armorType === ii.Helmet ? a = "helmet_pickup" : a = "vest_pickup";
                    break;
                case C.Backpack:
                    a = "backpack_pickup";
                    break;
                case C.Throwable:
                    a = "throwable_pickup";
                    break;
                default:
                    a = "pickup";
                    break
                }
                this.soundManager.play(a);
                break
            }
        case t instanceof so:
            this.disconnectReason = t.output.reason;
            break
        }
    }
    startGame(t) {
        document.hasFocus() || this.soundManager.play("join_notification"),
        this.uiManager.emotes = t.emotes,
        this.uiManager.updateEmoteWheel();
        const a = this.uiManager.ui;
        (this.teamMode = t.maxTeamSize != st.Solo) && (this.teamID = t.teamID),
        a.canvas.addClass("active"),
        a.splashUi.fadeOut(400, De),
        a.killLeaderLeader.html(z("msg_waiting_for_leader")),
        a.killLeaderCount.text("0"),
        a.spectateKillLeader.addClass("btn-disabled"),
        a.teamContainer.toggle(this.teamMode)
    }
    async endGame() {
        const t = this.uiManager.ui;
        return await new Promise(a=>{
            t.splashOptions.addClass("loading"),
            this.soundManager.stopAll(),
            this.music.play(),
            t.splashUi.fadeIn(400, ()=>{
                var s;
                t.teamContainer.html(""),
                t.actionContainer.hide(),
                t.gameMenu.hide(),
                t.gameOverOverlay.hide(),
                t.canvas.removeClass("active"),
                t.killLeaderLeader.text(z("msg_waiting_for_leader")),
                t.killLeaderCount.text("0"),
                this.gameStarted = !1,
                (s = this._socket) == null || s.close();
                for (const n of this.objects)
                    n.destroy();
                for (const n of this.planes)
                    n.destroy();
                this.objects.clear(),
                this.bullets.clear(),
                this.planes.clear(),
                this.camera.container.removeChildren(),
                this.particleManager.clear(),
                this.uiManager.clearTeammateCache();
                const o = this.map;
                o.safeZone.clear(),
                o.pingGraphics.clear(),
                o.pings.clear(),
                o.pingsContainer.removeChildren(),
                o.teammateIndicators.clear(),
                o.teammateIndicatorContainer.removeChildren(),
                this.playerNames.clear(),
                this._timeouts.clear(),
                this.camera.zoom = Ee.definitions[0].zoomLevel,
                De(),
                me ? t.createTeamMenu.fadeIn(250, a) : a()
            }
            )
        }
        )
    }
    sendPacket(t) {
        this._packetStream.stream.index = 0,
        this._packetStream.serializeClientPacket(t),
        this.sendData(this._packetStream.getBuffer())
    }
    sendData(t) {
        var a;
        if (((a = this._socket) == null ? void 0 : a.readyState) === WebSocket.OPEN)
            try {
                this._socket.send(t)
            } catch (o) {
                console.warn("Error sending packet. Details:", o)
            }
    }
    render() {
        if (!this.gameStarted)
            return;
        const t = this.pixi.ticker.deltaMS
          , a = Date.now();
        for (const o of this._timeouts) {
            if (o.killed) {
                this._timeouts.delete(o);
                continue
            }
            a > o.end && (o.callback(),
            this._timeouts.delete(o))
        }
        if (this.console.getBuiltInCVar("cv_movement_smoothing")) {
            for (const o of this.objects.getCategory(j.Player))
                o.updateContainerPosition(),
                (!o.isActivePlayer || !this.console.getBuiltInCVar("cv_responsive_rotation") || this.spectating) && o.updateContainerRotation();
            this.activePlayer && (this.camera.position = this.activePlayer.container.position);
            for (const o of this.objects.getCategory(j.Loot))
                o.updateContainerPosition();
            for (const o of this.objects.getCategory(j.ThrowableProjectile))
                o.updateContainerPosition(),
                o.updateContainerRotation();
            for (const o of this.objects.getCategory(j.SyncedParticle))
                o.updateContainerPosition(),
                o.updateContainerRotation(),
                o.updateContainerScale()
        }
        for (const o of this.tweens)
            o.update();
        for (const o of this.bullets)
            o.update(t);
        this.particleManager.update(t),
        this.map.update(),
        this.gasRender.update(this.gas);
        for (const o of this.planes)
            o.update();
        this.camera.update()
    }
    get lastUpdateTime() {
        return this._lastUpdateTime
    }
    get serverDt() {
        return this._serverDt
    }
    processUpdate(t) {
        const a = Date.now();
        this._serverDt = a - this._lastUpdateTime,
        this._lastUpdateTime = a;
        for (const {id: s, name: n, hasColor: r, nameColor: d, badge: g} of t.newPlayers ?? [])
            this.playerNames.set(s, {
                name: n,
                hasColor: r,
                nameColor: new vt(d),
                badge: g
            });
        const o = t.playerData;
        o && this.uiManager.updateUI(o);
        for (const s of t.deletedPlayers ?? [])
            this.playerNames.delete(s);
        for (const {id: s, type: n, data: r} of t.fullDirtyObjects ?? []) {
            const d = this.objects.get(s);
            d === void 0 || d.destroyed ? this.objects.add(new ms[n](this,s,r)) : d.updateFromData(r, !1)
        }
        for (const {id: s, data: n} of t.partialDirtyObjects ?? []) {
            const r = this.objects.get(s);
            if (r === void 0) {
                console.warn(`Trying to partially update non-existant object with ID ${s}`);
                continue
            }
            r.updateFromData(n, !1)
        }
        for (const s of t.deletedObjects ?? []) {
            const n = this.objects.get(s);
            if (n === void 0) {
                console.warn(`Trying to delete unknown object with ID ${s}`);
                continue
            }
            n.destroy(),
            this.objects.delete(n)
        }
        for (const s of t.deserializedBullets ?? [])
            this.bullets.add(new ts(this,s));
        for (const s of t.explosions ?? [])
            os(this, s.definition, s.position);
        for (const s of t.emotes ?? []) {
            if (this.console.getBuiltInCVar("cv_hide_emotes"))
                break;
            const n = this.objects.get(s.playerID);
            if (n instanceof rt)
                n.sendEmote(s.definition);
            else {
                console.warn(`Tried to emote on behalf of ${n === void 0 ? "a non-existant player" : `a/an ${j[n.type]}`}`);
                continue
            }
        }
        if (this.gas.updateFrom(t),
        t.aliveCount !== void 0) {
            const s = this.uiManager.ui;
            s.playerAlive.text(t.aliveCount),
            s.btnSpectate.toggle(t.aliveCount > 1)
        }
        for (const s of t.planes ?? [])
            this.planes.add(new Hi(this,s.position,s.direction));
        for (const s of t.mapPings ?? [])
            this.map.addMapPing(s);
        this.tick()
    }
    addTween(t) {
        const a = new Jn(this,t);
        return this.tweens.add(a),
        a
    }
    removeTween(t) {
        this.tweens.delete(t)
    }
}
;
c(Ht, "_instantiated", !1);
let qi = Ht;
(async()=>new qi)();
