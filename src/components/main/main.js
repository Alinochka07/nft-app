import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestNFT } from "../../store/reducers";
import './main.css';
import axios from "axios";




export default function Main() {

    const baseUrl = "https://api.opensea.io/api/v1/assets?format=json";
    const imageUrl = "https://api.opensea.io/api/v1/asset/";

    // imageUrl/nft.asset_contract.address/nft.token_id/nft.image_url
      
    const { nftData, isError, isLoading, errorMsg } = useSelector(
        state => state
    );
    const dispatch = useDispatch();
      
        useEffect(() => {
          dispatch(requestNFT(baseUrl));
        }, []);
      
        const renderData = () => {
          return nftData.map(nft => {
            return (
              <div className="nft-card">
                <img className="nft-img" alt="nft-avatar" src={nft.image_url} width="200px" height="200px"></img>
                <h4>{nft.name}</h4>
                <button onClick="" className="btn btn-secondary outline">Click for more...</button>
              </div>
            );
          });
        };
      
      


    return <div className="container">
                <div className="nft-cards">
                    {renderData()}
                </div>
            </div>
}



