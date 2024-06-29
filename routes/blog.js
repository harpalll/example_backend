import express from 'express';

const router = express.Router()

router.use((req, res, next) => {
  console.log(`blog route called, name:  ${req.url}, method : ${req.method}`);
  next()
})

router.get('/', (req, res) => {
  res.send('Blog home page')
})

router.get('/about', (req, res) => {
  res.send('About Blog')
})

router.get('/blogpost/:slug', (req, res) => {
  res.send(`About Blog ${req.params.slug}`);
})


export default router;