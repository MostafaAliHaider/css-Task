

import Article from "@/components/Article"
import Form from "@/components/Form"
import Nav from "@/components/Nav"

export default function Home() {
  return (
    <>
      <div>
        <Nav />

        <main>
          <Form />
          <Article />
        </main>
      </div>
    </>
  )
}
