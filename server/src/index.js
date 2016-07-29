import dnode from 'dnode';

const server = dnode({
  blah: (n, cb) => {
    cb({ n });
  }
});

server.listen(5004);