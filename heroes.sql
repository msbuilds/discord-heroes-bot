-- MySQL dump 10.13  Distrib 5.7.17, for osx10.12 (x86_64)
--
-- Host: localhost    Database: heroes
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `counters`
--

DROP TABLE IF EXISTS `counters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `counters` (
  `hero_id` int(11) unsigned NOT NULL,
  `counter_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`hero_id`,`counter_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `counters`
--

LOCK TABLES `counters` WRITE;
/*!40000 ALTER TABLE `counters` DISABLE KEYS */;
INSERT INTO `counters` VALUES (6,11),(6,19),(6,46),(6,62),(6,70),(7,8),(7,40),(7,43),(7,59),(7,71),(8,34),(8,60),(8,65),(8,66),(8,71),(9,29),(9,34),(9,40),(9,59),(9,60),(10,8),(10,18),(10,36),(10,40),(10,59),(11,13),(11,20),(11,34),(11,43),(11,54),(12,23),(12,29),(12,31),(12,40),(12,68),(13,12),(13,14),(13,30),(13,35),(13,63),(14,27),(14,29),(14,31),(14,36),(14,45),(15,7),(15,12),(15,22),(15,60),(15,63),(16,12),(16,33),(16,34),(16,49),(16,60),(17,12),(17,33),(17,34),(17,49),(17,60),(18,26),(18,28),(18,46),(18,59),(18,70),(19,12),(19,22),(19,30),(19,40),(19,60),(20,12),(20,23),(20,34),(20,49),(20,60),(21,7),(21,31),(21,40),(21,66),(21,72),(22,12),(22,23),(22,30),(22,60),(22,62),(23,26),(23,43),(23,46),(23,64),(23,70),(24,26),(24,27),(24,31),(24,45),(24,46),(25,7),(25,12),(25,63),(25,66),(25,69),(26,9),(26,12),(26,13),(26,30),(26,67),(27,7),(27,8),(27,13),(27,26),(27,32),(28,12),(28,30),(28,35),(28,43),(28,67),(29,7),(29,26),(29,46),(29,59),(29,70),(30,34),(30,40),(30,45),(30,60),(30,66),(31,32),(31,46),(31,61),(31,64),(31,70),(32,22),(32,42),(32,43),(32,61),(32,63),(33,12),(33,30),(33,31),(33,35),(33,67),(34,23),(34,40),(34,49),(34,59),(34,65),(35,8),(35,22),(35,30),(35,31),(35,43),(36,26),(36,28),(36,59),(36,64),(36,70),(37,29),(37,31),(37,36),(37,59),(37,70),(38,8),(38,13),(38,28),(38,59),(38,70),(39,9),(39,20),(39,59),(39,64),(39,66),(40,13),(40,15),(40,20),(40,26),(40,28),(41,8),(41,29),(41,32),(41,59),(41,72),(42,7),(42,8),(42,15),(42,19),(42,40),(43,12),(43,30),(43,34),(43,49),(43,60),(44,36),(44,46),(44,59),(44,60),(44,70),(45,8),(45,28),(45,54),(45,59),(45,70),(46,9),(46,30),(46,43),(46,57),(46,61),(47,13),(47,46),(47,59),(47,64),(47,70),(48,13),(48,40),(48,59),(48,65),(48,71),(49,14),(49,28),(49,30),(49,32),(49,35),(50,13),(50,40),(50,49),(50,54),(50,59),(51,13),(51,26),(51,28),(51,32),(51,59),(52,9),(52,14),(52,30),(52,40),(52,57),(53,18),(53,36),(53,45),(53,55),(53,72),(54,10),(54,12),(54,40),(54,43),(54,63),(55,22),(55,33),(55,34),(55,59),(55,60),(56,23),(56,26),(56,46),(56,64),(56,70),(57,12),(57,23),(57,40),(57,59),(57,66),(58,12),(58,30),(58,35),(58,43),(58,67),(59,12),(59,35),(59,49),(59,64),(59,71),(60,12),(60,25),(60,26),(60,31),(60,64),(61,12),(61,34),(61,58),(61,60),(61,72),(62,7),(62,28),(62,32),(62,59),(62,70),(63,7),(63,40),(63,45),(63,56),(63,68),(64,9),(64,19),(64,30),(64,57),(64,66),(65,13),(65,26),(65,28),(65,46),(65,70),(66,9),(66,12),(66,35),(66,40),(66,60),(67,27),(67,29),(67,30),(67,34),(67,40),(68,27),(68,28),(68,32),(68,64),(68,70),(69,7),(69,12),(69,30),(69,60),(69,66),(70,9),(70,15),(70,30),(70,43),(70,57),(71,14),(71,30),(71,35),(71,66),(71,72),(72,12),(72,30),(72,35),(72,60),(72,66);
/*!40000 ALTER TABLE `counters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `heroes`
--

