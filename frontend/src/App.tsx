/* Import para que as */

import Header from "./assets/Components/Header";
import SalesCard from "./assets/Components/SalesCard";

function App() {
    return (
        <>

            <Header />
            <main>
                <section id="sales">
                    <div className="dsmeta-container">

                        <SalesCard />

                    </div>
                </section>
            </main>

        </>
    )
}

export default App;
 