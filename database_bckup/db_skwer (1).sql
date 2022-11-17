-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2022 at 02:48 PM
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
  `or_no` varchar(25) NOT NULL,
  `jurisdiction` varchar(45) NOT NULL,
  `c_name1` varchar(100) NOT NULL,
  `type_1` varchar(25) NOT NULL,
  `c_name2` varchar(100) NOT NULL,
  `type_2` varchar(25) NOT NULL,
  `c_name3` varchar(100) NOT NULL,
  `type_3` varchar(25) NOT NULL,
  `package` varchar(15) NOT NULL,
  `add_serv` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `salutation` varchar(11) NOT NULL,
  `f_name` varchar(45) NOT NULL,
  `l_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `p_street` varchar(45) NOT NULL,
  `p_city` varchar(45) NOT NULL,
  `p_state` varchar(45) NOT NULL,
  `p_zip` int(11) NOT NULL,
  `p_country` varchar(45) NOT NULL,
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

INSERT INTO `tbl_registration` (`id`, `or_no`, `jurisdiction`, `c_name1`, `type_1`, `c_name2`, `type_2`, `c_name3`, `type_3`, `package`, `add_serv`, `salutation`, `f_name`, `l_name`, `email`, `p_street`, `p_city`, `p_state`, `p_zip`, `p_country`, `contact_no`, `package_price`, `add_serv_price`, `regis_remarks`, `payment_remarks`, `dateCreated`, `dateUpdated`) VALUES
(1, '0', 'UK', 'Meann', 'Limited', 'Robin', 'Limited', 'da', 'Limited', 'basic', '1,2', '', '', '', 'jkhkhg', '', '', '', 0, '', 'jkhkhg', 1000, 220, 'registered', 'success', '2022-11-01 14:12:28', '2022-11-01 14:12:28'),
(2, '0', 'Canada', '', 'Limited', '', 'Limited', '', 'Limited', 'premium', '3,6,15', '', '', '', '', '', '', '', 0, '', '', 3403, 2100, 'registered', 'success', '2022-11-01 14:39:54', '2022-11-01 14:39:54'),
(3, '0', 'Hong Kong', 'Test', 'Limited', 'Test', 'Limited', 'Test', 'Limited', 'basic', '1,4,7', '', '', '', 'Test', '', '', '', 0, '', '123', 1800, 490, 'registered', 'success', '2022-11-02 10:28:56', '2022-11-02 10:28:56'),
(4, '0', 'Belize', '', 'Limited', '', 'Limited', '', 'Limited', 'basic', '2', '', '', '', '', '', '', '', 0, '', '', 910, 150, 'registered', 'success', '2022-11-02 12:03:58', '2022-11-02 12:03:58'),
(5, '0', 'Belize', 'Test', 'Limited', 'Test', 'Limited', 'Test', 'Limited', 'basic', '1,4', '', '', '', 'Test', '', '', '', 0, '', 'Test', 910, 290, 'registered', 'success', '2022-11-02 12:25:32', '2022-11-02 12:25:32'),
(6, '0', 'Belize', '', 'Limited', '', 'Limited', '', 'Limited', 'premium', '1,4', '', '', '', '', '', '', '', 0, '', '', 2610, 290, 'registered', 'success', '2022-11-02 17:18:49', '2022-11-02 17:18:49'),
(7, '0', 'BVI', 'Meann', 'Limited', 'Robin', 'Corporation', 'HI', 'Limited', 'plus', '4,11', '', '', '', 'Sample', '', '', '', 0, '', 'Sample', 2299, 720, 'registered', 'success', '2022-11-03 12:05:15', '2022-11-03 12:05:15'),
(8, '0', 'Canada', 'Sample', 'Sample', 'Sample', 'Sample', 'Sample', 'Sample', 'Sample', 'Sample', '', '', '', 'Sample', '', '', '', 0, '', 'Sample', 100, 100, 'registered', 'success', '2022-11-04 10:07:34', '2022-11-04 10:07:34'),
(9, '0', 'Canada', 'Sample', 'Limited', 'Sample', 'Limited', 'Sample', 'Limited', 'basic', 'services', 'Ms.', 'Sample', 'Sample', 'test@gmail.com', 'Sample', 'Sample', 'Sample', 0, 'Sample', '+971 50 478 457', 1680, 220, 'registered', 'success', '2022-11-15 13:05:26', '2022-11-15 13:05:26'),
(10, '0', 'Canada', 'Sample', 'Limited', 'Sample', 'Limited', 'Sample', 'Limited', 'basic', '2', 'Miss', 'Sample', 'Sample', 'test@gmail.com', 'Sample', 'Sample', 'Sample', 12234, 'Sample', '+971 4 578 7787', 1680, 220, 'registered', 'success', '2022-11-15 13:11:00', '2022-11-15 13:11:00'),
(11, '0', 'Canada', 'Sample', 'Limited', 'Sample', 'Limited', 'Sample', 'Limited', 'basic', '1,2,3', 'Ms.', 'Sample', 'Sample', 'test@gmail.com', 'Sample', 'Sample', 'Sample', 12345, 'Sample', '+971 50 487 898', 1680, 420, 'registered', 'success', '2022-11-15 13:18:30', '2022-11-15 13:18:30'),
(12, '0', 'Canada', 'Test', 'Limited', 'Test', 'Limited', 'Test', 'Limited', 'basic', '1,2', 'Ms.', 'Test', 'Test', 'test@gmail.com', 'Test', 'Test', 'Test', 13456, 'Test', '', 1680, 220, 'registered', 'success', '2022-11-15 16:20:03', '2022-11-15 16:20:03'),
(13, '0', 'Florida', 'Test', 'Limited', 'Test', 'Limited', 'Test', 'Limited', 'basic', '1,2', 'Miss', 'Sunshine', 'Test', 'maryann.baricante24@gmail.com', 'Test', 'Test', 'Test', 12345, 'Test', '+971 50 789 457', 1130, 220, 'registered', 'success', '2022-11-15 16:24:44', '2022-11-15 16:24:44'),
(14, '0', 'Singapore', 'AdamLLC', 'Limited', 'Name 1 LLC', 'Limited', 'Name 1 LLC', 'Limited', 'plus', '1,2,7', '', 'Adam', 'Mejri', 'maryan.baricante24@gmail.com', 'Sample', 'Sample', 'Sample', 12345, 'Sample', '+971 50 787 093', 3400, 420, 'registered', 'success', '2022-11-16 14:29:12', '2022-11-16 14:29:12'),
(15, '0', 'Belize', 'SampleLLC', 'Limited', 'SampleLLC', 'Corporation', 'SampleLLC', 'Limited', 'basic', 'Company Rubber Stamp,Company Seal,Notarisation on Documents', 'Mr.', 'Adam', 'Mejri', 'test@gmail.com', 'Deira', 'Dubai', 'Dubai', 0, 'UAE', '+971 50 787 093', 910, 420, 'registered', 'success', '2022-11-17 10:37:13', '2022-11-17 10:37:13'),
(16, '497022', 'Delaware', 'Name 1 LLC', 'Corporation', 'Name 1 LLC', 'Limited', 'Name 1 LLC', 'Limited', 'basic', 'Company Rubber Stamp,Notarisation on Documents,1mo. Digital Marketing Support', 'Mr.', 'Adam', 'Mejri', 'maryann.baricante24@gmail.com', 'Dubai', 'Dubai', 'Dubai', 12345, 'UAE', '+971 50 787 093', 950, 420, 'registered', 'success', '2022-11-17 12:13:30', '2022-11-17 12:13:30'),
(17, '191422', 'Gibraltar', 'TestLLC', 'Limited', 'TestLLC', 'Ltd', 'TestLLC', 'Limited', 'basic', 'Company Rubber Stamp,Website Pack', 'Mr.', 'Adam', 'Mejri', 'maryann.baricante24@gmail.com', 'Dubai', 'Dubai', 'dUBAI', 12345, 'UAE', '+971 50 787 093', 3500, 570, 'registered', 'success', '2022-11-17 12:18:06', '2022-11-17 12:18:06'),
(18, '828322', 'Delaware', 'Name 1 LLC', 'Limited', 'Name 1 LLC', 'Corporation', 'Name 1 LLC', 'Limited', 'basic', 'Company Rubber Stamp,Notarisation on Documents,International Courier', 'Mr.', 'Sample', 'Sample', 'maryann.baricante24@gmail.com', 'Dubai', 'Dubai', 'Dubai', 123456, 'UAE', '+971 50 789 785', 950, 350, 'registered', 'success', '2022-11-17 14:19:02', '2022-11-17 14:19:02'),
(19, '226922', 'Delaware', 'Name 1 LLC', 'Limited', 'Name 1 LLC', 'Ltd', 'Name 1 LLC', 'Limited', 'basic', 'Company Rubber Stamp,Notarisation on Documents', 'Mr.', 'Adam', 'Mejri', 'maryann.baricante24@gmail.com', 'Duabi', 'Dubai', 'Dubai', 12345, 'United Arab Emirates', '+971 50 787 895', 950, 270, 'registered', 'success', '2022-11-17 17:18:15', '2022-11-17 17:18:15');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
