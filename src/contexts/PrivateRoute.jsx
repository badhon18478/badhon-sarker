import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

// Home.jsx
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Code2,
  Zap,
  Sparkles,
  CheckCircle,
  Star,
  Target,
  Users,
  Clock,
  Award,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Server,
  GitBranch,
  Cloud,
  Shield,
  Rocket,
  User,
  Twitter,
  Linkedin,
  Facebook,
  Github,
  FileText,
  MessageSquare,
  ExternalLink,
  Layers,
  Circle,
  Briefcase,
  Terminal,
  Box,
} from 'lucide-react';
import bgImg from '../../../assets/image.png';
import { useTheme } from '../../../contexts/ThemeContext'; // Import theme context
