import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default Rewards = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.heading}>Rewards</Text>

                <View style={styles.heroCard}>
                    <Text style={styles.heroPts}>540</Text>
                    <Text style={styles.heroLabel}>Total points earned</Text>
                </View>

                <View style={styles.row}>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Today</Text>
                        <Text style={[styles.statVal, styles.green]}>120</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>This week</Text>
                        <Text style={styles.statVal}>340</Text>
                    </View>
                </View>

                <View style={styles.shareCard}>
                    <Text style={styles.shareLabel}>SHARE YOUR PROGRESS</Text>
                    <View style={styles.socialRow}>
                        <TouchableOpacity style={styles.socialBtn}>
                            <Ionicons name="logo-facebook" size={20} color="#666" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialBtn}>
                            <Ionicons name="logo-instagram" size={20} color="#666" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialBtn}>
                            <Ionicons name="logo-whatsapp" size={20} color="#666" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialBtn}>
                            <Ionicons name="logo-pinterest" size={20} color="#666" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.shareBtn}>
                        <Text style={styles.shareBtnText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: "#0f1117" },
    container: { flex: 1, paddingHorizontal: 12, paddingTop: 10 },
    heading: { fontSize: 22, fontWeight: "500", color: "#ffffff", marginBottom: 16 },
    heroCard: { backgroundColor: "#1a1d27", borderRadius: 16, padding: 24, alignItems: "center", marginBottom: 10 },
    heroPts: { fontSize: 52, fontWeight: "500", color: "#4ade80", lineHeight: 56 },
    heroLabel: { fontSize: 12, color: "#555", marginTop: 6 },
    row: { flexDirection: "row", gap: 10, marginBottom: 10 },
    statCard: { flex: 1, backgroundColor: "#1a1d27", borderRadius: 12, padding: 14 },
    statLabel: { fontSize: 11, color: "#666", marginBottom: 4 },
    statVal: { fontSize: 24, fontWeight: "500", color: "#ffffff" },
    green: { color: "#4ade80" },
    shareCard: { backgroundColor: "#1a1d27", borderRadius: 14, padding: 14 },
    shareLabel: { fontSize: 10, color: "#555", letterSpacing: 0.5, marginBottom: 12 },
    socialRow: { flexDirection: "row", gap: 10, marginBottom: 14 },
    socialBtn: { width: 42, height: 42, borderRadius: 10, backgroundColor: "#12151f", justifyContent: "center", alignItems: "center" },
    shareBtn: { backgroundColor: "#4ade80", borderRadius: 10, padding: 12, alignItems: "center" },
    shareBtnText: { fontSize: 14, fontWeight: "500", color: "#0f1117" },
});