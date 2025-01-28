import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Index';
import { fetchCompanies } from '../../store/thunk/CompaniesThunk';
import styles from './CompaniesList.module.scss';

export const CompaniesList: React.FC = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state: RootState) => state.companies.list);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  // Проверка, что companies является массивом
  if (!Array.isArray(companies)) {
    return <div>Загрузка данных...</div>; // Или можно вернуть заглушку
  }

  const handleCompanyClick = (id: number) => {
    // Логика обработки клика по компании
    console.log('Company clicked:', id);
  };

  return (
    <div className={styles.companiesList}>
      <h2>Список компаний</h2>
      <div className={styles.list}>
        {companies.map((company) => (
          <div
            key={company.id}
            className={styles.companyCard}
            onClick={() => handleCompanyClick(company.id)}
          >
            <img
              src={company.logo_url}
              alt={company.name}
              className={styles.logo}
            />
            <h3>{company.name}</h3>
            <p>{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
