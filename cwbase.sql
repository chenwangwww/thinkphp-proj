/*
 Navicat Premium Data Transfer

 Source Server         : mysqlConn
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : cwbase

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 24/02/2020 09:49:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cw_mapping
-- ----------------------------
DROP TABLE IF EXISTS `cw_mapping`;
CREATE TABLE `cw_mapping`  (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `code` int(50) NOT NULL,
  `prefix_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `count` int(50) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cw_mapping
-- ----------------------------
INSERT INTO `cw_mapping` VALUES (0000000001, 0, 'img1', 11);
INSERT INTO `cw_mapping` VALUES (0000000002, 1, 'img2', 8);
INSERT INTO `cw_mapping` VALUES (0000000003, 2, 'img3', 5);
INSERT INTO `cw_mapping` VALUES (0000000004, 3, 'img4', 14);
INSERT INTO `cw_mapping` VALUES (0000000005, 4, 'img5', 3);

-- ----------------------------
-- Table structure for cw_pictures
-- ----------------------------
DROP TABLE IF EXISTS `cw_pictures`;
CREATE TABLE `cw_pictures`  (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `url` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cw_pictures
-- ----------------------------
INSERT INTO `cw_pictures` VALUES (0000000001, '/beauty01.jpg');
INSERT INTO `cw_pictures` VALUES (0000000002, '/beauty02.jpg');
INSERT INTO `cw_pictures` VALUES (0000000003, '/beauty03.jpg');
INSERT INTO `cw_pictures` VALUES (0000000004, '/beauty04.jpg');
INSERT INTO `cw_pictures` VALUES (0000000005, '/beauty05.jpg');

-- ----------------------------
-- Table structure for cw_users
-- ----------------------------
DROP TABLE IF EXISTS `cw_users`;
CREATE TABLE `cw_users`  (
  `id` tinyint(3) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cw_users
-- ----------------------------
INSERT INTO `cw_users` VALUES (001, 'chenwang', 'cccccc');

SET FOREIGN_KEY_CHECKS = 1;
