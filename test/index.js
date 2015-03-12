var should = require('chai').should(),
    foaas_module = require('../index');

var foaas = new foaas_module();

describe('#foaas', function() {

  it('returns the version details from the API', function() {
    return foaas.getVersion({type: 'plain'}).then(function(data) {
      data.should.equal('Version 0.1.5 FOAAS');
    });
  });

  it('says fuck off to Tom, from Chris', function() {
    return foaas.off('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck off, Tom. - Chris');
    });
  });

  it('says fuck you to Tom, from Chris', function() {
    return foaas.you('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck you, Tom. - Chris');
    });
  });

  it('says fuck this, from Chris', function() {
    return foaas.this('Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck this. - Chris');
    });
  });

  it('says fuck that, from Chris', function() {
    return foaas.that('Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck that. - Chris');
    });
  });

  it('says fuck everything, from Chris', function() {
    return foaas.everything('Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck everything. - Chris');
    });
  });

  it('says fuck everyone, from Chris', function() {
    return foaas.everyone('Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Everyone can go and fuck off. - Chris');
    });
  });

  it('brings a donut into the equation', function() {
    return foaas.donut('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Tom, go and take a flying fuck at a rolling donut. - Chris');
    });
  });

  it('gets Shakespearian', function() {
    return foaas.shakespeare('Falstaff', 'Prince%20Henry', {type: 'plain'}).then(function(data) {
      data.should.equal('Falstaff, Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch! - Prince Henry');
    });
  });

  it('gets linus', function() {
    return foaas.linus('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Tom, there aren\'t enough swear-words in the English language, so now I\'ll have to call you perkeleen vittupää just to express my disgust and frustration with this crap. - Chris');
    });
  });

  it('gets kingly', function() {
    return foaas.king('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Oh fuck off, just really fuck off you total dickface. Christ Tom, you are fucking thick. - Chris');
    });
  });

  it('gets pink', function() {
    return foaas.pink('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Well, Fuck me pink. - Tom');
    });
  });

  it('does not like life', function() {
    return foaas.life('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck my life. - Tom');
    });
  });

  it('uses a chainsaw', function() {
    return foaas.chainsaw('Chris', 'Heather', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck me gently with a chainsaw, Chris. Do I look like Mother Teresa? - Heather');
    });
  });

  it('takes it outside', function() {
    return foaas.outside('BigBrother', 'TheWorld', {type: 'plain'}).then(function(data) {
      data.should.equal('BigBrother, why don\'t you go outside and play hide-and-go-fuck-yourself? - TheWorld');
    });
  });

  it('takes whatever thing you give it', function() {
    return foaas.thing('pineapples', '%E2%99%A5%20Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck pineapples. - ♥ Chris');
    });
  });

  it('thanks you', function() {
    return foaas.thanks('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck you very much. - Tom');
    });
  });

  it('takes it flying', function() {
    return foaas.flying('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('I don\'t give a flying fuck. - Tom');
    });
  });

  it('finds it fascinating', function() {
    return foaas.fascinating('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Fascinating story, in what chapter do you shut the fuck up? - Tom');
    });
  });

  it('goes to madison', function() {
    return foaas.madison('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('What you\'ve just said is one of the most insanely idiotic things I have ever heard, Tom. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points Tom, and may God have mercy on your soul. - Chris');
    });
  });

  it('finds it cool', function() {
    return foaas.cool('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Cool story, bro. - Tom');
    });
  });

  it('finds itself glancing over the field', function() {
    return foaas.field('Tom', 'Chris', 'Anon', {type: 'plain'}).then(function(data) {
      data.should.equal('And Tom said unto Chris, \'Verily, cast thine eyes upon the field in which I grow my fucks\', and Chris gave witness unto the field, and saw that it was barren. - Anon');
    });
  });

  it('uses nuggets', function() {
    return foaas.nugget('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Well Tom, aren\'t you a shining example of a rancid fuck-nugget. - Chris');
    });
  });

  it('uses the force', function() {
    return foaas.yoda('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuck off, you must, Tom. - Chris');
    });
  });

  it('gets M$ on your ass', function() {
    return foaas.ballmer('Tom', 'Chris', 'Apple', {type: 'plain'}).then(function(data) {
      data.should.equal('Fucking Tom is a fucking pussy. I\'m going to fucking bury that guy, I have done it before, and I will do it again. I\'m going to fucking kill Chris. - Apple');
    });
  });

  it('asks what?', function() {
    return foaas.what('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('What the fuck‽ - Tom');
    });
  });

  it('asks why?', function() {
    return foaas.because('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Why? Because Fuck you, that\'s why. - Tom');
    });
  });

  it('asks to borrow a tool', function() {
    return foaas.caniuse('my laptop', 'Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Can you use my laptop? Fuck no! - Tom');
    });
  });

  it('says goodbye', function() {
    return foaas.bye('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('Fuckity bye! - Tom');
    });
  });

  it('says something about diabetes', function() {
    return foaas.diabetes('Tom', {type: 'plain'}).then(function(data) {
      data.should.equal('I\'d love to stop and chat to you but I\'d rather have type 2 diabetes. - Tom');
    });
  });

  it('says something about a bus', function() {
    return foaas.bus('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Christ on a bendy-bus, Tom, don\'t be such a fucking faff-arse. - Chris');
    });
  });

  it('wishes you season\'s greetings', function() {
    return foaas.xmas('Tom', 'Chris', {type: 'plain'}).then(function(data) {
      data.should.equal('Merry Fucking Christmas, Tom. - Chris');
    });
  });

  it('says this is awesome', function() {
    return foaas.awesome('Macklemore', {type: 'plain'}).then(function(data) {
      data.should.equal('This is Fucking Awesome. - Macklemore');
    });
  });

  it('SHOUTS this is awesome', function() {
    return foaas.awesome('Macklemore', {type: 'plain', shoutcast: true}).then(function(data) {
      data.should.equal('This is Fucking Awesome. - Macklemore');
    });
  });

  it('says this is awesome in Spanish', function() {
    return foaas.awesome('Macklemore', {type: 'plain', i18n: 'es'}).then(function(data) {
      data.should.equal('Esto es jodidamente increíble. - Macklemore');
    });
  });

  it('SHOUTS this is awesome in Spanish', function() {
    return foaas.awesome('Macklemore', {type: 'plain', shoutcast: true, i18n: 'es'}).then(function(data) {
      data.should.equal('Esto es jodidamente increíble. - Macklemore');
    });
  });

  it('will either invite you in or invite you out, Tucker style', function() {
    return foaas.tucker('Malcolm Tucker', {type: 'plain'}).then(function(data) {
      data.should.equal('Come the fuck in or fuck the fuck off. - Malcolm Tucker');
    });
  });

  it('will tell you to choke on a bucket of cocks', function() {
    return foaas.bucket('Anon', {type: 'plain'}).then(function(data) {
      data.should.equal('Please choke on a bucket of cocks. - Anon');
    });
  });

});
