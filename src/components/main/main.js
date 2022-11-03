import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestNFT } from "../../store/reducers";
import './main.css';
import axios from "axios";
import Modal from "../modal/modal";
import Loader from "../loader/loader";




export default function Main(props) {

    const baseUrl = "https://api.opensea.io/api/v1/assets?format=json";
    const assetUrl = "https://api.opensea.io/api/v1/asset/";

    // imageUrl/nft.asset_contract.address/nft.token_id/nft.image_url
      
    const { nftData, isError, isLoading, errorMsg } = useSelector(
        state => state
    );
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
      
        useEffect(() => {
            setTimeout(() => setLoading(false), 1000)
            dispatch(requestNFT(baseUrl));
        }, []);

    const {loader} = props;
    const spinner = loader ? <Loader/> : null;
      
        const renderData = () => {
          return nftData.map(nft => {
            return (
                <div className="nft-card">
                    <img className="nft-img" alt="nft-avatar" src={nft.image_url} width="200px" height="200px"></img>
                    <h4>{nft.name}</h4>
                    <button className="btn btn-secondary outline" type="submit">Click for more...</button>
                    
                </div>
            );
          });
        };


    return <div className="container">
                {loading === false ? (
                    <div className="nft-cards">
                    {renderData()}
                    </div>
                    ) : (
                    <Loader/>
                )}   
            </div>
}



