import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { textos } from "../../../constants";

const Finance = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.todayView}>
        <Text style={styles.todayText}>{textos.today}</Text>
        <View style={styles.valueView}>
          <Text style={styles.valueText}>R$200,00</Text>
        </View>
      </View>

      <View>
        <View style={styles.valueWeek}>
          <View>
            <Text style={styles.valueWeekText}>Seg</Text>
          </View>
          <View>
            <Text style={styles.valueWeekText}>R$200,00</Text>
          </View>
        </View>

        <View style={styles.valueWeek}>
          <View>
            <Text style={styles.valueWeekText}>Ter</Text>
          </View>
          <View>
            <Text style={styles.valueWeekText}>R$200,00</Text>
          </View>
        </View>

        <View style={styles.valueWeek}>
          <View>
            <Text style={styles.valueWeekText}>Qua</Text>
          </View>
          <View>
            <Text style={styles.valueWeekText}>R$200,00</Text>
          </View>
        </View>

        <View style={styles.valueWeek}>
          <View>
            <Text style={styles.valueWeekText}>Qui</Text>
          </View>
          <View>
            <Text style={styles.valueWeekText}>R$200,00</Text>
          </View>
        </View>

        <View style={styles.valueWeek}>
          <View>
            <Text style={styles.valueWeekText}>Sex</Text>
          </View>
          <View>
            <Text style={styles.valueWeekText}>R$200,00</Text>
          </View>
        </View>

        <View style={styles.valueWeek}>
          <View>
            <Text style={styles.valueWeekText}>Sab</Text>
          </View>
          <View>
            <Text style={styles.valueWeekText}>R$200,00</Text>
          </View>
        </View>

        <View style={styles.valueWeek}>
          <View>
            <Text style={styles.valueWeekText}>Dom</Text>
          </View>
          <View>
            <Text style={styles.valueWeekText}>R$200,00</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoValues}>
        <View style={styles.valueViewRelatorio}>
          <Text style={styles.valueMonth}>Este mês</Text>
          <Text style={styles.valueText}>R$200,00</Text>
        </View>

        <View style={styles.valueViewRelatorio}>
          <Text style={styles.valueMonth}>Mês passado</Text>
          <Text style={styles.valueText}>R$200,00</Text>
        </View>

        <View style={styles.valueViewRelatorio}>
          <Text style={styles.valueMonth}>Este ano</Text>
          <Text style={styles.valueText}>R$200,00</Text>
        </View>
      </View>
    </View>
  );
};

export default Finance;
