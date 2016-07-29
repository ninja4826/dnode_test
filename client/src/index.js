import dnode from 'dnode';

var d = dnode.connect(5004);

d.on('remote', (remote) => {
  console.log('remote:', remote);
  remote.blah(5, (s) => {
    console.log(s);
    console.log(typeof s);
    d.end();
  });
});