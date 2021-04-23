import React from 'react';
import {
  Badge,
  Card,
  CardItem,
  Icon,
  Left,
  Right,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';
import { formatMoney } from '../../utils';

import styles from './styles';

class CashItem extends React.PureComponent {
  render() {
    const { item } = this.props;
    const {
      userPaid,
      alias,
      amount,
      interestEarn,
      rateEarn,
    } = item;
    return (
      <Card style={styles.card}>
        <CardItem
          header
          style={styles.cardHeader}
        >
          <Left>
            <Text note>
              {userPaid}
            </Text>
          </Left>
          <Right>
            <Text note>
              Alias
            </Text>
          </Right>
        </CardItem>

        <CardItem
          cardBody
          style={styles.cardBody}
        >
          <Left style={{}}>
            <Text style={styles.amountMoney}>
              {`${formatMoney(amount)}`}
            </Text>
          </Left>
          <Right style={{}}>
            <Text
              style={styles.alias}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {alias}
            </Text>
          </Right>
        </CardItem>

        {interestEarn ? (
          <CardItem cardBody style={styles.earnCardBody}>
            <Left style>
              <Icon
                name="clockcircleo"
                type="AntDesign"
                style={styles.clockIcon}
              />
              <Badge success style={styles.badge}>
                <Text style={styles.earnRate}>
                  {`TNA ${rateEarn}%`}
                </Text>
                <Icon
                  name="arrowup"
                  type="AntDesign"
                  style={styles.iconArrow}
                />
              </Badge>
            </Left>
          </CardItem>
        ) : null}
        {interestEarn ? (
          <CardItem
            footer
            style={styles.footerCard}
          >
            <Left>
              <Text note>
                Ingresos generados en el ultimo año
                <Text note style={styles.footerText}>
                  {` ${formatMoney(interestEarn)}`}
                </Text>
              </Text>
            </Left>
          </CardItem>
        ) : null}
      </Card>
    );
  }
}

CashItem.propTypes = {
  item: PropTypes.shape({
    userPaid: PropTypes.string,
    alias: PropTypes.string,
    amount: PropTypes.number,
    interestEarn: PropTypes.number,
    rateEarn: PropTypes.number,
  }),
};

CashItem.defaultProps = {
  item: null,
};

export default CashItem;