DROP TABLE IF EXISTS `heroes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `heroes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heroes`
--

LOCK TABLES `heroes` WRITE;
/*!40000 ALTER TABLE `heroes` DISABLE KEYS */;
INSERT INTO `heroes` VALUES (6,'Abathur','Melee Specialist'),(7,'Alarak','Melee Assassin'),(8,'Anub\'arak','Melee Warrior'),(9,'Arthas','Melee Warrior'),(10,'Auriel','Ranged Specialist'),(11,'Azmodan','Ranged Specialist'),(12,'Brightwing','Support'),(13,'Butcher','Melee Assassin'),(14,'Cassia','Ranged Assassin'),(15,'Chen','Melee Warrior'),(16,'Cho','Melee Warrior'),(17,'Gall','Ranged Assassin'),(18,'Chromie','Ranged Assassin'),(19,'Dehaka','Melee Warrior'),(20,'Diablo','Melee Warrior'),(21,'D.va','Ranged Warrior'),(22,'ETC','Melee Warrior'),(23,'Falstad','Ranged Assassin'),(24,'Gazlowe','Ranged Specialist'),(25,'Genji','Ranged Assassin'),(26,'Greymane','Ranged Assassin'),(27,'Gul\'dan','Ranged Assassin'),(28,'Illidan','Melee Assassin'),(29,'Jaina','Ranged Assassin'),(30,'Johanna','Melee Warrior'),(31,'Kael\'thas','Ranged Assassin'),(32,'Kerrigan','Melee Assassin'),(33,'Kharazim','Melee Support'),(34,'Leoric','Melee Warrior'),(35,'Li Li','Ranged Support'),(36,'Li-Ming','Ranged Assassin'),(37,'The Lost Vikings','Melee Specialist'),(38,'Lt. Morales','Ranged Support'),(39,'Lucio','Ranged Support'),(40,'Lunara','Ranged Assassin'),(41,'Malfurion','Ranged Support'),(42,'Medivh','Ranged Specialist'),(43,'Muradin','Melee Warrior'),(44,'Murky','Melee Specialist'),(45,'Nazeebo','Ranged Specialist'),(46,'Nova','Ranged Assassin'),(47,'Probius','Ranged Specialist'),(48,'Ragnaros','Melee Assassin'),(49,'Raynor','Ranged Assassin'),(50,'Rehgar','Melee Support'),(51,'Rexxar','Ranged Warrior'),(52,'Samuro','Melee Assassin'),(53,'Sgt. Hammer','Ranged Specialist'),(54,'Sonya','Melee Warrior'),(55,'Stitches','Melee Warrior'),(56,'Sylvanas','Ranged Specialist'),(57,'Tassadar','Ranged Support'),(58,'Thrall','Melee Assassin'),(59,'Tracer','Ranged Assassin'),(60,'Tychus','Ranged Assassin'),(61,'Tyrael','Melee Warrior'),(62,'Tyrande','Ranged Support'),(63,'Uther','Melee Support'),(64,'Valeera','Melee Assassin'),(65,'Valla','Ranged Assassin'),(66,'Varian','Melee Multiclass'),(67,'Xul','Melee Specialist'),(68,'Zagara','Ranged Specialist'),(69,'Zarya','Ranged Warrior'),(70,'Zeratul','Melee Assassin'),(71,'Zul\'jin','Ranged Assassin'),(72,'Artanis','Melee Warrior');
/*!40000 ALTER TABLE `heroes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `heroes_maps`
--

