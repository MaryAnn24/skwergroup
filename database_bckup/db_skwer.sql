-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 01, 2022 at 08:48 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

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
  `jurisdiction` varchar(45) NOT NULL,
  `c_name1` varchar(100) NOT NULL,
  `type_1` varchar(25) NOT NULL,
  `c_name2` varchar(100) NOT NULL,
  `type_2` varchar(25) NOT NULL,
  `c_name3` varchar(100) NOT NULL,
  `type_3` varchar(25) NOT NULL,
  `package` varchar(15) NOT NULL,
  `add_serv` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `p_name` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(100) NOT NULL,
  `contact_no` varchar(15) NOT NULL,
  `package_price` int(11) NOT NULL,
  `add_serv_price` int(11) NOT NULL,
  `regis_remarks` varchar(11) NOT NULL,
  `payment_remarks` varchar(11) NOT NULL,
  `dateCreated` datetime NOT NULL,
  `dateUpdated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_registration`
--

INSERT INTO `tbl_registration` (`id`, `jurisdiction`, `c_name1`, `type_1`, `c_name2`, `type_2`, `c_name3`, `type_3`, `package`, `add_serv`, `p_name`, `email`, `address`, `contact_no`, `package_price`, `add_serv_price`, `regis_remarks`, `payment_remarks`, `dateCreated`, `dateUpdated`) VALUES
(12, 'Canada', '', 'Limited', '', 'Limited', '', 'Limited', 'basic', 'function toString() { [native code] }', '', '', '', '', 1680, 0, 'registered', 'success', '2022-10-31 15:53:40', '2022-10-31 15:53:40'),
(13, 'Delaware', '', 'Limited', '', 'Limited', '', 'Limited', 'basic', '2,3', '', '', '', '', 950, 770, 'registered', 'success', '2022-10-31 15:57:18', '2022-10-31 15:57:18'),
(14, 'BVI', 'Meann', 'Limited', 'Robin', 'Corporation', 'Adam', 'Limited', 'plus', '2,3,6', 'Test Name', 'test@gmail.com', 'UAE', '123', 2299, 1870, 'registered', 'success', '2022-10-31 15:59:29', '2022-10-31 15:59:29'),
(15, 'BVI', '', 'Limited', '', 'Limited', '', 'Limited', 'plus', '', '', '', '', '', 2299, 0, 'registered', 'success', '2022-10-31 16:04:29', '2022-10-31 16:04:29'),
(16, 'Delaware', '', 'Limited', '', 'Limited', '', 'Limited', 'basic', ',1,4,7', '', '', '', '', 950, 0, 'registered', 'success', '2022-10-31 16:19:43', '2022-10-31 16:19:43'),
(17, 'Belize', 'Meann', 'Limited', 'Robin', 'Ltd', 'Adam', 'Corporation', 'basic', '', 'Test', 'me@gmail.com', 'UAE', '123', 910, 840, 'registered', 'success', '2022-10-31 16:21:53', '2022-10-31 16:21:53'),
(18, 'Belize', 'Meann', 'Limited', 'Robin', 'Ltd', 'Adam', 'Corporation', 'basic', '', 'Test', 'me@gmail.com', 'UAE', '123', 910, 840, 'registered', 'success', '2022-10-31 16:21:53', '2022-10-31 16:21:53'),
(19, 'Belize', 'Meann', 'Limited', 'Robin', 'Ltd', 'Adam', 'Corporation', 'basic', '', 'Test', 'me@gmail.com', 'UAE', '123', 910, 840, 'registered', 'success', '2022-10-31 16:21:53', '2022-10-31 16:21:53'),
(20, 'Belize', 'Meann', 'Limited', 'Robin', 'Ltd', 'Adam', 'Corporation', 'basic', '', 'Test', 'me@gmail.com', 'UAE', '123', 910, 840, 'registered', 'success', '2022-10-31 16:21:53', '2022-10-31 16:21:53'),
(21, 'Belize', 'Meann', 'Limited', 'Robin', 'Ltd', 'Adam', 'Corporation', 'basic', '', 'Test', 'me@gmail.com', 'UAE', '123', 910, 840, 'registered', 'success', '2022-10-31 16:28:37', '2022-10-31 16:28:37'),
(22, 'Belize', 'Meann', 'Limited', 'Robin', 'Ltd', 'Adam', 'Corporation', 'basic', '', 'Test', 'me@gmail.com', 'UAE', '123', 910, 840, 'registered', 'success', '2022-10-31 16:28:37', '2022-10-31 16:28:37'),
(23, 'Belize', 'Meann', 'Limited', 'Robin', 'Ltd', 'Adam', 'Corporation', 'basic', '1,2,3', 'Test', 'me@gmail.com', 'UAE', '123', 910, 840, 'registered', 'success', '2022-10-31 16:28:37', '2022-10-31 16:28:37'),
(24, 'Belize', 'Meann', 'Limited', 'Robin', 'Ltd', 'Adam', 'Corporation', 'basic', '1,2,3', 'Test', 'me@gmail.com', 'UAE', '123', 910, 840, 'registered', 'success', '2022-10-31 16:28:37', '2022-10-31 16:28:37'),
(25, 'Switzerland', 'Test', 'Corporation', 'Test', 'Corp.', 'Test', 'Limited', 'basic', '1,2,3', 'Test', 'Test', 'Test', '123', 5940, 840, 'registered', 'success', '2022-10-31 17:07:56', '2022-10-31 17:07:56'),
(26, 'Singapore', 'Test', 'Limited', 'Test', 'Ltd', 'Test', 'Corporation', 'plus', '1,2,3', 'Test', 'test@gmail.com', 'UAE', 'Test', 3400, 840, 'registered', 'success', '2022-11-01 11:07:03', '2022-11-01 11:07:03'),
(27, 'Gibraltar', 'test', 'Limited', 'test', 'Limited', 'test', 'Limited', 'basic', '1,2,4', 'test', 'test', 'test', 'test', 3500, 440, 'registered', 'success', '2022-11-01 11:16:04', '2022-11-01 11:16:04'),
(28, 'UK', 'test', 'Limited', 'test', 'Limited', 'test', 'Limited', 'basic', '1,4,7', 'test', 'test', 'test', 'test', 1000, 490, 'registered', 'success', '2022-11-01 11:41:20', '2022-11-01 11:41:20');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
