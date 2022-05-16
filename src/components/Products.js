import React, { useState } from 'react'
import Navbar from './Navbar';
import './Products.css';
import cpvcpipes from '../WebsiteMaterial/images/cpvcpipes.jpg'
import Bottom from './Bottom'
import factory_inside from '../WebsiteMaterial/images/factory_inside.png'
export default function Products() {

    const Products = [
        {
            imagename: "CopperWire",
            alter: "CopperWire-icon",
            wirename: "SINGLE CORE PVC COPPER WIRE",
            wirelength: "PVC Copper Wire 1 Core (Length 90m)",

            specifications: [
                { wirethickness: "0.75", NosAndDiameter: "11/0.3 (240.2)", currentrating: "7" },
                { wirethickness: "1.00", NosAndDiameter: "14/0.3", currentrating: "11" },
                { wirethickness: "1.50", NosAndDiameter: "22/0.3", currentrating: "13" },
                { wirethickness: "2.50", NosAndDiameter: "36/0.3", currentrating: "18" },
                { wirethickness: "4.00", NosAndDiameter: "56/0.3", currentrating: "24" },
                { wirethickness: "6.00", NosAndDiameter: "85/0.3", currentrating: "31" },
                { wirethickness: "10.00", NosAndDiameter: "140/0.3", currentrating: "42" },
                { wirethickness: "16.00", NosAndDiameter: "226/0.3", currentrating: "57" },
                { wirethickness: "25.00", NosAndDiameter: "196/0.4", currentrating: "72" },
                { wirethickness: "35.00", NosAndDiameter: "276/0.4", currentrating: "91" },
                { wirethickness: "50.00", NosAndDiameter: "396/0.4", currentrating: "120" },
            ],
        },

        {
            imagename: "4corecopperwire",
            alter: "SilverWire-icon",
            wirename: "FLEXIBLE PVC COPPER WIRE",
            wirelength: "FLEXIBLE PVC COPPER WIRE AVAILABLE IN 2 CORE, 3 CORE, 4 CORE (Length 90m)",

            specifications: [
                { wirethickness: "0.75", NosAndDiameter: "11/0.3 (240.2)", currentrating: "7" },
                { wirethickness: "1.00", NosAndDiameter: "14/0.3", currentrating: "11" },
                { wirethickness: "1.50", NosAndDiameter: "22/0.3", currentrating: "14" },
                { wirethickness: "2.50", NosAndDiameter: "36/0.3", currentrating: "19" },
                { wirethickness: "4.00", NosAndDiameter: "56/0.3", currentrating: "26" },
                { wirethickness: "6.00", NosAndDiameter: "85/0.3", currentrating: "31" },
                { wirethickness: "10.00", NosAndDiameter: "140/0.3", currentrating: "42" },
                { wirethickness: "16.00", NosAndDiameter: "226/0.3", currentrating: "57" },
                { wirethickness: "25.00", NosAndDiameter: "199/0.4", currentrating: "71" },
                { wirethickness: "35.00", NosAndDiameter: "279/0.4", currentrating: "91" },
            ],

        },
        {
            imagename: "submersiblecable",
            alter: "CopperWire-icon",
            wirename: "SUBMERSIBLE CABLES",
            wirelength: "PVC Copper Wire 1 Core (Length 90m)",

            specifications: [
                { wirethickness: "1.50", NosAndDiameter: "22/0.3", currentrating: "14" },
                { wirethickness: "2.50", NosAndDiameter: "36/0.3", currentrating: "18" },
                { wirethickness: "4.50", NosAndDiameter: "56/0.3", currentrating: "26" },
                { wirethickness: "6.00", NosAndDiameter: "84/0.3", currentrating: "31" },
                { wirethickness: "10.00", NosAndDiameter: "140/0.3", currentrating: "42" },
                { wirethickness: "16.00", NosAndDiameter: "226/0.3", currentrating: "57" },
                { wirethickness: "25.00", NosAndDiameter: "354/0.4", currentrating: "71" },
            ],

        },
        {
            imagename: "dishcable",
            alter: "CopperWire-icon",
            wirename: "DISH CO-AXIAL CABLE",
            wirelength: "PVC Copper Wire 1 Core (Length 90m)",

            specifications: [
                { wiresize: "RG-59" },
                { wiresize: "GR-6" },
                { wiresize: "RG-11" },
            ],

        },
        {
            imagename: "pvcinsulatedtwincable",
            alter: "CopperWire-icon",
            wirename: "PVC INSULATED TWIN CABLE",
            wirelength: "PVC Copper Wire 1 Core (Length 90m)",

            specifications: [
                { wirethickness: "2.50", NosAndDiameter: "1/1.78" },
                { wirethickness: "4.00", NosAndDiameter: "1/2.24" },
                { wirethickness: "6.00", NosAndDiameter: "1/2.80" },
                { wirethickness: "10.00", NosAndDiameter: "1/3.58" },
                { wirethickness: "16.00", NosAndDiameter: "7/1.62" },
                { wirethickness: "25.00", NosAndDiameter: "7/2.26" },
                { wirethickness: "35.00", NosAndDiameter: "7/2.80" },
            ],
        },
        {
            imagename: "CopperWire",
            alter: "CopperWire-icon",
            wirename: "PVC INSULATED UN-SHEATHED COPPER WIRE",
            wirelength: "PVC Copper Wire 1 Core (Length 90m)",

            specifications: [
                { wirethickness: "1.50", NosAndDiameter: "22/0.3" },
                { wirethickness: "2.50", NosAndDiameter: "36/0.3" },
                { wirethickness: "4.50", NosAndDiameter: "56/0.3" },
                { wirethickness: "6.00", NosAndDiameter: "84/0.3" },
                { wirethickness: "10.00", NosAndDiameter: "140/0.3" },
                { wirethickness: "16.00", NosAndDiameter: "226/0.3" },
                { wirethickness: "25.00", NosAndDiameter: "354/0.4" },
            ],

        },

    ]

    const [state, setState] = useState([
        {
            id: 0,
            value: 0
        },
        {
            id: 1,
            value: 0
        },
        {
            id: 2,
            value: 0
        },
        {
            id: 3,
            value: 0
        },
        {
            id: 4,
            value: 0
        },
        {
            id: 5,
            value: 0
        },
    ]);
    const onClickHandle = (productindex, index) => {
        setState(
            state.map((element) =>
                element.id === productindex
                    ? { ...element, value: index }
                    : { ...element }
            )
        );
    }
    return (
        <>
            <Navbar />
            <img src={factory_inside} alt="..." id="product_starting" />
            <div className="productContainer" id="productContainer">
                <div className='askQuery'>
                    <h3>Product Range</h3>
                    <ul>
                        <li>Single Core Copper Wire</li>
                        <li>Fexible PVC Copper Wire</li>
                        <li>Submersible Cable</li>
                        <li>Dish Co-Axial Cable</li>
                        <li>PVC Insulated Un-Sheathed Copper Wire</li>
                        <li>Pipes</li>
                    </ul>
                    <p className='prices'>As prices change frequently. To know more about prices contact us:</p>
                    <a href="/contactus"><button className='askQueryButton'>Ask Query</button></a>
                </div>
                <div className="products-info">
                    {
                        Products.map((product, index) => {

                            let productindex = index;
                            const img = require(`../WebsiteMaterial/images/${product.imagename}.jpg`);
                            return (
                                <div key={index} className="product">
                                    <div>
                                        {/* <p>{product.category}</p> */}
                                        {/* <p>{product.name}</p> */}
                                        <p>{product.wirename}</p>
                                        <p>{product.wirelength}</p>

                                        <div className="modal fade" id={`exampleModalCenter${index}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-body">
                                                        {
                                                            product.specifications.map((specification, index) => {
                                                                // return <button key={index} onClick={() => { onClickHandle(productindex, index) }} >{specification.wirethickness}</button>;
                                                                return <div className='modalOptions' key={index} onClick={() => { onClickHandle(productindex, index) }} >{specification.wirethickness}</div>;
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {(Products[productindex].specifications[state[productindex].value].wirethickness) ? <p><i className="fa-solid fa-caret-right"></i>Wire thickness:
                                            <button type="button" className="changeWireThickness" data-toggle="modal" data-target={`#exampleModalCenter${productindex}`}>
                                                <span className='specificationsValue'>{Products[productindex].specifications[state[productindex].value].wirethickness}</span>
                                                <i className="fa-solid fa-caret-down"></i>
                                            </button>
                                        </p> : ""}
                                        {(Products[productindex].specifications[state[productindex].value].NosAndDiameter) ? <p><i className="fa-solid fa-caret-right"></i>Nos & Diameter: <span className='specificationsValue'>{Products[productindex].specifications[state[productindex].value].NosAndDiameter}</span></p> : ""}
                                        {(Products[productindex].specifications[state[productindex].value].currentrating) ? <p><i className="fa-solid fa-caret-right"></i>Current Rating: <span className='specificationsValue'>{Products[productindex].specifications[state[productindex].value].currentrating}</span></p> : ""}
                                        {(Products[productindex].specifications[state[productindex].value].wiresize) ? <p><i className="fa-solid fa-caret-right"></i>Size: <span className='specificationsValue'>{Products[productindex].specifications[state[productindex].value].wiresize}</span></p> : ""}


                                    </div>
                                    <img src={img} alt={product.alter} height="200px" image-resolution="3000dpi" />

                                </div>
                            )
                        })
                    }
                    <div className="product">
                        <div>
                            <p>Pipes</p>
                            <p>CONDUIT PIPES</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Size (mm)</th>
                                        <th>Size (inch)</th>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>3/4</td>
                                    </tr>
                                    <tr>
                                        <td>25</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>32</td>
                                        <td>1 1/4</td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>1 1/2</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <img src={cpvcpipes} height="200px" alt="..." />
                    </div>
                </div>
            </div>
            <Bottom />
        </>
    )
}