DROP TABLE IF EXISTS `heroes_maps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `heroes_maps` (
  `hero_id` int(11) unsigned NOT NULL,
  `map_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`hero_id`,`map_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heroes_maps`
--

LOCK TABLES `heroes_maps` WRITE;
/*!40000 ALTER TABLE `heroes_maps` DISABLE KEYS */;
INSERT INTO `heroes_maps` VALUES (6,4),(6,6),(6,11),(6,14),(7,10),(8,6),(9,8),(9,9),(11,7),(11,10),(11,12),(12,4),(12,5),(12,7),(12,8),(12,11),(12,13),(12,14),(18,4),(18,13),(19,3),(19,4),(19,5),(19,7),(19,11),(19,13),(19,14),(22,2),(22,4),(22,8),(22,13),(22,14),(23,2),(23,4),(23,5),(23,7),(23,11),(23,13),(23,14),(24,3),(24,5),(24,11),(25,4),(25,7),(26,1),(26,6),(27,3),(27,9),(27,10),(27,12),(28,2),(28,14),(29,1),(29,3),(29,8),(29,9),(29,10),(29,12),(30,1),(30,3),(30,5),(30,6),(30,8),(30,9),(30,12),(30,13),(31,1),(31,3),(31,4),(31,6),(31,9),(31,11),(31,12),(32,8),(32,9),(34,5),(34,8),(34,9),(36,1),(36,4),(36,10),(36,11),(36,13),(37,4),(37,6),(37,11),(37,14),(39,2),(39,7),(39,13),(39,14),(40,1),(41,3),(41,6),(41,8),(43,7),(44,6),(45,4),(45,5),(45,11),(45,12),(46,7),(47,3),(47,10),(48,3),(48,8),(48,9),(48,12),(48,14),(49,1),(49,10),(50,1),(50,2),(50,5),(50,6),(50,8),(51,3),(51,7),(52,2),(52,14),(53,1),(53,9),(53,10),(54,2),(54,9),(56,1),(56,3),(56,6),(56,8),(56,9),(56,10),(56,12),(56,13),(57,8),(57,12),(58,5),(58,11),(58,13),(59,2),(59,6),(59,7),(62,1),(62,4),(64,7),(64,13),(65,1),(65,6),(65,12),(66,2),(66,7),(66,10),(67,2),(67,5),(67,9),(67,10),(67,12),(68,2),(68,5),(68,10),(68,11),(68,12),(68,13),(68,14),(69,3),(70,2),(70,5),(70,14),(71,1),(72,1),(72,11);
/*!40000 ALTER TABLE `heroes_maps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maps`
--

DROP TABLE IF EXISTS `maps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `maps` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `notes` varchar(1500) DEFAULT 'None',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maps`
--

LOCK TABLES `maps` WRITE;
/*!40000 ALTER TABLE `maps` DISABLE KEYS */;
INSERT INTO `maps` VALUES (1,'Battlefield of Eternity','Drafting sustained damage is must on this map to win the Immortal race. High DPS heroes, such as Valla, Greymane or Zul\'Jin are essential for your team. Heroes with bonus non-heroic damage, such as Artanis, Sylvanas and Lunara should talent appropriately to maximize damage to immortals.'),(2,'Blackheart\'s Bay','The first turn-in targets the mid lane fort. It will target the towers, gate and fountain before the actual fort building. If those secondary buildings are undamaged when the barrage begins, the fort will be left standing, barely alive. If, however, you either completely destroy one of the towers or get both towers below ~50%, the cannon shots will kill the actual fort. This makes it worth dedicating some time and pushing power towards the wall towers early.'),(3,'Braxis Holdout','Designating a solo laner is one of the most important components of drafting for Braxis Holdout. Solo laners typically need some sort of self-sustain, moderate damage, and decent waveclear. Some of the best candidates for this role are Chen, Thrall, Alarak, Rexxar, Dehaka, Ragnaros, and Gul\'Dan. Competing for the waypoint can often be a test of endurance rather than skill. Often, the first team to drain the other team of their mana can both waypoints. Because of this, mana-less heroes (Chen, Zarya, Auriel, Sonya) are very valuable on this map. Don\'t waste your mana on abilities which won\'t have followup!'),(4,'Cursed Hollow','First Siege camps spawn at exactly 2 minutes, giving around 30-50 seconds before the first Tribute spawns. Capping it before then allows some uncontested push during Tribute fights.'),(5,'Dragon Shrine','Any attacks that do % damage (Tychus D, Giant Killer) work against the Dragon Knight.'),(6,'Garden of Terror','Decently played Lost Vikings can be devastating on this map. A Viking controlling the terror means your team can effectively fight with 4 heroes and a Garden Terror, and still have two heroes left to soak or take camps. The amount of mercenaries also makes the Vikings\' talent Mercenary Lord quite powerful, since they can use it on up to three different camps pushing.'),(7,'Hanamura','None'),(8,'Haunted Mines','Siege camp spawns at 1:30, mines open 30s later. Capping them as the mines open will make sure they either push, or distract one of the enemy heroes, giving you an advantage in the mines.'),(9,'Infernal Shrines','You can bait a Punisher to jump under your fort by standing just behind the gate as long as it hasn\'t jumped already, allowing you to safely kill it and making your opponents\' job harder. Never fight the Punisher outside of your own structures.'),(10,'Lost Caverns','Constant easy access to Globe talents and almost always being in the presence of lane minions makes this an ideal stacking talent map. Talents like Regeneration Master, Seasoned Marksman, and similar are often worth it.'),(11,'Sky Temple','The second Temple phase will always be in bot lane only. If you can secure their bot healing well before then, you will have an advantage going in. Temples always spawn 2 minutes after the previous one was finished. Keep this in mind to take your bruiser camp after the first 2 temples at mid & top are finished. Capping these as the bot lane temple spawns will let them either do uncontested pushing, or attract the attention of an enemy hero.'),(12,'Tomb of the Spider Queen','Heroes with minion quests (Azmodan, The Butcher, Auto-Attack Heroes) and wave clear work well here. Since it is a small map, gank comps can be very effective.'),(13,'Towers of Doom','Prioritize heroes with long range poke to stall out shrines. Chromie is excellent at this, as are most mages.'),(14,'Warhead Junction','When using a nuke on a fort, aim the nuke to hit the fort and towers by centering the nuke. When using a nuke on a keep, make sure to use the center of the nuke on the keep. ');
/*!40000 ALTER TABLE `maps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `synergies`
--

DROP TABLE IF EXISTS `synergies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `synergies` (
  `hero_id` int(11) unsigned NOT NULL,
  `syn_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`hero_id`,`syn_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `synergies`
--

LOCK TABLES `synergies` WRITE;
/*!40000 ALTER TABLE `synergies` DISABLE KEYS */;
INSERT INTO `synergies` VALUES (6,13),(6,26),(6,28),(6,32),(6,54),(7,10),(7,20),(7,29),(7,41),(7,64),(8,13),(8,29),(8,32),(8,50),(8,61),(9,29),(9,39),(9,40),(9,49),(9,62),(10,16),(10,17),(10,27),(10,40),(10,53),(10,71),(11,30),(11,34),(11,41),(11,56),(11,67),(12,19),(12,20),(12,23),(12,37),(12,65),(13,6),(13,22),(13,38),(13,62),(13,63),(14,9),(14,10),(14,30),(14,35),(14,72),(15,6),(15,33),(15,35),(15,50),(15,69),(16,10),(16,37),(16,38),(16,50),(16,63),(17,10),(17,37),(17,38),(17,50),(17,63),(18,9),(18,22),(18,41),(18,45),(18,67),(19,6),(19,12),(19,42),(19,48),(19,67),(20,7),(20,50),(20,58),(20,62),(20,64),(21,39),(21,41),(21,63),(21,69),(21,70),(22,29),(22,31),(22,36),(22,45),(22,65),(23,10),(23,12),(23,22),(23,38),(23,61),(24,20),(24,22),(24,29),(24,30),(24,31),(25,20),(25,22),(25,39),(25,63),(25,64),(26,6),(26,22),(26,38),(26,39),(26,57),(27,9),(27,10),(27,12),(27,38),(27,41),(28,6),(28,42),(28,50),(28,57),(28,63),(29,9),(29,22),(29,30),(29,41),(29,67),(30,11),(30,14),(30,29),(30,31),(30,36),(31,9),(31,22),(31,30),(31,41),(31,43),(32,6),(32,8),(32,62),(32,63),(32,67),(33,13),(33,28),(33,32),(33,58),(33,61),(34,6),(34,29),(34,30),(34,31),(34,45),(35,14),(35,15),(35,28),(35,49),(35,65),(36,22),(36,30),(36,41),(36,66),(36,67),(37,12),(37,16),(37,17),(37,22),(37,33),(37,50),(38,13),(38,49),(38,53),(38,54),(38,65),(39,9),(39,26),(39,59),(39,64),(39,71),(40,9),(40,10),(40,22),(40,38),(40,39),(41,18),(41,27),(41,29),(41,45),(41,67),(42,13),(42,28),(42,52),(42,54),(42,58),(43,6),(43,31),(43,32),(43,60),(43,62),(44,6),(44,18),(44,35),(44,57),(44,72),(45,22),(45,29),(45,30),(45,34),(45,41),(46,22),(46,45),(46,61),(46,62),(46,64),(47,9),(47,22),(47,29),(47,39),(47,55),(48,9),(48,10),(48,19),(48,22),(48,41),(49,9),(49,29),(49,35),(49,38),(49,58),(50,16),(50,17),(50,20),(50,22),(50,28),(50,58),(51,6),(51,41),(51,50),(51,63),(51,67),(52,6),(52,10),(52,22),(52,42),(52,50),(53,10),(53,22),(53,30),(53,38),(53,63),(54,6),(54,38),(54,50),(54,57),(54,63),(55,39),(55,41),(55,42),(55,62),(55,63),(56,8),(56,29),(56,45),(56,62),(56,65),(57,26),(57,28),(57,59),(57,71),(57,72),(58,6),(58,38),(58,42),(58,50),(58,57),(59,6),(59,20),(59,39),(59,57),(59,69),(60,10),(60,20),(60,22),(60,38),(60,43),(61,6),(61,8),(61,13),(61,50),(61,71),(62,13),(62,20),(62,32),(62,43),(62,67),(63,13),(63,28),(63,32),(63,70),(63,71),(64,6),(64,7),(64,29),(64,41),(64,66),(65,10),(65,22),(65,38),(65,41),(65,56),(66,6),(66,36),(66,38),(66,57),(66,64),(67,18),(67,19),(67,29),(67,36),(67,62),(68,22),(68,41),(68,56),(68,65),(68,67),(69,28),(69,32),(69,59),(69,71),(69,72),(70,6),(70,21),(70,29),(70,57),(70,63),(71,10),(71,57),(71,61),(71,63),(71,69),(72,6),(72,14),(72,42),(72,57),(72,69);
/*!40000 ALTER TABLE `synergies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-29 17:37:43
