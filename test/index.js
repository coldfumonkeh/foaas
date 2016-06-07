var should = require('chai').should(),
    foaas_module = require('../index');

var foaas = new foaas_module();

describe('#foaas', function() {

  it('/version', function() {
    return foaas.getVersion({type: 'plain'}).then(function(data) {
      data.should.equal('Version 1.0.0 FOAAS');
    });
  });

  it('/off/:name/:from', function() {
    return foaas.off('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck off, Tom. - Chris');
    });
  });

  it('/you/:name/:from', function() {
    return foaas.you('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck you, Tom. - Chris');
    });
  });

  it('/this/:from', function() {
    return foaas.this('Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck this. - Chris');
    });
  });

  it('/that/:from', function() {
    return foaas.that('Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck that. - Chris');
    });
  });

  it('/everything/:from', function() {
    return foaas.everything('Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck everything. - Chris');
    });
  });

  it('/everyone/:from', function() {
    return foaas.everyone('Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Everyone can go and fuck off. - Chris');
    });
  });

  it('/donut/:name/:from', function() {
    return foaas.donut('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Tom, go and take a flying fuck at a rolling donut. - Chris');
    });
  });

  it('/shakespeare/:name/:from', function() {
    return foaas.shakespeare('Falstaff', 'Prince%20Henry', {type: 'plain'}).then(function(data) {
      data.should.equal('Falstaff, Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch! - Prince Henry');
    });
  });

  it('/linus/:name/:from', function() {
    return foaas.linus('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Tom, there aren\'t enough swear-words in the English language, so now I\'ll have to call you perkeleen vittupää just to express my disgust and frustration with this crap. - Chris');
    });
  });

  it('/king/:name/:from', function() {
    return foaas.king('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Oh fuck off, just really fuck off you total dickface. Christ Tom, you are fucking thick. - Chris');
    });
  });

  it('/pink/:from', function() {
    return foaas.pink('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Well, Fuck me pink. - Tom');
    });
  });

  it('/life/:from', function() {
    return foaas.life('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck my life. - Tom');
    });
  });

  it('/chainsaw/:name/', function() {
    return foaas.chainsaw('Chris', 'Heather', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck me gently with a chainsaw, Chris. Do I look like Mother Teresa? - Heather');
    });
  });

  it('/outside/:name/:from', function() {
    return foaas.outside('BigBrother', 'TheWorld', {type: 'plain'}).then(function(data) {
      data.should.equal('BigBrother, why don\'t you go outside and play hide-and-go-fuck-yourself? - TheWorld');
    });
  });

  it('/:thing/:from', function() {
    return foaas.thing('pineapples', '%E2%99%A5%20Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck pineapples. - ♥ Chris');
    });
  });

  it('/thanks/:from', function() {
    return foaas.thanks('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck you very much. - Tom');
    });
  });

  it('/flying/:from', function() {
    return foaas.flying('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('I don\'t give a flying fuck. - Tom');
    });
  });

  it('/fascinating/:from', function() {
    return foaas.fascinating('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Fascinating story, in what chapter do you shut the fuck up? - Tom');
    });
  });

  it('/madison/:name/:from', function() {
    return foaas.madison('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('What you\'ve just said is one of the most insanely idiotic things I have ever heard, Tom. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points Tom, and may God have mercy on your soul. - Chris');
    });
  });

  it('/cool/:from', function() {
    return foaas.cool('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Cool story, bro. - Tom');
    });
  });

  it('/field/:name/:from/:reference', function() {
    return foaas.field('Tom', 'Chris', 'Anon', {type: 'plain'}).then(function(data) {
      data.should.equal('And Tom said unto Chris, \'Verily, cast thine eyes upon the field in which I grow my fucks\', and Chris gave witness unto the field, and saw that it was barren. - Anon');
    });
  });

  it('/nugget/:name/:from', function() {
    return foaas.nugget('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Well Tom, aren\'t you a shining example of a rancid fuck-nugget. - Chris');
    });
  });

  it('/yoda/:name/:from', function() {
    return foaas.yoda('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck off, you must, Tom. - Chris');
    });
  });

  it('/ballmer/:name/:company/:from', function() {
    return foaas.ballmer('Tom', 'Chris', 'Apple', {type: 'plain'}).then(function(data) {
      data.should.equal('Fucking Tom is a fucking pussy. I\'m going to fucking bury that guy, I have done it before, and I will do it again. I\'m going to fucking kill Chris. - Apple');
    });
  });

  it('/what/:from', function() {
    return foaas.what('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('What the fuck‽ - Tom');
    });
  });

  it('/because/:from', function() {
    return foaas.because('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Why? Because Fuck you, that\'s why. - Tom');
    });
  });

  it('/caniuse/:tool/:from', function() {
    return foaas.caniuse('my laptop', 'Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Can you use my laptop? Fuck no! - Tom');
    });
  });

  it('/bye/:from', function() {
    return foaas.bye('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuckity bye! - Tom');
    });
  });

  it('/diabetes/:from', function() {
    return foaas.diabetes('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('I\'d love to stop and chat to you but I\'d rather have type 2 diabetes. - Tom');
    });
  });

  it('/bus/:name/:from', function() {
    return foaas.bus('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Christ on a bendy-bus, Tom, don\'t be such a fucking faff-arse. - Chris');
    });
  });

  it('/xmas/:name/:from', function() {
    return foaas.xmas('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Merry Fucking Christmas, Tom. - Chris');
    });
  });

  it('/bday/:name/:from', function() {
    return foaas.bday('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Happy Fucking Birthday, Tom. - Chris');
    });
  });

  it('/awesome/:from', function() {
    return foaas.awesome('Macklemore', {type: 'plain'}).then(function(data) {
      data.should.equal('This is Fucking Awesome. - Macklemore');
    });
  });

  // it('SHOUTS /awesome/:from', function() {
  //   return foaas.awesome('Macklemore', {type: 'plain', shoutcast: true}).then(function(data) {
  //     data.should.equal('This is Fucking Awesome. - Macklemore');
  //   });
  // });
  //
  // it('Spanish /awesome/:from', function() {
  //   return foaas.awesome('Macklemore', {type: 'plain', i18n: 'es'}).then(function(data) {
  //     data.should.equal('Esto es jodidamente impresionante.   -Macklemore');
  //   });
  // });
  //
  // it('SHOUTS Spanish /awesome/:from', function() {
  //   return foaas.awesome('Macklemore', {type: 'plain', shoutcloud: true, i18n: 'es'}).then(function(data) {
  //     data.should.equal('ESTO ES JODIDAMENTE IMPRESIONANTE.   -MACKLEMORE');
  //   });
  // });

  it('/tucker/:from', function() {
    return foaas.tucker('Malcolm Tucker', {type: 'plain'}).then(function(data) {
      data.should.equal('Come the fuck in or fuck the fuck off. - Malcolm Tucker');
    });
  });

  it('/bucket/:from', function() {
    return foaas.bucket('Anon', {type: 'plain'}).then(function(data) {
      data.should.equal('Please choke on a bucket of cocks. - Anon');
    });
  });

  it('/family/:from', function() {
    return foaas.family('Anon', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck you, your whole family, your pets, and your feces. - Anon');
    });
  });

  it('/shutup/:name/:from', function() {
    return foaas.shutup('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Tom, shut the fuck up. - Chris');
    });
  });

  it('/zayn/:from', function() {
    return foaas.zayn('Anon', {type: 'plain'}).then(function(data) {
      data.should.equal('Ask me if I give a motherfuck ?!! - Anon');
    });
  });

  it('/keepcalm/:reaction/:from', function() {
    return foaas.keepcalm('move on', 'Anon', {type: 'plain'}).then(function(data) {
      data.should.equal('Keep the fuck calm and move on! - Anon');
    });
  });

  it('/dosomething/:do/:something/:from', function() {
    return foaas.dosomething('Tidy','house','Anon', {type: 'plain'}).then(function(data) {
      data.should.equal('Tidy the fucking house! - Anon');
    });
  });

  it('/mornin/:from', function() {
    return foaas.mornin('Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Happy fuckin\' Mornin\'! - Chris');
    });
  });

  it('/thumbs/:subject/:from', function() {
    return foaas.thumbs('This Guy', 'Bob Kelso', {type: 'plain'}).then(function(data) {
      data.should.equal("Who has two thumbs and doesn't give a fuck? This Guy. - Bob Kelso");
    });
  });

  it('/retard/:from', function() {
    return foaas.retard('Dave', {type: 'plain'}).then(function(data) {
      data.should.equal('You Fucktard! - Dave');
    });
  });

  it('/greed/:noun/:from', function() {
    return foaas.greed('happiness', 'Dave', {type: 'plain'}).then(function(data) {
      data.should.equal('The point is, ladies and gentleman, that happiness -- for lack of a better word -- is good. happiness is right. happiness works. happiness clarifies, cuts through, and captures the essence of the evolutionary spirit. happiness, in all of its forms -- happiness for life, for money, for love, knowledge -- has marked the upward surge of mankind. - Dave');
    });
  });

  it('/bm/:name/:from', function() {
    return foaas.bm('Private', 'Sergeant Smith', {type: 'plain'}).then(function(data) {
      data.should.equal('Bravo mike, Private. - Sergeant Smith');
    });
  });

  it('/gfy/:name/:from', function() {
    return foaas.gfy('Private', 'Sergeant Smith', {type: 'plain'}).then(function(data) {
      data.should.equal('Golf foxtrot yankee, Private. - Sergeant Smith');
    });
  });

  it('/me/:from', function() {
    return foaas.me('Anon', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck me. - Anon');
    });
  });

  it('/back/:name/:from', function() {
    return foaas.back('Private', 'Sergeant Smith', {type: 'plain'}).then(function(data) {
      data.should.equal('Private, back the fuck off. - Sergeant Smith');
    });
  });

  it('/think/:name/:from', function() {
    return foaas.think('Private', 'Sergeant Smith', {type: 'plain'}).then(function(data) {
      data.should.equal('Private, you think I give a fuck? - Sergeant Smith');
    });
  });

  it('/keep/:name/:from', function() {
    return foaas.keep('Private', 'Sergeant Smith', {type: 'plain'}).then(function(data) {
      data.should.equal('Private: Fuck off. And when you get there, fuck off from there too. Then fuck off some more. Keep fucking off until you get back here. Then fuck off again. - Sergeant Smith');
    });
  });

  it('/single/:from', function() {
    return foaas.single('Anon', {type: 'plain'}).then(function(data) {
      data.should.equal('Not a single fuck was given. - Anon');
    });
  });

  it('/look/:name/:from', function() {
    return foaas.look('Private', 'Sergeant Smith', {type: 'plain'}).then(function(data) {
      data.should.equal('Private, do I look like I give a fuck? - Sergeant Smith');
    });
  });

  it('/looking/:from', function() {
    return foaas.looking('Sergeant Smith', {type: 'plain'}).then(function(data) {
      data.should.equal('Looking for a fuck to give. - Sergeant Smith');
    });
  });

  it('/no/:from', function() {
    return foaas.no('Sergeant Smith', {type: 'plain'}).then(function(data) {
      data.should.equal('No fucks given. - Sergeant Smith');
    });
  });

  it('/give/:from', function() {
    return foaas.give('Sergeant Smith', {type: 'plain'}).then(function(data) {
      data.should.equal('I give zero fucks. - Sergeant Smith');
    });
  });

  it('/zero/:from', function() {
    return foaas.zero('Sergeant Smith', {type: 'plain'}).then(function(data) {
      data.should.equal('Zero, thats the number of fucks I give. - Sergeant Smith');
    });
  });

  it('/pulp/:language/:from', function() {
    return foaas.pulp('What', 'Bad Mutha', {type: 'plain'}).then(function(data) {
      data.should.equal('What, motherfucker, do you speak it? - Bad Mutha');
    });
  });

  it('/sake/:from', function() {
    return foaas.sake('Bad Mutha', {type: 'plain'}).then(function(data) {
      data.should.equal('For Fuck\'s sake! - Bad Mutha');
    });
  });

  it('/anyway/:company/:from', function() {
    return foaas.anyway('EFF', 'John', {type: 'plain'}).then(function(data) {
      data.should.equal('Who the fuck are you anyway, EFF, why are you stirring up so much trouble, and, who pays you? - John');
    });
  });

});
