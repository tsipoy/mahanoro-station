import React from 'react'
import Header from './Header'

export default function MyAcount() {
    return (
        <section>
            <Header />
            <div>
                <h2>My acount</h2>
                <p>Volana Sariaka</p>
            </div>
            <form>
                <label>My personnal informations</label>
                <label>Firstname
                    <input value="Volana" />
                </label>
                <label>Lastname
                    <input value="Sariaka" />
                </label>
                <label>Phone number
                    <input value="034 34 034 34" />
                </label>
                <button>Update</button>
            </form>
        </section>
    )
}
