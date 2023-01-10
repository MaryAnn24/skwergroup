-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2023 at 08:58 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_skwer`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_registration`
--

CREATE TABLE `tbl_registration` (
  `id` int(11) NOT NULL,
  `or_no` varchar(25) NOT NULL,
  `jurisdiction` varchar(45) NOT NULL,
  `c_name1` varchar(100) NOT NULL,
  `type_1` varchar(25) NOT NULL,
  `c_name2` varchar(100) NOT NULL,
  `type_2` varchar(25) NOT NULL,
  `c_name3` varchar(100) NOT NULL,
  `type_3` varchar(25) NOT NULL,
  `package` varchar(15) NOT NULL,
  `bank` varchar(1000) NOT NULL,
  `add_serv` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `salutation` varchar(11) NOT NULL,
  `f_name` varchar(45) NOT NULL,
  `l_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `nationality` varchar(100) NOT NULL,
  `p_street` varchar(45) NOT NULL,
  `p_city` varchar(45) NOT NULL,
  `p_state` varchar(45) NOT NULL,
  `p_zip` int(11) NOT NULL,
  `p_country` varchar(45) NOT NULL,
  `contact_no` varchar(15) NOT NULL,
  `package_price` int(11) NOT NULL,
  `add_serv_price` int(11) NOT NULL,
  `bank_serv_price` int(11) NOT NULL,
  `regis_remarks` varchar(11) NOT NULL,
  `payment_remarks` varchar(11) NOT NULL,
  `dateCreated` datetime NOT NULL,
  `dateUpdated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_registration`
--

INSERT INTO `tbl_registration` (`id`, `or_no`, `jurisdiction`, `c_name1`, `type_1`, `c_name2`, `type_2`, `c_name3`, `type_3`, `package`, `bank`, `add_serv`, `salutation`, `f_name`, `l_name`, `email`, `nationality`, `p_street`, `p_city`, `p_state`, `p_zip`, `p_country`, `contact_no`, `package_price`, `add_serv_price`, `bank_serv_price`, `regis_remarks`, `payment_remarks`, `dateCreated`, `dateUpdated`) VALUES
(25, '141523', 'Hong Kong', 'Name 1 LLC', 'Limited', 'Name 1 LLC', 'Limited', 'Name 1 LLC', 'Limited', 'plus', 'Singapore', 'International Courier', 'Mr.', 'Friday', 'Adam', 'maryann.baricante24@gmail.com', 'Philippines', 'Dubai', 'Dubai', 'Dubai', 0, 'Philippines', '+971 50 489 754', 2320, 90, 1100, 'registered', 'paid', '2023-01-06 11:54:19', '2023-01-06 11:54:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_registration`
--
ALTER TABLE `tbl_registration`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_registration`
--
ALTER TABLE `tbl_registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
