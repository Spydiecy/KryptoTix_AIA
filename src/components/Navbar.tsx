'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/config/contract';
import { Search, User} from 'lucide-react';
import UsernameRegistrationModal from './UsernameRegistrationModal';

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          setAddress(address);
          setIsConnected(true);

          const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
          const profile = await contract.getUserProfile(address);
          if (profile.username) {
            setUsername(profile.username);
          } else {
            setShowModal(true);
          }
        } catch (error) {
          console.error('Error checking connection:', error);
        }
      }
    };

    checkConnection();
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAddress(address);
        setIsConnected(true);

        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        const profile = await contract.getUserProfile(address);
        if (profile.username) {
          setUsername(profile.username);
        } else {
          setShowModal(true);
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const handleUsernameRegistration = (newUsername: string) => {
    setUsername(newUsername);
  };

  return (
    <>
      <motion.nav 
        className="flex justify-between items-center py-4 px-8 bg-opacity-50 backdrop-blur-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-2xl font-bold gradient-text">
            KryptoTix
          </Link>
          <Link href="/events" className="text-white hover:text-gray-300">
            Events
          </Link>
          <Link href="/create-event" className="text-white hover:text-gray-300">
            Create Event
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300">
            <Search size={20} />
          </button>
          {isConnected ? (
            <Link href="/profile" className="text-white hover:text-gray-300 flex items-center">
              <User size={20} className="mr-2" />
              {username || address || 'Profile'}
            </Link>
          ) : (
            <motion.button
              onClick={connectWallet}
              className="gradient-button px-4 py-2 rounded-full text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect Wallet
            </motion.button>
          )}
        </div>
      </motion.nav>
      <UsernameRegistrationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onRegister={handleUsernameRegistration}
      />
    </>
  );
};

export default Navbar;