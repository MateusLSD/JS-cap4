// 6. Pesquise sobre testes de integração (ferramentas e boas práticas) em aplicações Node.js.

// /src
// src/app.js
const app = express();

app.use(express.json());

app.get('/users/:id', (req, res) => {
    res.json({ id: req.params.id, name: 'John' });
});

module.exports = app;

// src/server.js
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// __tests__/user.test.js

describe('User Integration Tests', () => {
    it('should fetch user by id', async () => {
        const response = await request(app)
            .get('/users/1')
            .expect(200);
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toBe('1');
    });
});
//   app.js
//   server.js
// /__tests__
//   user.test.js
