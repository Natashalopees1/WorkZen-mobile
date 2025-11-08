import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export const Bell = ({ size = 24, color = "#000" }) => {
  return <Ionicons name="notifications" size={size} color={color} />;
};

export const DollarSign = ({ size = 24, color = "#000" }) => {
  return <Ionicons name="cash" size={size} color={color} />;
};

export const Settings = ({ size = 24, color = "#000" }) => {
  return <Ionicons name="settings" size={size} color={color} />;
};
